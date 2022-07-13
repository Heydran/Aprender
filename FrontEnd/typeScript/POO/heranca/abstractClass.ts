abstract class Computador{
    phisicalCore:number = 12
    logicalCore:number = 12

    abstract getCores():number
}

class PersonalComputer extends Computador{
    getCores():number{
        return this.phisicalCore + this.logicalCore
    }
}

var pc:Computador = new PersonalComputer()
console.log(pc.getCores())