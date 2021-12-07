class AClass {
    constructor(n){
        let Numbers = [];

        function fill(min, max){
            for(let i = 0; i < n; i++){
                min = Math.ceil(min);
                max = Math.ceil(max);
                let numbersInArray = Math.random() * (max - min) + min;
                Numbers.push(numbersInArray);
            }
        }

        let NumbersFactorial = [];

        function factorial(){
            for(let i = 0; i < n; i++){
                let numbersInArrayFactorial = (Numbers[i] - 1) * Numbers[i];
                NumbersFactorial.push(numbersInArrayFactorial);
            }
        }

        class Class1 {
            constructor (){
                function sort (){
                    for (let i = 0; i < n - 1; i++){
                        let maxValue = Numbers[i];
                            for (let j = i + 1; j < n; j++) {
                            if (Numbers[j] > maxValue) {
                                let minValueObj = Numbers[j];
                                let swapObj = Numbers[i];
                                Numbers[i] = minValueObj;
                                Numbers[j] = swapObj;
                            }
                        }
                    }
                    return Numbers, NumbersFactorial;
                }
            }
        }
        
        // class Class2 {
        //     constructor (){
        //         function sort (){
                    
        //         }
        //     }
        // }
    }
}