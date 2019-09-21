var male =[
    "Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"
]
var female =[
    "Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"
]
function calculator(){
    var name=""
    var gender=document.forms["calc"]["gender"].value;
    var date=document.forms["calc"]["date"].value;
    var day=dateobject.getDay();
    var dateObject=new Date(date);
if (gender==="male"){
    name=male[day];
}
else if (gender==="female"){
    name=female[day]
}
document.getElementById("prompt").innerHTML=name;
     return name;
}
//function validation(){
    //var date = document.getElementById("date").value;
   // var month = document.getElementById("month").value;
   // var year = document.getElementById("year").valuecx;
    if(date=="" || month=="" || year=="") {

    document.getElementById("eresult").innerHTML = "All field required";
    return;
    } 
    else if(date<0 && date>31){
    return;
    }
    else if(month<0 && month>12){
        document.getElementById("month").innerHTML = "Month Must Be  ";
    return;
    }
    else if(year.length<4){
        document.getElementById("year").innerHTML = "Year Must Be 4 characters";
    return;
    }
        document.getElementById("submit").addEventListener = "Year Must Be 4 characters";
}