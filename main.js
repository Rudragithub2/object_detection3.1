function dogcat (){
  window.location = "dog_cat.html";
}
function bedroom (){
    window.location = "bedroom.html";
  }
  function drawingroom (){
    window.location = "TV.html";
  }
  function studytable (){
    window.location = "studytable.html";
  }
  status = "";
  img = "";
  object = "";
  function preload(){
      img = loadImage("dog_cat.jpg");
      img_bedroom = loadImage("bedroom.jpg")
      img_studytable = loadImage("studytable.jpg")
      img_tv = loadImage("tv.png")
  }
  function setup(){
    canvas=createCanvas(640,420)  ;
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    /*document.getElementById("status").innerHTML= "Status : Detecting objects";*/
  }
  function modelLoaded(){
    console.log("model is loaded");
    status = "true";
    objectDetector.detect(img,gotResult);
  }
  function gotResult(error,result){
       if (error){
         console.log(error);
       }
       console.log(result);
       objects = result;
  }
  function draw(){
      image(img,0,0,640,420);
   fill("#FF0000") ;
     text("Dog",140,80);
     noFill();
    stroke("#FF0000");
    rect(100,60,280,300);
    fill("#FF0000") ;
     text("Cat",340,150);
     noFill();
    stroke("#FF0000");
    rect(280,100,280,300);
     if(status != ""){
       for(var i=0 ; i<objects.length ; i++){
        /*document.getElementById("status").innerHTML="Status : Objects Detected";*/
        fill("#FF0000");
        percentage=floor(objects[i].confidence*100);
        text(objects[i].label+" " + percentage+ "%",objects[i].x + 15 , objects[i].y + 15);
        noFill();
        stroke("#FF0000");
        rect(objects[i].x , objects[i].y, objects[i].width , objects[i].height);
       }  
     }
     image(img_bedroom,0,0,640,420);
   fill("#FF0000") ;
     text("Bed",175,95);
     noFill();
    stroke("#FF0000");
    rect(180,110,280,250);
     fill("#FF0000") ;
     text("Plant",15,150);
     noFill();
    stroke("#FF0000");
    rect(15,170,180,170);
     if(status != ""){
       for(var i=0 ; i<objects.length ; i++){
        /*document.getElementById("status").innerHTML="Status : Objects Detected";*/
        fill("#FF0000");
        percentage=floor(objects[i].confidence*100);
        text(objects[i].label+" " + percentage+ "%",objects[i].x + 15 , objects[i].y + 15);
        noFill();
        stroke("#FF0000");
        rect(objects[i].x , objects[i].y, objects[i].width , objects[i].height);
       }  
     }
     image(img_studytable,0,0,640,420);
   fill("#FF0000") ;
     text("studytable",120,75);
     noFill();
    stroke("#FF0000");
    rect(120,80,420,300);
     fill("#FF0000") ;
     text("Lamp",5,5);
     noFill();
    stroke("#FF0000");
    rect(5,10,80,370);
    if(status != ""){
      for(var i=0 ; i<objects.length ; i++){
       /*document.getElementById("status").innerHTML="Status : Objects Detected";*/
       fill("#FF0000");
       percentage=floor(objects[i].confidence*100);
       text(objects[i].label+" " + percentage+ "%",objects[i].x + 15 , objects[i].y + 15);
       noFill();
       stroke("#FF0000");
       rect(objects[i].x , objects[i].y, objects[i].width , objects[i].height);
      }  
    }
    image(img_tv,0,0,640,420);
   fill("#FF0000") ;
     text("studytable",120,75);
     noFill();
    stroke("#FF0000");
    rect(10,50,610,400);
    if(status != ""){
      for(var i=0 ; i<objects.length ; i++){
       /*document.getElementById("status").innerHTML="Status : Objects Detected";*/
       fill("#FF0000");
       percentage=floor(objects[i].confidence*100);
       text(objects[i].label+" " + percentage+ "%",objects[i].x + 15 , objects[i].y + 15);
       noFill();
       stroke("#FF0000");
       rect(objects[i].x , objects[i].y, objects[i].width , objects[i].height);
      }  
    }
  }