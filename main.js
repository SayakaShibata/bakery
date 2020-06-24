function myFunction(x) {
  x.classList.toggle("change");
  document.getElementById('menu').classList.toggle('show');
}

window.onscroll = function() {scrollFunc()};

function scrollFunc() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navigation").className = "scrolled";
  } else {
    document.getElementById("navigation").className = "";
  }
}
scrollFunc();