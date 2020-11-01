$(document).ready(function(){

   var button = 0
   $(".title").on("click",function(){
      if (button == 0) {
            $(".img2").animate({
                opacity: '100%'
            }, 3400);
            $(".img").animate({
                opacity: '0%'
            },3400);
           button = 1;
       } else if (button == 1) { 
            $(".img2").animate({
                opacity: '0%'
            },3400);
            $(".img").animate({
                opacity: '100%'
            },3400);
            button = 0;
       }
   }) 
    $(".title").on('click', function(){
    	$('.door1').animate({
    		left:'0px'
    	},1500)
    	.animate({
    		delay:'2s'
    	})
    	.animate({
    		left:'-1000px'
    	},1000)
    });
    $(".text").click(function(){
    	$(".img2").animate({
    		opacity: '0%'
    	},1500);
    });
    $(".title").on('click', function(){
    	$('.door2').animate({
    		left:'0px'
    	},1500)
    	.animate({
    		delay:'2s'
    	})
    	.animate({
    		left:'1000px'
    	},1000)
    });


})




