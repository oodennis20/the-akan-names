var dayName = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday"];
var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var CC, YY, MM, d, name;
  var year;
  var month;
  var day;
  var gender;
  function compile(){
      validate();
     alert ("Your Akan name is " +calculateDay());
      findGender();
  }
function validate(){
  var day= document.forms["calc"]["date"].value;
  var month= document.forms["calc"]["month"].value;
  var year= document.forms["calc"]["year"].value;
  var gender= document.querySelector('input[name="gender"]:checked').value;
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
function calculateDay(gender){
  var name="";
  year=document.forms["calc"]["year"].value;
  MM=document.forms["calc"]["month"].value;
  DD=document.forms["calc"]["date"].value;
  var date= new Date(year+ "/" +MM +"/" +DD);
  var day = date.getDay();
  if (gender==="male"){
      name=maleName[day]
  }else{
      name=femaleName[day]
  }
 return name;
}