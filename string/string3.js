var email = "  raj@gmail.com   "
console.log(email.length)

email  = email.trim()
//email = email.trimEnd()
//email = email.trimStart()
console.log(email.length)
console.log(email)



//boolean

//var x = email.includes("@")
var x = email.includes("@",3)
console.log(x)

//var x = email.startsWith("raj")
var x = email.startsWith("r",2)
console.log(x)
var x = email.endsWith("com")
console.log(x)

