function toggleDialog(){$(".main,.reveal").toggleClass("noEvent");$(".dialog").toggleClass("visible")}function toggleArticle(){$(".main--feed--article").toggleClass("visible");$(".main--feed--list").toggleClass("hide")}function toggleReveal(){$(".reveal").toggleClass("visible");$(".main").toggleClass("fixedItem")}var revealWidth=$(".reveal").width(),revealPosition="",myTimer="",$listElement=$(".main__feed__list--element");$(function(){var e=$(".header").height(),t=$(window).height();$("[data-scrollable]").height(t-e);Hammer($(".showReveal")).on("tap",function(e){console.log(e);toggleReveal()});Hammer($(".hideReveal")).on("tap",function(e){console.log(this,e);toggleReveal()});Hammer($listElement).on("swipe",function(e){console.log(this,e);e.gesture.direction=="left"?$(this).addClass("readed"):e.gesture.direction=="right"&&$(this).removeClass("readed")});Hammer($listElement).on("hold",function(e){toggleDialog()});Hammer($(".dialog__list--cancel")).on("tap",function(e){var t=$(this).data("event");e.preventDefault();t=="closeDialog"&&toggleDialog()});Hammer($listElement).on("tap",function(e){clearTimeout(myTimer);me=$(this);myTimer=setTimeout(function(){var e=me.data("link");console.log(e);$.ajax({type:"GET",url:e,data:{},success:function(e){$(".main__feed__article--element").html(e);toggleArticle()},error:function(e,t,n){console.log(e)}})},175)});Hammer($listElement).on("doubletap",function(e){clearTimeout(myTimer);e.preventDefault();$(this).find(".main__feed__list__element--like").fadeIn(200,function(){$(this).delay(300).fadeOut(400)})});Hammer($(".hideArticle")).on("tap",function(e){toggleArticle()})});