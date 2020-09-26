function maxWidth(){
  return Math.max(
    document.documentElement["clientWidth"],
    document.body["scrollWidth"],
    document.documentElement["scrollWidth"],
    document.body["offsetWidth"],
    document.documentElement["offsetWidth"]
  );
}
var header = document.getElementById("header");
var main = document.getElementById("main");
var sidenav = document.getElementById("sidenav");
var openSideNav = document.getElementById("openSideNav");
var changeSideNav=function(event) {
  var max=maxWidth()
  if (openSideNav.checked && max<768) {
    if (!sidenav.contains(event.target)) {
      openSideNav.checked = false;
    }
  }
};
header.onclick = changeSideNav;
main.onclick = changeSideNav;
var body=document.body
window.onload = function(){
  var max=maxWidth()
  if(max>=768){
    openSideNav.checked = true;
  } else {
    openSideNav.checked = false;
  }
}