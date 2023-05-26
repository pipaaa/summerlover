/* Add your custom CSS styles here */

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

header {
  background-color: #f0f0f0;
  padding: 20px;
}

h1, h2 {
  color: #333;
}

#featured-products, #how-it-works, #all-products {
  margin-bottom: 40px;
}

#product-list, #product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.product {
  border: 1px solid #ddd;
  padding: 10px;
}

.product img {
  width: 100%;
  max-height: 200px;
  object-fit: cover;
}

.product h3 {
  margin: 10px 0;
}

/* Add more CSS styles as needed */
