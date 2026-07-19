// Welcome Button
document.getElementById("startBtn").onclick = function(){

document.getElementById("welcome").innerHTML =
"🎉 Welcome to EduLearn! Start exploring courses.";

};

// Course Enrollment
function enroll(course){

alert("Successfully Enrolled in " + course + " Course!");

}

// Registration Form
document.getElementById("registerForm").addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let course=document.getElementById("course").value;

if(name=="" || email=="" || course=="Select Course"){

alert("Please fill all details.");

}
else{

document.getElementById("message").innerHTML=
"✅ Registration Successful! Welcome, "+name+".";

this.reset();

}

});

// Dark Mode
document.getElementById("themeBtn").onclick=function(){

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

this.innerHTML="Light Mode";

}
else{

this.innerHTML=" Dark Mode";

}

};