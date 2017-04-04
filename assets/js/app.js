window.onload=function(){

	//var mostrar=document.
	var arraychile =['4_araya','4_da_silva','4_miranda','4_ojeda','4_ríos','4_sanchez','4_sandoval'];
	var arraylima5 =['5_cabrera','5_castro','5_izaguirre','5_juarez','5_lara','5_orrillo','5_ortiz'];
	var arraylima6 =['6_arantza','6_daguiana','6_elizabeth','6_grecia','6_janine','6_michelle','6_mishel','6_rosario'];
	
	valoriza("chile" , arraychile );
	valoriza("lima5" , arraylima5 );
	valoriza("lima6" , arraylima6 );

	var select =document.getElementById('select');
		select.onchange= function(){

			if(select.value =="chile"){

        		valoriza("chile" , arraychile );
        		document.getElementById('lima5').style.display = "none";
		        document.getElementById('lima6').style.display = "none";
		        document.getElementById('chile').style.display = "inline-block";
  				
  			}

  			if(select.value =="lima5"){

  				valoriza("lima5" , arraylima5);
  				document.getElementById('chile').style.display = "none";
		        document.getElementById('lima6').style.display = "none";
		        document.getElementById('lima5').style.display = "inline-block";

  			}

  			if(select.value =="lima6"){
  				valoriza("lima6" , arraylima6 );
  				document.getElementById('lima5').style.display = "none";
		        document.getElementById('chile').style.display = "none";
		        document.getElementById('lima6').style.display = "inline-block";
  			}
  		}
  		function valoriza(elem , arrayelem,uno, dos , tres){
  			console.log(elem);
  			console.log(arrayelem);
			var chile= document.getElementById('chile');
           	var lima5= document.getElementById('lima5');
           	var lima6= document.getElementById('lima6');
           	var  bloq = document.getElementById(elem);
           	console.log(bloq);
  			bloq.innerHTML="";
				
				for(var i=0 ;i< arrayelem.length;i++){

						var newDiv =document.createElement('div');
							newDiv.classList.add('box-image');

						var imagen = document.createElement("img"); 
							imagen.classList.add('coder');

						var newSpan =document.createElement('span');
							newSpan.classList.add('text');

						var name = document.createTextNode(arrayelem[i]); 
				
							imagen.setAttribute("src",'assets/img/'+ arrayelem[i]+'.jpg');

						newSpan.appendChild(name);
  						newDiv.appendChild(imagen);
  						newDiv.appendChild(newSpan);

  						bloq.appendChild(newDiv) ;

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