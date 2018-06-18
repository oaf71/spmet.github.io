$(document).ready(function() {

	
	//Fixet menu  Фиксед

	// Options
	var options = {
		offset: 300
	}

    // Create a new instance of Headhesive.js and pass in some options
    var header = new Headhesive('.header_shapka', options);
    
	//Mygtukas Button meniu isskleisti
	$(".main_menu_button").click(function(){
		$(".main_menu ul").slideToggle();
		return false;
	});
	// Mygtukas "Viršun"
	$(window).scroll(function(){
    	if ($(this).scrollTop() > 800) {
    		$('.up_button img').fadeIn();
    	} else {
    		$('.up_button img').fadeOut();
    	}
    });
 
    $('.up_button img').click(function(){
    	$("html, body").animate({ scrollTop: 0 }, 600);
    	return false;
    });

	
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});