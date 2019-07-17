$(document).ready(function () {
  $(document).click(function (e) {
      var clickover = $(e.target);
      var _opened = $(".collapse").hasClass("collapse show");
     
      if (_opened === true && !clickover.hasClass("navbar-toggler")) {
          $("button.navbar-toggler").click();
      }
  });
});