console.log("External JS invoked");
let resultString=localStorage.getItem('result');
console.log(resultString[1]);
let finalResult=Number(resultString[1]);
let probability=(`${resultString[5]}${resultString[6]}${resultString[7]}${resultString[8]}${resultString[9]}`);
console.log(finalResult);
console.log(probability);
if(finalResult==1){
  let dangerResultDOM=document.getElementById('resultDOM');
  dangerResultDOM.innerHTML=`<h5>
  <small>Check Your result here</small>
</h5>                                    <div class="alert alert-danger" id="dangerResultDom">
<button type="button" aria-hidden="true" class="close" data-dismiss="alert">
    <i class="nc-icon nc-simple-remove"></i>
</button>
<span id="dangerNotif">
    <b> Danger - </b> You are ${probability}% prone to heart Disease</span>
</div>`;
}
else{
 let successResultDOM=document.getElementById('resultDOM');
 successResultDOM.innerHTML=`<h5>
 <small>Check Your result here</small>
</h5>
<div class="alert alert-success" id="successResultDOM">
 <button type="button" aria-hidden="true" class="close" data-dismiss="alert">
     <i class="nc-icon nc-simple-remove"></i>
 </button>
 <span id="successNotif"><b> Success - </b> You are ${probability}% not prone to heart disease!!</span>
</div>`;
}