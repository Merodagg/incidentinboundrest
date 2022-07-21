var caller=document.getElementById=("caller").value;
var shortdescription=document.getElementById=("shortdescription").value;
var description=document.getElementById=("description").value;
function onread(){
  var requestBody = ""; 

var client=new XMLHttpRequest();
client.open("get","https://dev70945.service-now.com/api/now/table/incident/https://dev70945.service-now.com/nav_to.do?uri=incident.do?sys_id=${sys_id}");

client.setRequestHeader('Accept','application/json');
client.setRequestHeader('Content-Type','application/json');

//Eg. UserName="admin", Password="admin" for this code sample.
client.setRequestHeader('Authorization', 'Basic '+btoa('admin'+':'+'kDZfVryH=4$5'));

client.onreadystatechange = function() { 
	if(this.readyState == this.DONE) {
		document.getElementById("response").innerHTML=this.status + this.response; 
	}
}; 
client.send(requestBody);
}
function ondelete(){
  var requestBody = ""; 

  var client=new XMLHttpRequest();
  client.open("delete","https://dev70945.service-now.com/api/now/table/incident/https://dev70945.service-now.com/nav_to.do?uri=incident.do?sys_id=${sys_id}");
  
  client.setRequestHeader('Accept','application/json');
  client.setRequestHeader('Content-Type','application/json');
  
  //Eg. UserName="admin", Password="admin" for this code sample.
  client.setRequestHeader('Authorization', 'Basic '+btoa('admin'+':'+'kDZfVryH=4$5'));
  
  client.onreadystatechange = function() { 
    if(this.readyState == this.DONE) {
      document.getElementById("response").innerHTML=this.status + this.response; 
    }
  }; 
  client.send(requestBody);

//}