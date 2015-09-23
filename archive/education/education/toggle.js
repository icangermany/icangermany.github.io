$(document).ready(function()
{
  //hide the all of the element with class msg_body
  $(".msg_body").hide();
  //toggle the componenet with class msg_body
  $(".msg_head").bind('click', function(event)
  {
    $(this).nextAll(".msg_body:first").slideToggle(400);
    event.preventDefault();
  });
  
  $(".msg_ausblenden").bind('click', function(event)
  {
    $(this).parent(".msg_body").slideToggle(400);
    event.preventDefault();
  });
});
