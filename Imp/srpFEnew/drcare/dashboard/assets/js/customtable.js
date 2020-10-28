
async function getElements(){
    try{
let data={
    "id":localStorage.getItem('userid')
}
url="http://localhost:3000/tableelements";
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
  let fetcherData=await fetcher.json();
  console.log(fetcherData);
  let tBody=document.getElementById('tableBody');
  for(i in fetcherData){
      tBody.innerHTML+=`<tr><th>${i}</th><td>${fetcherData[i]}</td></tr>`
  }
    }
    catch(err){
         console.log(err);
    }
}
getElements();