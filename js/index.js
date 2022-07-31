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
  //   $(".homeLink").removeClass("active");
  //   $(".skillsLink").removeClass("active");
  //   $(".projectsLink").removeClass("active");
  //   $(".expLink").removeClass("active");
  //   $(".contactLink").removeClass("active");
  if (length < $("body").height()) {
    // $(".homeLink").addClass("active");
    $(".home").addClass("reveal");
  }
  if (length >= $("body").height() - 100 && length < $("body").height() * 2) {
    $(".skills").addClass("reveal");
  }
  if (
    length >= $("body").height() * 2 - 100 &&
    length < $("body").height() * 3
  ) {
    // $(".projectsLink").addClass("active");
    $(".projects").addClass("reveal");
  }
  if (
    length >= $("body").height() * 3 - 100 &&
    length < $("body").height() * 4
  ) {
    // $(".expLink").addClass("active");
    $(".experience").addClass("reveal");
  }
  if (length >= $("body").height() * 4 - 100) {
    // $(".contactLink").addClass("active");
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
  if (
    length >= $("body").height() * 3 - 75 &&
    length < $("body").height() * 4
  ) {
    $("#up").addClass("up");
    $("#down").addClass("down");
  }
  if (
    length <= ($("body").height() * 5) / 2 ||
    length > ($("body").height() * 7) / 2
  ) {
    $("#up").removeClass("up");
    $("#down").removeClass("down");
  }
};

const sendmail = () => {
  $("#submit").css("display", "none");
  $("#wait").css("display", "block");
  emailjs
    .send(
      "service_b54b9fb",
      "template_i1798xh",
      {
        from_name: $("#name").val(),
        message: $("#message").val(),
        reply_to: $("#email").val(),
      },
      "HiBRwkdiSUfzDMP1V"
    )
    .then((res) => {
      if (res.status == 200) {
        $("#submit").css("display", "block");
        $("#wait").css("display", "none");
        $("#submit").html("Mail sent");
        setTimeout(() => {
          $("#submit").html("Send");
        }, 2000);
      } else {
        $("#submit").css("display", "block");
        $("#wait").css("display", "none");
        $("#submit").html("Mail not sent");
        setTimeout(() => {
          $("#submit").html("Send");
        }, 2000);
      }
    });
};

let revealDesc = (el) => {
  if ($(el).parent().parent().children()[2].style.bottom === "-25%")
    $(el).parent().parent().children()[2].style.bottom = "-100%";
  else $(el).parent().parent().children()[2].style.bottom = "-25%";
};
