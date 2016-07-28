"use strict";$(document).ready(function(){var a=[],b=$("#tnd-first-spacer").offset();$(".worm-nodes").each(function(c,d){var e=$(d).offset().top-b.top,f=$(d).offset().left-b.left;a.push([f,e])});{var c=d3.line().curve(d3.curveCardinal.tension(0)),d=$("#tnd-first-spacer").height(),e=$("#tnd-first-spacer").width(),f="0 0 "+e+" "+d,g=d3.select("#tnd-first-spacer").insert("svg",":first-child").datum(a).attr("width",e).attr("height",d).attr("class","worm-svg").attr("viewBox",f);g.append("path").attr("d",c),g.append("circle").attr("r",10).attr("transform","translate("+a[0]+")")}}),$(document).ready(function(){function a(a){var b=a.getTotalLength();$(a).css("stroke-dasharray",b),$(a).css("stroke-dashoffset",b)}function b(a){c=a.getTotalLength(),$(a).css("stroke-dasharray",c),$(a).css("stroke-dashoffset","-"+c)}var c="";$("#pc-group path, #grow-group path, .worm-svg path, #idea-group path, #team-first-line path").each(function(){a(this)}),$("#team-second-line path").each(function(){b(this)});var d=new ScrollMagic.Controller,e=new TimelineMax;e.add(TweenMax.to($("#idea-group path"),1,{strokeDashoffset:0,ease:Linear.easeNone}));var f=new TimelineMax;f.add(TweenMax.to($("#pc-group path"),1,{strokeDashoffset:0,ease:Linear.easeNone}));var g=new TimelineMax;g.add(TweenMax.to($("#grow-group .grow-money"),1,{strokeDashoffset:0,ease:Linear.easeNone})),g.add(TweenMax.to($("#grow-group .grow-leaf"),1,{strokeDashoffset:0,ease:Linear.easeNone}));var h=new TimelineMax;h.add(TweenMax.to($(".worm-svg path"),1,{strokeDashoffset:0,ease:Linear.easeNone}));var i=new TimelineMax;i.add(TweenMax.to($("#team-first-line path"),1,{strokeDashoffset:0,ease:Linear.easeNone}));var j=new TimelineMax;j.add(TweenMax.to($("#team-second-line path"),1,{strokeDashoffset:0,ease:Linear.easeNone}));new ScrollMagic.Scene({triggerElement:"#triggerWorm",duration:300,tweenChanges:!0}).setTween(e).addTo(d),new ScrollMagic.Scene({triggerElement:"#trigger1",duration:500,tweenChanges:!0}).setTween(f).addTo(d),new ScrollMagic.Scene({triggerElement:"#trigger2",duration:400,tweenChanges:!0}).setTween(g).addTo(d),new ScrollMagic.Scene({triggerElement:"#triggerWorm",duration:$("#tnd-first-spacer").height(),tweenChanges:!0}).setTween(h).addTo(d),new ScrollMagic.Scene({triggerElement:"#triggerLine",duration:400,tweenChanges:!0}).setTween(i).addTo(d),new ScrollMagic.Scene({triggerElement:"#triggerLine",duration:400,tweenChanges:!0}).setTween(j).addTo(d)}),$(document).ready(function(){var a=$(".burger"),b=($(".burger__line-top"),$(".burger__line-mid"),$(".burger__menu"),!1),c={addActive:function(){for(var b=0;2>=b;b++)a.children().eq(b).removeClass("reverseLine"+(b+1)).addClass("activeLine"+(b+1))},addReverse:function(){for(var b=0;2>=b;b++)a.children().eq(b).removeClass("activeLine"+(b+1)).addClass("reverseLine"+(b+1))}},d={initial:function(b,c,d,e){a.children().eq(b).css("transform","translateY("+c+"px) rotate("+d+"deg) scale("+e+",1)")},afterActive:function(){setTimeout(function(){this.initial(0,12,45,1.4),this.initial(1,-12,-45,1.4),this.initial(2,35,0,1),a.children().eq(2).css("opacity","0"),b=!0},1300)},beforeReverse:function(){setTimeout(function(){for(var c=0;2>=c;c++)this.initial(c,0,0,1);a.children().eq(2).css("opacity","1"),b=!1},1300)}};a.on("click",function(){b?b&&(c.addReverse(),d.beforeReverse(),$(".navbar").css("right","-417px")):(c.addActive(),d.afterActive(),$(".navbar").css("right","0"))})}),$(document).ready(function(){var a=0,b=!0;$(window).scroll(function(){var d=$(this).scrollTop();$("#tnd-first-slide").offset().top>=$("header").height()&&($("#tnd-first-slide").css("position","relative"),$("#tnd-first-slide").css("top","0px"),$("#tnd-first-spacer").css("position","relative"),b=!0),$(window).scrollTop()>$("#tnd-fourth-spacer").offset().top&&($("#carousel-team .item.active .stamp").css("top","-40px"),$("#carousel-team .item.active #html5-svg").css("left","-49px"),$("#carousel-team .item.active #angular-svg").css("right","-24px"),$("#carousel-team .item.active #ruby-svg").css("right","-15px"),$("#carousel-team .item.active #ios-svg").css("left","-10px"),$("#carousel-team .item.active #swift-svg").css("right","-15px"),$("#carousel-team .item.active #nodejs-svg").css("left","-46px"),$("#carousel-team .item.active #light-svg").css("right","-32px"),$("#carousel-team .item.active #line-chart-svg").css("left","-41px")),a>d?($(window).scrollTop()<$("#tnd-first-spacer").offset().top&&($(".navbar").css("right","-417px"),$(".burger__line-top").hasClass("activeLine1")&&setTimeout(function(){$(".burger").trigger("click")},1e3)),$(window).scrollTop()<$("#tnd-first-slide").offset().top&&($("#tnd-first-slide").css("position","fixed"),$("#tnd-first-spacer").css("position",""))):b&&$(window).scrollTop()>$(".start-animation-write").offset().top&&($("#typed").typed({stringsElement:$("#typed-strings"),loop:!0,backDelay:500,loopCount:2,typeSpeed:100}),b=!1),a=d,c()});var c=function(){window.innerWidth>400&&$(window).scrollTop()<$("#tnd-first-spacer").offset().top?$(".burger").css("top","-90px"):$(".burger").css("top","0")};$("#carousel-team").carousel({interval:999999}),$("#carousel-team").on("slide.bs.carousel",function(){$("#carousel-team .item.active .stamp").css("top","-48px"),$("#carousel-team .item.active #html5-svg").css("left","-218px"),$("#carousel-team .item.active #angular-svg").css("right","-218px"),$("#carousel-team .item.active #ruby-svg").css("right","-218px"),$("#carousel-team .item.active #ios-svg").css("left","-218px"),$("#carousel-team .item.active #swift-svg").css("right","-218px"),$("#carousel-team .item.active #nodejs-svg").css("left","-218px"),$("#carousel-team .item.active #light-svg").css("right","-218px"),$("#carousel-team .item.active #line-chart-svg").css("left","-218px")}),$("#carousel-team").on("slid.bs.carousel",function(){$("#carousel-team .item.active .stamp").css("top","-40px"),$("#carousel-team .item.active #html5-svg").css("left","-49px"),$("#carousel-team .item.active #angular-svg").css("right","-24px"),$("#carousel-team .item.active #ruby-svg").css("right","-15px"),$("#carousel-team .item.active #ios-svg").css("left","-10px"),$("#carousel-team .item.active #nodejs-svg").css("left","-46px"),$("#carousel-team .item.active #swift-svg").css("right","-15px"),$("#carousel-team .item.active #light-svg").css("right","-32px"),$("#carousel-team .item.active #line-chart-svg").css("left","-41px")}),c()}),function(){for(var a,b=function(){},c=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],d=c.length,e=window.console=window.console||{};d--;)a=c[d],e[a]||(e[a]=b)}(),$(document).ready(function(){var a=$("#form4").first();1===a.length&&(a.find(".help-block").bind("DOMSubtreeModified",function(){var a=$(this),b=a.parent(),c=$("#"+a.data("target"))[0];c.validity.valid||"true"===b.data("visible")?c.validity.valid&&"false"!==b.data("visible")&&b.data("visible","false").stop().slideUp():b.data("visible","true").stop().slideDown()}),a.submit(function(a){if(a.target.checkValidity()){var b=$(a.target),c=b.find('button[type="submit"]').text(),d=function(){b.find("input,textarea,button").attr("disabled","disabled"),b.find('button[type="submit"]').text("Sto inviando...")},e=function(){b.find("input,textarea,button").removeAttr("disabled"),b.find('button[type="submit"]').text(c)},f=function(a,c,d){console.error(a),console.error(c),console.error(d),b.find(".alert-danger").slideDown(),e()},g=function(a,c,d){a&&a.status&&(200===a.status.http_code||201===a.status.http_code)&&a.contents&&1===a.contents.Success?(console.log("success!"),b[0].reset(),b.find(".alert-success").slideDown(),e()):f(d,c,a)};d(),$.ajax({url:"https://labini-proxy.herokuapp.com/ba-simple-proxy.php?url=https://chosko.wufoo.com/api/v3/forms/4/entries.json",headers:{Authorization:"Basic Nkk0Si1ZTUEyLUtUU1ctUjhJTDphc2RmYXNkZg=="},dataType:"json",method:"POST",data:{Field12:b.find("#Field12").val(),Field13:b.find("#Field13").val(),Field6:b.find("#Field6").val(),Field7:b.find("#Field7").val()},success:g,error:f})}return!1}))});