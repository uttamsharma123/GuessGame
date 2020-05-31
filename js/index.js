var anyOne="";
/*
$(".selectImg").click(function(){
     anyOne=$(this).attr("id");
    console.log(anyOne);
   $("#"+anyOne).
})*/

/*

$(".selectButton").click(function() {
    
   
 $("#click1").attr("src","images/fruit2.png")
    
})
////////////////////////////////////////////

function shuffle(o){
   for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
   return o;
};

var random = shuffle(randomImg);

console.log(random[1])



//console.log($("#bigImage").attr("scr"))
$(".selectImg").click(function () {
   anyOne=$(this).attr("id");
   //console.log(anyOne);
   
})

j=0;
var a=Math.random()*2;
var rNumber=Math.floor(a+1);
window.setTimeout(function () {
  

$("#bigImage").attr("src","Images/fruit"+randomImg[j]+".png");
console.log(random[j]);
j++;

},2000)

//console.log(rNumber);

$(".selectButton").click(function(){
   
   $("#click1").attr("src","images/fruit1.png")
   
    i++;  
   
});
*/

function shuffle(o){
   for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
   return o;
};

 

var b=[2,3,4,5,6,7]
var randomImg=shuffle(b);
var i=0;
var getting=0;
var int=window.setInterval(function() {
    getting=randomImg[i];
   $("#bigImage").attr("src","images/fruit"+randomImg[i]+".png");
  console.log(randomImg[i])
   i++;
   console.log("hii"+getting)
   
   var a=[getting,getting+1]
   var are=shuffle(a)


   $(".selectImg").click(function() {
      var btn=$(this).attr("id");
      
      if(btn=="click1")
      {
      $("#"+btn).attr("src","images/fruit"+are[0]+".png");
      if(are[0]==getting)
      {
           $(".correct-icon").attr("src","images/correct1.png");
           window.setTimeout(function(){
            $(".selectImg").attr("src","images/surprise.png")
            $("correct-icon").attr("src","")
           },2000)
      }
      else{
         $(".correct-icon").attr("src","data:image/png;base64,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")
         window.setTimeout(function(){
            $(".selectImg").attr("src","images/surprise.png")
            $("correct-icon").attr("src","")
      
           },2000)


      }
      }
      if(btn=="click2")
      {
      $("#"+btn).attr("src","images/fruit"+are[1]+".png");
       
      if(are[1]==getting)
      {
           $(".correct-icon").attr("src","images/correct1.png");
           window.setTimeout(function(){
            $(".selectImg").attr("src","images/surprise.png")
            $("correct-icon").attr("src","")
           },2000)
      }
      else{
         $(".correct-icon").attr("src","data:image/png;base64,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")
         window.setTimeout(function(){
            $(".selectImg").attr("src","images/surprise.png")
            $("correct-icon").attr("src","")
      
           },2000)
     
      }
      }
   })

   //below is using for clear interval when It will reach at the end of the array
   if(i==6)
   {
      
      window.clearInterval(int)
   }
},5000)




