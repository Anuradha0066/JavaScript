let formSignUp = document.querySelector("#SignUp")
 formSignUp.addEventListener('submit',(e)=>{
    e.preventDefault()
    let userData={
        name:formSignUp[0].value,
        number:formSignUp[1].value,
        password:formSignUp[2].value
    }
    localStorage.setItem('userData',JSON.stringify(userData))
 console.log(userData);
 
})

 let FormLogin=document.querySelector("#Login")
 FormLogin.addEventListener('submit',()=>{
    let number=FormLogin[0].value
    let password=FormLogin[1].value

    let data=JSON.parse(localStorage.getItem("userData"))
    if(number==data.number && password==data.password){
        prompt('login sucessss')
    }
    prompt("Invalid")

})