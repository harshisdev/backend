let orders = [
  {
    id: 1,
    items: [
      { id: 1, name: 'Laptop', quantity: 2 },
      { id: 2, name: 'Mouse', quantity: 1 }
    ],

  },
  {
    id: 2,
    items: [
      { id: 1, name: 'Laptop', quantity: 2 },
      { id: 2, name: 'Mouse', quantity: 1 }
    ],
  }
];

// Function to get orders
const getOrders = (req, res) => {
  res.json(orders);
};

module.exports = {
  getOrders,
};
