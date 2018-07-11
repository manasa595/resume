/*function getfile(file,callback){
  var xhr=new XMLHttpRequest();
   xhr.overrideMimeType("application/json");
   xhr.open("GET",file,true);
   xhr.onreadystatechange=function(){
     if(xhr.readyState === 4 && xhr.status == "200"){
       callback(xhr.responseText);
     }
   };
   xhr.send(null);
 }

   getfile("data.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
}*/

function loadJSON(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }else{
        reject(new Error('error'));
      }
    })
  })
}


var newFile=loadJSON("data.json");
newFile.then(data=>{
  console.log(data);
  career(data.career);
  education(data.education);
  skills(data.skills);
  achivements(data.achievements);
})

var childTwo=document.querySelector(".childtwo");

function career(careerObj){
  var careerHeading=document.createElement("h2");
  careerHeading.textContent="career Objective";
  childTwo.appendChild(careerHeading);
  var hr=document.createElement("hr");
  careerHeading.appendChild(hr);
  var careerP=document.createElement("p");
  careerP.textContent=careerObj.info;
  childTwo.appendChild(careerP);
}
function education(edu){
  var careerHeading=document.createElement("h2");
  careerHeading.textContent="Education Qualification";
  childTwo.appendChild(careerHeading);
  var hr=document.createElement("hr");
  careerHeading.appendChild(hr);

for(var i=0;i<edu.length;i++){
  eduH3=document.createElement("h3");
  eduH3.textContent=edu[i].degree;
  childTwo.appendChild(eduH3);
  var eduU1=document.createElement("Ul");
  var eduLi=document.createElement("li");
  eduLi.textContent=edu[i].institute;
  eduU1.appendChild(eduLi);
  childTwo.appendChild(eduU1);
}
}
function skills(skillinfo){
  var careerHeading=document.createElement("h2");
  careerHeading.textContent="Technical skills";
  childTwo.appendChild(careerHeading);
  var hr=document.createElement("hr");
  careerHeading.appendChild(hr);
var skillTable=document.createElement("table");
skillTable.border="1";
childTwo.appendChild(skillTable)
var tableData="";
for(var i=0;i<skillinfo.length;i++){
  tableData+="<tr><td>"+skillinfo[i].title+" </td><td>"+skillinfo[i].info+"</td></tr>";
}
skillTable.innerHTML=tableData;
}
function achivements(archi){
  var achivementsHeading=document.createElement("h2");
  achivementsHeading.textContent="achivements";
  childTwo.appendChild(achivementsHeading);
  var hr=document.createElement("hr");
  achivementsHeading.appendChild(hr);
for(var i=0;i<archi.length;i++){

  var archiU1=document.createElement("Ul");
  var archiLi=document.createElement("li");
  archiLi.textContent=archi[i].info;
  archiU1.appendChild(archiLi);
  childTwo.appendChild(archiU1);
// var archiU2=document.createElement("Ul");
// var archiLi1=document.createElement("li");
// archiLi1.textContent=archi[i].co-circular;
// archiU2.appendChild(archiLi2);
// childTwo.appendChild(archiU2);
// var archiU3=document.createElement("Ul");
// var archiLi2=document.createElement("li");
// archiLi2.textContent=edu[i].training;
// archiU3.appendChild(archiLi2);
// childTwo.appendChild(archiU3);
}
}
