$(function($) {
$('[data-numeric]').payment('restrictNumeric');
$('.cc-number').payment('formatCardNumber');
$('.cc-exp').payment('formatCardExpiry');
$('.cc-cvc').payment('formatCardCVC');
$.fn.toggleInputError = function(erred) {
this.parent('.form-group').toggleClass('has-error', erred);
return this;
};
$('form').submit(function(e) {
e.preventDefault();
var cardType = $.payment.cardType($('.cc-number').val());
$('.cc-number').toggleInputError(!$.payment.validateCardNumber($('.cc-number').val()));
$('.cc-exp').toggleInputError(!$.payment.validateCardExpiry($('.cc-exp').payment('cardExpiryVal')));
$('.cc-cvc').toggleInputError(!$.payment.validateCardCVC($('.cc-cvc').val(), cardType));
$('.cc-brand').text(cardType);
$('.validation').removeClass('text-danger text-success');
$('.validation').addClass($('.has-error').length ? 'text-danger' : 'text-success');
});
});









$("#signup").click(function() {
$("#first").fadeOut("fast", function() {
$("#second").fadeIn("fast");
});
});


$("#signin").click(function() {
$("#second").fadeOut("fast", function() {
$("#first").fadeIn("fast");
});
});


function addToCartSwipe(jname)
{
	var price;
	var title;
	
	var imu = "assets/img/Books/"+ jname + ".jpg"
	
	if (jname=="HIV and AIDS - 179.00")
	{
		price=179.00;
		title="HIV and AIDS";
	}
	else if (jname=="Integrated Science - 7.21")
	{
		price=7.21;
		title="Integrated Science";
	}
	else if (jname=="Peter Pan - 5.81")
	{
		price=5.81;
		title="Peter Pan";
	}
	else if (jname=="The Boy Who Harnessed the Wind - 3.59")
	{
		price=3.59;
		title="The Boy Who Harnessed the Wind";
	}
	else if (jname=="The Cure for HIV and AIDS - 24.99")
	{
		price=24.99;
		title="The Cure for HIV and AIDS";
	}
	else if (jname=="The Giving Tree - 7.96")
	{
		price=7.96;
		title="The Giving Tree";
	}
	else if (jname=="The Lorax - 3.99")
	{
		price=3.99;
		title="The Lorax - 3.99";
	}
	addToCart(title, price,imu);
	
}


function SomeDeleteRowFunction(price) {
      // event.target will be the input element.
      var td = event.target.parentNode; 
      var tr = td.parentNode; // the row to be removed
      tr.parentNode.removeChild(tr);
	  
	  currentPrice-=price;
	  document.getElementById("currentTotal").innerHTML=currentPrice.toFixed(2);
}
var currentPrice=0;
document.getElementById("currentTotal").innerHTML = currentPrice.toFixed(2);

function addToCart(title, price,imu)
{
	document.getElementById("cartProper").innerHTML += "<tr> <td class='w-25'>   <img src='" + imu + "' class='img-fluid img-thumbnail' alt='" + title + "'" +

              "</td> <td>" + title + "</td> <td>$"+price+"</td> <td> <button class='btn btn-danger btn-sm' onClick='SomeDeleteRowFunction("+price+");'>❌</button>" +
              " <!-- <a href='#' class='btn btn-danger btn-sm'> <i class='fa fa-times'></i> </a>--> </td> </tr>	";
			  currentPrice+=price;
document.getElementById("currentTotal").innerHTML=currentPrice.toFixed(2);
}



  
         $(function() {
           $("form[name='login']").validate({
             rules: {
               
               email: {
                 required: true,
                 email: true
               },
               password: {
                 required: true,
                 
               }
             },
              messages: {
               email: "Please enter a valid email address",
              
               password: {
                 required: "Please enter password",
                
               }
               
             },
             submitHandler: function(form) {
               form.submit();
             }
           });
         });
         


$(function() {
  
  $("form[name='registration']").validate({
    rules: {
      firstname: "required",
      lastname: "required",
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 5
      }
    },
    
    messages: {
      firstname: "Please enter your firstname",
      lastname: "Please enter your lastname",
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      },
      email: "Please enter a valid email address"
    },
  
    submitHandler: function(form) {
      form.submit();
    }
  });
});
/*!
    * Start Bootstrap - Creative v6.0.3 (https://startbootstrap.com/themes/creative)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
    */
    (function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict
