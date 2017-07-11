$(document).ready(function() {
	

var header = new Headhesive('.menu');


   //меню кодов ошибок 
   
  // $(window).resize(function() {
  //  width = $(window).width();
  //  if (width >= 768) {
        //ваши скрипты

   
   
    //    var RBStickyNav = $('.RBsticky-element').offset().top;
    //    var stickyNav = function() {
   //         var scrollTop = $(window).scrollTop();
   //         if (scrollTop > RBStickyNav) {
  //              $('.RBsticky-element').addClass('RBSticky');
   //         } else {
   //             $('.RBsticky-element').removeClass('RBSticky');
   //         }
   //     };
   //     stickyNav();
   //     $(window).scroll(function() {
   //         stickyNav();
     //   });
    
 //   }
//});


	var $hero =  jQuery("#machine");
setInterval(function(){
	$hero.removeClass("idle").addClass("open");
	setTimeout(function(){	
		$hero.removeClass("open").addClass("idle");
	},4000);
},10000);
	
	 
	
	
	
	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$(".abou").click(function() {
		$.scrollTo($(".extra-wrap1"), 800, {
			offset: -40
		});
	});
$(".pric").click(function() {
		$.scrollTo($(".price-list"), 800, {
			offset: -40
		});
	});
	
	$(".ArdoWR").click(function() {
		$.scrollTo($(".ardoWrong"), 800, {
			offset: -50
		});
	});
	
	$(".AristonWR").click(function() {
		$.scrollTo($(".aristonWrong"), 800, {
			offset: -50
		});
	});
	
	$(".Elux1WR").click(function() {
		$.scrollTo($(".Elux1000Wrong"), 800, {
			offset: -50
		});
	});
	
	$(".Elux2WR").click(function() {
		$.scrollTo($(".Elux2000Wrong"), 800, {
			offset: -50
		});
	});
	
	$(".LGWR").click(function() {
		$.scrollTo($(".LGWrong"), 800, {
			offset: -50
		});
	});

	$(".CandyWR").click(function() {
		$.scrollTo($(".CandyWrong"), 800, {
			offset: -50
		});
	});
	
	$(".SamsungWR").click(function() {
		$.scrollTo($(".SamsungWrong"), 800, {
			offset: -50
		});
	});
	
	$(".GorenjeWR").click(function() {
		$.scrollTo($(".GorenjeWrong"), 800, {
			offset: -50
		});
	});
	
	$(".BoschWR").click(function() {
		$.scrollTo($(".BoschWrong"), 800, {
			offset: -50
		});
	});
	
	$(".WhirlpoolWR").click(function() {
		$.scrollTo($(".WhirlpoolWrong"), 800, {
			offset: -50
		});
	});
	
	$(".BekoWR").click(function() {
		$.scrollTo($(".BekoWrong"), 800, {
			offset: -50
		});
	});
	
	$(".MieleWR").click(function() {
		$.scrollTo($(".MieleWrong"), 800, {
			offset: -50
		});
	});
	
	$(".KaiserWR").click(function() {
		$.scrollTo($(".KaiserWrong"), 800, {
			offset: -50
		});
	});
	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	


});
