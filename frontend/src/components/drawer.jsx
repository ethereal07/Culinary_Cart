// RecipeDrawer.js

import React, { useState } from 'react';
import { Drawer, Tabs, Tab, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ProductCard from './suggested-products';

const useStyles = makeStyles((theme) => ({
    fab: {
      backgroundColor: theme.palette.primary.main, // Set the background color of the button
      color: theme.palette.primary.contrastText, // Set the text color to contrast text color
    },
    tab: {
      display: 'flex',
      alignItems: 'center',
      padding: '8px', // Add padding to the tab for spacing
      height: '200px', // Set the height of the tab
      transition: 'opacity 0.3s', // Add transition for opacity change
      opacity: 1, // Set initial opacity
    },
    selectedTab: {
      // backgroundColor: theme.palette.secondary.main, // Set the background color of the selected tab
      opacity: 1, // Make the selected tab fully visible
    },
    unselectedTab: {
      opacity: 0.5, // Make the unselected tabs faded
    },
    circle: {
      width: '100px', // Set the width of the circle
      height: '100px', // Set the height of the circle
      borderRadius: '50%', // Make it a circle using border-radius
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      marginRight: '16px',
    },
    text: {
      color: theme.palette.primary.main, // Set the text color to the same as the button's background color
      marginTop: '8px', // Add margin to separate it from the button
      // fontSize: '18px', // Set the font size for the text
      fontWeight: 'bold', // Set font weight to bold
    },
}));


function RecipeDrawer({ isOpen, onClose, activeTab, setActiveTab, selectedCartItems }) {
    const classes = useStyles();
  
    const handleTabChange = (event, newValue) => {
      setActiveTab(newValue);
    };
  
    return (
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={onClose}
      >
        <div style={{ width: '1200px', padding: '16px' }}>
        <Tabs
            value={activeTab}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            {selectedCartItems.map((recipe, index) => (
                <Tab
                  label={
                    <div
                      className={`${classes.tab} ${
                        activeTab === index ? classes.selectedTab : classes.unselectedTab
                      }`}
                    >
                      <div
                        className={classes.circle}
                        style={{ backgroundImage: `url(${recipe.image})` }}
                      />
                      <div>
                        <Typography variant="h6" className={classes.text}>
                          {recipe.name}
                        </Typography>
                      </div>
                    </div>
                  }
                  key={index}
                  style={{
                    color: 'transparent',
                    height: '80px', // Increase the tab height
                  }}
                />
              ))}
        </Tabs>
          <div style={{ paddingTop: '16px', paddingLeft: '16px', paddingRight: '16px' }}>
            <div style={{ display: 'flex' }}>
              {/* Display recipe GIF on the left */}
              <div style={{ flex: 1, order: 1 }}>
                <img
                  src={selectedCartItems[activeTab]?.gif}
                  alt={selectedCartItems[activeTab]?.name}
                  style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                />
              </div>
              {/* Display recipe steps on the right */}
              <div style={{ flex: 2, order: 2, paddingLeft: '16px' }}>
                <Typography variant="h6" style={{ fontWeight: 'bold' }}>Recipe Steps:</Typography>
                <ul>
                  {selectedCartItems[activeTab]?.steps.map((step, stepIndex) => (
                    <li key={stepIndex} style={{ marginBottom: '8px' }}>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Display suggested ingredients below the GIF */}
            <div style={{ order: 3, marginTop: '16px' }}>
              <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                Suggested Ingredients:
              </Typography>
              {/* Render ProductCard components for suggested ingredients */}
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {selectedCartItems[activeTab]?.recommended_ingredients.map((ingredient, index) => (
                    <ProductCard key={index} product={ingredient} />
                ))}
                </div>
            </div>
          </div>
        </div>
      </Drawer>
    );
  }
  
  export default RecipeDrawer;
  
