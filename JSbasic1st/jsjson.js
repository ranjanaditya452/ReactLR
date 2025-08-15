import products from "./data/fakestoredata.js"

//chained code to get electronics' titles
const prod= products.filter(product=>
    {return product.category=='electronics'}
).map(product=>product.title)

//reduce function to find the total price of the products
const sum = products.reduce((acc,prod)=>
    acc+=prod.price,0)

//display total cost of all mens clothing
const prod1 = products.filter(product=>product.category ==="men's clothing")
.map(product=>product.price).reduce((accum,prod)=>accum+=prod,0);

//display all shirt products

const shirtproducts = products.filter(product => product.title.toLowerCase().includes("jacket"));
 
//fetch all categories
const allcategories = products.map(product=>product.category)
let set = new Set(allcategories);
let arrcat=Array.from(set)
let obj={};
for(let i=0;i<arrcat.length;i++)
{
  let ab= products.filter(prod=>prod.category===arrcat[i])
  obj[arrcat[i]]=ab;
}
console.log(obj)
// all electronic ratings
let count=0;
const elecratings = products.filter(prod => prod.category==='electronics').map(elecs=>{
  count++;
  return elecs.rating.rate;
}).reduce((acc,rats)=>acc+=rats,0)
console.log(elecratings/count)