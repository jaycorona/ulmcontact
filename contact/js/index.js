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


            $('.checkdisableb8').click(function() {  //on click
				if (this.checked) { // check select status
					$('.cbox8').each(function() { //loop through each checkbox
					    this.checked = false; 
					    $(".cbox8").attr("disabled", true);             
					});
				} else {
					$('.cbox8').each(function() { //loop through each checkbox
						$(".cbox8").removeAttr("disabled");

					});
				}
    		});// end of class checkdisableb7
});


