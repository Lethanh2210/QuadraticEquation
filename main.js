"use strict";
exports.__esModule = true;
var QuadraticEquation_1 = require("./QuadraticEquation");
var pt = new QuadraticEquation_1.QuadraticEquation(1, 3, -4);
if (pt.getDiscriminant() > 0) {
    console.log(pt.getRoot1(), pt.getRoot2());
}
else if (pt.getDiscriminant() === 0) {
    console.log(pt.getRoot1());
}
else {
    console.log('vo nghiem');
}
