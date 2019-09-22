var dayName = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday"];
var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var CC;
  var YY;
  var MM;
  var date;
  var name;   
function validate(){
  var day= document.getElementById("date").value;
  var month= document.getElementById("month").value;
  var year= document.getElementById("year").value;
  var gender= document.querySelector('input[name="gender"]:checked').value;
  alert ("Your Akan name is " +calculateDay());
  findGender();
}
  if(year==""){
    document.getElementById("month").innerHTML ="Enter valid year"
      return false;
  }
  if(month=="" || month<0 || month>12){
    document.getElementById("month").innerHTML ="Enter valid month"
      return false;
  }
  if(date=="" || date<0 || date>31){
    document.getElementById("date").innerHTML ="Provide a valid date"
      return false;
  }
  if(gn[0].checked== false && gn[1].checked==false){
    document.getElementById("gender").innerHTML ="Please choose gender"
      return false;
  }
  else{
      return true;
  }
}
function calculateDay(gender,month,year,date){
  var name="";
  year=document.getElementById("year").value;
  MM=document.getElementById("month").value;
  DD=document.getElementById("date").value;
  var date= new Date(year+ "/" +MM +"/" +DD);
  var day = date.calculateDay();
  if (gender==="male"){
      name=maleName[day]
  }else{
      name=femaleName[day]
  }
 return name;
}

