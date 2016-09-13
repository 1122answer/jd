

$(window).load(function(){
	//banner选项卡

	(function(){		
		var aItem=$("#cate-box .cate-items").children();		
		var aSubItem=$("#cate-box .dropdown-layer").children();	    
		aItem.each(function(index){		
				$(this).mouseover(function(){
					$("#cate-box .dropdown-layer").show();
					aSubItem.hide().eq(index).show();
				});
				$(this).mouseout(function(){
					$("#cate-box .dropdown-layer").hide();
				});
		});
	})();
	
	   //楼层标题切换选项卡
	   (function(){
	   	  tabFn($('#clothes'));
	   	  tabFn($("#cosmetics"));
	   	  tabFn($('#mobiles'));
	   	  
	   	  function tabFn(oTab){
		   	  var aTitem=oTab.find('.tab-item');
		   	  var aMain=oTab.find('.main');
		   	     aTitem.each(function(index){
		   	     	$(this).mouseover(function(){
		   	     		$(this).addClass("tab-selected").siblings().removeClass("tab-selected");
		   	     		aMain.hide().eq(index).fadeIn();
		   	     	})
		   	     })
	   	  }

	   })();
	   
	   //update、share文字滑动
	    (function(){
             upDate($('#share .share-w'));
             upDate($('#news .update-box'));
             
             function upDate(box){
             	var iNow=0;
		    	var iH=box.find('li').outerHeight(true);
		    	var num=box.find('li').size()
		    	var timer=null;
		    	timer=setInterval(doMove,3500);
		    	box.hover(function(){
		    		clearInterval(timer);
		    	},function(){
		    	timer=setInterval(doMove,3500);
		    	})
		    	function doMove(){
		    		iNow+=-1;
		    		if(Math.abs(iNow)>num-2){
		    			iNow=0;
		    		}
		    	    box.find('ul').stop().animate({ 'top': iH*iNow }, 500);
		    	}
             }

	    })();
	   
	   
	    //楼层主体图片无缝滑动
	    (function(){
		    sliderFn($("#clothes"));
		    sliderFn($("#cosmetics"));
		    sliderFn($('#mobiles'));
		    sliderFn($('#todays'));
		    function sliderFn(aSlider){
				  var clone=aSlider.find(".slider-panel").first().clone();		
			      var i=0;
			      aSlider.find('.slider-main').append(clone);
			      var size=aSlider.find(" .slider-panel ").size();
			      var oLi=aSlider.find(" .slider-panel ").eq(0);
			      var iw=oLi.width();
			      //点击向左滑动;
			      aSlider.find('.prev').click(function(){
			        i--;
			        if (i==-1) {
			          aSlider.find(".slider-main").css({left:-(size-1)*iw});
			          i=size-2;
			        }
			        aSlider.find(".slider-main").stop().animate({left:-i*iw},500);
			        aSlider.find(".slider-item").eq(i).addClass('slider-selected').siblings().removeClass('slider-selected');
			      })
			      //点击向右滑动
			      aSlider.find('.next').click(function(){
			        moveR();
			      });
			      function moveR(){
			        i++;
			        if (i==size) {
			           aSlider.find(".slider-main").css({left:0});
			           i=1;
			        }        
			        aSlider.find(".slider-main").stop().animate({left:-i*iw}, 500);
			        if (i==size-1) {
			          aSlider.find(".slider-item").eq(0).addClass('slider-selected').siblings().removeClass('slider-selected');
			        }else{
			          aSlider.find(".slider-item").eq(i).addClass('slider-selected').siblings().removeClass('slider-selected');
			        }
			      }		
			      //鼠标移入slider-page显示
				    aSlider.find(" .slider").hover(function(){
					        aSlider.find(" .slider-page").show();
					        clearInterval(timer);
					        },function(){
					        aSlider.find(" .slider-page").hide();
					        autoPlay();
					});			  
			      if(aSlider===$('#todays')){alert(0);};
			      //鼠标移入nav
			      aSlider.find('.slider-item').each(function(index){
			            $(this).mouseover(function(){
			              $(this).addClass('slider-selected').siblings().removeClass('slider-selected');
			              aSlider.find(".slider-main").stop().animate({left:-index*iw}, 500);
			            })
			      })
			      
			     
			      //自动播放
			      var timer=null;
			      function autoPlay(){
			      timer=setInterval(function(){moveR();},3000)
			      };
			      autoPlay();

		    };
	    })();
  

        (function(){
	        	        //浮动楼层
		   	// @ 给窗口加滚动条事件
		    $(window).scroll(function(){
		    	var oLi=$('#elevator ul li')
		      // 获得窗口滚动上去的距离
		      var ling = $(document).scrollTop();
	
		      //保存楼层距离
		       var quat=$("#quality").offset();
		       var clot=$("#clothes").offset();
		       var cost=$('#cosmetics').offset();
		       var mobt=$('#mobiles').offset();
		      // 在标题栏显示滚动的距离
		      document.title = ling;
		      console.log(mobt.top)
		      // 如果滚动距离到达“品质生活”的时候让滚动框出来
		     if(ling>quat.top){
		        $('#elevator').show();
		      }
		     if(ling>quat.top && ling<cost.top-100){
		        // 让第一层的数字隐藏，文字显示，让其他兄弟元素的li数字显示，文字隐藏
	              floorTab(0,$("#clothes"));
		      }else if(ling<mobt.top-100){
	              floorTab(1,$('#cosmetics'));
		      }else if(ling<mobt.top+700){
		         floorTab(2,$('#mobiles'));
		      }else if(ling<mobt.top+770*2){
		        floorTab(3,$('#mobiles'));
		      }else if(ling<mobt.top+770*3){
		        floorTab(4,$('#mobiles'));
		      }else if(ling<5460){
		        floorTab(5,$('#mobiles'));
		      }else if(ling<6035){
		        floorTab(6,$('#mobiles'));
		      }else if(ling<6645){
		        floorTab(7,$('#mobiles'));
		      }else if(ling<7360){
		        floorTab(8,$('#mobiles'));
		      }else if(ling<7905){
		        floorTab(9,$('#mobiles'));
		      }else if(ling<8790){
		        floorTab(10,$('#mobiles'));
		      }
		      if(ling>8800 || ling<1000){
		        $('#elevator').hide();
		      }
		     
			     //楼层切换函数
			     function floorTab(a,obj){
			     	oLi.eq(a).addClass('current').siblings().removeClass('current');
			        $('.floor').removeClass('floor-current');
			        obj.addClass('floor-current');
			     }
			     //楼层移入移出
			    oLi.hover(function(){
					 $(this).addClass("hover");},function(){$(this).removeClass('hover');
				})
		        //楼层点击事件
			    oLi.each(function(index){
				    $(this).click(function(){
				        if (index==0) {
				         $("body").stop().animate({scrollTop:clot.top},800)
				        }
				        else if (index==1) {
				          $("body").stop().animate({scrollTop:cost.top},800)
				        }else if(index==2){
				        $("body").stop().animate({scrollTop:mobt.top},800)
				        }
				    });
				});
	        })
        })();
        
        //banner 图片渐隐轮播
		(function(){
			var oSlider=$("#banner .slider");
			var oNav=$("#banner .slider-nav");
			var oPage=$("#banner .slider-page");
			var prev=$("#banner .prev");
			var next=$("#banner .next");
			var aItem=oNav.find('li');
			var aPanerl=$("#banner .slider-main li");
			var iNow=0;
			var timer=null;
			//自动轮播
			function autoPlay(){
				iNow++;
				if(iNow==aItem.length){
					iNow=0;
				}
				toShow();
			}
			//左边轮播
			function playLeft(){
				iNow--;
				if(iNow==-1){
					iNow=aItem.length-1
				}
				toShow();
			}
			//轮播主体函数
			function toShow(){
				aItem.each(function(index){
					aItem.removeClass('slider-selected');
					
				})
				aItem.eq(iNow).addClass('slider-selected');
				aPanerl.each(function(index){
					aPanerl.css("z-index","0");
					aPanerl.fadeOut(500);
					
				})
				aPanerl.eq(iNow).css("z-index","1");
				aPanerl.eq(iNow).fadeIn(500);
				
			}
			//移入停止定时器，移出开定时器
			oSlider.hover(function(){
				clearInterval(timer);
				oPage.show();
			},function(){
				clearInterval(timer);
				timer = setInterval(autoPlay,3000);
				oPage.hide();
			});
			//换页点击事件
			prev.click(function(){
				playLeft();
			});
			next.click(function(){
				autoPlay();
			})
			//鼠标移入nav事件
			aItem.each(function(index){
				$(this).mouseover(function(){
					iNow=index;
					toShow();
				})
			});
			timer = setInterval(autoPlay,3000);
		})();
        

});

