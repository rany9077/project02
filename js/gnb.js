$(function () {
  //변수
  var firstmenu = $("nav>ul>li"),
    header = $("header"),
    headerHeight = header.height();

  firstmenu.mouseenter(function () {
    firstmenu.find("ul").hide();
    $(this).find("ul").show();
    var submenuHeight = $(this).find("ul").height();
    header.stop().animate({ height: submenuHeight + headerHeight }, 1000);
  });

  firstmenu.mouseleave(function () {
    header.stop().animate({ height: headerHeight }, 1000);
    $(this).find("ul").hide();
  });
});
