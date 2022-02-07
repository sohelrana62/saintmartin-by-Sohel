
//jquery code
$(document).ready(function(){

 $("#hotel-form").show();
 $("#ticket-form").hide();
 $("#place-form").hide();

 $('#hotel-btn span').addClass('line');

 // if click on ticket
 $('#ticket-btn').click(function(){

 	$("#hotel-form").hide();
    $("#ticket-form").show();
    $("#place-form").hide();

     $('#hotel-btn span').removeClass('line');
     $('#ticket-btn span').addClass('line');
	 $('#place-btn span').removeClass('line');

 });
// if click on place
 $('#place-btn').click(function(){

 	$("#hotel-form").hide();
    $("#ticket-form").hide();
    $("#place-form").show();

    $('#hotel-btn span').removeClass('line');
    $('#ticket-btn span').removeClass('line');
	$('#place-btn span').addClass('line');

 });
// if click on hotel
 $('#hotel-btn').click(function(){

 	$("#hotel-form").show();
    $("#ticket-form").hide();
    $("#place-form").hide();

    $('#hotel-btn span').addClass('line');
    $('#ticket-btn span').removeClass('line');
	$('#place-btn span').removeClass('line');

 });

});

// fixed-menu code

window.addEventListener('scroll',function(){
	var header = document.getElementById('main-nav');
	header.classList.toggle('fixed-menu',window.scrollY>0);
});

