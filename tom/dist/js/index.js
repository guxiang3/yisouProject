"use strict";var xhr=$.ajax("./json/data.json",{success:function(){function o(){var o=localStorage.getItem(i.good);if(o){o=JSON.parse(o);for(var t=[],s=0;s<o.length;s++)console.log(o[0]),t.push(n(o[s]));console.log(t),e(t)}else document.getElementById("content").innerHTML="此购物车没有任何东西"}function e(o){var e={list:o},n=template("box",e);document.getElementById("content").innerHTML=n,$(".del").click(function(){var o=$(this);t($(this).data("id"),function(e){e?o.parents(".book").remove():alert("删除失败，请重试")})})}function t(o,e){var t=localStorage.getItem(i.good);t=JSON.parse(t)||[];for(var n=0;n<t.length;n++)if(t[n]==o)return t.splice(n,1),localStorage.setItem(i.good,JSON.stringify(t)),void e(!0);e(!1)}function n(o){for(var e=0;e<s.length;e++)if(s[e].book_id==o)return s[e]}var s=JSON.parse(xhr.responseText);console.log(s);var i={good:"goodlist"};o()}});$(function(){var o=!1;$("#tab").on("click",function(){o?$("#bookshelf").animate({left:"0%"},function(){$(".bookshelf_header").css({position:"fixed"}),$(".bookshelf_footer").css({position:"fixed"})}):($(".bookshelf_header").css({position:"absolute"}),$(".bookshelf_footer").css({position:"absolute"}),$("#bookshelf").animate({left:"80%"})),o=!o})}),$(function(){touch.on("#content","swiperight",function(o){$(".bookshelf_header").css({position:"absolute"}),$(".bookshelf_footer").css({position:"absolute"}),$("#bookshelf").animate({left:"80%"})}),touch.on("#content","swipeleft",function(o){$("#bookshelf").animate({left:"0%"},function(){$(".bookshelf_header").css({position:"fixed"}),$(".bookshelf_footer").css({position:"fixed"})})})}),$(function(){$(".tab").on("click",function(){$(".tab").removeClass("bookshelf_footer_color"),$(this).addClass("bookshelf_footer_color")})});