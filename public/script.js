/* Author: 
    Nickolay Yegorov
*/


function Init() {
    $(".accordeon-item").click(
        function (object) {
            //$('.description-hidden').hide();
            if(! $("#contact-form").is(":hover")){

            $(this).find(".description-hidden").slideToggle(100); 
            $(this).find("#preview").slideToggle(100);

          }

        });

    $('#writetous').click(function(){
      $('.contacts-description').show();
      $('#contact-form textarea').focus();
    });


   

    $(".super")
      .each(function(i) {
        if (i != 0) { 
          $("#beep-one")
            .clone()
            .attr("id", "beep-one" + i)
            .appendTo($(this).parent()); 
        }
        $(this).data("beeper", i);
      })
      .mouseenter(function() {
        $("#beep-one" + $(this).data("beeper"))[0].play();
      });
    $("#beep-one").attr("id", "beep-one0");

    



    $('#sidebar h1').fitText(0.6, { minFontSize: '20px', maxFontSize: '172px' });
    $('#sidebar p').fitText(1, { minFontSize: '10px', maxFontSize: '32px' });
 }



















