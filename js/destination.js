function maxWidth(){
  return Math.max(
    document.documentElement["clientWidth"],
    document.body["scrollWidth"],
    document.documentElement["scrollWidth"],
    document.body["offsetWidth"],
    document.documentElement["offsetWidth"]
  );
}
var main = document.getElementById("main");
var sidenav = document.getElementById("sidenav");
var openSideNav = document.getElementById("openSideNav");
main.onclick = function(event) {
  if (openSideNav.checked) {
    if (!sidenav.contains(event.target)) {
      openSideNav.checked = false;
    }
  }
};
console.log("gggg")
var body=document.body
window.onload = function(){
  var max=maxWidth()
  console.log({max})
  if(max>=768){
    openSideNav.checked = true;
  } else {
    openSideNav.checked = false;
  }
}