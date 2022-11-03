//4b
//Inheritancce in js

class Shape {
    constructor(x,y){
        this.setLocation(x,y);
    }
    setLocation(x,y){
        this.x=x;
        this.y=y;
    }
}
class Circle extends Shape{
    constructor(x,y,radius){
        super(x,y);
        this.radius=radius;
    }
    getArea(){
        return Math.PI*this.radius*this.radius
    }
}

var circle = new Circle(0,2,5);
console.log(circle.getArea())

/*another example of inheritance
function Rectangle(sides, width, height) {
    this.sides = sides;
    this.width = width;
    this.height = height;
    this.area = function() {
      return this.width * this.height;
    }
    this.perimeter = function() {
      return (this.width + this.height) * 2;
    }
  }
  
  // Square constructor
  function Square(sides, length) {
    this.sides = sides;
    this.width = length;
    this.height = length;
    this.area = function() {
      return this.width * this.height;
    },
    this.perimeter = function() {
      return (this.width + this.height) * 2;
    }
  }
  
  var rect = new Rectangle(4, 3, 5);
  var square = new Square(4, 4);
  
  console.log(rect.area());
 console.log(square.area());*/