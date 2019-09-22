var dayName = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday"];
var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var CC;
  var YY;
  var MM;
  var date;
  var name;
  function validate(){
     alert ("Your Akan name is " +calculateDay());
      findGender();
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