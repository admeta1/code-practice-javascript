// 1.duplecate arr remove 
// const arr = [1,4,2,4,5,6,70,20,11,20,77];
// const newArr = arr.filter((ele, index, arr)=>arr.indexOf(ele)!== index)

// console.log(newArr);

// using set 
// const arr = [1,4,2,4,5,6,70,20,11,20,77];
// const newArr = [...new Set(arr)];
// console.log(newArr);

// using for loop 

// const arr = [1,4,2,4,5,6,70,20,11,20,77];
// const newArr = []

//   for (let i = 0; i < arr.length; i++){
//     if (newArr.indexOf(arr[i]) === -1) {
//       newArr.push(i)

//     }
//   }
//   console.log(newArr);
// 2 find maxx  no of the arr

// const arr = [1,4,2,4,5,6,70,20,11,20,77,0,-9];
//  const maxFunction = (arr)=>{
// return arr.reduce(function (pre,curr){
//   return pre>curr?pre:curr

//   // return pre<curr?pre:curr
// }) 
//  }
//  console.log(maxFunction(arr));

// using maxx method 

// const arr = [1,4,2,4,5,6,70,20,11,20,77,0,-9,90];
//  const maxFunction = Math.max(...arr)

//  console.log(maxFunction);
// using for loop 

// const arr = [1,4,2,4,5,6,70,20,11,20,77,0,-9,990];
// let newArray = [];

// for(let i = 0; i< arr.length; i++){
//   if (arr[i] > newArray){
//     newArray = arr[i];

//   }

// }
// console.log(newArray);

// 3 find secons largest no in givent arr 

// const arr = [1,4,2,4,5,6,70,20,11,20,77,0,-9,990];
//  let largestValue = (arr)=>{
//   firstLargest = Math.max(...arr);
//   index = arr.indexOf(firstLargest);
//   arr.splice(index,1)
//   secondLargest = Math.max(...arr);
//   return (secondLargest)
//  }

//  console.log(largestValue(arr));
// 4 fins and filter method
// const empArr = [{name: "king", age: 20, },
// {name: "ram", age: 23},
// {name: "shyam", age: 90}];
// const filteredItem = empArr.filter((item)=>{
//   return item.age > 10
// })
// console.log(filteredItem)

// 5 find messing no ..
// const arr = [0,11,1,3,4,5,6,8]
// const missingArr = [];
// const missingValue = (arr)=>{
//   const minValue = Math.min(...arr)
//   const maxxValue = Math.max(...arr)
//   for (let i=minValue; i<maxxValue; i++){
//     if(arr.indexOf(i)<0){
//       missingArr.push(i)
//     }

//   }
//   return (missingArr)

// }
// console.log(missingValue(arr))
// 6 find even and odd no 
// const arr = [0,11,1,3,4,5,6,8]
// const oddNo = arr.filter((item)=>{
// return item %2===0;
// })
// console.log(`even no`,oddNo)


// 7 add the array of element 
// const arr = [0,11,1,3,4,5,6,8]
// const sumOfNumbers = (arr)=>{
//   return arr.reduce((pre, cur)=>{
//     return  pre + cur
//   })
// }
// console.log(sumOfNumbers(arr))

// using for loop... 
// const arr = [0,11,1,3,4,5,6,8]
// let sum = 0;
// const sumOfNumbers = (arr)=>{
//   for (let i=0; i<arr.length; i++){
// sum += arr[i];

//   }
//   return sum;
// }
// console.log(sumOfNumbers(arr))
// reverse string 
// const str = "hhhhjhffg ghg"
// const newStr = str.split("").reverse().join("")
// console.log(newStr)
// // const revStr = (str)=>{
// //   var strToArr = str.split("")
// //   var arrayReverse=strToArr.reverse();
// //   var strReverse = arrayReverse.join("")
  

// //   return strReverse
// // }
// console.log(revStr("hhjh v"))
// find palnidrom in javascript 
// const str = "rarar"
// const palendrom = ()=>{
//   const len = str.length;
//   for(let i=0; i<len/2; i++){

    
//     if(str[i] !== str[len -1 -i]){
//       return false;
//     }
//   }
//   return true;
// }
// console.log(palendrom(str));

// two array is equel or not 
var arr1 =[1,2,3,4,5,6,7];
var arr2 = [1,2,3,4,5,7,6,0];
const isArrSame = arr1.length == arr2.length && 
arr1.every((curEle)=>{
  if(arr2.indexOf(curEle) >-1){
    return (curEle =[arr2.indexOf(curEle)])
  }
})
console.log(isArrSame)





    
  










