var blockTop = $(".container_content_inner").offset().top
flag = true


counter = _ => {
  if (counter._count > 542) {
    flag = !flag;
    return;
  }

  $('.counter-number').text('+' + counter._count++);
  setTimeout(counter, 1);
};

counter2 = _ => {
  if (counter2._count > 200) {
    flag = !flag;
    return;
  }
  $('.counter-number-2').text('+' + counter2._count++);
  setTimeout(counter2, 10);
}

counter3 = _ => {
  if (counter3._count > 50) {
    flag = !flag;
    return;
  }
  $('.counter-number-3').text('+' + counter3._count++);
  setTimeout(counter3, 40);
}
counter._count = 0;
counter2._count = 0;
counter3._count = 0;


$(window).scroll(_ => {
  if (flag && blockTop < $(window).scrollTop()) {
    flag = !flag;
    counter();
    counter2();
    counter3();
  }
});



var owl = $('.owl-first');
owl.owlCarousel({
  items: 3,
  loop: true,
  dots: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  dotsEach: true,
  smartSpeed: 2000,
  responsiveClass: true,
  responsive: {

    100: {
      items: 1,
    },

    480: {
      items: 1,
    },

    900: {
      items: 3,
    }

  }

});
$('.play').on('click', function () {
  owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function () {
  owl.trigger('stop.owl.autoplay')
})


var owl = $('.owl-second');
owl.owlCarousel({
  items: 1,
  loop: true,
  margin: 10,
  smartSpeed: 2000,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  dotsEach: true
});

$('.play').on('click', function () {
  owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function () {
  owl.trigger('stop.owl.autoplay')
})

 $('.owl-third').owlCarousel({
     loop:true,
     margin:10,
     smartSpeed: 1000,
     autoplay:true,
     autoplayTimeout:2000,
     autoplayHoverPause:true,
     dotsEach: true,
     center:true,
     responsiveClass:true,
     responsive:{

      0:{
        items: 1,
      },

      480:{
        items:1,
      },

      950:{
        items:3,
      }

     }
 });

// $(document).ready(function() {
//   $('.owl-third').owlCarousel({
//     items: 1,
//     loop: true,
//     margin: 10,
//     responsiveClass: true,
//    responsive: {
//     420:{
//       items: 1,
//     },

//     720:{
//       items: 3,
//     }
//    }
//   })
// })



var owl = $('.owl-fourth');
owl.owlCarousel({
  items: 1,
  loop: true,
  margin: 10,
  smartSpeed: 3000,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  dotsEach: true,
  center: true,
  responsiveClass: true,
  responsive: {
    100: {
      items: 1,
    },

    
    480:{
      items: 1,
    },
    
    900:{
      items: 3,
    }
  }
});


$('.play').on('click', function () {
  owl.trigger('play.owl.autoplay', [1000])
}) 

$('.stop').on('click', function () {
  owl.trigger('stop.owl.autoplay')
})



baguetteBox.run('.baguetteBoxThree', {
  animation: 'fadeIn',
  noScrollbars: true
});

baguetteBox.run('.baguetteBoxfour', {
  animation: 'fadeIn',
  noScrollbars: true
});




$(document).ready(function () {

  var curPage = 1;
  var numOfPages = $(".skw-page").length;
  var animTime = 1000;
  var scrolling = false;
  var pgPrefix = ".skw-page-";

  function pagination() {
    scrolling = true;

    $(pgPrefix + curPage).removeClass("inactive").addClass("active");
    $(pgPrefix + (curPage - 1)).addClass("inactive");
    $(pgPrefix + (curPage + 1)).removeClass("active");

    setTimeout(function () {
      scrolling = false;
    }, animTime);
  };

  function navigateUp() {
    if (curPage === 1) return;
    curPage--;
    pagination();
  };

  function navigateDown() {
    if (curPage === numOfPages) return;
    curPage++;
    pagination();
  };

  $(document).on("mousewheel DOMMouseScroll", function (e) {
    if (scrolling) return;
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
      navigateUp();
    } else {
      navigateDown();
    }
  });

  $(document).on("keydown", function (e) {
    if (scrolling) return;
    if (e.which === 38) {
      navigateUp();
    } else if (e.which === 40) {
      navigateDown();
    }
  });

});



AOS.init();
