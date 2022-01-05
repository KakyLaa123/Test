class AClass{
    constructor(Numbers){
        if (this.constructor == AClass){
            throw new Error('Abstract class can not be instantiated');
        }        
        this.Numbers = Numbers;
        this.Numbers = new Array(10);
    }

    fill(){
        for(let i = 0; i < 10; i++){
            let num = Math.floor(Math.random() * 10);
            this.Numbers[i] = num;
        }
        console.log(this.Numbers);
        return this.Numbers;
    }

    factorial(){
        let factorialArr = new Array(10);
        for(let i = 0; i < this.Numbers.length; i++){
            if(this.Numbers[i] == 0 || this.Numbers[i] == 1){
                factorialArr[i] = 1;
            }else{
                let numbersInFactorial = this.Numbers[i];
                for(let j = this.Numbers[i] - 1; j > 0; j--){
                    numbersInFactorial = numbersInFactorial * j;
                }
                factorialArr[i] = numbersInFactorial;
            }
        }
        console.log(factorialArr);
        return factorialArr;
    }
}

class Class1 extends AClass{
    constructor(){
        super();
    }

    sort(){
        this.Numbers.sort((a, b) => a - b);
        console.log(this.Numbers);
        return this.Numbers;
    }
}

class Class2 extends AClass{
    constructor(){
        super();
    }

    sort(){
        this.Numbers.sort((a, b) => b - a);
        console.log(this.Numbers);
        return this.Numbers;
    }
}



const a = new Class2();
a.fill();
a.sort();
a.factorial();