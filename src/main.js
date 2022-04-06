function dropdowns() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("desknav").style.backgroundColor = "whitesmoke";
    document.getElementById("desknav").style.padding = "20px 0";
    document.getElementById("myLinks").style.backgroundColor = "whitesmoke";
  } else {
    document.getElementById("desknav").style.backgroundColor = "transparent";
    document.getElementById("desknav").style.padding = "20px 0";
    document.getElementById("desknav").style.padding = "auto";
    document.getElementById("myLinks").style.backgroundColor = "white";
  }
}
