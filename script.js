const scores = [
    {
      marks: 32,
      name: "Yvette Merritt"
    },
    {
      marks: 57,
      name: "Lillian Ellis"
    },
    {
      marks: 22,
      name: "Mccall Carter"
    },
    {
      marks: 21,
      name: "Pate Collier"
    },
    {
      marks: 91,
      name: "Debra Beard"
    },
    {
      marks: 75,
      name: "Nettie Hancock"
    },
    {
      marks: 20,
      name: "Hatfield Hodge"
    }
  ];

    
  // Only use
  // map, reduce, filter & destructuring


  // [32, 57, 22]
  // Task 1
  // Print the name list - As an array
  // Expected Output
  // ["Yvette Merritt", "Lillian Ellis", "Mccall Carter", "Pate Collier" ,
  //  "Debra Beard", "Nettie Hancock",  "Hatfield Hodge"]


  let arr1 = scores.map(ele=>ele.name);
  console.log(arr1)


  
  // Task 2
  // >=40 pass.. find those student that passed (Use array method)
  // Expected Output
  // [{
  //     marks: 57,
  //     name: "Lillian Ellis"
  //   },
  //     {
  //     marks: 91,
  //     name: "Debra Beard"
  //   },
  //   {
  //     marks: 75,
  //     name: "Nettie Hancock"
  //   }]
  let arr2 = scores.filter((ele)=>ele.marks>=40)
  console.log(arr2)


  // Task 3
  //  Find all the names who failed the exams (Array methods)
  // Expected Output
  //   ["Yvette Merritt",
  //   "Mccall Carter",
  //   "Pate Collier",
  //   "Hatfield Hodge"
  // ];
let arr3 = scores.filter((ele)=> ele.marks<40).map((x)=>x.name)
console.log(arr3)



  // Task 4
  // Find the Average marks
  let sum = scores.reduce((accum,cur)=>{
    accum+=cur.marks;
    return accum;
},0)
let avg = (sum/scores.length)
console.log(avg)





// Task 5
  // Find the topper's name
  // Expected Output
  // "Debra Beard"
  let topper = scores.reduce((max,cur)=>{
    if(cur.marks>max.marks){
        max=cur;
    }
    return max;
})
console.log(topper.name)






  // Task 6 - use es6
  // Build -  intersection, uniq, without, groupBy
  // https://lodash.com/docs/4.17.15#groupBy

  //INTERSECTION
  //FILTER
  function intersection(arr1,arr2){
 let op =  arr1.filter((ele)=> arr2.indexOf(ele)!=-1);
 return op;
  }
console.log(intersection([1,2],[1,2,3])) //op : 1 2

//UNIQ
//SET
function uniq(arr){
  let uniq = new Set(arr); //Array to Set
  return Array.from(uniq); //Set to Array
}
console.log(uniq([1,2,3,4,8,2,2,1,1,8,5,4])) // 1 2 3 4 8 5


//WITHOUT
//FILTER with REST PARAMETER
function without(arr,...ele){

  let op = arr.filter((e)=>ele.indexOf(e)==-1);
  return op;
}
console.log(without([2,1,2,3],1,2)); // 3


//GROUPBY
function length(str){
    return str.length;
}
function groupBy(arr,func){
    let obj={};
  
    arr.map((ele)=>{
        if(obj[func(ele)]===undefined){
            obj[func(ele)]=[ele]
        }else{
            obj[func(ele)].push(ele)
        }
    })
   
    return obj
}
console.log(groupBy(['one', 'two', 'three','four','five'], length))
// 3: (2) ['one', 'two']
// 4: (2) ['four', 'five']
// 5: ['three']
console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
// 4: [4.2]
// 6: (2) [6.1, 6.3]