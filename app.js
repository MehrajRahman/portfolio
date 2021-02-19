// window.onscroll = function colorChange(){
//     const nabVar  = document.getElementById("nabVar");
//     nabVar.style.backgroundColor = "Black";
//     nabVar.style.opacity = 1;
//     nabVar.style.height = "60px"

// }
$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
      $("nav").addClass("black");
    } else {
      $("nav").removeClass("black");
    }
  });