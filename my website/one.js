var pContainerHeight = $('.index-box').height();
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    if(wScroll <= pContainerHeight){
        $('.logo .title').css({
            'transform' : 'translate(0px,'+ wScroll/2 +'%)'
        });
        $('.logo .subtitle').css({
            'transform' : 'translate('+ wScroll/2 +'%,'+ wScroll/2 +'%)'
        });
        $('.fore-image').css({
            'transform' : 'translate('+ wScroll/2 +'%,'+ wScroll/2 +'%)'
        });
    }
    if(wScroll > $('.content-pic').offset().top - ($(window).height() / 1.2)) {

      $('.content-pic div').each(function(i){
        setTimeout(function(){
          $('.content-pic div').eq(i).addClass('is-showing');
      }, (700 * (Math.exp(i * 0.3))) - 700);
      });
    }
    if(wScroll > $('#stoping-nav').offset().top){
        // $('#stoping-nav').offset().top=0; navbar-fixed-top
        $('#stoping-nav').addClass('navbar-fixed-top');
        // var k= wScroll+500;
        // $('#stoping-nav').css({
        //     'position':'absolute',
        //     'top': k+'px',
        //     'width':'100%'
        // });
        // console.log("hi");
    }
    if(wScroll > $('.blog-posts').offset().top - $(window).height()*2 ){

      var offset = (Math.min(0, wScroll - $('.blog-posts').offset().top +$(window).height() - 350)).toFixed();

      $('.post-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});

      $('.post-3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});

    }
});

// smoot scroll
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top -100
        }, 1000);
        return false;
      }
    }
  });
});
