// Jest tests for shapes consturctor

//Calls the shapes constructor
const {Triangle, Circle, Shape } = require('./shapes');

//Test function to test shapes js. 
/*
Test to create a triangle
Input: pink, blue, text
Output: expectedRender
*/
describe('Triangle', () => {
  it('Test should return data from a triangle constructor ', () => {
    const color = "pink";
    const textColor = "blue";
    const text = "This is test text";
    const expectedRender = `<polygon points="150,50 250,200 50,200" fill="${color}" />
        <text x="150" y="130" text-anchor="middle" alignment-baseline="middle" font-family="Arial" font-size="30" fill="${textColor}">${text}</text>`;
    const triangle = new Triangle(color, textColor, text);
    expect(triangle.render()).toEqual(expectedRender);
  });
});

/*
Test to create a Circle
Input: pink, blue, text
Output: expectedRender
*/
describe('Circle', () => {
    it('Test should return data from a circle constructor ', () => {
      const color = "pink";
      const textColor = "blue";
      const text = "This is test text";
      const expectedRender = `<circle cx="150" cy="100" r="80"  fill="${color}" />
        <text x="50%" y="50%" fill="${textColor}" font-size = "50" font-family="Arial" text-anchor="middle" dy=".3em">${text}</text>`;
      const circle = new Circle(color, textColor, text);
      expect(circle.render()).toEqual(expectedRender);
    });
  });


  /*
Test to create a square
Input: pink, blue, text
Output: expectedRender
*/
  describe('Shape', () => {
    it('Test should return data from a shape constructor ', () => {
      const color = "pink";
      const textColor = "blue";
      const text = "This is test text";
      const expectedRender = `<rect x="50" y="50" width="200" height="200" fill="${color}" />
        <text x="150" y="150" text-anchor="middle" alignment-baseline="middle" font-family="Arial" font-size="30" fill="${textColor}">${text}</text>`;
      const shape = new Shape(color, textColor, text);
      expect(shape.render()).toEqual(expectedRender);
    });
  });