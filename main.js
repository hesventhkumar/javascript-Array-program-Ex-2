//Array Creation
 console.log  ("Array Creation"); 

let arr=[1,2,3];
arr.length=3;
console.log(arr)

// Array Manipulation
console.log(" Array Manipulation ");

//PUSH()
console.log("PUSH");

let add =[1,2,3,4,5];
add.push(6);
console.log(add);

//POP ()
console.log("POP");

let remove =[1,2,3,4,5];
remove.pop(5);
console.log(remove);


// Array Searching

//IndexOf
console.log("Array Searching");
console.log("IndexOf");

let text="hesventh";
console.log(text.indexOf("t"));

// Array Finding Maximum and Minimum
console.log("Array Finding Maximum and Minimum");

//  Finding Maximum
console.log("Finding Maximum");
let num1=[1,2,3,8,5,6,7,9]
console.log(Math.max(...num1));

// Finding Minimum
console.log("Finding Minimum");
let num2=[4,2,3,8,1,6,7,9]
console.log(Math.min(...num2));



// Array Filtering
let fil=[1,3,4,5,6,7,2,8,9]
console.log("Array Filtering");
console.log(fil.filter((x) => x < 4));




// Array Mapping
let map=[1,3,4,2,5,6,8]
console.log("Array Mapping");
console.log(map.map((x) => x * 2));


// Array Sorting
console.log("Array Sorting");
let  sor = [7,4,3,6,8,9,1,2]
console.log(sor);
console.log(sor.sort());

// Array Reverse

console.log("Array Reverse");
let rev=[1,2,3,4,5,6,7,8,9]
console.log(rev);
console.log(rev.reverse());

// Array Join
console.log("Array Join");
let jin=[1,2,3,4,5,6]
console.log(jin);
console.log(jin.join("+"));


