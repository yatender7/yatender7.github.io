var preloader =document.querySelector('#preloader');   

function loadFun(){
    preloader.style.display ="none";
}

const navSlide = ()=>{
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  // nav toggling
  burger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');

    // animating the link
    navLinks.forEach((link , index)=>{
     if(link.style.animation){
       link.style.animation = "";
     }
     else{
       link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
     }
    });
    // burger toggling animation
    burger.classList.toggle('toggle');
  });


}

navSlide();


 (function($) {
  $.fn.timeline = function() {
    var selectors = {
      id: $(this),
      item: $(this).find(".timeline-item"),
      activeClass: "timeline-item--active",
      img: ".timeline__img"
    };
    selectors.item.eq(0).addClass(selectors.activeClass);
    selectors.id.css(
      "background-image",
      "url(" +
        selectors.item
          .first()
          .find(selectors.img)
          .attr("src") +
        ")"
    );
    var itemLength = selectors.item.length;
    $(window).scroll(function() {
      var max, min;
      var pos = $(this).scrollTop();
      selectors.item.each(function(i) {
        min = $(this).offset().top;
        max = $(this).height() + $(this).offset().top;
        var that = $(this);
        if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
          selectors.item.removeClass(selectors.activeClass);
          selectors.id.css(
            "background-image",
            "url(" +
              selectors.item
                .last()
                .find(selectors.img)
                .attr("src") +
              ")"
          );
          selectors.item.last().addClass(selectors.activeClass);
        } else if (pos <= max - 40 && pos >= min) {
          selectors.id.css(
            "background-image",
            "url(" +
              $(this)
                .find(selectors.img)
                .attr("src") +
              ")"
          );
          selectors.item.removeClass(selectors.activeClass);
          $(this).addClass(selectors.activeClass);
        }
      });
    });
  };
})(jQuery);

$("#timeline-1").timeline();



// waypoint and animate.css  for animations


 

/*var waypoint = new Waypoint({
  element: document.getElementById('px-offset-waypoint'),
  handler: function(direction) {
    notify('I am 20px from the top of the window')
  },
  offset: 20 
})*/


$(document).ready(function(){
    $('.about--part1').waypoint(function(direction){
        $('.about--part1').addClass('animated zoomIn')
    },{
        offset:'400px'
    });
    
    $('.about--part2').waypoint(function(direction){
        $('.about--part2').addClass('animated zoomIn')
    },{
        offset:'400px'
    });
    
    $('.card--part1').waypoint(function(direction){
        $('.card--part1').addClass('animated fadeInLeft')
    },{
        offset:'400px'
    });
    
    $('.card--part2').waypoint(function(direction){
        $('.card--part2').addClass('animated fadeInDown')
    },{
        offset:'400px'
    });
    
    $('.card--part3').waypoint(function(direction){
        $('.card--part3').addClass('animated fadeInDown')
    },{
        offset:'400px'
    });
    
    $('.card--part4').waypoint(function(direction){
        $('.card--part4').addClass('animated fadeInRight')
    },{
        offset:'400px'
    });
    
    $('.card--part5').waypoint(function(direction){
        $('.card--part5').addClass('animated fadeInLeft')
    },{
        offset:'400px'
    });
    
    $('.card--part6').waypoint(function(direction){
        $('.card--part6').addClass('animated fadeInUp')
    },{
        offset:'400px'
    });
    
    $('.card--part7').waypoint(function(direction){
        $('.card--part7').addClass('animated fadeInRight')
    },{
        offset:'400px'
    });
    
    $('.workcard--part1').waypoint(function(direction){
        $('.workcard--part1').addClass('animated zoomIn')
    },{
        offset:'400px'
    });
    
    $('.workcard--part2').waypoint(function(direction){
        $('.workcard--part2').addClass('animated zoomIn')
    },{
        offset:'400px'
    });
    
    $('.workcard--part3').waypoint(function(direction){
        $('.workcard--part3').addClass('animated zoomIn')
    },{
        offset:'400px'
    });
    
    $('.workcard--part4').waypoint(function(direction){
        $('.workcard--part4').addClass('animated zoomIn')
    },{
        offset:'100px'
    });
    
    
    
    
});




// sidenav links active effect

$(document).ready(function(){
    $(window).scroll(function(){
        var positionTop = $(document).scrollTop();
        /*console.log(positionTop);*/
        
        if((positionTop>=0) && (positionTop<=650))
            {
                $('.firstcircle').addClass('circleActive');
            }
        else{
            $('.firstcircle').removeClass('circleActive');
        }
        if((positionTop>=651) && (positionTop<=1580))
            {
                $('.secondcircle').addClass('circleActive');
            }
        else{
            $('.secondcircle').removeClass('circleActive');
        }
        if((positionTop>=1581) && (positionTop<=3640))
            {
                $('.thirdcircle').addClass('circleActive');
            }
        else{
            $('.thirdcircle').removeClass('circleActive');
        }
        if((positionTop>=3641) && (positionTop<=4490))
            {
                $('.fourthcircle').addClass('circleActive');
            }
        else{
            $('.fourthcircle').removeClass('circleActive');
        }
        if((positionTop>=4491) && (positionTop<=5019))
            {
                $('.fifthcircle').addClass('circleActive');
            }
        else{
            $('.fifthcircle').removeClass('circleActive');
        }
        
        
        
        
    });
})

