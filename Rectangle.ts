import {Colorable} from "./interface";

export class  Rectangle implements Colorable{

    protected _color:boolean
    protected _width:number
    protected _length:number

    constructor(width: number, length: number,color: boolean) {
        this._width = width;
        this._length = length;
        this._color=color;
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


    getWidth(): number {
        return this._width;
    }

    setWidth(value: number) {
        this._width = value;
    }

    getLength(): number {
        return this._length;
    }

    setLength(value: number) {
        this._length = value;
    }

    getArea(): number {
        return this._width*this._length
    }
    checkColor():string{
        if(this._color){
            return `${this.howToColor()}`
        }else {
            return `no`
        }
    }
    display():string {
        return `area:${this.getArea()} , ${this.checkColor()}`
    }
}