//Q1. make a string out of an array
const fruits = ['apple', 'banana', 'orange'];
const result = fruits.join(', ');
console.log(result);

//Q2. make an array out of a string
{
    const fruits = '🍎, 🍉, 🍍 ,🍒';
    const result = fruits.split(',');
    console.log(result);
}  

//Q3. make this array look lik this : [5,4,3,2,1]
{
    const array = [1,2,3,4,5]
    const result = array.reverse();
    console.log(result)
}
//Q4. make new array without the first two elements
{
    const array = [1,2,3,4,5];
    const result = array.slice(2,5);
    console.log(result);
    console.log(array);
}
