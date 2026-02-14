class Rectangle{
    constructor(length,width,color){
        this.length=length;
        this.width=width;
        this.color=color;
    }
area(){
    const area= this.width*this.length;
    return area
}
paint(){
    console.log(`the color of this rectangle is ${color}`);
}
}
const rect= new Rectangle(2,4,"blue");
const area= rect.area();
console.log(area);