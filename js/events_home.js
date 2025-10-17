$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 600) {
      $("#goupbtn").addClass("goupbtnactive");
    } else {
      $("#goupbtn").removeClass("goupbtnactive");
    }
  });

  // INICIAR CARGA DE PÁGINA
  pageLoad();

  somosAnimation();
  nosotrosAnimation();
  paralaxAnimation();
  brandsAnimation();
  brandsSlideAnimation();
  contactoAnimation();

  // Force an initial check so sections already in view become visible
  $(window).trigger("scroll");
});

function openCorreo() {
  $("#contactForm").slideToggle();
}
$(function () {
  var navMain = $(".navbar-collapse"); // avoid dependency on #id
  // "a:not([data-toggle])" - to avoid issues caused
  // when you have dropdown inside navbar
  navMain.on("click", "a:not([data-toggle])", null, function () {
    navMain.collapse("hide");
  });
});

// CARGA DE LA PAGINA
function pageLoad() {
  $(window).scrollTop(0);
  $("#mainLogo").addClass("floating-image");
}

function somosAnimation() {
  $("#energy").css("visibility", "hidden");
  $(window).scroll(function () {
    if ($(window).scrollTop() > $("#energy").offset().top - 400) {
      $("#energy").css("visibility", "visible");
      $("#energy").addClass("animate__animated animate__bounceInDown");

      setTimeout(function () {
        $("#energy").addClass("floating-image");
      }, 2000);
    } else {
    }
  });
}

function nosotrosAnimation() {
  $("#nosotros").css("visibility", "hidden");
  $(window).scroll(function () {
    if ($(window).scrollTop() > $("#nosotros").offset().top - 400) {
      $("#nosotros").css("visibility", "visible");
      $("#nosotros").addClass("animate__animated animate__bounceInDown");
    } else {
    }
  });
}

function paralaxAnimation() {
  $("#paralax").css("visibility", "hidden");
  $(window).scroll(function () {
    if ($(window).scrollTop() > $("#paralax").offset().top - 400) {
      $("#paralax").css("visibility", "visible");
      $("#paralax").addClass("animate__animated animate__fadeIn");
    } else {
    }
  });
}

function brandsAnimation() {
  $("#brands").css("visibility", "hidden");
  $(window).scroll(function () {
    if ($(window).scrollTop() > $("#brands").offset().top - 400) {
      $("#brands").css("visibility", "visible");
      $("#brands").addClass("animate__animated animate__bounceInDown");
    } else {
    }
  });
}

function brandsSlideAnimation() {
  $(".brands-animate").css("visibility", "hidden");
  $(window).scroll(function () {
    var st = $(window).scrollTop();

    if (
      $("#brandWorktric").length &&
      st > $("#brandWorktric").offset().top - 300
    ) {
      $("#brandWorktric").css("visibility", "visible");
      $("#brandWorktric").addClass("animate__animated animate__slideInLeft");
    }

    if ($("#brandChnt").length && st > $("#brandChnt").offset().top - 300) {
      $("#brandChnt").css("visibility", "visible");
      $("#brandChnt").addClass("animate__animated animate__slideInRight");
    }

    if ($("#brandStarco").length && st > $("#brandStarco").offset().top - 300) {
      $("#brandStarco").css("visibility", "visible");
      $("#brandStarco").addClass("animate__animated animate__slideInLeft");
    }

    if ($("#brandWolong").length && st > $("#brandWolong").offset().top - 300) {
      $("#brandWolong").css("visibility", "visible");
      $("#brandWolong").addClass("animate__animated animate__slideInLeft");
    }

    if (
      $("#brandMitsubishi").length &&
      st > $("#brandMitsubishi").offset().top - 300
    ) {
      $("#brandMitsubishi").css("visibility", "visible");
      $("#brandMitsubishi").addClass("animate__animated animate__slideInRight");
    }

    if (
      $("#brandMitsubishi").length &&
      st > $("#brandMitsubishi").offset().top - 300
    ) {
      $("#brandMitsubishi").css("visibility", "visible");
      $("#brandMitsubishi").addClass("animate__animated animate__slideInRight");
    }
  });
}

function contactoAnimation() {
  $("#contactus").css("visibility", "hidden");
  $("#contacto").css("visibility", "hidden");
  $(window).scroll(function () {
    if ($(window).scrollTop() > $("#contactus").offset().top - 300) {
      $("#contactus").css("visibility", "visible");
      $("#contactus").addClass("animate__animated animate__slideInLeft");
    } else {
    }

    if ($(window).scrollTop() > $("#contacto").offset().top - 300) {
      $("#contacto").css("visibility", "visible");
      $("#contacto").addClass("animate__animated animate__slideInLeft");
    } else {
    }
  });
}
