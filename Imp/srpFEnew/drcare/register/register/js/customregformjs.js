async function formValidate(){
    event.preventDefault();
    let p1=document.getElementById('p1').value;
    let p2=document.getElementById('p2').value;
    console.log(p1+" "+p2);
    if(p1!=p2){
        alert("Passwords Do not Match");
    }
    else{
        let data={
            "fname":document.getElementById('fname').value,
            "lname":document.getElementById('lname').value,
            "email":document.getElementById('email').value,
            "password":document.getElementById('p1').value,
            "dob":document.getElementById('bDay').value,
            "gender":document.getElementById('gender').value
        }
        url="http://localhost:3000/signup";
        let fetcher=await fetch(url, {
            method: 'POST', 
            mode: 'cors', 
            cache: 'no-cache', 
            credentials: 'same-origin', 
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer', 
            body: JSON.stringify(data) 
          });
          let fetchedData=fetcher.json();
        setTimeout(()=>{
            window.location.href="../../index.html"
        },1000)
        alert("Sign Up sucessful!");
    }
}

formValidate();