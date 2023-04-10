import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";
import {Square} from "./Square";

let circle1 = new Circle(5,true)
let rectangle1 = new Rectangle(5,10,false)
let square1 = new Square(6,true)

let Arr:(Circle|Rectangle)[]=[circle1,rectangle1,square1]

let arr1:[]=[]
Arr.forEach((e)=>{
    console.log(e.display())
})
console.table(Arr)
