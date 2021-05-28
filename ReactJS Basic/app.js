

//Sol1:=>

// var arr = [0, 1, 2, 3, 4, 5, 6, 7];
// var evenArr = [];
// arr.forEach((currElem) => {

//     if (currElem % 2 == 0) {
//         evenArr.push(currElem);
//     }
// });
// console.log(evenArr);

//sol2:=>
// let arr = [0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0];

// let count = 1;
// let res = 1;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 1 && arr[i + 1] == 1) {
//         count = count + 1;
//         res = count;
//     }
//     else {
//         count = 1;
//     }
// }
// console.log(`maximum consecutive number of 1 is ${res}`);

//sol3:=>
// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 7, 8, 9];
// let res = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == arr[i + 1]) {
//         res = arr[i];
//     }
// }
// console.log(`the repeated element is ${res}`);

//sol4:=>
// const callApi = async () => {
//     try {
//         const setHeader = {
//             headers: {
//                 Accept: "application/json"
//             }
//         }

//         const res = await fetch("https://my-json-server.typicode.com/typicode/demo/posts", setHeader);
//         const data = await res.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// callApi();

//sol5:=>
// var obj = [
//     {
//         id: 4,
//         name: "abc"
//     },

//     {
//         id: 10,
//         name: "ab2"
//     },

//     {
//         id: 5,
//         name: "abc3"
//     },
//     {
//         id: 6,
//         name: "abc5"
//     }
// ];

// obj.sort((a, b) => {
//     return a.id - b.id;
// })


// console.log(obj);