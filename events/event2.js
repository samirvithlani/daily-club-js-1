
var numbers = [1,2,3,4,5,6]

const getData = ()=>{
console.log("called...")
    //12.22
    //Math.floor(12.22) = 12
    //random number
    //var randomNo = Math.floor(Math.random()*numbers.length-1)
    var randomIndex = Math.floor(Math.random()*numbers.length)
    //console.log(randomIndex)

    var x = numbers[randomIndex]
    console.log(x)

    var p = document.getElementById("txt")
    p.innerHTML = x


}