
//Replace With Alphabet Position

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)


function alphabetPosition(text) {
    let alphaArray = [null, 'a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let splitText = text.toString().toLowerCase().split(' ').toString().split('')
    let newArr = splitText.filter(itemInArray => alphaArray.includes(itemInArray))
    let newerArr = newArr.map(itemInArray => alphaArray.indexOf(itemInArray))
    text = newerArr.join(' ')
    return text;
  }



//////////////////////////////////////////////////////


  // A wealthy client has forgotten the password to his business website, but he has a list of possible passwords. His previous developer has left a file on the server with the name password.txt. You open the file and realize it's in binary format.

  // Write a script that takes an array of possible passwords and a string of binary representing the possible password. Convert the binary to a string and compare to the password array. If the password is found, return the password string, else return false;
  
  // decodePass(['password123', 'admin', 'admin1'], '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011');    => 'password123'
  // decodePass(['password321', 'admin', 'admin1'], '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011');    => false
  // decodePass(['password456', 'pass1', 'test12'], '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011');    => false


  function decodePass( passArr, bin ){
    //convert the binary to characters and join as a string
      bin = bin.split(' ')
      let converted = bin.map(elem => String.fromCharCode(parseInt(elem, 2))).join("")
    
    //compare to password
      if(passArr.includes(converted)){
        return converted
      }else{
        return false
      }
  }

  ////////////////////////////////////////////

  // In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

  // More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)
  
  // Example: (input --> output)
  
  // "ATTGC" --> "TAACG"
  // "GTAT" --> "CATA"
  // dnaStrand []        `shouldBe` []
  // dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
  // dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
  // dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]




  function DNAStrand(dna){
    //your code here
    dna = dna.toString().split('')
    newDNA = dna.map(item =>{
      if(item === "A"){
        return "T"
      }else if(item === "T"){
        return "A"
      }else if(item === "G"){
        return "C"
      }else if(item === "C"){
        return "G"
      }
    })
   return newDNA.join('')
  }




  /////////////////////////////////////


  // Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
  let newArr = []
  num = num.toString().split("")
  num.forEach(n => {
    newArr.push(n**2)
  })
  return parseInt(newArr.join(''))
}


/////////////////////////////////////////


// Complete the solution so that it reverses the string passed into it.

function solution(str){
  return str.split('').reverse().join('')
}



//////////////////////////////////


// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice


function duplicateCount(text){
  text = text.toLowerCase().split('').sort()
  let newArr = []
  for(let i = 0; i < text.length; i++){
    if(text[i] === text[i+1]){
      if(!newArr.includes(text[i])){
        newArr.push(text[i])  
      } 
    }
  }
  return newArr.length 
}


////////////////////////

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.


function findUniq(arr) {
 arr = arr.find((num) => arr.indexOf(num) === arr.lastIndexOf(num))
  return arr
}


//////////////////////////////



// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 


function duplicateEncode(word){
  let newWord = word.toLowerCase().split('')
  let newArr =[]
  //if letter appears once, return (, if more than once )

  for(let i = 0; i< newWord.length; i++){
    if(newWord.indexOf(newWord[i]) === newWord.lastIndexOf(newWord[i])){
      newArr.push('(')  
    }else{
      newArr.push(')')
    }
  }
  return newArr.join('')
}



//////////////////////




let user = {}
user.name="John"
user.surname= "Smith"

user["name"] = "Pete"

delete user.name


//Checkfor emptiness

// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// let emptyObj = {
// }


// function isEmpty(obj) {
//     for (let key in obj) {
//         alert( false )
//     } 
//     alert(true)
// }

// isEmpty(emptyObj)


//Sum object properties

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }

//   function sumSalaries(salaries){
//       let sum = 0
//       for(let sal in salaries){
//         sum += salaries[sal]
//       }
//       alert(sum)
//   }

//   sumSalaries(salaries)

//-----------------------------------------------------

// Multiply numeric property values by 2 


// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);
  
function multiplyNumeric(obj){
    for(let nums in obj){
        if(Number(obj[nums])){
            (obj[nums]) *= 2
        }
    }
}

