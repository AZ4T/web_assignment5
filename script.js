// exercise 1
// let a = +prompt("Enter first number: ");
// let b = +prompt("Enter second number: ");
// let c = +prompt("Enter third number: ");
// let largest = 0;
// let smallest = 100;

// if(a > largest){
//     largest = a;
// }
// if(b > largest){
//     largest = b;
// }
// if(c > largest){
//     largest = c;
// }
// if(a < smallest){
//     smallest = a;
// }
// if(b < smallest){
//     smallest = b;
// }
// if(c < smallest){
//     smallest = c;
// }

// alert(`The nearest number to 100 is ${largest}, the farthest ${smallest}`)




// exercise 2
// let s = prompt("enter string:");
// let str = s.split(" ");
// let str_sorted = [];

// for(let i = 0; i < str.length; i++){
//     let temp = str[i].split("").sort();

//     str_sorted.push(temp.join(""));
// }

// alert(str_sorted.join(" "));




// exercise 3
// let str = prompt("enter string:");
// str = str.split("");
// let repeatedChar = "";

// for(let i = 0; i < str.length; i++){
//     let count = 0;
//     for(let j = 0; j < str.length; j++){
//         if(str[i] == str[j]){
//             count++;
//         }
//     }
//     if (count === 1) {
//         alert(`non-repeating char is: ${str[i]}`);
//     }
// }





// exercise 4
// let s = prompt("enter string:");
// let str = "";

// for(let i = 0; i < s.length; i++) {
//     str += String.fromCharCode(s.charCodeAt(i) + 1);
// }

// alert(str);




//exercise 5
// let a = prompt("enter string:");
// a = a.split(" ");

// let longest = a[0].length > a[1].length ? a[0] : a[1];
// longest = longest.length > a[2].length ? longest : a[2];

// let shortest = a[0].length < a[1].length ? a[0] : a[1];
// shorteset = shortest.length < a[2].length ? shortest : a[2];

// alert(`The longest is: ${longest}, the shortest is ${shortest}`);




//exercise 6
let p = document.querySelector("p");
let str = p.textContent.split(" ");
let newStr = "";

for(let word of str){
    if (word.length > 7) {
        newStr += `<span style="background-color: blue;">${word}</span> `;
    } else if (word.length < 3) {
        newStr += `<span style="font-weight: bold;">${word}</span> `;
    } else {
        newStr += `${word} `;
    }
}
p.innerHTML = newStr.trim();
//12

