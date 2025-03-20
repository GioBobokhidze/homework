      // 1) დავითვალოთ რამდენი ხმოვანია სტრინგში
      function counting_vowels(str) {
        let count = 0
        let vowels = 'aeiou'
    
        function helper(str) {
            if(str.length === 0) return count
    
            let check_char = str[0]
            let left_out = str.slice(1)
    
            if(vowels.includes(check_char)) count++
            return helper(left_out)
        }
    
        return helper(str)
    }
    
    console.log(counting_vowels('something')) 
    
 // 2) ლუწი ციფრების ჯამის პოვნა რიცხვში
 function sumEvenDigits(num) {
    if (num === 0) return 0
  
    let digit = num % 10;

    if (digit % 2 === 0) return digit + sumEvenDigits(Math.floor(num / 10));
    else return sumEvenDigits(Math.floor(num / 10)) ;
    
  }
  
  console.log(sumEvenDigits(325614))  

   // 3) მასივის მაქსიმუმი ელემენტის პოვნა
   function findMax(arr, i = 0, max = -Infinity) {
    if (i === arr.length) return max
    
    if (arr[i] > max) max = arr[i];
    return findMax(arr, i + 1, max);
}

console.log(findMax([3, 2, 7, 10, 1]));  


// 4) არის თუ არა სტრინგში მოცემული ფრჩხილები სწორად 
function check_bracket(str) {
    let correct = '()' 
    let left = '('
    let right = ')'

    if(str[0] == left && str[1] == right) return check_bracket(str.slice(2))
        else if(str[0] == left && str[str.length-1] == right) return check_bracket(str.slice(1,-1))
    if(str.length < 1) return true
    else return false
   
}

console.log(check_bracket('()(())'))