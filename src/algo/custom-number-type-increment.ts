type digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

const increment = (number: Array<digit>): Array<digit> => {
    const reversed_array = number.reverse()
    const array_length = number.length

    for (let i = 0; i <= array_length; i++) {
        if(i === array_length) {
            reversed_array[i] = 1
        } else if(reversed_array[i] < 9) {
            reversed_array[i]++
            break
        } else {
            reversed_array[i] = 0
        }
    }

    const result = reversed_array.reverse()

    return result
}

console.log('Test 1 \ninitial value: [1,2,3], \nresult: ', increment([1,2,3]))
console.log('Test 2 \ninitial value: [1,2,3,4,5,6], \nresult: ', increment([1,2,3,4,5,6]))
console.log('Test 3 \ninitial value: [1,2,9], \nresult: ', increment([1,2,9]))
console.log('Test 4 \ninitial value: [9,9], \nresult: ', increment([9,9]))
console.log('Test 5 \ninitial value: [0], \nresult: ', increment([0]))
console.log('Test 6 \ninitial value: [8,9,9], \nresult: ', increment([8,9,9]))