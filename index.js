module.exports = server => {
  return server.router._registry._routes;
};
