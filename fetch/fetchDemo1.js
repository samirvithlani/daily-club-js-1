const getUserData = async () => {


    const response = await fetch("https://node5.onrender.com/user/user",{method: 'GET'})
    console.log(response)
    const users = await response.json()
    console.log(users)
    console.log(users.message)
    console.log(users.data)
    // for(let i=0;i<users.data.length;i++){
    //     console.log(users.data[i].name)
    // }


}
getUserData()