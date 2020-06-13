$(document).ready(function () {
  $("a.call-btn").click(function (event) {
    event.preventDefault();
    $("#myOverlay").fadeIn(297, function () {
      $("#myModal").css("display", "block").animate({ opacity: 1 }, 198);
    });
  });

  $("#myModal__close, #myOverlay").click(function () {
    $("#myModal").animate({ opacity: 0 }, 198, function () {
      $(this).css("display", "none");
      $("#myOverlay").fadeOut(297);
    });
  });

  $("a.contact, a.route, a.about, a.btn, a.arrow").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate(
      { scrollTop: destination },
      800
    );
    return false;
  });

  $(".btn-more, .btn-more2").click(function (e) {
    e.preventDefault();
    $(".wrapper-routes").toggleClass("show");
  });
});
