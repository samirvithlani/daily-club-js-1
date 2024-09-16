var isError = false;

const submitHandler = (event) => {

    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    
    
    if(isEmpty(name)){
      //  console.log('Name is empty');
      isError = true;
    }
    if(isEmpty(email)){
    //    console.log('Email is empty');
        isError = true;
    }

    console.log("is error",isError)
    if(!isError){
        printData();
    }
    


}

const printData = ()=>{

    alert('Data Submitted');
}

const isEmpty = (value) => {

    if(value.trim() === ''){
        return true;
    }
    return false;

}

const nameHandler = (event) => {

    const name = document.getElementById('name').value;
    if(checkLength(3, 10, name)){
        console.log('Name is valid');
        isError = false;
    }
    else{
        console.log('Name is invalid');
        isError = true;
    }

}
const emailHandler = (event) => {

    const email = document.getElementById('email').value;
    if(checkLength(8, 100, email)){
        console.log('Email is valid');
        isError = false;
    }
    else{
        //console.log('Email is invalid');
        isError = true;
    }

}

const checkLength = (minLen,maxLen,param)=>{

    if(param.trim().length>=minLen && param.trim().length<=maxLen){
        return true
    }
    return false;
    
}