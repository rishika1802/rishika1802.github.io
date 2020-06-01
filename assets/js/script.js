$( document ).ready(function() {
                
                $("#about_scroll").fadeOut();   
                $("#work_scroll").fadeOut();
                $("#projects_scroll").fadeOut();
                $("#skills_scroll").fadeOut();
                $("#achievements_scroll").fadeOut();
                
                $("#contact_scroll").fadeOut();

                $("#about").click(function(){
                    $("#index").fadeOut();
                    $("#about_scroll").fadeIn();
                    $('#about_left').addClass('animated slideInLeft');
                    $('#about_right').addClass('animated slideInRight');
                    });
                $("#work").click(function(){
                    $("#index").fadeOut();
                    $("#work_scroll").fadeIn();
                    $('#work_left').addClass('animated slideInLeft');
                    $('#work_right').addClass('animated slideInRight');
                    });
                $("#projects").click(function(){
                    $("#index").fadeOut();
                    $("#projects_scroll").fadeIn();
                    $('#projects_left').addClass('animated slideInLeft');
                    $('#projects_right').addClass('animated slideInRight');
                    });
                $("#skills").click(function(){
                    $("#index").fadeOut();
                    $("#skills_scroll").fadeIn();
                    $('#skills_left').addClass('animated slideInLeft');
                    $('#skills_right').addClass('animated slideInRight');
                    });
                $("#achievements").click(function(){
                    $("#index").fadeOut();
                    $("#achievements_scroll").fadeIn();
                    $('#achievements_left').addClass('animated slideInLeft');
                    $('#achievements_right').addClass('animated slideInRight');
                    });
                $("#contact").click(function(){
                    $("#index").fadeOut();
                    $("#contact_scroll").fadeIn();
                    $('#contact_left').addClass('animated slideInLeft');
                    $('#contact_right').addClass('animated slideInRight');
                    });
                
                $(".back").click(function(){
                    $(".pages").fadeOut();
                    $("#index").fadeIn();
                    $('#index_left').addClass('animated slideInLeft');
                    $('#index_right').addClass('animated slideInRight');
                    });
           
		});