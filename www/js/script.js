/* Template: Syntac | Author: eriktailor | Version: 1.1 */
/*--------------------------------------------------------------------- */

$(document).ready(function(){
/*--------------------------- Start Document ---------------------------*/


/*--------------------------------------------------------------------- */
/* # Header Layout Options */
/*--------------------------------------------------------------------- */
	
	$(function(){

		var header = $('#header');
	
		if(header.hasClass('video')){
			$('#bg-video').show();
			header.css('background','transparent');
		} else if(header.hasClass('slider')){
			$('#background-slider').show();
			header.css('background','transparent');
		};

	});	
	


/*--------------------------------------------------------------------- */
/* # Navigation / Menu Items */
/*--------------------------------------------------------------------- */

	/* Highlight Active */
	$(function(){

		var menuItem = $('#menu a');
		
		menuItem.click(function(){
			menuItem.removeClass('active');
			$(this).addClass('active');
		});

	});
	
	/* Submenu */
	$(function(){
	
			var submenu = $('#submenu'),
				menuLi  = $('.menu li');			
			


				menuLi.mouseenter(function(e){
					$('.submenu').hide();
					if($(this).hasClass('multi-menu')){
						submenu.slideDown(200);
					} else {
						submenu.slideUp(200);
					};
					var submenuData = $(this).data('submenu');
					$('.submenu').filter("[data-submenu='" + submenuData + "']").show();
				});

				submenu.mouseleave(function(e){
					submenu.slideUp(200);
					e.preventDefault();
				});
				
			$('.submenu li').clone().appendTo('.menu').addClass('submenu-item').hide();
			$('.submenu-item').children('a').removeClass('submenu-active');
				
	});
	
	

/*--------------------------------------------------------------------- */
/* # Navigation / Mobile Menu */
/*--------------------------------------------------------------------- */

	/* Sticky Nav */
	$("#navbar").waypoint('sticky', {
	  offset: -500
	});


	/* Mobile Menu */
	$(function() {
		
		var mobileMenu 	= $('.mobile-menu');
			menu 		= $('.menu');
			menuHeight	= menu.height();

		$(mobileMenu).on('click', function(e) {
			e.stopPropagation();
			e.preventDefault();
			menu.slideToggle();
		});
			
		$(window).resize(function(){
			var w = $(window).width();
			if(w > 760 && menu.is(':hidden')) {
				menu.removeAttr('style');
			}
		});
			
	});
	
/*--------------------------------------------------------------------- */
/* # Navigation / Back Top */
/*--------------------------------------------------------------------- */

$(function(){

	$(window).scroll(function () {
		if ($(this).scrollTop() > 600) {
			$('#back-top').removeClass('downscaled');
		} else {
			$('#back-top').addClass('downscaled');
		}
	});	
	
	$('#back-top').click(function(){
			$('body,html').animate({ scrollTop: 0 }, 800);
			return false;
	});
	
});

/*--------------------------------------------------------------------- */
/* # My Profile / Profile Tabs */
/*--------------------------------------------------------------------- */

$(function(){

	var pContent = $('.profile-tabs-content div'),
		pTabs = $('.profile-tabs li');

	pContent.hide();
	pContent.eq(1).show();
		
	pTabs.click(function(){
		pTabs.removeClass('active animated bounceIn');
		$(this).addClass('active animated bounceIn');
		pContent.hide();
		
		var indexer = $(this).index(),
		pShown = $('.profile-tabs-content div:eq(' + indexer + ')');
		
		pShown.fadeIn(500);
	});

});

/*--------------------------------------------------------------------- */
/* # Resume / Skill Bars */
/*--------------------------------------------------------------------- */

$(function(){
	
	var skillBar = $('.skill-bar');
		
	var createBar =	function(math){
		
		skillBar.each(function(){
				
			var percent = $(this).data('percent'),
				skillBarWidth = percent * math + 'px';
				
			$(this).css('width', skillBarWidth);
					
		});	
	};
	
	var math = 3.6;
	
	var loadBar = function(){
	
		var w = $(window).width();
		
		if(w < 479) {
			createBar(math / 1.8);
		} else if(w < 959) {
			createBar(math /1.35);
		} else {
			createBar(math);
		};	
		
	};
	
	$(window).load(function(){loadBar();});	
	$(window).resize(function(){loadBar();});		
		
});

/*--------------------------------------------------------------------- */
/* # Animation Effects */
/*--------------------------------------------------------------------- */

	// If you don't want one of theese animations, 
	// just simply uncomment or delete them
	

	// Nav Icons
	$('.menu i').addClass('animated fadeInDown');

	// Page Titles
	$('#header').waypoint(function() {
	
	  $('.page-title').addClass('animated fadeInUp');
	  
	}, { offset: -100 });
	
	
	// My Profile / Profile infos
	$('#profile').waypoint(function(){
	
		var $items = $('.profile-info p');
		
		$items.each(function(i){
			$(this).css({
				'-webkit-animation-delay': (i*0.4)+"s",
				'-moz-animation-delay': (i*0.4)+"s",
				'-ms-animation-delay': (i*0.4)+"s",	
				'-o-animation-delay': (i*0.4)+"s",	
				'animation-delay': (i*0.4)+"s"				
			});
		});
		
		$items.addClass('animated fadeInLeftBig');
		
	}, {offset: 300});	
	
	
	// Services / Process Parts
	$('#process').waypoint(function(){
		
		$('.process-part').addClass('animated fadeInUp');
		
	}, {offset: 800});		


	// Portfolio / Filters
	$('#portfolio').waypoint(function(){
		
		$('.filter').addClass('animated bounceIn');
		
	}, {offset: 800});	

	
	// Portfolio / Portfolio Items
	$('#portfolio-wrapper').waypoint(function(){
	
		$('#portfolio-wrapper').addClass('animated fadeInDown');
		
	}, {offset: 600});


	// Resume / Skill Bars
	$('#resume').waypoint(function(){
	
		var $items = $('.skill');
		
		$items.each(function(i){
			$(this).css({
				'-webkit-animation-delay': (i*0.3)+"s",
				'-moz-animation-delay': (i*0.3)+"s",
				'-ms-animation-delay': (i*0.3)+"s",	
				'-o-animation-delay': (i*0.3)+"s",	
				'animation-delay': (i*0.3)+"s"				
			});
		});
		
		$items.addClass('animated fadeInRightBig');	
		
	}, {offset: 800});
	
	
	// Button Bar / Button
	$('.button').hover(function(){
		$(this).addClass('animated flipInX').css('animation-duration','1.3s');
	});
	
	// Contact / Input Fields
	$('#contact').waypoint(function(){
	
		var $items = $('.contact-details li');
		
		$items.each(function(i){
			$(this).css({
				'-webkit-animation-delay': (i*0.3)+"s",
				'-moz-animation-delay': (i*0.3)+"s",
				'-ms-animation-delay': (i*0.3)+"s",	
				'-o-animation-delay': (i*0.3)+"s",	
				'animation-delay': (i*0.3)+"s"				
			});
		});
		
		$items.addClass('animated fadeInRightBig');	
		
	}, {offset: 800});

	
/*--------------------------------------------------------------------- */
/* # Header Layout Function */
/*--------------------------------------------------------------------- */

$(function(){

	var header = $('#header');		
	
	if(header.hasClass('slider')){
		header.css('background','transparent');
	};	
	
});

/*--------------------------------------------------------------------- */
/* # Contact Form */
/*--------------------------------------------------------------------- */

$(function() {

	$("#contact-form").on("submit",function(e){
    
		if($("#contact-form")[0].checkValidity()) {
			$.post("mailer.php", $("#contact-form").serialize(),  function(response) {
				$('#success').fadeIn(500).html(response);
				$("#contact-form .button").hide();
				$("#contact-form").css('opacity','0');
				e.preventDefault();
			});
		} else console.log("invalid form");
			e.preventDefault(); // stop actual submission
	});
  
});

/*--------------------------------------------------------------------- */
/* # Contact Form */
/*--------------------------------------------------------------------- */

$(function() {

	var videoSize = function(){
		var w = $(window).width();
		$('#bg-video').attr('width',w);	
	};
	videoSize();

	$(window).resize(function(){
		videoSize();
	});


	new MediaElement('bg-video', {
		// shows debug errors on screen
		enablePluginDebug: false,
		// remove or reorder to change plugin priority
		plugins: ['flash','silverlight'],
		// specify to force MediaElement to use a particular video or audio type
		type: '',
		// path to Flash and Silverlight plugins
		pluginPath: '/myjsfiles/',
		// name of flash file
		flashName: 'flashmediaelement.swf',
		// name of silverlight file
		silverlightName: 'silverlightmediaelement.xap',
		// default if the <video width> is not specified
		defaultVideoWidth: 480,
		// default if the <video height> is not specified    
		defaultVideoHeight: 270,
		// overrides <video width>
		pluginWidth: -1,
		// overrides <video height>      
		pluginHeight: -1,
		// rate in milliseconds for Flash and Silverlight to fire the timeupdate event
		// larger number is less accurate, but less strain on plugin->JavaScript bridge
		timerRate: 250,
		// method that fires when the Flash or Silverlight object is ready
		success: function (mediaElement, domObject) {
			 
			// add event listener
			mediaElement.addEventListener('timeupdate', function(e) {
				 
			   // document.getElementById('current-time').innerHTML = mediaElement.currentTime;
				 
			}, false);
			 
			// call the play method
			mediaElement.play();
			 
		},
		// fires when a problem is detected
		error: function () {
		 
		}
	});

});


/*--------------------------- End Document ---------------------------*/
});

































