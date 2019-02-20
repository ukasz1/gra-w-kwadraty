// jQUERY
	$(document).ready(function(){
		
		if( $("#num5").hasClass('black') ){
			$('.last-h1').addClass('congratulation');}
		
		$('#num5').click(function(){
			$('#num8').toggleClass('black');
			$('#num5').toggleClass('black');
			$('#num6').toggleClass('black');
		});
		
		$('#num6').click(function(){
			$('#num5').toggleClass('black');
			$('#num6').toggleClass('black');
			$('#num7').toggleClass('black');
		});
		
		$('#num7').click(function(){
			$('#num6').toggleClass('black');
			$('#num7').toggleClass('black');
			$('#num8').toggleClass('black');
		});
		
		$('#num8').click(function(){
			$('#num7').toggleClass('black');
			$('#num8').toggleClass('black');
			$('#num5').toggleClass('black');
		});
		
		if(!$("#num5").hasClass('black') ){
			$('.last-h1').addClass('congratulation');}
		
	});