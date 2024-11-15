//student data
//marks
//print ceritifate


const searchStudentData = ()=>{

    console.log("********Sararching Student Data************");
    return new Promise((resolve,reject)=>{


            setTimeout(()=>{
                resolve({
                    name:"ram",
                    age:20,
                    class:10,
                })

            },2000)
    })


}

const fetchMarks = (studentName)=>{



    console.log("********Fetching Marks************");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                name:studentName,
                marks:90
            })
        },2000)
    })


}







const printCertificate = ()=>{
    console.log("********Welcome to Certificate Print************");

    var student = searchStudentData()
    student.then((data)=>{

        console.log("Student found",data)
        var marks = fetchMarks(data.name)
        marks.then((data)=>{
            console.log("Marks found",data)
            console.log("Certificate printed successfully")
        })
        marks.catch((data)=>{
            console.log("Marks not found")
        })
    })
    
    student.catch((data)=>{
        console.log("Student not found")
    })





}

printCertificate()