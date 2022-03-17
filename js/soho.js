$(document).ready(function(){


  $(".github-ac-button").click(function (e) {
    e.preventDefault();
    var self = $(this);
    var url = encodeURIComponent(self.data("url"));

    window.open(`https://github.com/${url}`, "_blank").focus();
  });

  $(".linkedin-ac-button").click(function (e) {
    e.preventDefault();
    var self = $(this);
    var url = encodeURIComponent(self.data("url"));

    window.open(`https://www.linkedin.com/in/${url}`, "_blank").focus();
  });
});
