$(window).scroll(function () {
  if ($(this).scrollTop() > 800) {
    $("#top_btn").fadeIn("800");
  } else {
    $("#top_btn").fadeOut("800");
  }
});

$("#top_btn").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 400);
});
