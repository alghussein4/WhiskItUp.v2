//What we offer and the price:
var meals={"Meat":10,"Chicken":7,"Salad":3,"Rice":3,"Juice":2,"Sweets":4,"Macaroni":3,"Appetizers":5}
const keys=Object.keys(meals);

//What user checked:
var checkedInput=document.getElementsByName("contant");
var selected=[];


//When Done! :
function  getItemTotal(){
var total=0;
for(let i=0;i<checkedInput.length;i++){
    if(checkedInput[i].checked){
    var keys = checkedInput[i].value;
    total += meals[keys];
    }
}
return total;
}


function getPeopleTotal(){
  //Number of ppl:
  var i=document.getElementById("numOfPortions").value;
  if(i=="none"){
    document.getElementById("selectError").innerHTML="Please select the number of people";
    return false;
  }
  else{
    document.getElementById("selectError").innerHTML="";
  var ppl = Number(i)*10;
  return ppl;
  }
}

function isBoxChecked(){
  var box=document.getElementsByName("contant");
  var isChecked=false;
  for(var i=0;i<box.length;i++){
    if(box[i].checked){
      isChecked=true;
    }
  }
  if(isChecked==true){
    document.getElementById("boxError").innerHTML="";
    return true;
  }
  else{
    document.getElementById("boxError").innerHTML="Please check at least one box";
    return false;
  }
}

function getMealsTotal(){
  var num=document.getElementById("weeklyMeals").value;
  if(num>21 || num<7){
    document.getElementById("mealsError").innerHTML="Please enter a number between 7 and 21";
    return false;
  }
  else{
    document.getElementById("mealsError").innerHTML="";
    return num*10;
  }
}

function isEmailValid(){
  var email=document.getElementById("emailAddress").value;

  if(email==""){
    document.getElementById("emailError").innerHTML="Please enter an email address";
    return false;
  }
  else if(!email.includes('@')){
    document.getElementById("emailError").innerHTML="Please enter a valid email address";
    return false;
  }

  var address=email.split('@');
  if(address[0].length>=1&&address[1].length>=1){
    document.getElementById("emailError").innerHTML="";
    return true;
  }
  else{
    document.getElementById("emailError").innerHTML="Please enter a valid email address";
    return false;
  }
}

function isDeliverySelected(){
  var delOpt=document.getElementsByName("delOption");
  var chosen=false;
  for(var i=0;i<delOpt.length;i++){
    if(delOpt[i].checked)
      chosen=true;
  }
  if(chosen==true){
    document.getElementById("deliveryError").innerHTML="";
    return true;
  }
  else{
    document.getElementById("deliveryError").innerHTML="Please select a delivery option";
    return false;
  }
}

//Show order info:
var j=1;
function show(){
  var msg=document.getElementById('Display2');
  //document.getElementsById('Display2').innerHTML="This is what you ordered";
  msg.value='';
  for(let i = 0; i < checkedInput.length; i++){
    if(checkedInput[i].checked){
      msg.value+=j+'-'+checkedInput[i].value+'\n';
      j++;
    }
  }
}
var msg=document.getElementById('Display2');
for (let i = 0; i < checkboxes.length; i++) {
  checkedInput[i].addEventListener('change', show);
}
show();



//Total:
function calculateTotal(){
  var validation=[];
  validation[0]=isBoxChecked();
  validation[1]=getPeopleTotal()
  validation[2]=getMealsTotal();
  validation[3]=isEmailValid();
  validation[4]=isDeliverySelected();
  var check=true;
  for(var i=0;i<validation.length;i++){
    if(validation[i]==false){
      check=false;
    }
  }
  if(check){
  var total=getItemTotal()+getPeopleTotal()+getMealsTotal();
  document.getElementById("Display").innerHTML="Total:  "+total+"$";
  }
}