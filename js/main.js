// JavaScript Document
$(document).ready(function(){
	b = 0;
	for(i=0;i<8;i++){
		var estructura  = "<div class='row'>";
		for(a=0;a<8;a++){
			estructura +="<div class='";
			if(b == 0){
				estructura += "blanco";
				b = 1;
			}else{
				estructura +="negro";
				b = 0;
			}
			estructura +="'>"
			if(i<=2 & b == 1){
				estructura +="<div class='ficha-rojo'></div>";
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
	
})