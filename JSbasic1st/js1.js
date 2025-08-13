
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


let player={
    jno:18,         //number as a value
    pname:'Virat',  //string as a value
    mp:100,         //number as a value
    rs:10000,        //number as a value
    'mom-name': 'Saroj',
    mom: 500,

    avg: function calculateAvg(a,b)  //function as a vlaue
         {
              console.log(a/b)
         }
                   
}
player="Apple"
console.log(player)
