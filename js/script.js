$(document).ready(function(){
	
	$('#redirectApply').hide();
	

	/*$(document).scroll(function () {
		if ($(this).scrollTop() >= 56){
			$('.mdl-layout__header--transparent').css("background", "#000").fadeIn();
		} else{
			$('.mdl-layout__header--transparent ').css("background", "transparent");
		}
	}) */


	function amountforRent(){
		rental_hours = $('#freehours').val();
		rental_amount = $('#rental_amount').val();
		var standard_amount = 20000;
		if (rental_amount != 0){
			rental_sum = rental_hours * rental_amount;
			return rental_sum;	
		}
		else{
			rental_amount = standard_amount;
			rental_sum = rental_hours * rental_amount;
			return rental_sum;
		}

	}

	$('#calculate').click(function(){
		var rental = amountforRent();

		$('.section__text').fadeOut('fast');
		$('div #new_result').replaceWith('You could make up to &nbsp <b> &#8358;' +rental_sum + ' in a day!! </b>');
		$('#function_button').fadeIn('slow');
		$('#function_button #calculate span').fadeIn('slow').text('Apply Now');
		
	})

})