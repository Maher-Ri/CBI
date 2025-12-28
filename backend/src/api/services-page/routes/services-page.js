module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/services-page',
      handler: 'services-page.find',
      config: { auth: false }
    }
  ]
};
