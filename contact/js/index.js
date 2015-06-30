var message 		=  'Thank You ';
var exdays			= '10';

var Form =(function(){
	
	function init(){
		$('#privacy').change(function(){
			if($('#privacy').prop("checked")){
					$("#submit-btn").removeAttr("disabled");
				}else{
					$("#submit-btn").attr("disabled", "disabled");
				}
		  })
	};
	
	return{
		init:init
	}
	
	
})();

$(document).ready(function(e) {
    Form.init();

            $('.checkdisableb7').click(function() {  //on click
				if (this.checked) { // check select status
					$('.cbox7').each(function() { //loop through each checkbox
					    this.checked = false; 
					    $(".cbox7").attr("disabled", true);             
					});
				} else {
					$('.cbox7').each(function() { //loop through each checkbox
						$(".cbox7").removeAttr("disabled");

					});
				}
    		});// end of class checkdisableb7


            $('.checkdisableb9').click(function() {  //on click
				if (this.checked) { // check select status
					$('.cbox9').each(function() { //loop through each checkbox
					    this.checked = false; 
					    $(".cbox9").attr("disabled", true);             
					});
				} else {
					$('.cbox9').each(function() { //loop through each checkbox
						$(".cbox9").removeAttr("disabled");

					});
				}
    		});// end of class checkdisableb 9


    		 $('.checkdisableb13').click(function() {  //on click
				if (this.checked) { // check select status
					$('.cbox13').each(function() { //loop through each checkbox
					    this.checked = false; 
					    $(".cbox13").attr("disabled", true);             
					});
				} else {
					$('.cbox13').each(function() { //loop through each checkbox
						$(".cbox13").removeAttr("disabled");

					});
				}
    		});// end of class checkdisableb 13	


    		 $('.checkdisableb15').click(function() {  //on click
				if (this.checked) { // check select status
					$('.cbox15').each(function() { //loop through each checkbox
					    this.checked = false; 
					    $(".cbox15").attr("disabled", true);             
					});
				} else {
					$('.cbox15').each(function() { //loop through each checkbox
						$(".cbox15").removeAttr("disabled");

					});
				}
    		});// end of class checkdisableb 13	


    		  $('.checkdisableb12').click(function() {  //on click
				if (this.checked) { // check select status
					$('.cbox12').each(function() { //loop through each checkbox
					    this.checked = false; 
					    $(".cbox12").attr("disabled", true);             
					});
				} else {
					$('.cbox12').each(function() { //loop through each checkbox
						$(".cbox12").removeAttr("disabled");

					});
				}
    		});// end of class checkdisableb 12	

    		 //Word limit

    		var maxLength = 400;
			$('textarea').keyup(function() {
			  var length = $(this).val().length;
			  var length = maxLength-length;
			  $('#display_count').text(length);
			});


		 $('form').change(function(){
			
			
			/*	q1 =	$('.q1 input[type="radio"]:checked:first').val();
				q2 =	$('.q2 input[type="radio"]:checked:first').val();*/
			/*	q9 =	$('.q9 input[').val();
			alert(q9);	*/

			/*	$('.q9 input[type="checkbox"]:checked').each(function() {
					$(this).val();
				});
			*/

				/*q1 = $('.q1 input[type="radio"]:checked:first').val();*/
				/*$('section').each(q1, function (key, val){

					alert(key);

				});	*/
			  /* $.each(data, function(key, val) {

				});	*/


		  })		

	



 /*	$('body').on('click', '.submit-btn', function() {
			

  				q1 =	$('.q1 input[type="radio"]:checked:first').val();
				q2 =	$('.q2 input[type="radio"]:checked:first').val();
			alert(q1 + q2);

    });*/

$('body').on('submit', '.submit-btn', function() {

	/*var cname 				= 'disabled';
	var cookie_value		= 'disabled'; 
	var valid_domain		= 'http://ulmcontact.localhost/';		*/

	$('section input').attr(cname, cookie_value);
	
	//set_cookie(cookie_name, cookie_value, lifespan_in_days, valid_domain );



 });


});// end of document


function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}


function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var cookie_name=getCookie("disabled");
    if (cookie_name != "") {
        alert(message);
    } else {
       cookie_name = prompt("Please enter your name:","");
       if (cookie_name != "" && cookie_name != null) {
           setCookie("disabled", cookie_name, 30);
       }
    }
}




