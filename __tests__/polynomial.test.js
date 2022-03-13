//Sanity Check
test("Sanity check", () => {
    expect(true).toBe(true);
});

// Testing the interface
const {Polynomial} = require("../polynomial");

describe("Polynomial", () => {
  const polynomial = new Polynomial();

  test("defines Main()", () => {
    expect(typeof polynomial.Main).toBe("function");
  });
});
