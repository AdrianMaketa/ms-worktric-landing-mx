$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 600) {
      $('#goupbtn').addClass('goupbtnactive');
    } else {
      $('#goupbtn').removeClass('goupbtnactive');
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

  anhos();
});

function openCorreo() {
  $('#contactForm').slideToggle();
}
$(function () {
  var navMain = $('.navbar-collapse'); // avoid dependency on #id
  // "a:not([data-toggle])" - to avoid issues caused
  // when you have dropdown inside navbar
  navMain.on('click', 'a:not([data-toggle])', null, function () {
    navMain.collapse('hide');
  });
});

// CARGA DE LA PAGINA
function pageLoad() {
  $(window).scrollTop(0);
  setTimeout(function () {
    $('#page-loader').fadeOut();
    $('body').css('overflow', 'auto');
    $('#headLogo, #waBtn').addClass('animate__bounceInDown');
    $('#mainLogo').addClass('animate__bounceIn');
    setTimeout(function () {
      $('#mainLogo').addClass('floating-image');
    }, 2000);
  }, 6000);
}

function somosAnimation() {
  $('#energy').css('visibility', 'hidden');
  $(window).scroll(function () {
    if ($(window).scrollTop() > $('#energy').offset().top - 400) {
      $('#energy').css('visibility', 'visible');
      $('#energy').addClass('animate__animated animate__bounceInDown');

      setTimeout(function () {
        $('#energy').addClass('floating-image');
      }, 2000);
    } else {
    }
  });
}

function nosotrosAnimation() {
  $('#nosotros').css('visibility', 'hidden');
  $(window).scroll(function () {
    if ($(window).scrollTop() > $('#nosotros').offset().top - 400) {
      $('#nosotros').css('visibility', 'visible');
      $('#nosotros').addClass('animate__animated animate__bounceInDown');
    } else {
    }
  });
}

function paralaxAnimation() {
  $('#paralax').css('visibility', 'hidden');
  $(window).scroll(function () {
    if ($(window).scrollTop() > $('#paralax').offset().top - 400) {
      $('#paralax').css('visibility', 'visible');
      $('#paralax').addClass('animate__animated animate__fadeIn');
    } else {
    }
  });
}

function brandsAnimation() {
  $('#brands').css('visibility', 'hidden');
  $(window).scroll(function () {
    if ($(window).scrollTop() > $('#brands').offset().top - 400) {
      $('#brands').css('visibility', 'visible');
      $('#brands').addClass('animate__animated animate__bounceInDown');
    } else {
    }
  });
}

function brandsSlideAnimation() {
  $('.brands-animate').css('visibility', 'hidden');
  $(window).scroll(function () {
    if ($(window).scrollTop() > $('#brandWorktric').offset().top - 300) {
      $('#brandWorktric').css('visibility', 'visible');
      $('#brandWorktric').addClass('animate__animated animate__slideInLeft');
    } else {
    }

    if ($(window).scrollTop() > $('#brandChnt').offset().top - 300) {
      $('#brandChnt').css('visibility', 'visible');
      $('#brandChnt').addClass('animate__animated animate__slideInRight');
    } else {
    }

    if ($(window).scrollTop() > $('#brandStarco').offset().top - 300) {
      $('#brandStarco').css('visibility', 'visible');
      $('#brandStarco').addClass('animate__animated animate__slideInLeft');
    } else {
    }

    // if ($(window).scrollTop() > $('#brandExl').offset().top - 300) {
    //   $('#brandExl').css('visibility', 'visible');
    //   $('#brandExl').addClass('animate__animated animate__slideInRight');
    // } else {
    // }

    // if ($(window).scrollTop() > $('#brandBit').offset().top - 300) {
    //   $('#brandBit').css('visibility', 'visible');
    //   $('#brandBit').addClass('animate__animated animate__slideInLeft');
    // } else {
    // }
  });
}

function contactoAnimation() {
  $('#contactus').css('visibility', 'hidden');
  $('#contacto').css('visibility', 'hidden');
  $(window).scroll(function () {
    if ($(window).scrollTop() > $('#contactus').offset().top - 300) {
      $('#contactus').css('visibility', 'visible');
      $('#contactus').addClass('animate__animated animate__slideInLeft');
    } else {
    }

    if ($(window).scrollTop() > $('#contacto').offset().top - 300) {
      $('#contacto').css('visibility', 'visible');
      $('#contacto').addClass('animate__animated animate__slideInLeft');
    } else {
    }
  });
}

function galleryBlackBox(img,title) {
  $('#modalImg').attr("src", img);
  $('#modalTitle').html(title);
  $('#galleryModal').modal('show');
}

function galleryBlackBoxOff(){
  $('#galleryModal').modal('hide');
  $('#modalImg').attr("src", '');
  $('#modalTitle').html('');
}

function anhos() {
  // Obtenemos la fecha actual
  const hoy = new Date();

  // Definimos el año inicial
  const anioInicial = 1995;

  // Obtenemos el año actual
  const anioActual = hoy.getFullYear();

  // Calculamos la cantidad de años transcurridos
  const cantidadAnios = anioActual - anioInicial;

  $('#anhos').html(cantidadAnios);

  // Mostramos el resultado por consola
  console.log(`Han transcurrido ${cantidadAnios} años desde ${anioInicial} hasta ${anioActual}.`);

}
