<!DOCTYPE html>
<html lang="en">
<head><title>To do list</title>

  <style>
    .completed{
        text-decoration: line-through;color:gray;
    }

  </style>
</head>
<body>
<h3>This is do do list</h3>
<input id="inputData" type="text">
<button id="btn" type="button" onclick="addTask()">AddTask</button>
<ul id="myList"></ul>

<Script>
  function addTask(){

    let input= document.getElementById("inputData")
    let text= input.value.trim();
    if( text === "") {alert("please enter task"); return;};
     

    let li= document.createElement("li");

     li.innerHTML= text;  //insert text to list
     
    //completeButton
    let completeButton=document.createElement("button");
    completeButton.innerHTML="done";
    completeButton.addEventListener("click", function(){
      li.classList.toggle("completed");
    });

     //delete button
    let deleteButton=document.createElement("button");
    deleteButton.innerHTML="Remove"; //naming button

    deleteButton.addEventListener("click",function(){
      li.remove();   
    });
    
    //append button to list li
     li.append(completeButton)
     li.append(deleteButton); //add to list
    document.getElementById("myList").append(li);

    input.value="";  //clear input
}

document.getElementById("inputData").addEventListener("keydown",function(event){
  if(event.key ==="Enter"){
  addTask()
}
});
</Script>


</body>
</html>