//window.onload=function(){
// var obanner=document.getElementById("banner");
//var oSlider=getByClass(obanner,'slider')[0];
//var oSlidern=getByClass(oSlider,"slider-nav")[0];
//var oSpage=getByClass(oSlider,"slider-page")[0];
//var oSprev=getByClass(oSlider,"prev")[0];
//var oSnext=getByClass(oSlider,"next")[0];
//
//var aLi=oSlidern.getElementsByTagName("li");
//var aSliderp=getByClass(oSlider,"slider-panel");
//
//var iNow=0;
//var timer=null;
//var iZ=3;
//function autoPlay(){
//	
//  iNow++;
//  if(iNow==aSliderp.length){
//    iNow = 0;
//  }
//  toShow();
//}  
//function playL(){
//	iNow--;
//	if(iNow==-1){
//		iNow=aSliderp.length-1;
//	}
//	toShow();
//}
//function toShow(){
//  for(var i=0;i< aSliderp.length;i++){
//    aLi[i].className='';
//    aSliderp[i].style.zIndex=0;
//  }
//  for (var i = 0; i < aSliderp.length; i++) {
//    startMove(aSliderp[i],{opacity:0});
//  }
//  aLi[iNow].className = 'slider-selected';
//  aSliderp[iNow].style.zIndex=1;
//  startMove(aSliderp[iNow],{opacity:100});
//}
//oSlider.onmousemove=function(){
//	clearInterval(timer);
//	oSpage.style.display="block";
//}
//oSlider.onmouseout=function(){
//	clearInterval(timer);
//	timer = setInterval(autoPlay,3000);
//	oSpage.style.display="none";
//}
//oSprev.onclick=function(){
//	playL();
//}
//oSnext.onclick=function(){
//	autoPlay();
//}
//for (i=0;i<aLi.length;i++) {
//	aLi[i].index=i;
//	for (j=0;j<aLi.length;j++) {
//		aLi[j].onmousemove=function(){
//			iNow=this.index;
//			toShow();
//		}
//	}
//}
//timer = setInterval(autoPlay,3000);
//
//}

