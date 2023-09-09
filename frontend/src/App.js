import React, { useEffect, useState } from 'react';
import { AppBar, Tabs, Tab, Container, Typography } from '@material-ui/core';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ProductPage from './components/product-page';
import CartPage from './components/cart-page';
import products from './constants/product-list';

const App = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [cart, setCart] = useState([]);
  const [selctedProducts, setSelectedProducts] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0); // Initialize cart item count to 0

  const handleChangeTab = (event, newValue) => {
    setSelectedTab(newValue);
  };
  
  
  // console.log("Cart items : ", cart.map((product)=>product.name) )
  const addToCart = (product) => {
    if(selctedProducts.includes(product?.id)){
      setSelectedProducts((e)=>{return e.filter((id)=>id!==product.id)})
      setCart((e)=>e.filter((p)=>p.id!==product.id))
      return 
    }
    setSelectedProducts([...selctedProducts, product.id])
    if(!cart.find((p)=>p.id==product.id)){
      setCart([...cart, product]);
    }
  };

  useEffect(()=>{
    if(cart?.length > 1){
      // set loading indicator so user will userstand we are cooking something
      // call the API and set the response to the const

    }
  },[cart])

  return (
    <div>
      <AppBar position="sticky">
        <Tabs value={selectedTab} onChange={handleChangeTab}>
          <Tab icon={<StorefrontIcon />} label="Products" />
          <Tab icon={<ShoppingCartIcon />} label="Cart" />
          <Tab icon={<AccountCircleIcon />} label="Profile" />
        </Tabs>
      </AppBar>
      <Container style={{paddingTop:"10px"}}>
        {selectedTab === 0 && (
          <ProductPage addToCart={addToCart} products={products} selctedProducts={selctedProducts} cart={cart}  />
        )}
        {selectedTab === 1 && (
          <CartPage cart={cart} addToCart={addToCart}  />
        )}
        {selectedTab === 2 && (
          // Render another component for Tab 3 (you can replace this with your content)
          <div>Content for Tab 3</div>
        )}
      </Container>
    </div>
  );
};

export default App;
