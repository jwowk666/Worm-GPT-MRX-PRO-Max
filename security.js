(function(){
  document.addEventListener("copy",function(e){e.preventDefault();alert("🚫 النسخ محظور!");});
  document.addEventListener("cut",function(e){e.preventDefault();});
  document.addEventListener("contextmenu",function(e){e.preventDefault();});
  document.addEventListener("keydown",function(e){
    if(e.key==="F12"(e.ctrlKey&&e.shiftKey&&e.key==="I")(e.ctrlKey&&e.shiftKey&&e.key==="J")||(e.ctrlKey&&e.key==="U")){
      e.preventDefault();
      alert("🚫 أدوات المطور معطلة!");
    }
  });
  setInterval(function(){
    if(window.outerHeight-window.innerHeight>100||window.outerWidth-window.innerWidth>100){
      document.body.innerHTML="<h1 style='color:red;text-align:center;margin-top:50vh'>🚫 تم حظر أدوات المطور!</h1>";
    }
  },1000);
  console.log("%c🚫 الموقع محمي بنظام MRX!","color:red;font-size:30px;font-weight:bold");
})();
