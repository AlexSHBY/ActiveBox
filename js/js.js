var myPlugin = {
  name: 'debugger',
  params: {
    debugger: false,
  },
  on: {
    init: function () {
      if (!this.params.debugger) return;
      console.log('init');
    },
    click: function (e) {
      if (!this.params.debugger) return;
      console.log('click');
    },
    tap: function (e) {
      if (!this.params.debugger) return;
      console.log('tap');
    },
    doubleTap: function (e) {
      if (!this.params.debugger) return;
      console.log('doubleTap');
    },
    sliderMove: function (e) {
      if (!this.params.debugger) return;
      console.log('sliderMove');
    },
    slideChange: function () {
      if (!this.params.debugger) return;
      console.log('slideChange', this.previousIndex, '->', this.activeIndex);
    },
    slideChangeTransitionStart: function () {
      if (!this.params.debugger) return;
      console.log('slideChangeTransitionStart');
    },
    slideChangeTransitionEnd: function () {
      if (!this.params.debugger) return;
      console.log('slideChangeTransitionEnd');
    },
    transitionStart: function () {
      if (!this.params.debugger) return;
      console.log('transitionStart');
    },
    transitionEnd: function () {
      if (!this.params.debugger) return;
      console.log('transitionEnd');
    },
    fromEdge: function () {
      if (!this.params.debugger) return;
      console.log('fromEdge');
    },
    reachBeginning: function () {
      if (!this.params.debugger) return;
      console.log('reachBeginning');
    },
    reachEnd: function () {
      if (!this.params.debugger) return;
      console.log('reachEnd');
    },
  },
};
// Install Plugin To Swiper
Swiper.use(myPlugin);

// Init Swiper
var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Enable debugger
  debugger: true,
});


$(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
      $('.header-wrap').addClass('fixed');
  } else {
      $('.header-wrap').removeClass('fixed');
  }
});

function slowScroll (id) {
  var offset = 200;
  $('html, body').animate ({
    scrollTop: $(id).offset ().top - offset
  }, 500);
  return false;
}

$(function() {
  $(".menu-link").on("click", function() {
    if ($(window).width() < 950) {
      $( ".menu" ).fadeToggle( 100, "linear", function() { 
          console.log("toggle completed"); 
      });
    }
  });
  $(window).on("resize", function() {
    if ($(window).width() >= 950) {
        $(".menu").show();
    }
  });
});


$(function(){
  $(".close").click (function(){
    $(".menu").toggleClass("menu-active");
  })
})