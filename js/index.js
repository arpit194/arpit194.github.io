$(window).scroll(function () {
  navColor(this);
});

const navColor = (el) => {
  if ($(el).scrollTop() > $("body").height() - 75) {
    $(".nav").addClass("scrolled");
  }
  if ($(el).scrollTop() < $("body").height() - 75) {
    $(".nav").removeClass("scrolled");
  }
};
