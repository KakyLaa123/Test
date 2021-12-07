let Numbers = [];

let n = 10;

let NumbersFactorial = [];

class AClass {

    constructor(){
        if (this.constructor == AClass){
            throw new Error('Abstract class can not be instantiated');
        }
    }

    

    fill(max = 10, min = 0){
        for(let i = 0; i < n; i++){
            let numbersInArray = Math.round(Math.random() * (max - min) + min);
            Numbers.push(numbersInArray);
        }
        console.log(Numbers);
        return Numbers;
    }

    factorial(){
        for(let i = 0; i < n; i++){
            let numbersInFactorial = (Numbers[i] - 1) * Numbers[i];
            NumbersFactorial.push(numbersInFactorial);
        }
        console.log(NumbersFactorial);
        return NumbersFactorial;
    }

}

class Class1 extends AClass {

}

new Class1().fill();
new Class1().factorial();