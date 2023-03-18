class Polygon {
    constructor(sides){
        this.sides = sides;
    }
    get countSides(){
        return this.sides.length;
    }

    get perimeter(){
        return this.sides.reduce((acc, curr) => acc += curr, 0);
    }
}

class Triangle extends Polygon{
    get isValid(){
        this.sides.sort((a, b) => a - b);
        if ((this.sides[0] + this.sides[1]) <= this.sides[2]) {
            return false
        }
        return true;
    }
}
class Square extends Polygon {
    get area(){
        if(this.isValid)
            return this.sides[0] ** 2;
        else
            return NaN;
    }
    get isValid(){
        if(this.countSides !== 4)
            return false;
        const sideVal = this.sides[0];
        return this.sides.every((item) =>  item === sideVal);
        // const [side1, side2, side3, side4] = this.sides;
        // return side1 === side2 && side1 === side3 && side1 === side4;
    }
}