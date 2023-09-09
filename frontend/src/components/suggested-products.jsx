import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '200px',
    margin: '8px',
  },
  media: {
    height: '150px',
    width: '150px',
    backgroundSize: 'contain',
  },
  content: {
    textAlign: 'center',
  },
  button: {
    marginTop: '8px',
  },
}));

function ProductCard({ product, onAddToCart }) {
  const classes = useStyles();
  const [added, setAdded] = useState(false); // State to track if product is added

  const handleAddToCart = () => {
    // onAddToCart(product); // Call the parent function
    setAdded(true); // Update state to indicate product is added
  };

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={product.image}
        title={product.name}
      />
      <CardContent className={classes.content}>
        <Typography variant="subtitle1" component="div">
          {product.name}
        </Typography>
        <Button
          variant="contained"
          color={added ? "secondary" : "primary"} // Change color based on 'added' state
          onClick={handleAddToCart}
        >
          {added ? "Added" : "Add to Cart"} {/* Change button text based on 'added' state */}
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
