async function loginCheck(){
    event.preventDefault();
  let data={
      "email":document.getElementById('email').value,
      "password":document.getElementById('pass').value
  }
  url="http://localhost:3000/login";
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
        let fetchedData=await fetcher.json();
        if(fetchedData.status==1){
            let userID=(fetchedData.id);  
            localStorage.setItem('userid',userID);
            window.location.href="../../../dashboard/examples/dashboard.html"
        }
        else{
            alert("Password is incorrect!");
        }

}
