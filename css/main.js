$(document).ready(function () {
  $(".burger").click(function (event) {
    $(".burger,.menu").toggleClass("active");
    $(".mob-menu").toggleClass("active");
  });
});
