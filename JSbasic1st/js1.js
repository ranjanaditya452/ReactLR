
// alert(asp);
// let greeter = (name,def)=>{
//     alert( `${name} is a ${def}`);
// }
// greeter(2,"asperg");

// var asp="d";
// alert(asp);

function test(value)
{
console.log(typeof value)
}


function greet(name)
{
console.log(`Welcome ${name}`)
}

test(greet);

function lunch(starter,maincourse,dessert)
{
    console.log(`I had ${starter} as a starter for lunch`)
    console.log(`I had ${maincourse} as a maincourse for lunch`)
    dessert();
}

function starbucks()
{
    console.log('hi')
}

lunch('veg crispy','Mutter Paneer', starbucks)