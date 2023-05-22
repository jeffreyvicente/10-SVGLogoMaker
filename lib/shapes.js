// Exports `Triangle`, `Circle`, and `Square` classes

class Shape {
    constructor(color){
        this.color = color;
    }

    render(){
        return `<svg><rect fill="${this.color}" /></svg>`;
    }

}

class Triangle extends Shape{
    render(){
        return `<svg><polygon fill="${this.color}" /></svg>`;
    }
}