const diver= document.querySelectorAll(".diversion")
Array.from(diver).forEach((dive)=>
{
    dive.style.background='yellow';
    dive.style.border='1px solid red'
    return dive;
})