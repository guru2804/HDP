var fname='';
async function getDashboardDetails(){
    let userId=localStorage.getItem('userid');
    if(userId==undefined){
      window.location.href="../../index.html"
    }
    let data={
        "id":userId
    }
    console.log(userId);
    let url="http://localhost:3000/dashboard"
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
    fname=(fetchedData.fname);
    console.log(fname);
    document.getElementById('userName').innerText=fname;
}
getDashboardDetails();

async function formSubmit(){
  event.preventDefault();
  try{
    let data={
      "id":localStorage.getItem('userid'),
      "age":document.getElementById('age').value,
      "sex":document.getElementById('sex').value,
      "cp":document.getElementById('cp').value,
      "trestbps":document.getElementById('trestbps').value,
      "chol":document.getElementById('chol').value,
      "fbs":document.getElementById('fbs').value,
      "restecg":document.getElementById('restecg').value,
      "thalach":document.getElementById('thalach').value,
      "exang":document.getElementById('exang').value,
      "oldpeak":document.getElementById('oldpeak').value,
      "slope":document.getElementById('slope').value,
      "ca":document.getElementById('ca').value,
      "thal":document.getElementById('thal').value
    }
    console.log(data);
    let url="http://localhost:3000/inputform"
    let fetcher=await fetch(url, {
        method: 'PUT', 
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
      let fetcherData=await fetcher.json();
      console.log(fetcherData);
      localStorage.setItem('result',fetcherData.result);
      alert("Please Check Result Page Now");
  }
  catch(err){
    console.log(err);
  }
}
