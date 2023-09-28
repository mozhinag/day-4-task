//Print odd numbers in an array

(function(array){
    for(var i = 0 ; i< array.length ; i++){
               if(array[i]%2!=0){
                  console.log(array[i])
               } 
          }
    })([1,2,3,4]);
   // ----------------------------------------------------------
   //Convert all the strings to title caps in a string array
   (function(arr){
    var words=arr.split('');
    for(var i = 0; i < words.length; i++){
        words[i] =words[i].charAt(0).toUpperCase()+ words[i].slice(1).toLowerCase();
        
    }
    return words.join('');
    })('all the best');
  //-------------------------------------------------------------------
//Sum of all numbers in an array
(function(arr) {
    var sum = 0;
    for(var i = 0;i < arr.length ;i++) {
        sum =sum + arr[i];
        console.log(sum);
    }
    return sum;
})([2,3,4,5]);
 //-------------------------------------------------------------------------
 //Return all the prime numbers in an array
 (function(numArray){
       numArray = numArray.filter((number) => {
         for (var i = 2; i <= Math.sqrt(number); i++) {
           if (number % i === 0) return false;
         }
         return true;
       });
       console.log(numArray);
   })([1,2,3,4])
//----------------------------------------------------------------------------
//Return all the palindromes in an array
(  function (arr, n) {
    for (let i = 0; i < n; i++)
    {
        let ans = isPalindrome(arr[i]);
        if (ans == false)
            return false;
    }
    return true;
})([1,2,3] , 3)
//----------------------------------------------------------------------------------
////Return median of two sorted arrays of the same size.
( function(){
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
})();
//------------------------------------------------------------------------------
//Remove duplicates from an array

(function(){
  var removeDuplicates = function (arr) {
    return arr.filter((item,
    index) => arr.indexOf(item) === index);
    }
    var arr = [1,2,3,2,1,4];
    var a = arr;
    console.log(removeDuplicates(a));
  })();
  //------------------------------------------------------------------------------
  //Rotate an array by k times
  (  function(nums) {
    var k = 5;
      for (let i = 0; i <k; i++) {
          nums.unshift(nums.pop());
         console.log(nums);
           }
            return nums;
    }) ([3,4,6,2,]);