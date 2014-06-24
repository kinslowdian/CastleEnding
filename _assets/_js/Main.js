	
	var trace = function(str){ console.log(str); };
	
	var t;
	
	var result = "WIN";
	
	var DISPLAY = {};
	
	var battleEndAnimation = true;
	
	var mountains;
	
	$(document).ready(function(){ init(); });	
	
	
	function init()
	{
		
		
		trace("init();");
		

		
		
		mountains = {};
		
		
		mountains.width_full 	= $("#microBattle_resultWipe_content .microBattle_endSky").width();
		mountains.width_side 	= $("#microBattle_resultWipe_content .microBattle_endSky_mountainL").width();
		mountains.width_center 	= $("#microBattle_resultWipe_content .microBattle_endSky_mountainC").width();
		
		mountains.space_available 	= 0;
		mountains.space_adjust 		= 0;
		
		
		 $(window).on("resize", fake_screenUpdate);
		 
		 fake_screenUpdate(null);
		
		test_showEndSequence();
	}
	
	
	function fake_screenUpdate(event)
	{
		var css;
		
		DISPLAY._width 			= window.screen.width;
		DISPLAY._height 		= window.screen.height;
		
		DISPLAY.center_X		= Math.floor(($("#wrapper").width() - $("#microBattle_resultWipe_content").width()) * 0.5);
		
		css = 	{
					"-webkit-transform"	: "translateX(" + DISPLAY.center_X + "px)",
					"transform" 		: "translateX(" + DISPLAY.center_X + "px)"
				};
				
		$("#microBattle_resultWipe_content").css(css);
		
		
		
		if(mountains != null || mountains != undefined)
		{
			test_alignMountains_measure();
		}		
	}
	
	function test_showEndSequence()
	{
		if(result === "WIN")
		{
			test_showEndSequence_WIN_set();
		}
		
		if(result === "LOSE")
		{
			test_showEndSequence_LOSE_set();
		}
		
		$("#microBattle_resultWipe_content .microBattle_sunMoon_sprite").addClass("tween-microBattle_sunMoon_sprite");
		
		t = setTimeout(test_showEndSequenceSkyStart, 2000);
	}
	
	function test_showEndSequence_WIN_set()
	{
		// SETTINGS
		$("#microBattle_resultWipe_content .microBattle_castle_tower").addClass("microBattle_castle_tower_WIN");
		
		$("#microBattle_resultWipe_content .microBattle_castle_flag").addClass("microBattle_castle_flag_WIN");
		
		$("#microBattle_resultWipe_content .microBattle_castle_goat").addClass("microBattle_castle_goat_WIN");
		
		$(".microBattle_sunMoon").addClass("microBattle_sunMoon_WIN");
		
		$("#microBattle_resultWipe_content .microBattle_zombie").addClass("microBattle_zombie_WIN");
		
		$("#microBattle_resultWipe_content .microBattle_growField").addClass("microBattle_growField_WIN");
		
		
		// TWEENS
		$("#microBattle_resultWipe_content .microBattle_castle_flag").addClass("tween-microBattle_castle_flag");
		
		$("#microBattle_resultWipe_content .microBattle_castle_goat").addClass("tween-microBattle_castle_goat");
	}
	
	function test_showEndSequence_LOSE_set()
	{
		// SETTINGS
		$("#microBattle_resultWipe_content .microBattle_castle_tower").addClass("microBattle_castle_tower_LOSE");
		
		$("#microBattle_resultWipe_content .microBattle_castle_flag").addClass("microBattle_castle_flag_LOSE");
		
		$("#microBattle_resultWipe_content .microBattle_castle_goat").addClass("microBattle_castle_goat_LOSE");
		
		$("#microBattle_resultWipe_content .microBattle_zombie").addClass("microBattle_zombie_LOSE");
		
		$(".microBattle_sunMoon").addClass("microBattle_sunMoon_LOSE");
		
		$("#microBattle_resultWipe_content .microBattle_growField").addClass("microBattle_growField_LOSE");
		
		// TWEENS
		$("#microBattle_resultWipe_content .microBattle_zombie_walk").addClass("tween-microBattle_zombie_walk");
	}
	
	function test_showEndSequenceSkyStart()
	{
		$("#microBattle_resultWipe_content .microBattle_sunMoon_sprite").removeClass("microBattle_sunMoon_sprite_set").addClass("microBattle_sunMoon_sprite_rise");
		
		$(".tween-microBattle_sunMoon_sprite")[0].addEventListener("webkitTransitionEnd", test_showEndSequenceSkyInPlace, false);
		$(".tween-microBattle_sunMoon_sprite")[0].addEventListener("transitionend", test_showEndSequenceSkyInPlace, false);		
				
	}
	
	function test_showEndSequenceSkyInPlace(event)
	{
		$(".tween-microBattle_sunMoon_sprite")[0].removeEventListener("webkitTransitionEnd", test_showEndSequenceSkyInPlace, false);
		$(".tween-microBattle_sunMoon_sprite")[0].removeEventListener("transitionend", test_showEndSequenceSkyInPlace, false);		
		
		if(result === "WIN")
		{
			test_showEndSequence_WIN_stage0();
		}
		
		if(result === "LOSE")
		{
			test_showEndSequence_LOSE_stage0();
		}
	}
	
	// WIN
	
	function test_showEndSequence_WIN_stage0()
	{
		var css;
		
		css = 	{
					"-webkit-transform" : "translateY(0)",
					"transform"			: "translateY(0)"
				};
		
		$("#microBattle_resultWipe_content .microBattle_castle_flag_WIN").css(css);
		$("#microBattle_resultWipe_content .microBattle_castle_goat_WIN").css(css);
		
		$("#microBattle_resultWipe_content .microBattle_growField").css(css);
		$("#microBattle_resultWipe_content .microBattle_growField").css("opacity", "1");		
	}
	
	// LOSE
	
	function test_showEndSequence_LOSE_stage0()
	{
		var css;
		
		var zombie_y;
		
		zombie_y = $("#microBattle_resultWipe_content .microBattle_endField").height();
		
		css = 	{
					"-webkit-transform" : "translateY(" + zombie_y + "px)",
					"transform"			: "translateY(" + zombie_y + "px)"
				};
				
		$("#microBattle_resultWipe_content .microBattle_zombie_walk").css(css);			
	}
	
	function test_alignMountains_measure()
	{
		mountains.width_full = $("#microBattle_resultWipe_content .microBattle_endSky").width();
		
		mountains.space_available = Math.abs(Math.floor((mountains.width_full - mountains.width_center) * 0.5));
		
		if(mountains.space_available < mountains.width_side)
		{
			mountains.space_adjust = Math.abs(mountains.width_side - mountains.space_available);
			
			test_alignMountains_set($("#microBattle_resultWipe_content .microBattle_endSky_mountainL"), -mountains.space_adjust);
			test_alignMountains_set($("#microBattle_resultWipe_content .microBattle_endSky_mountainR"), mountains.space_adjust);
		}
		
		trace(mountains);		
	}
	
	function test_alignMountains_set(mountain_div, mountain_x)
	{
		var css = 	{
						"-webkit-transform" : "translateX(" + mountain_x + "px)",
						"transform" 		: "translateX(" + mountain_x + "px)"
					};
					
		$(mountain_div).css(css);		
	}
	