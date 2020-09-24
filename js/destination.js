var main = document.getElementById("main");
main.onclick = function(event) {
  console.log("window.onclick");
  var sidenav = document.getElementById("sidenav");
  var openSideNav = document.getElementById("openSideNav");
  if (openSideNav.checked) {
    if (!sidenav.contains(event.target)) {
      openSideNav.checked = false;
    }
  }
};
