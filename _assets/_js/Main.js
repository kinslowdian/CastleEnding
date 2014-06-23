	
	var trace = function(str){ console.log(str); };
	
	var t;
	
	var result = "LOSE";
	
	var DISPLAY = {};
	
	$(document).ready(function(){ init(); });	
	
	
	function init()
	{
		var css;
		
		trace("init();");
		
		DISPLAY._width 			= window.screen.width;
		DISPLAY._height 		= window.screen.height;
		
		DISPLAY.center_X		= Math.floor(($("#wrapper").width() - $("#microBattle_resultWipe_content").width()) * 0.5);
		
		css = 	{
					"-webkit-transform"	: "translateX(" + DISPLAY.center_X + "px)",
					"transform" 		: "translateX(" + DISPLAY.center_X + "px)"
				};
				
		$("#microBattle_resultWipe_content").css(css);
		
		
		test_showEndSequence();
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
		
		// TWEENS
		$("#microBattle_resultWipe_content .microBattle_zombie_walk").addClass("tween-microBattle_zombie_walk");
	}
	
	function test_showEndSequenceSkyStart()
	{
		var css;
		
		css = 	{
					"opacity" 			: "1",
					"-webkit-transform" : "translateY(0)",
					"transform" 		: "translateY(0)"
				};
				
		$("#microBattle_resultWipe_content .microBattle_sunMoon_sprite").css(css);
		
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
	}
	
	// LOSE
	
	function test_showEndSequence_LOSE_stage0()
	{
		var css;
		
		css = 	{
					"-webkit-transform" : "translateY(" + DISPLAY._height + "px)",
					"transform"			: "translateY(" + DISPLAY._height + "px)"
				};
				
		$("#microBattle_resultWipe_content .microBattle_zombie_walk").css(css);			
	}
	