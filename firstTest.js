let Numbers = [];

let NumbersFactorial = [];

class AClass {
    constructor(n){
        if (this.constructor == AClass){
            throw new Error('Abstract class can not be instantiated');
        }
        this.n = n;
        return n;
    }

    fill(max = 10, min = 1){
        Numbers = [];
        for(let i = 0; i < this.n; i++){
            let numbersInArray = Math.round(Math.random() * (max - min) + min);
            Numbers.push(numbersInArray);
        }
        console.log(Numbers);
        return Numbers;
    }

    factorial(){
        NumbersFactorial = [];
        for(let i = 0; i < Numbers.length; i++){
            let numbersInFactorial = Numbers[i];
            for(let j = Numbers[i] - 1; j > 0; j--){
                numbersInFactorial = numbersInFactorial * j;
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
    sort(){
        for(let abc = 0; abc < 2; abc++){
            for (let i = 0; i < Numbers.length - 1; i++){
                let maxValue = Numbers[i];
                    for (let j = i + 1; j < Numbers.length; j++) {
                    if (Numbers[j] < maxValue) {
                        let minValue = Numbers[j];
                        let swap = Numbers[i];
                        Numbers[i] = minValue;
                        Numbers[j] = swap;
                    }
                }
            }
            console.log(Numbers);
            return Numbers;
        }
    }
}

new Class1(5).fill();
new Class1().sort();
new Class1().factorial();
new Class2(5).fill();
new Class2().sort();
new Class2().factorial();