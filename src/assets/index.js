$(document).ready(function(){let e=!1;var s=0;dark=!1,null===localStorage.getItem("darkMode")&&localStorage.setItem("darkMode","false"),changeTheme(),$(".header").each(function(){s+=30+$(this).outerHeight()}),s+="px",$(".sec-1, .awards-sec-1, .interests-sec-1, .educ-sec-1, .friends-sec-1").css("padding-top",s),$(window).scroll(function(){$(window).scrollTop()>=1e3?$("#to-Top").addClass("button-scrolled"):$("#to-Top").removeClass("button-scrolled")}),$(window).scroll(function(){0>=$(window).scrollTop()?$(".header").removeClass("header-scrolled"):$(".header").addClass("header-scrolled")}),$(".toggle-ball, .mobile-toggle-ball").click(function(){dark?(localStorage.setItem("darkMode","false"),dark=!1,changeTheme()):(dark=!0,localStorage.setItem("darkMode","true"),changeTheme())}),$(".btn-bars").click(function(){e?($(this).removeClass("close"),$(".menu-div").removeClass("animate"),$("body").css("overflow-y","visible"),$(".mobile-body-dim").css("display","none"),e=!1):($(this).addClass("close"),$(".menu-div").addClass("animate"),$("body").css("overflow-y","hidden"),$(".mobile-body-dim").css("display","block"),e=!0)}),$(".mobile-body-dim").click(function(){$(".btn-bars").removeClass("close"),$(".menu-div").removeClass("animate"),$("body").css("overflow-y","visible"),$(".mobile-body-dim").css("display","none"),e=!1})});function changeTheme(){"true"===localStorage.getItem("darkMode")?($(".toggle-ball").addClass("active"),$(".mobile-toggle-ball").addClass("active"),$("body, #header, .nav-wide li a, .menu-div, .mobile-nav-a, .btn-line, img, .banner, .offers-wrapper > div, .educ-sec-2 ul li .content, .educ-sec-2 ul li .content p, .testimonies-content h4, .testimonies-content p:nth-child(3), .wrapper-body, .friends-sec-2 img, .interests-cards, .interests-image-holder:not(.interests-sec-2 .interests-image-holder) img, .interests-cards, .interests-text-holder p:nth-child(3)").addClass("dark")):($(".toggle-ball").removeClass("active"),$(".mobile-toggle-ball").removeClass("active"),$("body, #header, .nav-wide li a, .menu-div, .mobile-nav-a, .btn-line, img, .banner, .offers-wrapper > div, .educ-sec-2 ul li .content, .educ-sec-2 ul li .content p, .testimonies-content h4, .testimonies-content p:nth-child(3), .wrapper-body, .friends-sec-2 img, .interests-cards, .interests-image-holder:not(.interests-sec-2 .interests-image-holder) img, .interests-cards, .interests-text-holder p:nth-child(3)").removeClass("dark"))}