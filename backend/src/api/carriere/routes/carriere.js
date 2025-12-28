module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/carriere',
      handler: 'carriere.find',
      config: { auth: false }
    }
  ]
};
