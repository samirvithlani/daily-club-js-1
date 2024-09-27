
var users = [
    {
        id:1,
        name: 'John Doe',
        age: 25,
        status: 'active'
    },
    {
        id:2,
        name: 'Ram',
        age: 30,
        status: 'inactive'
    },
    {
        id:3,
        name: 'Shyam',
        age: 35,
        status: 'active'
    }
]


const addUser=()=>{

//    alert('Add User button clicked')
    const userObj ={
        id:Math.floor(Math.random()*1000),
        name: 'Kiran',
        age: 40,
        status: 'active'
    }
    users.push(userObj)

    addUserToTable(userObj)

}


const addUserToTable = (user) => {
    const tableBody = document.getElementById('table-body');
    
        const tr = document.createElement('tr')
        const idTd = document.createElement('td')//<td></td>
        idTd.innerHTML = user.id
        const nameTd = document.createElement('td')//<td></td>
        nameTd.innerHTML = user.name
        const ageTD = document.createElement('td')
        ageTD.innerHTML = user.age
        const statusTD = document.createElement('td')
        statusTD.innerHTML = user.status

        const actionTD = document.createElement('td')//<td></td>

        const infoButton = document.createElement('button')//<button></button>
        infoButton.innerHTML = 'Info'
        infoButton.className = 'btn btn-info'

        infoButton.addEventListener('click',()=>{
            alert("button clicked " + user.id)
        })


        actionTD.appendChild(infoButton) //<td><button>Info</button></td>


        tr.appendChild(idTd)
        tr.appendChild(nameTd)
        tr.appendChild(ageTD)
        tr.appendChild(statusTD)
        tr.appendChild(actionTD)
        
        tableBody.appendChild(tr)
}
    



document.addEventListener('DOMContentLoaded', function() {

    console.log("DOM fully loaded and parsed");
    users.forEach((user)=>{
        addUserToTable(user)
    })
   
})