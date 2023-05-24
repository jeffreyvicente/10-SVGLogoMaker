// Exports `Triangle`, `Circle`, and `Square` classes

class Shape {
    constructor(color, textColor, text){
        this.color = color;
        this.textColor = textColor;
        this.text = text;
    }

    render(){
        return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />
        <text x="150" y="150" text-anchor="middle" alignment-baseline="middle" font-family="Arial" font-size="30" fill="${this.textColor}">${this.text}</text>`;
    }

}

class Triangle extends Shape{
    render(){
        return `<polygon points="150,50 250,200 50,200" fill="${this.color}" />
        <text x="150" y="130" text-anchor="middle" alignment-baseline="middle" font-family="Arial" font-size="30" fill="${this.textColor}">${this.text}</text>`;
    }
}

class Circle extends Shape{
    render(){
        return `<circle cx="150" cy="100" r="80"  fill="${this.color}" />
        <text x="50%" y="50%" fill="${this.textColor}" font-size = "50" font-family="Arial" text-anchor="middle" dy=".3em">${this.text}</text>`;
    }
}


module.exports = {
    Shape,
    Triangle,
    Circle,
  };