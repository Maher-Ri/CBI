module.exports = {
  routes: [
    {
      method: "GET",
      path: "/global",
      handler: "global.find",
      config: { auth: false },
    },
    // Do NOT add PUT /global unless you implement it
  ],
};
