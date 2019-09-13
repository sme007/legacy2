function toggleSidebar(){
    document.getElementById("sidebar").classList.toggle('active');
}
function openNav() {
  document.getElementById("mySidebar").style.width = "100%";
  /*document.getElementById("mySidebar").style.top = "30px";*/
  document.getElementById("main").style.marginLeft = "0px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
