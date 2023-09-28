//Print odd numbers in an array

var odd = ( arr) => {
    for(var i =0;i<arr.length;i++){
        if (arr[i]%2!=0){
            console.log(arr[i]);
        }
    }
}
console.log(odd(2,3));
//--------------------------------------------------------------------------------------
//Convert all the strings to title caps in a string array

var caps =  (str)=> {
    var words = str.split(' ');
    for (var i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    return words.join(' ');
  }
  console.log(caps('all the best'));
//--------------------------------------------------------------------------------------
 // Sum of all numbers in an array

  var add = (arr) => {
    var sum =0;
   for(var i =0;i<arr.length;i++){
      sum=sum+arr[i];
       
   }
   return sum;
}
console.log(add(2,3,4,5));
//------------------------------------------------------------------------------------
//Return all the prime numbers in an array
var prime = (numArray) => {
                       
    numArray = numArray.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) return false;
    }
    return true;
});
console.log(numArray);
}
console.log(prime(3, 8 ,4 ,5));
//-----------------------------------------------------------------------------------------
//Return all the palindromes in an array

var palindrome =  (arr, n)=>
{
    for (let i = 0; i < n; i++)
    {
        let ans = isPalindrome(arr[i]);
        if (ans == false)
            return false;
    }
    return true;
}
console.log(palindrome(121,3));