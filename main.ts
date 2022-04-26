import {QuadraticEquation} from "./QuadraticEquation";
let pt = new QuadraticEquation(1,3,-4);
if(pt.getDiscriminant()>0){
    console.log(pt.getRoot1(),pt.getRoot2());
}else if(pt.getDiscriminant()===0){
    console.log(pt.getRoot1());
}else {console.log('vo nghiem')}