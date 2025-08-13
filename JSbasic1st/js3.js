const arr = [1,2,3,4,5]
const arr2 = arr.filter(num=>num%2==0)
console.log(arr2)

const oddNumber=arr.find(
    (num)=>{
          return num%2==1
    }
)

console.log(oddNumber)