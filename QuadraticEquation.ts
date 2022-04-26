export class QuadraticEquation{
    a : number;
    b : number;
    c : number;
    constructor(a,b,c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getDiscriminant(){
        return this.b*2 - 4*this.a*this.c;
    }
    getRoot1(){
        return (-this.b + Math.sqrt(this.getDiscriminant()))/(2/this.a);
    }
    getRoot2(){
        return (-this.b - Math.sqrt(this.getDiscriminant()))/(2/this.a);
    }
}