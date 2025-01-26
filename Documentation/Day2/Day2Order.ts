export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
      {
        name: 'orderID',
        title: 'Order ID',
        type: 'string',
        description: 'A unique identifier for the order',
      },
      {
        name: 'customerID',
        title: 'Customer ID',
        type: 'string',
        description: 'The ID of the customer who placed the order',
      },
      {
        name: 'products',
        title: 'Products',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'product' }],
          },
        ],
        description: 'The products included in the order',
      },
      {
        name: 'totalPrice',
        title: 'Total Price',
        type: 'number',
        description: 'The total price of the order',
      },
      {
        name: 'orderStatus',
        title: 'Order Status',
        type: 'string',
        description: 'The status of the order (e.g., pending, shipped, delivered)',
      },
    ],
  };