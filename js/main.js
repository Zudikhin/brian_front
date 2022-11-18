$(document).ready(function () {
    "use strict";

    const inViewport = (elem) => {
    let allElements = document.getElementsByClassName(elem);
    let windowHeight = window.innerHeight;
    const elems = () => {
        for (let i = 0; i < allElements.length; i++) {  //  loop through the sections
            let viewportOffset = allElements[i].getBoundingClientRect();  //  returns the size of an element and its position relative to the viewport
            let top = viewportOffset.top;  //  get the offset top
            if(top < windowHeight){  //  if the top offset is less than the window height
                allElements[i].classList.add('animation');  //  add the class
            } else{
                allElements[i].classList.remove('in-viewport');  //  remove the class
            }
        }
    }
    elems();
    window.addEventListener('scroll', elems);
  }

  inViewport("anime");

   $(".header_block_drop").click(function() {
    $(this).toggleClass("active");
    $(".header_nav").slideToggle(400);
   });

   $(".header_nav_drop_top").click(function() {
    $(this).toggleClass("active");
    $(".header_nav_drop_content").slideToggle(400);
   });

   $(".drop").hover(function() {
    $(".drop_body").slideToggle(400);
   });

   $(".transactions_top_right_head").click(function() {
    $(".transactions_top_right_content").slideToggle(400);
   });

   $('.sliders_one_list').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    arrows: false,
    slidesToShow: 6,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4
        }
      }
    ]
  });

  $('.sliders_two_list').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    arrows: false,
    slidesToShow: 6,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4
        }
      }
    ]
  });

  $(".transactions_top_right_content ul li").click(function() {
    var text = $(this).children().text();
    var attr = $(this).attr("data-target");
    $(".transactions_top_right_head_right p").text(text);
    $(".transactions_top_right_content").slideToggle(400);
    $(".transactions_list_item").addClass("hide");
    $(`.${attr}`).removeClass("hide");
  });

  $('.single_trans_block_left_slider').slick({
    infinite: true,
    dots: false,
    arrows: true,
    fade: true,
    slidesToShow: 1,
    prevArrow: $('.single_trans_block_left_prev'),
    nextArrow: $('.single_trans_block_left_next')
  });

  $(".request_block_left_two_wrap_item").click(function() {
    $(".request_block_left_two_wrap_item").removeClass("active");
    $(this).addClass("active");
  });

  $(".modal_back").click(function() {
    $(this).removeClass("active");
    $(".modal_thank").removeClass("active");
    $("body").removeClass("scroll");
  });

  $(".modal_thank_close").click(function() {
    $(".modal_back").removeClass("active");
    $(".modal_thank").removeClass("active");
    $("body").removeClass("scroll");
  });

  $(".video_block").click(function() {
    if($(".video video").get(0).paused) {
      $(".video video").get(0).play();
    } else {
      $(".video video").get(0).pause();
    }
  });

});