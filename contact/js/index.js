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
					$('.cbox7').each(function() { //loop through each checkbox
					    this.checked = false; 
					});
    		});// end of class checkdisableb7
            $('.cbox7').click(function() {  
					$('.checkdisableb7').each(function() { 
					    this.checked = false; 
					});
    		});// end of class 




            /*QUESTION # 9*/
            $('.checkdisableb9').click(function() {  
					$('.cbox9, .checkdisableb99').each(function() { 
					    this.checked = false; 
					});
    		});// end 
             $('.cbox9').click(function() {  
					$('.checkdisableb9, .checkdisableb99').each(function() { 
					    this.checked = false; 
					});
    		});// end
            $('.checkdisableb99').click(function() {  
					$('.cbox9, .checkdisableb9').each(function() { 
					    this.checked = false; 
					});
    		});// end 
            /*END QUESTION # 9*/


           	/* QUESTION # 12*/
            $('.checkdisableb12').click(function() {  
					$('.cbox12, .checkdisableb122').each(function() { 
					    this.checked = false; 
					});
    		});// end 
    		$('.cbox12').click(function() {  
					$('.checkdisableb12, .checkdisableb122').each(function() { 
					    this.checked = false; 
					});
    		});// end 
    		$('.checkdisableb122').click(function() {  
					$('.cbox12, .checkdisableb12').each(function() { 
					    this.checked = false; 
					});
    		});// end 
    		/*END OF QUESTION # 12*/




    		$('.checkdisableb13').click(function() {  
					$('.cbox13').each(function() { 
					    this.checked = false; 
					});
    		});// end of class checkdisableb 13	
    		$('.cbox13').click(function() {  
					$('.checkdisableb13').each(function() { 
					    this.checked = false; 
					});
    		});// end 


    	
    		$('.checkdisableb15').click(function() {  
					$('.cbox15').each(function() { 
					    this.checked = false; 
					});
    		});// end of class 
    		$('.cbox15').click(function() {  
					$('.checkdisableb15').each(function() { 
					    this.checked = false; 
					});
    		});// end 



    		 //Word limit

    		var maxLength = 400;
			$('textarea').keyup(function() {
			  var length = $(this).val().length;
			  var length = maxLength-length;
			  $('#display_count').text(length);
			});








		

});// end of document



/*	$(document).ready(function(){
		var days = 10;
		var message = 'Please wait '+days+' days  before you can submit again.';
	
		$.removeCookie('space_cookie');
		$('#formsubmit').submit(function(e){
			e.preventDefault();
			var data = new Array();
			
			$('section').each(function(){
				var classname = $(this).attr('class');
				var value = new Array();
				if( $(this).find('input[type="radio"]').length > 0 ){
					value.push($(this).find('input[type="radio"]:checked:first').val());
				}
				else if( $(this).find('input[type="checkbox"]').length > 0 ){
					value.push( $(this).find('input[type="checkbox"]:checked').val() );
				}
				else if( $(this).find('textarea').length > 0 )
					value.push( $(this).find('textarea').val() );
				else if( $(this).find('select').length > 0 )
					value.push( $(this).find('select option:selected').val() );
				
				data.push(  { 	
								'class' : classname,
								'value' : value
							} );
			});
			

			console.log( data );
			//$.cookie('space_cookie', JSON.stringify( data ), {expires : days, path: '/'});

			setTimeout(function(){
                //location.reload();
            	$(location).attr('href',"https://cgi2.nhk.or.jp/seimei/contact/thanks.html");
            },1000);
				
				
		});
		
		if( $.cookie('space_cookie') ){
			var sections = JSON.parse( $.cookie('space_cookie') );
			console.log(sections);
			for( var i=0; i<sections.length; i++ ){
				var element = $('.'+sections[i].class);
				if( element.find('input[type="radio"]').length > 0 ){
					$(this).find('input[value="'+sections[i].value[0]+'"]').attr('checked', 'checked');
				}
				else if( element.find('input[type="checkbox"]').length > 0 ){
					element.find('input[type="checkbox"]').each(function(){
						
						for( var j=0; j<sections[i].value.length; j++ )
							if( $(this).val() == sections[i].value[j] )
								$(this).attr('checked', 'checked');
					});
					
						
				}
				else if( element.find('textarea').length > 0 )
					element.find('textarea').val( sections[i].value[0] );
				else if( $(this).find('select').length > 0 )
					element.find('select option[value="'+sections[i].value[0]+'"]').attr('selected', 'selected');
			}
			$('input, textarea, select').attr('disabled','disabled')
			alert(message);
		}
		else
			alert('no cookie');
		
	});*/



