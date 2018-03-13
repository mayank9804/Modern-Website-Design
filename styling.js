

var i =0;
var arr = ['coffeeheader3.jpg','coffeeheader.jpg'];
var arr1 = [];
//function heroImageHeight(a){
//  heroImageHeightvalue = a;
//  $('.intro').css({'height':heroImageHeightvalue});
//  $('.intro1').css({'height':heroImageHeightvalue/2});
//  $('#overlay').css({'height':heroImageHeightvalue});
//}
function backgroundShifter(){
    console.log("Shift");
    var urlImage = 'url('+arr[i]+')';
    i++;
    if(i==arr.length){
        i=0;
    }
    
    $('.fill-background').fadeOut('fast',function(){
      $('.fill-background').css({
          'background-image':urlImage
      });
        $('.fill-background').fadeIn('slow');
    });
}

$(function(){
    
  $(window).on('scroll', function() {
    if (Math.round($(window).scrollTop()) > 100) {
      $('header').addClass('scrolled');
    } else {
      $('header').removeClass('scrolled');
    }
  });

//  $(window).on("load resize",function(){
//    $('.fill-background').css("height",window.innerHeight);
//    var a = window.innerHeight;
//    heroImageHeight(a);
//  });

  setInterval(backgroundShifter,8000);

  var scrollLink1 = $('.scroll').not('#down-button .scroll');
  $(window).on('scroll',function(){
    var windowSpy = $(this).scrollTop();
    scrollLink1.each(function(){
        if($(this.hash)[0].id == "projects"){
          var scrollMenuSpy = $(this.hash).offset().top - 400;
          if(scrollMenuSpy<=windowSpy){
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
          }  
        }
        else{
          var scrollMenuSpy = $(this.hash).offset().top - 200;
          if(scrollMenuSpy<=windowSpy){
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
          }
        }
    });
  });


  var scrollLink = $('.scroll');
  scrollLink.click(function(ev){
    // console.log($(this.hash).offset());
    ev.preventDefault();
    $('body,html').stop().animate(
      {
        scrollTop: $(this.hash).offset().top - 90
        //.offset() returns {top:122,left:2121} This.hash returns #this
      },1000,'easeInOutExpo');
  });

  setInterval(function(){
    $('#down-button').effect('bounce',2000)
  },1000);
    
    new WOW().init();
});

$(document).scroll(function(){
  var ScrollTopPosition = Math.round($(this).scrollTop());
  $('.intro .fill-background').css({
    "background-position-y":(-ScrollTopPosition/2)
  })

});




//jQuery Plugins
//$(document).ready(function(){
// Executed when DOM is ready
//even when the assets have not fully downloaded
//});

//$(function(){
   //Shorthand function 
//});

//A jQuery Plugin extends the jQuery object
//Provides functionality for a collection of elements

//jQuery Migrate Plugin restores deprecated features and behaviours so that older code 
//will still run properly on jQuery 1.9 and later
//It will warn you if incase you are using a deprecated feature
//so that you could go and check what's the fix

//plugins.jquery.com
//jquery-plugins.net