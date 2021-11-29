const checkNum = (arr) => {
    for (i = 0; i < arr.length; i++) {
        for (t = 0; t < arr.length; t++)
            if(arr[i] + arr[t] === 0) {
                return true
        }
    } return false
}

console.log(checkNum([1, 2, 3, -2]))

// time complexity is -- O(n to the 2nd power)
// space complecity -- O(n)


let checkStr = (str) => {
    return new Set(str).size == str.length;
}

console.log(checkStr('raarw'))

// time complexity is -- O(1)
// space complexity is -- O(n)

let pangram = (str) => {
    if (new Set(str.toLowerCase().replace(/[^a-z]/g, "") ).size === 26) {
        return "true"
    } else {
        return "false"
    }
}

console.log(pangram('Tfs'))

// time complexity is -- O(1)
// space complexity is -- O(n)

const findLongestWord = (arr) => {
    let longest = arr[0].length

    for(i = 0; i < arr.length; i++) {
        if (arr[i].length > longest) {
            longest = arr[i].length
        }
    }
    console.log(longest)
}

findLongestWord(["hi", "hello"]);

// time complexity -- O(n)
// space complexity is -- O(n)