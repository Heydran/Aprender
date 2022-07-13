"use strict";
class Computador {
    constructor() {
        this.phisicalCore = 12;
        this.logicalCore = 12;
    }
}
class PersonalComputer extends Computador {
    getCores() {
        return this.phisicalCore + this.logicalCore;
    }
}
var pc = new PersonalComputer();
console.log(pc.getCores());
