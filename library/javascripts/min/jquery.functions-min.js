jQuery(document).ready(function($){var e=function(){var e=0;return function(a,n){clearTimeout(e),e=setTimeout(a,n)}}();e(function(){$("#logo").addClass("top-change"),$("#links").addClass("margin-return")},300),$(window).on("scroll",function(){var e=window.pageYOffset,a=150;e>a&&$("#logo").addClass("active"),a>e&&$("#logo").removeClass("active")}),$(".flex-btn").click(function(){$(this).hasClass("flex-active")?($(this).removeClass("flex-active"),$(".flex-nav").removeClass("flex-expand"),$("#container").removeClass("container-expand"),$("body").removeClass("no-scroll"),$("#flex-overlay").hide()):($(this).addClass("flex-active"),$(".flex-nav").addClass("flex-expand"),$("#container").addClass("container-expand"),$("body").addClass("no-scroll"),$("#flex-overlay").fadeIn()),$(".flex-nav").scrollTop(0)}),$("#flex-overlay").click(function(){$(".flex-btn").hasClass("flex-active")?($(".flex-btn").removeClass("flex-active"),$(".flex-nav").removeClass("flex-expand"),$("#container").removeClass("container-expand"),$("body").removeClass("no-scroll"),$("#nav-toggle").removeClass("active"),$("#flex-overlay").hide()):($(this).addClass("flex-active"),$(".flex-nav").addClass("flex-expand"),$("#container").addClass("container-expand"),$("body").addClass("no-scroll"),$("#flex-overlay").fadeIn()),$(".flex-nav").scrollTop(0)}),$("#nav-toggle").click(function(){$(this).toggleClass("active")}),$(".arrow-anchor").click(function(){var e=$(this).attr("data-target");$("html, body").animate({scrollTop:$(e).offset().top},700)}),$(".nav-item",this).hoverIntent(function(){$(this).addClass("nav-active"),$(".sub-nav",this).slideDown(250)},function(){$(".sub-nav",this).hide(),$(this).removeClass("nav-active")}),$("#ajax-search").click(function(){var e=$("#search-input").val();return $("#search-form").addClass("active"),$("html, body").animate({scrollTop:$("#container").offset().top},200),$("#search-term").html(""!==e?"Showing results for ... <strong>"+e+"</strong>":""),!1}),$("#search-input").keyup(function(a){a.preventDefault();var n=$("#search-input").val();e(function(){return $("#search-form").addClass("active"),$("html, body").animate({scrollTop:$("#container").offset().top},200),$("#search-term").html(""!==n?"Showing results for ... <strong>"+n+"</strong>":""),!1},500)}),$("#search-close").click(function(){return $("#search-form").removeClass("active"),$("#search-input").val(""),!1})});