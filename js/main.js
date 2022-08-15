let contentImg = document.querySelector(".content1_slide");
window.addEventListener("scollY", function () {
  let value = window.scroll;
  console.log("scrollY", value);

  if (value > 500) {
    contentImg.style.animation = "disappear 1s ease-out";
  }
});

// //텍스트 깜빡임
// setInterval(function () {
//   $(".blink").toggle();
// }, 700);
