// CartPage.js
import React from 'react';
import { Container, Paper, Typography, Button, Grid, makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex', 
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
  },
  cardImage: {
    width: '100px', // Set a fixed width
    height: '100px', // Set a fixed height
    objectFit: 'contain',
    marginRight: theme.spacing(2),
  },
  cardContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  removeButton: {
    alignSelf: 'flex-end',
  },
  quantityBadge: {
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
    borderRadius: '50%',
    padding: '6px 10px',
    fontSize: '14px',
  },
}));

const CartPage = ({ addToCart, cart }) => {
  const classes = useStyles();
  const headingStyles = {
    fontSize: '24px',   // Adjust the font size
    fontWeight: 'bold', // Make the text bold
    color: 'blue',      // Change the text color
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom style={headingStyles}>
        My Cart
      </Typography>
      {cart.map((product) => (
        <Paper key={product.id} elevation={3} className={classes.card}>
          <img
            src={product.imageUrl}
            alt={product.name}
            className={classes.cardImage}
          />
          <div className={classes.cardContent}>
            <div>
              <Typography variant="h6" gutterBottom>
                {product.name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                ₹{product.price}
              </Typography>
            </div>
            <div>
              <Button variant="contained" color="secondary"  onClick={() => addToCart(product)} className={classes.removeButton}>
                Remove
              </Button>
            </div>
          </div>
        </Paper>
      ))}
    </Container>
  );
};

export default CartPage;
