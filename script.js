


// // function myFun(){
// //     console.log("hello world");
// // }
// // myFun();



// // class Greet{
// //     print(){
// //         console.log("good morning");
// //     }
// // }


// // const a = new Greet;
// // a.print();
// // console.log(typeof Greet);
// // console.log(typeof myFun);

// //  new Promise((resolve,reject) => {
// //      document.getElementById("button").addEventListener("click",()=>{
// //           resolve("resolved");
// //      })
   
// // }).then(console.log);

// // document.getElementById("button").addEventListener('click',()=>{
// //     Promise.resolve("resolved 2").then(console.log);
// // })


// // async function myFun(){
// //     setTimeout(()=>{
// //        return "fulfilled";
// //     },1000)
     
// // }

// // const a  = myFun();

// // console.log(a);
// // a.then(console.log);



// // async function myFun() {
// //     return new Promise((resolve) => {
// //         setTimeout(() => {
// //             resolve("fulfilled");
// //         }, 5000);
// //     });
// // }

// // const a = myFun();

// // console.log(a); 

// // a.then(console.log); 

// // const a = new Promise((resolve,reject)=>{
// //     setTimeout(()=>{
// //         resolve("resolved");
// //     },5000)
// // }).then(console.log);

// // console.log(a);

// // async function myFun() {

// //     return new Promise(res =>{
// //         setTimeout(()=>{
// //            res("resolved");
// //         },5000)
// //     } ).then(console.log);
// //     // throw new Error("rejected");

// //     // return "resolved";
// // }
// // console.log(myFun());


// // printAmount().lac(15).crore(1).thousand(25).print()    1,15,25,000

// function printAmount(){
//     let obj = {
//         total: 0,
        
//         lac(amount){
//             this.total += amount*100000;
//             return this;
//         },

//         crore(amount){
//             this.total += amount*10000000;
//             return this;
//         },

//         thousand(amount){
//             this.total += amount*1000;
//             return this;
//         },

//         print(){
//             console.log(this.total);
//             return;
//         }
//     }
//     return obj;
// }

// printAmount().lac(15).crore(1).thousand(25).print();


// let obj = {
//         total: 0,
        
//         lac(amount){
//             this.total += amount*100000;
//             return this;
//         },

//         crore(amount){
//             this.total += amount*10000000;
//             return this;
//         },

//         thousand(amount){
//             this.total += amount*1000;
//             return this;
//         },

//         print(){
//             console.log(this.total);
//             return;
//         }
//     }

//     obj.lac(15).crore(1).thousand(25).print();

let arr = [1,2,3,4,5,0,0,0,6,7,8,9,10];
let target = 15;
let left = 0;
let sum = 0;
result = [-1,-1];
maxLength = 0;

for(let right = 0; right < arr.length; right++){
    sum += arr[right];
    while(sum > target && left < right){
        sum -= arr[left];
        left++;
    }
    if(sum === target && (right-left+1) > maxLength){
         maxLength = right-left+1;
         result = [left+1,right+1];
    }
   
}
console.log(result)
