// let cars=["Audi","BMW","Merc","Maruti","Honda","Tesla","Mahindra"]

// const[car1,car2,...otherCars]=cars;
// console.log(car1)
// console.log(car2)
// console.log(otherCars)
// console.log(cars)
// let fruits=["Apple","Mango","Banana"]  // "Apple"     "Mango"     "Banana"
// let veg=["Brinjal","Potato","Tomato"] 

// const foodgrains=[...fruits,...veg]
// console.log(foodgrains)


// let fruits4=[...fruits,"Papaya","Chicku"]
// console.log(fruits4)

let player1={
    jno:18,         //number as a value
    pname:'Virat',  //string as a value
    mp:100,         //number as a value
    rs:10000        //number as a value
}

let player3={
    jno:18,         //number as a value
    pname:'Virat',  //string as a value
    mp:100,         //number as a value
    rs:10000        //number as a value
}
const {jno,pname,rs}=player3;
console.log(jno)
console.log(pname)
console.log(rs)

console.log("---");
const rno=18;
const name="Alice"
const per = 78.5

const student={rno,name,per} //{rno:18, name:'Alice', per:78.5}
console.log(student)

console.log("---");
const numbers1=[1,2,3,4,5]
let doubledArray=[]
console.log(numbers1)
for(let num of numbers1)
{
    const double=num*num
    doubledArray.push(double)
}

console.log(doubledArray);


let cars=["Audi","BMW","Merc","Maruti","Honda","Tesla","Mahindra"]  //input : size 7
        //[ 4,    3,     4,     6,       5,      5,      8]


const carLemgths= cars.map(
            (car)=>{
                    return car.length
            }
        )

console.log(carLemgths)