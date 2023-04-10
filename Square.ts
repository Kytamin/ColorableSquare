import {Colorable} from "./interface";
import {Rectangle} from "./Rectangle";

export class Square extends Rectangle implements Colorable{


    constructor(side:number, color: boolean) {
        super(side, side, color);
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

        return this.getWidth()*this.getWidth()
    }
    display():string {
        return `area:${this.getArena()} , ${this.checkColor()}`
    }

}






