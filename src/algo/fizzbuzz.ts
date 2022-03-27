const numbers_to_display:number[] = Array.from({length: 50}, (v, k) => k)

const fizzbuzz = ():void => {
    numbers_to_display.forEach(number => console.log(number%3 === 0 && number%5 === 0 ? 'FizzBuzz' : number%3 === 0 ? 'Fizz' : number%5 === 0 ? 'Buzz' : number))
}

fizzbuzz()