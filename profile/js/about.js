$(document).ready(function(){

  $("#personalDetails").click(function(){
    $(".hiddenBlock").hide();
    $("#aboutMeBlock").show();
  });

  $("#skills").click(function(){
    $(".hiddenBlock").hide();
    $("#skillsBlock").show();
  });

  $('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:$(this).attr('data-percent')
		},6000);
  });

  $("#education").click(function(){
    $(".hiddenBlock").hide();
    $("#educationBlock").show();
  });

  $("#experience").click(function(){
    $(".hiddenBlock").hide();
    $("#experienceBlock").show();
  });

});

