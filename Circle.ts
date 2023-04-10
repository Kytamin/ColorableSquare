import {Colorable} from "./interface";
export class Circle implements Colorable{
    protected _radius:number
    protected _color:boolean


    constructor(radius: number, color: boolean) {
        this._radius = radius;
        this._color = color;
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


    getRadius(): number {
        return this._radius;
    }

    setRadius(value: number) {
        this._radius = value;
    }
    getArea():number{
        return this._radius*this._radius*Math.PI
    }

    display():string {
        return `area:${this.getArea()} , ${this.checkColor()}`
    }
    checkColor():string{
        if(this._color){
            return `${this.howToColor()}`
        }else {
            return `no`
        }
    }
}