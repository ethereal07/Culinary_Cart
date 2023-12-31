import Image1 from '../data/stuffed_capsicum_mashed_potatoes.jpg'
import Image2 from '../data/potato_capsicum_stir_fry.jpg'
import Image3 from '../data/potato_capsicum_curry.jpg'

import Image4 from '../data/paneer-butter.png'
import Image5 from '../data/paneer-pizza.png'
import Image6 from '../data/paneer-tikka.png'

import gif1 from '../data/stuffed_capsicum.gif'
import gif2 from '../data/capsicum_stir_fry.gif'
import gif3 from '../data/capsicum_curry.gif'

import gif4 from '../data/paneer-butter-masala.gif'
import gif5 from '../data/butter-paneer-pizza.gif'
import gif6 from '../data/paneer-tikka.gif'


const mapping = {
    'Potato-Capsicum': [
        {id: 1,
        name: "Stuffed Capsicum with Mashed Potatoes", 
        steps: ["Step 1\nStart by preheating your oven to 180 degrees Celsius (350 degrees Fahrenheit). While the oven is heating, wash 4 large capsicums and cut off the tops. Remove the seeds and membranes from inside, creating a hollow space for the filling. Set the prepared capsicums aside.", "Step 2\nNext, prepare the mashed potatoes. Peel and dice 4 large potatoes and place them in a large pot. Cover the potatoes with water and bring to a boil. Cook the potatoes until they are tender, which should take about 15-20 minutes. Once cooked, drain the potatoes and return them to the pot.", "Step 3\nAdd 1/4 cup of milk, 2 tablespoons of butter, and salt and pepper to taste to the pot with the potatoes. Mash the potatoes until they are smooth and creamy. If the potatoes are too dry, add more milk as needed.", "Step 4\nTo the mashed potatoes, add 1 cup of grated cheese, 1 teaspoon of garlic powder, and 1 teaspoon of onion powder. Stir until all the ingredients are well combined. This will be the filling for the capsicums.", "Step 5\nSpoon the mashed potato mixture into the hollowed-out capsicums, filling them to the top. Place the stuffed capsicums in a baking dish and cover with foil. Bake in the preheated oven for 20 minutes. After 20 minutes, remove the foil and continue baking for another 10-15 minutes, or until the capsicums are tender and the filling is golden brown. Serve the stuffed capsicums hot, garnished with fresh herbs if desired."], 
        image: Image1, 
        gif: gif1},
        {id: 2, 
        name: "Potato and Capsicum Stir Fry",
        steps: ["Step 1\nStart by preparing all the ingredients. You will need 2 large potatoes, 1 large capsicum, 1 onion, 2 cloves of garlic, and a variety of spices including turmeric, cumin, coriander, and red chili powder. Peel the potatoes and cut them into small cubes. Cut the capsicum into similar-sized pieces. Finely chop the onion and garlic.", "Step 2\nHeat a large pan or wok over medium heat. Add 2 tablespoons of oil. Once the oil is hot, add the chopped onion and garlic. Saut\u00e9 them until they become soft and golden brown. This should take about 5 minutes.", "Step 3\nAdd the cubed potatoes to the pan. Stir them well so they are coated with the oil and onion-garlic mixture. Cover the pan and let the potatoes cook for about 10 minutes, or until they are half-cooked. Make sure to stir occasionally to prevent them from sticking to the pan.", "Step 4\nOnce the potatoes are half-cooked, add the capsicum pieces to the pan. Also add your spices - 1/2 teaspoon of turmeric, 1/2 teaspoon of cumin, 1 teaspoon of coriander, and 1/2 teaspoon of red chili powder. Stir everything well so the vegetables are evenly coated with the spices.", "Step 5\nCover the pan again and let everything cook for another 10 minutes, or until the potatoes and capsicum are fully cooked and tender. Make sure to stir occasionally to prevent the vegetables from sticking to the pan. Once everything is cooked, taste and adjust the seasoning if needed. Your Potato and Capsicum Stir Fry is now ready to be served. Enjoy it as a side dish or as a main course with rice or bread."], 
        image: Image2, 
        gif: gif2},
        {id: 3, 
        name: "Potato and Capsicum Curry", 
        steps: ["Step 1\nStart by gathering all your ingredients. You will need 2 large potatoes, 2 capsicums, 2 onions, 2 tomatoes, 2 green chillies, 1 teaspoon of cumin seeds, 1 teaspoon of turmeric powder, 1 teaspoon of red chilli powder, 2 teaspoons of coriander powder, salt to taste, 2 tablespoons of oil, and fresh coriander leaves for garnish.", "Step 2\nPeel the potatoes and cut them into cubes. Wash the capsicums, remove the seeds and cut them into cubes as well. Finely chop the onions, tomatoes and green chillies.", "Step 3\nHeat the oil in a large pan over medium heat. Add the cumin seeds and let them sizzle for a few seconds. Then add the chopped onions and green chillies. Saut\u00e9 until the onions become translucent.", "Step 4\nAdd the chopped tomatoes to the pan and cook until they become soft. Then add the turmeric powder, red chilli powder, coriander powder and salt. Mix well and cook for a few minutes until the spices are well blended with the tomatoes.", "Step 5\nAdd the cubed potatoes and capsicums to the pan. Stir well to coat them with the spice mixture. Cover the pan and let it cook on low heat for about 20-25 minutes, or until the potatoes are cooked through and the capsicums are tender. Stir occasionally to prevent the curry from sticking to the pan. Once done, garnish with fresh coriander leaves and serve hot with rice or naan bread."], 
        image: Image3, 
        gif: gif3}],
    'Paneer-Butter': [
        {id: 4, 
        name: "Paneer Butter Masala", 
        steps: ["Step 1\nGather all the necessary ingredients. You will need 200 grams of paneer (cottage cheese), 2 large onions, 2 large tomatoes, 2 tablespoons of butter, 1 teaspoon of ginger-garlic paste, 1 teaspoon of red chili powder, 1 teaspoon of garam masala, 1/2 teaspoon of turmeric powder, 1/2 cup of fresh cream, salt to taste, and fresh coriander leaves for garnishing.", "Step 2\nStart by preparing the base for the gravy. Heat 1 tablespoon of butter in a pan over medium heat. Add the chopped onions and saut\u00e9 until they turn golden brown. Add the ginger-garlic paste and saut\u00e9 for another minute. Then, add the chopped tomatoes and cook until they are soft and mushy. Once done, turn off the heat and let the mixture cool. Once cooled, blend this mixture into a smooth paste using a blender.", "Step 3\nIn the same pan, melt another tablespoon of butter. Add the blended paste back into the pan. Add the red chili powder, garam masala, and turmeric powder. Mix well and cook for a few minutes until the spices are well blended with the paste.", "Step 4\nCut the paneer into cubes and add them to the pan. Mix gently, ensuring all the paneer cubes are coated with the gravy. Cover the pan and let it simmer for about 10 minutes on low heat.", "Step 5\nFinally, add the fresh cream and salt to the pan. Mix well and cook for another 2-3 minutes. Garnish with fresh coriander leaves before serving. Your Paneer Butter Masala is ready to be served. Enjoy it with naan, roti, or rice."], 
        image: Image4,
        gif: gif4,
        recommended_ingredients: ['Onions','Tomatoes','Fresh cream']},
        {id: 5, 
        name: "Butter Paneer Pizza", 
        steps: ["Step 1: Prepare the Paneer Topping\nStart by cutting 200 grams of paneer into small cubes. Heat 2 tablespoons of butter in a pan over medium heat. Once the butter has melted, add 1 teaspoon of ginger-garlic paste and saut\u00e9 until the raw smell disappears. Add 1 teaspoon of red chili powder, 1/2 teaspoon of turmeric powder, and salt to taste. Mix well and then add the paneer cubes. Saut\u00e9 the paneer until it is well coated with the spices and set aside.", "Step 2: Prepare the Pizza Dough\nIn a large bowl, combine 2 cups of all-purpose flour, 1 teaspoon of sugar, 1 teaspoon of salt, and 1 tablespoon of active dry yeast. Gradually add warm water and knead the mixture into a soft dough. Cover the dough with a damp cloth and let it rest for about 2 hours, or until it has doubled in size.", "Step 3: Preheat the Oven and Prepare the Pizza Base\nPreheat your oven to 475 degrees Fahrenheit (245 degrees Celsius). Once the dough has risen, punch it down and divide it into two equal parts. Roll out each part into a thin circle on a floured surface. Place the rolled dough onto a greased baking sheet.", "Step 4: Assemble the Pizza\nSpread a generous amount of pizza sauce over each pizza base. Sprinkle a layer of shredded mozzarella cheese over the sauce. Distribute the saut\u00e9ed paneer evenly over the cheese. Add sliced onions, bell peppers, and olives if desired. Top with another layer of mozzarella cheese.", "Step 5: Bake the Pizza\nBake the pizzas in the preheated oven for about 15-20 minutes, or until the crust is golden and the cheese is bubbly and slightly browned. Remove the pizzas from the oven and let them cool for a few minutes before slicing and serving. Enjoy your homemade butter paneer pizza!"], 
        image: Image5, 
        gif: gif5,
        recommended_ingredients: ['Onions','Capsicup','cheese']},
        {id: 6, 
        name: "Paneer Tikka", 
        steps: ["Step 1\nStart by preparing the marinade for the paneer tikka. In a large bowl, combine 1 cup of plain yogurt, 1 tablespoon of lemon juice, 2 teaspoons of turmeric, 1 teaspoon of cumin, 1 teaspoon of coriander, 1 teaspoon of garam masala, 1 teaspoon of red chili powder, and salt to taste. Mix all the ingredients until they are well combined.", "Step 2\nCut 500 grams of paneer into 1-inch cubes and add them to the marinade. Make sure all the paneer cubes are well coated with the marinade. Cover the bowl and let the paneer marinate for at least 2 hours, or overnight for best results.", "Step 3\nPreheat your grill or oven to medium heat. If you're using an oven, preheat it to 200 degrees Celsius or 400 degrees Fahrenheit. While the grill or oven is preheating, thread the marinated paneer cubes onto skewers. If you're using wooden skewers, make sure to soak them in water for at least 30 minutes before using to prevent them from burning.", "Step 4\nPlace the skewers on the grill or in the oven. Cook the paneer tikka for about 15 minutes, turning the skewers occasionally to ensure the paneer is cooked evenly on all sides. The paneer tikka is done when it is golden brown and slightly charred.", "Step 5\nRemove the paneer tikka from the grill or oven and let it cool for a few minutes. Serve the paneer tikka with a side of butter for added richness and flavor. You can also serve it with a side of mint chutney or tamarind sauce for a traditional Indian touch. Enjoy your homemade paneer tikka!"], 
        image: Image6, 
        gif: gif6,
        recommended_ingredients:['yogurt']}]
    }

export default mapping;