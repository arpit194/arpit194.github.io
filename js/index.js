$(window).scroll(function () {
  navColor(this);
  activeSection(this);
  animateElements(this);
});

const navColor = (el) => {
  $(".nav").removeClass("scrolled");
  $(".nav").removeClass("scrolledSome");
  if ($(el).scrollTop() > 75 && $(el).scrollTop() <= $("body").height() - 75) {
    $(".nav").addClass("scrolledSome");
  }
  if ($(el).scrollTop() > $("body").height() - 75) {
    $(".nav").addClass("scrolled");
  }
  if ($(el).scrollTop() < 75) {
    $(".nav").removeClass("scrolled");
    $(".nav").removeClass("scrolledSome");
  }
};

const activeSection = (el) => {
  const length = $(el).scrollTop();
  $(".homeLink").removeClass("active");
  $(".skillsLink").removeClass("active");
  $(".projectsLink").removeClass("active");
  $(".expLink").removeClass("active");
  $(".contactLink").removeClass("active");
  if (length < $("body").height()) {
    $(".homeLink").addClass("active");
    $(".home").addClass("reveal");
  } else if (length >= $("body").height() && length < $("body").height() * 2) {
    $(".skillsLink").addClass("active");
    $(".skills").addClass("reveal");
  } else if (
    length >= $("body").height() * 2 &&
    length < $("body").height() * 3
  ) {
    $(".projectsLink").addClass("active");
    $(".projects").addClass("reveal");
  } else if (
    length >= $("body").height() * 3 &&
    length < $("body").height() * 4
  ) {
    $(".expLink").addClass("active");
    $(".experience").addClass("reveal");
  } else if (length >= $("body").height() * 4) {
    $(".contactLink").addClass("active");
    $(".contact").addClass("reveal");
  }
};

const animateElements = (el) => {
  const length = $(el).scrollTop();
  if (length >= $("body").height() && length < $("body").height() * 2) {
    $(".html").css("width", "95%");
    $(".css").css("width", "90%");
    $(".js").css("width", "90%");
    $(".react").css("width", "85%");
    $(".node").css("width", "85%");
  }
  if (length <= $("body").height() / 2 || length > $("body").height() * 2) {
    $(".html").css("width", "0%");
    $(".css").css("width", "0%");
    $(".js").css("width", "0%");
    $(".react").css("width", "0%");
    $(".node").css("width", "0%");
  }
};
