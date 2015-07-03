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


		$('#privacy').click(function(e){
			e.preventDefault();
			var data = new Array();
			var totalq = 0;
			txtarea = $('.textq10').val();
			txtbox = $('.textbox').val();
			$('section').each(function(){
				var classname = $(this).attr('class');
				var value = new Array();
				if( $(this).find('input[type="radio"]').length > 0 ){
					if($(this).find('input[type="radio"]:checked:first').length > 0){
						value.push($(this).find('input[type="radio"]:checked:first').val());
							totalq++
						 }
				}
				else if( $(this).find('input[type="checkbox"]').length > 0 ){
					if ($(this).find('input[type="checkbox"]:checked').length > 0){
						value.push($(this).find('input[type="checkbox"]:checked').val() );
						totalq++
					 }
				}
				else if( $(this).find('textarea').length > 0 )
					if($(this).find('textarea').length > 0){
						value.push( $(this).find('textarea').val() );
						totalq++
					}

				else if( $(this).find('select').val() )
					if( $(this).find('select').val() ){
						value.push( $(this).find('select option:selected').val() );
						totalq++
					}	
				
				data.push(  { 	
								'class' : classname,
								'value' : value
							} );
			});
			console.log( data );
		

		
		//alert(txtbox);

			if(totalq == 21 && txtarea != ''){
				if(txtbox == 'Prefectures' || txtbox == '都道府県'){
					alert("未入力の項目があります");	
					$("#submit-btn").attr("disabled", "disabled"); 	
				}else{
					$("#submit-btn").removeAttr("disabled");
					  $("#agreement").show();
					  $(".btnprivacy").hide();
				}

			}else if(totalq != 21 && txtarea == ''){ 
				alert("未入力の項目があります");	
				$("#submit-btn").attr("disabled", "disabled"); 
			 }else{
			 	alert("未入力の項目があります");	
			 	$("#submit-btn").attr("disabled", "disabled");
			 }
				
				
			
				
		});

		/* $("#agreement").click(function () {

		 });*/



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




		/*	 $(".tap").on("click",function(){
						text = $(this).text();
						



						$('.ans1').attr('checked', true);
						

				    alert( val  );
			});          
*/


});// end of document





