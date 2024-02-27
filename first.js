// 1: print 20 num
// function printNo (){
//     for(let i =0; i<20;i++)
//     console.log(i)
// }
// printNo();
// 2: write event no in arrray

// var arr = [13,23,12,45,22,48,66,100];
// function printNo(arr){
//     for (var i = 0; i<arr.length; i++){
//         if(arr[i] %2==0)
//         console.log(arr[i]);
// }

// }
// printNo(arr);
// 3:Write a JS code to print a 2D array
// var arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// function flatArr(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr[0].length; j++) {

//         console.log(arr[j]);
//         console.log(arr[i]);
//         console.log(arr[i][j]);

//     }
//   }
// }
// flatArr(arr);
// 4. Write a JS code to delete all occurrence of element in given array

// function deleteElement(arr, ele) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == ele) {
//       arr.splice(i, 1);
//         i--;
//     }
//   }
//   return arr;
// }

// var arr = [23, 56, 4, 78, 5, 63, 45, 210, 56, 1, 1, 78];
// arr = deleteElement(arr, 56);
// arr = deleteElement(arr, 78);
// // arr = deleteElement(arr, 1);
// console.log(arr);
// 5. Write a JS code to demonstrate Async loop
// for (let i = 0; i<5;i++){
//     setTimeout(()=>console.log(i),1000);

// }
// 6. Write a JS code to find the power of a number using for loop
// function numMyPower(num, pow) {
//   var res = 1;
//   for (var i = 0; i < pow; i++) {
//    var res = res * num;
//   }
//   return res;
// }
// console.log(numMyPower(5, 3));

// // 7. Write a JS code to print a pattern using for loop
// function printPattern(range){
//   for(var i =1; i<=range;i++){
// var srt='';
// for(var j= 1; j<=i;j++){
//   str+=j+ " ";
// }
//   }
// }

// 2. Write a JavaScript program to find the maximum number in an array.
// function maxNo(arr) {
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// const numbers = [3, 7, 2, 10, 5];
// console.log(maxNo(numbers));

//  function maxNo(arr) {
//   return Math.min(...arr)

//  }
//  function maxNo(arr) {
//   return arr.reduce((max, current)=>(current > max ? current : max),arr[0]);
//  }

//  const numbers = [3, 7, 2, 10, 50];
// console.log(maxNo(numbers));
// 3. Write a JavaScript function to check if a given string is a palindrome 
// function isPalindrome(str){
//   const len = str.length;
//   for(let i = 0; i<len / 2; i++){
//     if(str[i] !== str[len -1 - i]){
// return false;
//     }
//   }
//   return true;
// }
// let str  = "radar"
// console.log(isPalindrome(str));
// function isPalindrome(str){
// const reverse = str.split("").reverse().join("")
// return str === reverse;
// }
// let str  = "radar"
// console.log(isPalindrome(str));
// 4. Write a JavaScript program to reverse a given string. 
function reverseString(str){
  let reverse = '';
  for(let i = 0; i < str.length; i++) {

    
  }

}
const str = "my name is aditya";
console.log(reverseString(str));
