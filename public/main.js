$(document).ready(function() {
   $("#show-newpost").click(function() {
      $('.header-up').toggle('slow');
     $('.newpost').toggle('slow');

   });

   $('.plusminus').click(function(){
      $(this).html(
        $(this).html().replace('+', '@')
      );
      $(this).html(
        $(this).html().replace('-', '+')
      );
      $(this).html(
        $(this).html().replace('@', '-')
      );
   });

   $('.newpost').hide();
   $('.commentbody').hide();
   $('.editbody').hide();

   $('.editlink').click(function(){
      $(this).parent().find('.postconent').toggle('slow');
      $(this).parent().find('.editbody').toggle('slow');
   });

   $('.commentlink').click(function(){
      $(this).parent().find('.commentbody').toggle('slow');
   });

   $('.fb-like').hide();

   $('.post').hover(

    function(){
      $(this).find('.fb-like').show();
    },

   function(){
      $(this).find('.fb-like').hide();
   });

   $(window).scroll(function(){
      if($('.header').position().top + $('.header').height() < $(window).scrollTop()) {
        $('.flag').css({
          'position':'fixed',
          'right': '50px',
          'top': '100px'
        });
      }else{
        $('.flag').css({
          'position':'relative',
          'top': '0px',
          'right': '0px'
        });
      }
   });

});