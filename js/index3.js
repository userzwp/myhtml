var wrapW = parseInt($(".wrapUl").css("width"))
var wrapH = parseInt($(".wrapUl").css("height"))
var liw = wrapW / 5 ; var lih =wrapH / 5
create()
imgclick()
  function create(){
   for(var i=0;i<5;i++){
	   for(var j=0;j<5;j++){
		   $('<li><div class="box"><img src=""></div></li>').css({
			   "width":liw,
			   "height":lih,
			   "left":liw*j,
			   "top":lih*i,
			   "transform":"scale(0.9) rotate("+(Math.random()*40 - 20)+"deg)"+
			   "translateX("+(j*30-60)+"px)"+
			   "translateY("+(i*30-60)+"px)"+
			   "translateZ(-"+(Math.random()*500)+"px)"
			   
		   }).find("img").attr("src","img/"+(i*5+j)+".jpg").end()
		   .appendTo(".wrapUl")
	   }
   }
}
  function imgclick(){
	  var falg = true
	  
	  $(".wrapUl").find("li").on("click",function(){
		  if(falg){
			  var bgImg = $(this).find("img").attr("src")
			  var bgLeft = 0,bgTop = 0
			  $("li").each(function(index){
				$(this).delay(10*index).animate({"opacity":0},200,function(){
					$(this).css({
						"transform":"scale(1)"+
						"translateX(0px)"+
						"translateY(0px)"+
						"translateZ(0px)"
					});
				$(this).find("img").attr("src",bgImg).css({
				  			"position":"absolute",
				  			"width":wrapW + "px",
				  			"height":wrapH + "px",
				  			"left":-bgLeft,
				  			"top":-bgTop
				  		});
				  		bgLeft +=liw;
				  		if(bgLeft >= wrapW){
				  			bgTop +=lih;
				  			bgLeft = 0;
				  		}
					$(this).animate({"opacity":1},200)
				})
			  })
			  falg = false
		  }else{
	
			falg = true
			$("li").each(function(index){
							  var j = index%5
							  var i = Math.floor(index/5)
							  $(this).animate({"opacity":0},200,function(){
								  $(this).find("img").css({
								  	"position":"absolute",
								  	"width":"100%",
								  	"height":"100%",
								  	"left":0,
								  	"top":0
								  });
								  $(this).find("img").attr("src","img/"+index+".jpg");
								  $(this).css({
								  	"width":liw + "px",
								  	"height":lih + "px",
								  	"left":j*liw,
								  	"top":i*lih,
								  	"transform":"scale(0.9) rotate("+(Math.random()*40 - 20)+"deg)" +
								  	  "translateX("+(30*j - 60)+"px)" +
								  	  "translateY("+(30*i -60)+"px)" +
								  	  "translateZ(-"+(Math.random()*500)+"px)"
								  })
								  
							  })
							  $(this).animate({"opacity":1},200)
			})
		  }
	  })
  }

