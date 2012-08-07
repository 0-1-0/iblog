$(document).ready(function() {
   $("#show-newpost").click(function() {
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

   $('.editbody').hide();

   $('.editlink').click(function(){
      $(this).parent().find('.postconent').toggle('slow');
      $(this).parent().find('.editbody').toggle('slow');
   });

   $('.fb-like').hide();

   $('.post').hover(

    function(){
      $(this).find('.fb-like').show();
    },

   function(){
      $(this).find('.fb-like').hide();
   });
});