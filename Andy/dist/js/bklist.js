function addGood(o){var i=localStorage.getItem(Static.good);i?(i=JSON.parse(i),i.push(o)):i=[o],localStorage.setItem(Static.good,JSON.stringify(i))};var id=0,goods=[{good_id:id++,good_url:"dist/img/good.png",good_name:"物品1",good_price:10},{good_id:id++,good_url:"dist/img/good.png",good_name:"物品2",good_price:20},{good_id:id++,good_url:"dist/img/good.png",good_name:"物品3",good_price:30}],Static={good:"goodlist"},flag=!1;$(".add").click(function(){var o=$(this).parent().siblings(".span2").children("dl").children(".booK_id").html();$(".tip").hide(),flag?($(this).html("&#xe61e;"),$(this).css("color","#EB801E"),$(".tip2").show().css("animation-name","show")):(addGood(o),$(this).html("&#xe621;"),$(this).css("color","#72756E"),$(".tip1").show().css("animation-name","show")),flag=!flag});