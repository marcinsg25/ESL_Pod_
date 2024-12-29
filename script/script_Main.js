
let contador =0;
let contadorII =0;

function playSrc_(min,contador,inp){

	let i= 0
	let count = 0
	
	rpVazio();
	let total= min.length
	let audioP = document.getElementById('mvd1'); 
	let inx = document.getElementById(inp); 
   
	
	audioP.onpause = function myFunction(){
		
		
		i++
		
		let audio = document.getElementById('mvd1'); 
		let source = document.getElementById('ts1'); 
		let cnt =  document.getElementById(contador); 
		source.setAttribute('src', caminhoAudioPrincipal+min[i]) 
		inx.value = i

		audio.load();
		audio.play();
		
		if(i==total-1){i=0; }


		
		if(i==1){count++; cnt.innerHTML=count;}



	}
	

	
	
}


function playS_(min,idx,contador,btn){

	 
	
	let audioP = document.getElementById('mvd1');
	let source = document.getElementById('ts1'); 
	let id = document.getElementById(idx).value; 
	let bTn = document.getElementById(btn) 
	let cnt =  document.getElementById(contador);  

	source.setAttribute('src', caminhoAudioPrincipal+min[id])
	audioP.load();
	audioP.play();

	audioP.onpause = function myFunction(){
		
		contadorII++
		bTn.click()
		console.log(contadorII)
		cnt.innerHTML=contadorII; 
	}
	
	
}







function rpVazio() {

	let audio = document.getElementById('mvd1'); 
	let source = document.getElementById('ts1'); 
	source.setAttribute('src',caminhoAudioPrincipal+'0,0.1') 
    audio.load();
	audio.play();

}



function pauseAudio(a,b) { 
	
	let audio = document.getElementById(a); 
	audio.pause();
    audio.currentTime = 0
	audio.onpause = null;
	let contador = document.getElementById(b); 
	contador.innerHTML = '--';
	count=0;
	contadorII =0;


}	





//FUNÇAO ESCONDER TEXTO
function btn_hide(a){
    
   
    if (contador==0){
		contador=1;
        let btn_hide = document.getElementById(a)
        btn_hide.style.color = "rgb(238, 247, 246)";

	} else 	{
	
		contador=0;
		let btn_hide = document.getElementById(a)
        btn_hide.style.color = "black";
	
	} 	

   

}





let c = 0;
let txtNB=""



function clearN(a) { 
	c = 0;
	txtNB=""
	let idTag  = document.getElementById(a)
	idTag.innerHTML ='--';


}	



function NextTex(a,b) { 
	
	c++
	
	let total = a.length-1
	let idTag  = document.getElementById(b)
	
	if(c > total){
		c = 0;
		txtNB=""
		
	}

	txtNB += a[c]
	idTag.innerHTML = txtNB
	console.log(txtNB)

}	



let sInterval="";

function btnFull(ExecF,a){
	sInterval = setInterval(() => {ExecF(a) },50)  
}

function myStop() {
	clearInterval(sInterval);
}





			
