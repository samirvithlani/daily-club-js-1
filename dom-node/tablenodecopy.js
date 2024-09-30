
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


const addUser=(event)=>{
//event.preventDefault()
//    alert('Add User button clicked')

//cosnt id =document.getElementById('id').value
//const name =document.getElementById('name').value
//const age =document.getElementById('age').value
//const status =document.getElementById('status').value

// const userObj = {
//     id:id,
//     name:name,
//     age:age,
//     status:status
// }

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

        const deleteButton = document.createElement('button')//<button></button>
        deleteButton.innerHTML = 'Delete'
        deleteButton.className = 'btn btn-danger'
        deleteButton.style.marginLeft = '10px'

        infoButton.addEventListener('click',()=>{
            alert("button clicked " + user.id)
        })

        deleteButton.addEventListener('click',()=>{
            
            
            tr.remove()

        })


        actionTD.appendChild(infoButton) //<td><button>Info</button></td>
        actionTD.appendChild(deleteButton) //<td><button>Info</button><button>Delete</button></td>


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