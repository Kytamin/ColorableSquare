import {Colorable} from "./interface";

class Square implements Colorable{
    private _side:number
    private _color:boolean


    constructor(side: number, color: boolean) {
        this._side = side;
        this._color = color;
    }

    getSide(): number {
        return this._side;
    }

    setSide(value: number) {
        this._side = value;
    }

    getColor(): boolean {
        return this._color;
    }

    setColor(value: boolean) {
        this._color = value;
    }

    howToColor(): string {
        return "Color all four sides";
    }
    checkColor():string{
        if(this._color){
            return `${this.howToColor()}`
        }else {
            return `no`
        }
    }
    getArena():number{

        return this._side*this._side
    }
    display() {
        console.log(`area:${this.getArena()} , ${this.checkColor()}`)
    }

}

let square1:Square= new Square(5,true)
let square2:Square= new Square(10,false)
let square3:Square= new Square(15,true)

let Arr:Square[]=[square1,square2,square3]
Arr.forEach((e)=>{
    e.display()
})




