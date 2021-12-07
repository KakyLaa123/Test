class AClass {

    constructor(){
        if (this.constructor == AClass){
            throw new Error('Abstract class can not be instantiated');
        }
    }

    

    fill(max = 10000, min = 0){
        let Numbers = [];
        let n = 10;
        for(let i = 0; i < n; i++){
            let numbersInArray = Math.round(Math.random() * (max - min) + min);
            Numbers.push(numbersInArray);
        }
        console.log(Numbers);
    }

}

class Class1 extends AClass {

}

new Class1().fill();