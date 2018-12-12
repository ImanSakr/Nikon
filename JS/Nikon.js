var images=['../Images/introduction_image1.png','../Images/introduction_image1.png'];

setInterval(function(){
  var url=images[Math.floor(Math.random() * images.length)];
  document.body.style.backgroundImage = 'url('+url+')';  
},5000);