export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        description: 'The name of the product',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'A detailed description of the product',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        description: 'The price of the product',
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
        description: 'The category of the product (e.g., dog food, cat toys)',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        description: 'An image of the product',
      },
      {
        name: 'stock',
        title: 'Stock',
        type: 'number',
        description: 'The number of items available in stock',
      },
    ],
  };