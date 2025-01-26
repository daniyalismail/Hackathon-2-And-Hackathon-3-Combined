export default {
    name: 'customer',
    title: 'Customer',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        description: 'The name of the customer',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
        description: 'The email address of the customer',
      },
      {
        name: 'address',
        title: 'Address',
        type: 'string',
        description: 'The shipping address of the customer',
      },
      {
        name: 'phone',
        title: 'Phone',
        type: 'string',
        description: 'The phone number of the customer',
      },
    ],
  };