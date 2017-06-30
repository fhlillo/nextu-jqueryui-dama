// JavaScript Document
$(document).ready(function(){
	b = 0;
	for(i=0;i<8;i++){
		var estructura  = "<div class='row'>";
		for(a=0;a<8;a++){
			estructura +="<div id='"+i+"-"+a+"' class='";
			if(b == 0){
				estructura += "blanco";
				b = 1;
			}else{
				estructura +="negro";
				b = 0;
			}
			estructura +="'>"
			if(i<=2 & b == 1){
				estructura +="<div class='ficha-rojo' id='fil-"+i+"-col-"+a+"'></div>";
			}else if(i>4 & b == 1){
				estructura +="<div class='ficha-azul'></div>";				
			}
			estructura +="</div>";
		}
		if(b == 0){
			b = 1;
		}else{
			b=0;
		}
		estructura += "</div>";
		$("#tablero").append(estructura);
	}

	$(".ficha-rojo").draggable({ revert: 'invalid', containment: "#tablero" });
	$(".ficha-azul").draggable({ revert: 'invalid', containment: "#tablero" });
	
	for(i=0;i<8;i++){
		for(a=0;a<8;a++){ 
			var box_tablero = i+"-"+a;
			$("#"+box_tablero).droppable({
				drop: function(event, ui){
					var pos_actual = $(this).attr("id").split("-");
					var pos_anterior = ui.draggable.parent().attr("id").split("-");
					$(ui.draggable).appendTo($(this));
					if(ui.draggable.hasClass("ficha-rojo")){
						if((parseInt(pos_actual[0])-2) == parseInt(pos_anterior[0])){
							alert("comer");
						}else{
							alert("no comer");
						}
					}else{
						alert("nulo");
					}
					
					/*alert(pos_actual);
					alert(pos_anterior);*/
					//alert(posicion[0]);
				}/*,
				accept: function(d){
					var pos_actual = $(this).attr("id").split("-");
					var pos_anterior = ui.draggable.parent().attr("id").split("-");
					
				}*/
			})
		}
	}
	
})