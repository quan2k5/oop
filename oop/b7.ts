class Circle{
    private radius:number;
    constructor(radius:number){
        this.radius=radius;
    } 
    showCircle(){
        console.log(this.radius);
        console.log('Chu vi:',2*Math.PI*this.radius);
        console.log('Dien tich:',Math.PI*this.radius*this.radius);
    }
    set updateCircle(radius:number){
        this.radius=radius;
    }
}
let circle=new Circle(12);
circle.showCircle();
circle.updateCircle=5;
circle.showCircle();
