//Soru1
function findPrime(...numbers) {
    
    for (let i = 0; i < numbers.length; i++) {
                let counter=0
        for (let j = 1; j<=numbers[i]; j++) {
            if (numbers[i]%j ==0) {
               counter = counter +1 
        }
    }
        if (counter<=2) {
            console.log(numbers[i]+" is a Prime Number" )
        }
        else {
            console.log(numbers[i] + " is not a Prime Number")
        }     
    }
}

findPrime(15,3,40,50)

//Soru2
let total1=0
    let total2=0
function friendNumbers(number1,number2) {
    
    for (let i = 1; i <number1 ; i++){
        if (number1%i==0) {
            total1 = i + total1
        }
    }
    for (let j = 0; j <number2 ; j++){
        if (number2%j==0) {
            total2 = j + total2
        }
    }
    if (total1==number2 && total2==number1) {
        console.log( number1 + " and " + number2 + " are friend numbers ")
    }else{
        console.log( number1 + " and " + number2 + "are not a friend numbers")
    }
   
}
friendNumbers (1184, 1210)
//Soru3
function perfectNumber() {
    let total
    for (let i = 0; i < 1000 ; i++) {
        for (let j = 0; j < i; j++) {
            if (i%j==0) {
             total = total + j   
            }
            if (total==i) {
                console.log(i + " is a perfect number.")
            }
        }
    }
}
    perfectNumber()

//Soru4
    function isPrime(){
        let total=0
        for (let number = 3; number < 1000; number++) {
            for (let i = 2; i< number; i++) {
                if (number%i==0) {
                 total=total+1   
                }    
            }
            if (total==0) {
                console.log(number)
            }
        }
    }
    isPrime()
