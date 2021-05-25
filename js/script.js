/*--------------------------------*/
/*固定ヘッダー                        */
/*--------------------------------*/

$(function() {
  var $win = $(window),
      $fv = $('.header')
      $header = $('.header-container')
      fvHeight = $fv.outerHeight(),
      fixedClass = 'fixed';

$win.on('load scroll',function(){
  var value = $(this).scrollTop();
    if($win.width()>768)

      if ( value > fvHeight) {
        $header.addClass(fixedClass);
        
      } else {
        $header.removeClass(fixedClass);
        
      }
    

  });
});

/*--------------------------------*/
/*ハンバーガーメニュー            */
/*--------------------------------*/

$('.hum-btn').on('click',function(){
  $('.hum-btn').toggleClass('close');
  $('.header-menu').toggleClass('slide-in');
  $('body').toggleClass('noscroll');
});
