$(document).ready(function(){
			
		 $("#left").click(function(){
		
		$("#photograph").stop().animate({left:0},"fast",function(){
		$(this).prepend($(this).children().last());
		$(this).css("left","-670px");
		$("#photograph img").removeClass("center");
		$("#photograph img").eq(2).addClass("center");
				});
			});
		$("#right").click(function(){
	
		$("#photograph").stop().animate({left:"-1540px"},"fast",function(){
		$(this).append($(this).children().first());
		$(this).css("left","-670px");
		$("#photograph img").removeClass("center");
		$("#photograph img").eq(2).addClass("center");
				});
			});
		 
		 
		 $(".mainMenu").on("mouseenter click", function(){
		$(".mainMenu").removeClass("active");
		$("#black").stop().animate({height:"410px"});
		
	
		$(".subMenu").stop().slideDown();
	});  

	$(".subMenu").mouseleave(function(){
		$(".subMenu").stop().slideUp();
	});
	
	
	$(".subMenu").mouseenter(function(){
		$(".mainMenu").removeClass("active");
		$(this).prev().addClass("active");
	});
		 
		 
	$("header>nav").mouseleave(function(){ 
	menu();
	});
	
	/*$(".last").blur(function(){
	menu();
	});*/
	
		function menu(){
		$(".mainMenu").removeClass("active");
		$(".subMenu").stop().slideUp();
		$("#black").stop().animate({height:0});	}
		 
			//$("#curri>nav a").click(function(){
			//$(".").removeClass("active");

			
		$(".logIn").click(function(){
			$(this).hide();
			$("#logInpw").show();
		});	
			
			
		
		$("#curri nav p").click(function(){
				const pos = $(this).index();
				$("#curri div ul").eq(pos).fadeIn().siblings().fadeOut();
				$("#curri nav p").eq(pos).addClass("clickOn").siblings().removeClass();
			});
		
		
		
		
		});//////end
		
		
		
		