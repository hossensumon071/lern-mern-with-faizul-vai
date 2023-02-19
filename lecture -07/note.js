// Javascript Loops 
//   . Classical Loops
//        . for(let index = 0; index < bound; index++)
//        .while (condition)
//   . Break and Continue
//   . For In: loops through the properties
//   . For of: loops through the value of an iterable object 
//       . iterable: a sequence of elements
      

for (let index = 0; index < 10; index++) {
     console.log(index);
}

let x = 10;
while(x>10){
     console.log(x);
     x = x - 1;
     if(x%2==0){
          console.log('even', x)
          continue;
     }
     console.log('odd: ', x)
}

j = {name: 'mern', type: 'course', lang: 'javascript'}

for(let k in j) {
   console.log(k) // ekhane key gula dekabe 
}

for (let k in j) {
     console.log(j[k]); // it will work now r ekhane object er value gula dekabe
}
// ekhane se ke gula ke only iterate kore result dibe, for of value object er value gula ke iterate korte pare na 

arr = [10, 20, 30];
for(let name of arr) {
     console.log(name)
}
