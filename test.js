const assert = require("chai").assert;
const listRoutes = require("./index");

describe("Restify list routes", () => {
  it("should list all registered routes", () => {
    let mockedRoutes = {
      router: {
        _registry: {
          _routes: {}
        }
      }
    };

    let registeredRoutes = listRoutes(mockedRoutes);
    console.log(registeredRoutes);
    assert(registeredRoutes, typeof Object);
  });
});
