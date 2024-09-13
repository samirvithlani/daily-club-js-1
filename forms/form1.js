const submitHandler = (event) => {

    event.preventDefault(); //prevent the default form submit action
    //console.log("Form Submitted");

    const name = document.getElementById("name").value;
    console.log("name = ",name);
    const email = document.getElementById("email").value;
    console.log("email = ",email);



}