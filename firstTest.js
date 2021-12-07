let Numbers = [];

let n = 5;

let NumbersFactorial = [];

class AClass {

    constructor(){
        if (this.constructor == AClass){
            throw new Error('Abstract class can not be instantiated');
        }
    }

    

    fill(max = 10, min = 1){
        for(let i = 0; i < n; i++){
            let numbersInArray = Math.round(Math.random() * (max - min) + min);
            Numbers.push(numbersInArray);
        }
        console.log(Numbers);
        return Numbers;
    }

    factorial(){
        for(let i = 0; i < n; i++){
            let numbersInFactorial = Numbers[i];
            for(let j = Numbers[i] - 1; j > 0; j--){
                numbersInFactorial = numbersInFactorial * j;
                console.log(j);
                console.log(numbersInFactorial);
            }
            NumbersFactorial.push(numbersInFactorial);
        }
        console.log(NumbersFactorial);
        return NumbersFactorial;
    }

}

class Class1 extends AClass {
    sort(){
        for(let i = 0; i < Numbers.length - 1; i++){
            for(let j = 0; j < Numbers.length - 1; j++){
                if(Numbers[j + 1] < Numbers[j]){
                    let t = Numbers[j + 1];
                    Numbers[j + 1] = Numbers[j];
                    Numbers[j] = t;
                }
            }
        }
        console.log(Numbers);
        return Numbers;
    }
}

class Class2 extends AClass {

}

new Class1().fill().sort();
new Class1().sort();
new Class1().factorial();