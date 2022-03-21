var date = new Date();
var day = date.getDate();
for (let i = day+1; i <= 24; i++) {
   var element = document.querySelector('.day-'+i+' input');
   if (element != null && element != undefined) {
       element.disabled = "disabled";
   }
}

