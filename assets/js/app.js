window.onload=function(){

	//var mostrar=document.
	var arraychile =['4_araya','4_da_silva','4_miranda','4_ojeda','4_ríos','4_sanchez','4_sandoval'];
	var arraylima5 =['5_cabrera','5_castro','5_izaguirre','5_juarez','5_lara','5_orrillo','5_ortiz'];
	var arraylima6 =['6_arantza','6_daguiana','6_elizabeth','6_grecia','6_janine','6_michelle','6mishel','6_rosario'];

gyh
	

	var select =document.getElementById('select');
		select.onchange= function(){
           

			if(select.value =="chile"){

				var chile= document.getElementById('chile');
           	    var lima5= document.getElementById('lima5');
           	    var lima6= document.getElementById('lima6');
           	    var  bloq =document.getElementById('chile');
  				bloq.innerHTML='';
				
				for(var i=0 ;i<arraychile.length;i++){

						var newDiv =document.createElement('div');
							newDiv.classList.add('box-image');

						var imagen = document.createElement("img"); 
							imagen.classList.add('coder');

						var newSpan =document.createElement('span');
							newSpan.classList.add('text');

						var name = document.createTextNode(arraychile[i]); 
				
							imagen.setAttribute("src",'assets/img/'+arraychile[i]+'.jpg');
							

						newSpan.appendChild(name);
  						newDiv.appendChild(imagen);
  						newDiv.appendChild(newSpan);

  						bloq.appendChild(newDiv) ;

				 }
						
  				
  				
  				chile.style.display = "inline-block";
  				lima5.style.display = "none";
		        lima6.style.display = "none";

  			}
  			if(select.value =="lima5"){

  				var chile= document.getElementById('chile');
           		var lima5= document.getElementById('lima5');
           		var lima6= document.getElementById('lima6');
  				
				var newDiv =document.createElement('div');
					newDiv.classList.add('box-image');

				var imagen = document.createElement("img"); 
					imagen.classList.add('coder');

				var newSpan =document.createElement('span');
				newSpan.classList.add('text');

				var name = document.createTextNode("araya"); 
				
				imagen.setAttribute("src","assets/img/5_cabrera.jpg");

  				var  bloq =document.getElementById('lima5');
  				newSpan.appendChild(name);
  				newDiv.appendChild(imagen);
  				newDiv.appendChild(newSpan);
  				bloq.innerHTML='';
  				bloq.appendChild(newDiv) ;

  				chile.style.display = "none";
  				lima5.style.display = "block";
		        lima6.style.display = "none";

  			}
  			if(select.value =="lima6"){
  				
            	var chile= document.getElementById('chile');
           		var lima5= document.getElementById('lima5');
            	//var lima6= document.getElementById('lima6');

				var newDiv =document.createElement('div');
					newDiv.classList.add('box-image');

				var imagen = document.createElement("img"); 
					imagen.classList.add('coder');

				var newSpan =document.createElement('span');
				newSpan.classList.add('text');

				var name = document.createTextNode("araya"); 
				
				imagen.setAttribute("src","assets/img/6_arantza.jpg");

  				var  bloq =document.getElementById('lima6');
  				newSpan.appendChild(name);
  				newDiv.appendChild(imagen);
  				newDiv.appendChild(newSpan);
  				bloq.innerHTML='';
  				bloq.appendChild(newDiv) ;

  				chile.style.display = "none";
  				lima5.style.display = "none";
		        bloq.style.display = "block";

  			}
  		}
}






/* 
			//var chile = document.getElementById('chile');
			//var lima5 = document.getElementById('lima5');
			//var lima6 = document.getElementById('lima6');

if (select.value =='chile' ) {
		chile.style.display = "block";
		lima5.style.display = "none";
		lima6.style.display = "none";
	} else if ( select.value=='lima5'){
		chile.style.display = "none";
		lima5.style.display = "block";
		lima6.style.display = "none";
	} else if (select.value =='lima6'){
		chile.style.display = "none";
		lima5.style.display = "none";
		lima6.style.display = "block";
	}*/