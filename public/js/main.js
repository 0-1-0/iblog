

$(document).ready(function() {

   $("#show-newpost").click(function() {
      $('#header').toggle('slow');
      $('.newpost').toggle('slow');

   });

  

  //Replace plain URLs with links
  $('.postcontent').each(function(){
    $(this).linkify();
  });

   $('.commentcontent').each(function(){
    $(this).linkify();
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
      $(this).parent().find('.postcontent').toggle('slow');
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

});