//Print odd numbers in an array

var odd = function( arr) {
    for(var i =0;i<arr.length;i++){
        if (arr[i]%2!=0){
            console.log(arr[i]);
        }
    }
}
console.log(odd(2,3));
//--------------------------------------------------------------------------------------
//Convert all the strings to title caps in a string array

var caps = function (str) {
    var words = str.split(' ');
    for (var i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    return words.join(' ');
  }
  console.log(caps('all the best'));
//--------------------------------------------------------------------------------------
 // Sum of all numbers in an array

  var add = function(arr){
    var sum =0;
   for(var i =0;i<arr.length;i++){
      sum=sum+arr[i];
       
   }
   return sum;
}
console.log(add(2,3,4,5));
//------------------------------------------------------------------------------------
//Return all the prime numbers in an array
var prime =  function(numArray){
       numArray = numArray.filter((number) => {
         for (var i = 2; i <= Math.sqrt(number); i++) {
           if (number % i === 0) return false;
         }
         return true;
       });
       console.log(numArray);
   }
   console.log(prime(1,2,3,4,5));
//-----------------------------------------------------------------------------------------
//Return all the palindromes in an array

var palindrome = function (arr, n)
{
    for (let i = 0; i < n; i++)
    {
        let ans = isPalindrome(arr[i]);
        if (ans == false)
            return false;
    }
    return true;
}
console.log(palindrome(12,11,33,43));
//----------------------------------------------------------------------------------------------
//Return median of two sorted arrays of the same size.
var getmedian = function (ar1, ar2, n)
{
    var i = 0; 
    var j = 0; 
    var count;
    var m1 = -1, m2 = -1; 
    for (count = 0; count <= n; count++)
    {
         if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
      else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
        
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; 
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2; 
            m2 = ar2[j];
            j++;
        }
    }
      return (m1 + m2)/2;
}
var ar1 = [1, 12, 15, 26, 38];
var ar2 = [2, 13, 17, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2)
   console.log("Median is "+ getmedian(ar1, ar2, n1));
else
    console.log("Doesn't work for arrays of unequal size");

 
//-------------------------------------------------------------------------------------------
//Remove duplicates from an array

var removeDuplicates = function (arr) {
  return arr.filter((item,
  index) => arr.indexOf(item) === index);
  }
  var arr = [1,2,3,2,1,4];
  var a = arr;
  console.log(removeDuplicates(a));
  
 //-------------------------------------------------------------------------------------------------
 //Rotate an array by k times
 
 var rotateArray1 =  function(nums) {
  var k = 5;
    for (let i = 0; i <k; i++) {
        nums.unshift(nums.pop());
       
         }
          return nums;
  }
  console.log(rotateArray1([3,4,6,2,]));