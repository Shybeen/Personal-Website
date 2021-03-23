


var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  function namevalidation(){
    var text=document.getElementById("name").value;
    var letters= /^[a-zA-Z\s]*$/;
  
    if(text==""){
      document.getElementById("namerequired").style.display="block";
      document.getElementById("namelenghth").style.display="none";
      document.getElementById("nameerror").style.display="none";
  
    }else if(!text.match(letters)){
      document.getElementById("namerequired").style.display="none";
      document.getElementById("namelenghth").style.display="none";
      document.getElementById("nameerror").style.display="block";
  
    }else if(text.length<4){
      document.getElementById("namerequired").style.display="none";
      document.getElementById("namelenghth").style.display="block";
      document.getElementById("nameerror").style.display="none"; 
    }else{
    document.getElementById("namerequired").style.display="none";
    document.getElementById("namelenghth").style.display="none";
    document.getElementById("nameerror").style.display="none";
    }
  }

  function emailvalidation(){
    var mail=document.getElementById("email").value;
    var mailid= /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  
    if(mail==""){
      document.getElementById("emailrequired").style.display="block";
      document.getElementById("emailcheck").style.display="none";
      
  
  }else if(!mail.match(mailid)){
    document.getElementById("emailcheck").style.display="block";
    document.getElementById("emailrequired").style.display="none";
  
    
  }else{
    document.getElementById("emailrequired").style.display="none";
    document.getElementById("emailcheck").style.display="none";
   
  
  }
  
  
  }



  function mobilevalidation(){
    var mobile=document.getElementById("mobile").value;
    var mobileid=/[0-9]/;
  
    if(mobile==""){
      document.getElementById("mobilerequired").style.display="block";
      // document.getElementById("mobilelength").style.display="none";
      document.getElementById("mobileerror").style.display="none";
  
    // }else if(mobile.length<10){
    //   document.getElementById("mobilerequired").style.display="none";
    //   document.getElementById("mobilelength").style.display="block";
    //   document.getElementById("mobileerror").style.display="none";
    }else if(!mobile.match(mobileid)){
      document.getElementById("mobilerequired").style.display="none";
      // document.getElementById("mobilelength").style.display="none";
      document.getElementById("mobileerror").style.display="block";
    }else{
      document.getElementById("mobilerequired").style.display="none";
      // document.getElementById("mobilelength").style.display="none";
      document.getElementById("mobileerror").style.display="none";
    }
  }
  


  // $(document).ready(function(){
  //   $("#hello").validate({
  //      rules:{
  //       name:{
       
  //         required:true,
  //       minlength:3

  //       },
  //       email:{
  //         required:true,
          
  //       },
  //       email:true,
  //       minlength:10,
        
  //     message:{
  //       fname:{
          

  //         required:"This field is needed",
  //       }

  //     }
  //      }
  //   })
  // })


