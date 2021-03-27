$(document).ready(function(){
  $(window).scroll(function(){
      if(this.scrollY > 20){
          $('.navbar').addClass("sticky");
      }else{
          $('.navbar').removeClass("sticky");
      }
      if(this.scrollY > 200){
          $('.scroll-up-btn').addClass("show");
      }else{
        $('.scroll-up-btn').removeClass("show");
      }
  });

  //scroll up
  $('.scroll-up-btn').click(function(){
     $('html').animate({scrollTop: 0}); 
     $('html').css("scrollBehavior", "auto");
  });


  // toggle menu script
  $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
  });

  //typing animation
  var typed = new Typed(".typing",{
     strings: ["UI/UX designer","Artist"],
     typeSpeed: 30,
     backSpeed: 30,
     loop:true,
  });


  //owl carousel script
  $('.carousel').owlCarousel({
       margin: 20,
       loop: true,
       autoplayTimeout : 2000,
       autoplayHoverpause : true,
       responsive: {
           0:{
               items: 1,
               nav: false,
           },
           600:{
            items: 2,
            nav: false,
            },
            1000:{
                items: 3,
                nav: false,
            }
       }
  });
});