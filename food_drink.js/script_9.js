
let caminhoAudioPrincipal ="ESL_audio/ESL_Food_Drink/0009-Making-Dinner-Eating-Dinner--iESLPod--.mp3#t=";
let caminhoVideoVazio ="../../ESLaudio/Audio_VAZIO.mp3#t==0,0.1";




//#1
let mnt1=[null,"1154.1,1162.2"];

let rsm1="When I<r> get </r>home, </br>"
let rsm2="I <r>start on</r> dinner <v>right away.</v> </br>"
let rsm3="I <r>clean off</r> the <v>kitchen counter</v> </br>"
let rsm4="after <r>putting away</r> the <v>groceries </v></br>"
let rsm5="and decide to make pasta. </br>"

let arrayESL1=[null,rsm1,rsm2,rsm3,rsm4,rsm5]
let textoMain_1 = arrayESL1.join('\n')

let rsmx1= "Quando chego em casa,</br>"
let rsmx2="começo a preparar o jantar imediatamente.</br>"
let rsmx3="limpo o balcão da cozinha</br>"
let rsmx4="depois de guardar as compras</br>"
let rsmx5="e decido fazer macarrão.</br>"

let arrayESLT1=[null,rsmx1,rsmx2,rsmx3,rsmx4,rsmx5]
let textoMainT_1 = arrayESLT1.join('\n')


let arrayMin1=[null,'1154.1','1155.2','1157.6','1159.1','1161.0']


function inter1(a){

let idVid = document.getElementById('mvd1');
let frs = document.getElementById('hide_1');
let min = idVid.currentTime.toFixed(1);

if(a !='🌐'){

	for ( let i = 1; i < arrayMin1.length; i++ ){
	let texto= textoMain_1.replace(arrayESL1[i],"<d>"+arrayESL1[i]+"</d>");
	if (min == arrayMin1[i]){ frs.innerHTML= texto}
	

	}

}else{

	for ( let i = 1; i < arrayMin1.length; i++ ){
	let texto= textoMainT_1.replace(arrayESLT1[i],"<d>"+arrayESLT1[i]+"</d>");
	if (min == arrayMin1[i]){ frs.innerHTML= texto}

	}

}

}


//#2
let mnt2=[null,'371.7,381.0','382.4,392.0','400.6,407.9','409.8,417.9']



let rsm6="So, I <r>preheat</r> the <v>oven</v> to 375, </br>"
let rsm7="In other words, three hundred </br>"
let rsm8="And seventy five <v> degrees Fahrenheit.</v> </br>"
let rsm9="I <r>preheat</r> it because I want <r>to bake</r> the bread </br>"
let rsm10="And keep the chicken hot until my wife <r>gets</r> home.</br>"
let rsm11="So,I open the <v>oven door</v> , </br>"
let rsm12="I <r>put in</r> the bread, </br>"
let rsm13="I <r>put in</r> the chicken, </br>"
let rsm14="And then I close the door. </br>"
let rsm15="My wife <r>is going to be</r> <v>home late </v></br>"
let rsm16="So I want to keep the chicken hot</br>"
let rsm17="I want <r>to make sure</r> that it stays hot. </br>"



let arrayESL2=[null,rsm6,rsm7,rsm8,rsm9,rsm10,rsm11,rsm12,rsm13,rsm14,rsm15,rsm16,rsm17]
let textoMain_2 = arrayESL2.join('\n')

let rsmx6="Então, eu <r>pré-aqueço</r> o <v>forno</v> a 375,</br>"
let rsmx7="Em outras palavras, trezentos</br>"
let rsmx8="E setenta e cinco <v> graus Fahrenheit.</v> </br>"
let rsmx9="Eu <r>pré-aqueço</r> porque eu quero <r>assar</r> o pão</br>"
let rsmx10="E manter o frango quente até minha esposa <r>chegar</r> em casa.</br>"
let rsmx11="Então, eu abro a <v>porta do forno</v>,</br>"
let rsmx12="Eu <r>coloco</r> o pão,</br>"
let rsmx13="Eu <r>coloco</r> o frango,</br>"
let rsmx14="E então eu fecho a porta.</br>"
let rsmx15="Minha esposa <r>vai ficar</r> <v>em casa até tarde</v></br>"
let rsmx16="Então eu quero manter o frango quente</br>"
let rsmx17="Eu quero <r>ter certeza</r> de que ele permaneça quente.</br>"



let arrayESLT2=[null,rsmx6,rsmx7,rsmx8,rsmx9,rsmx10,rsmx11,rsmx12,rsmx13,rsmx14,rsmx15,rsmx16,rsmx17]
let textoMainT_2 = arrayESLT2.join('\n')




let arrayMin2=[null,'371.7','375.9','377.6','382.4','386.9','400.6','402.6','404.3','406.2','409.8','412.6','415.2']


function inter2(a){

  let idVid = document.getElementById('mvd1');
  let frs = document.getElementById('hide_2');
  let min = idVid.currentTime.toFixed(1);

  if(a !='🌐'){

    for ( let i = 1; i < arrayMin2.length; i++ ){
      let texto= textoMain_2.replace(arrayESL2[i],"<d>"+arrayESL2[i]+"</d>");
      if (min == arrayMin2[i]){ frs.innerHTML= texto}

    }

  }else{

    for ( let i = 1; i < arrayMin2.length; i++ ){
      let texto= textoMainT_2.replace(arrayESLT2[i],"<d>"+arrayESLT2[i]+"</d>");
      if (min == arrayMin2[i]){ frs.innerHTML= texto}

    }

  }

}





//#3
let mnt3 = [null,"426.2,433.1","491.1,494.7","519.1,525.7","544.5,550.5"]


let rsm18="So, I put some water in a pan </br>"
let rsm19="and I <r>turn</r> the <v>burner on high</v>.</br>"
let rsm20="I'm <r>going to boil</r> some water.</br>"
let rsm21="Well, When the water <r>starts boiling</r>, </br>"
let rsm22="when it starts to make<v> bubbles</v> because it is very hot </br>"
let rsm23="Then I decide I want to make a salad because I'm very hungry</br>"



let arrayESL3=[null,rsm18,rsm19,rsm20,rsm21,rsm22,rsm23]
let textoMain_3 = arrayESL3.join('\n')

let rsmx18="Então, eu coloco um pouco de água em uma panela</br>"
let rsmx19="e eu ligo o fogo alto.</br>"
let rsmx20="Eu vou ferver um pouco de água.</br>"
let rsmx21="Bem, quando a água começa a ferver,</br>"
let rsmx22="quando ela começa a fazer bolhas porque está muito quente</br>"
let rsmx23="Então eu decido que quero fazer uma salada porque estou com muita fome.</br>"


let arrayESLT3=[null,rsmx18,rsmx19,rsmx20,rsmx21,rsmx22,rsmx23]
let textoMainT_3 = arrayESLT3.join('\n')


let arrayMin3=[null,'426.2','429.7','491.1','519.1','521.5','545.1']



function inter3(a){

  let idVid = document.getElementById('mvd1');
  let frs = document.getElementById('hide_3');
  let min = idVid.currentTime.toFixed(1);

  if(a !='🌐'){

    for ( let i = 1; i < arrayMin3.length; i++ ){
      let texto= textoMain_3.replace(arrayESL3[i],"<d>"+arrayESL3[i]+"</d>");
      if (min == arrayMin3[i]){ frs.innerHTML= texto}

    }

  }else{

    for ( let i = 1; i < arrayMin3.length; i++ ){
      let texto= textoMainT_3.replace(arrayESLT3[i],"<d>"+arrayESLT3[i]+"</d>");
      if (min == arrayMin3[i]){ frs.innerHTML= texto}

    }

  }

}


//#4
let mnt4=[null,'551.7,555.2','1179.7,1183.9','1184.7,1189.7','1189.9,1194.9']

let rsm24="Well, <v>just as</v> I decide to make the salad, </br>"
let rsm25="<v>Just then</v>, my wife opens the <v>back door</v> and <r>yells</r>, I’m home!</br>"
let rsm26="She <r>comes into</r> the kitchen, </br>"
let rsm27="and<r> helps with chopping</r> the tomatoes to add to the <v>sauce</v>. </br>"
let rsm28="She <r>stirs </r>the <v>sauce</v> until it’s done, </br>"
let rsm29="while I <r>finish tossin</r>g the salad.</br>"


let arrayESL4=[null,rsm24,rsm25,rsm26,rsm27,rsm28,rsm29]
let textoMain_4 = arrayESL4.join('\n')

let rsmx24="Bem, assim que decido fazer a salada,</br>"
let rsmx25="Nesse momento, minha esposa abre a porta dos fundos e grita, cheguei!</br>"
let rsmx26="Ela entra na cozinha,</br>"
let rsmx27="e ajuda a cortar os tomates para adicionar ao molho.</br>"
let rsmx28="Ela mexe o molho até ficar pronto,</br>"
let rsmx29="enquanto termino de misturar a salada.</br>"



let arrayESLT4=[null,rsmx24,rsmx25,rsmx26,rsmx27,rsmx28,rsmx29]
let textoMainT_4 = arrayESLT4.join('\n')



let arrayMin4=[null,'551.7','1179.7','1184.7','1186.3','1189.9','1192.0']


function inter4(a){

  let idVid = document.getElementById('mvd1');
  let frs = document.getElementById('hide_4');
  let min = idVid.currentTime.toFixed(1);

  if(a !='🌐'){

    for ( let i = 1; i < arrayMin4.length; i++ ){
      let texto= textoMain_4.replace(arrayESL4[i],"<d>"+arrayESL4[i]+"</d>");
      if (min == arrayMin4[i]){ frs.innerHTML= texto}

    }

  }else{

    for ( let i = 1; i < arrayMin4.length; i++ ){
      let texto= textoMainT_4.replace(arrayESLT4[i],"<d>"+arrayESLT4[i]+"</d>");
      if (min == arrayMin4[i]){ frs.innerHTML= texto}

    }

  }

}


//#5
let mnt5=[null,'667.5,677.5','1195.9,1205.4']

let rsm30="So,she <r>is stirring </r>the <v>sauce</v> and <v>at the same time</v>, </br>"
let rsm31="I am finishing the salad, and I <r>finished by tossing it</r>. </br>"
let rsm32="I <r>get out</r> the <v>place mats </v>and napkins <r>to set </r>the table. </br>"
let rsm33="I also<r> make sure</r> that there is a spoon, knife, fork, and plate for each of us.</br>"


let arrayESL5=[null,rsm30,rsm31,rsm32,rsm33]
let textoMain_5 = arrayESL5.join('\n')

let rsmx30="Então, ela está mexendo o molho e, ao mesmo tempo,</br>"
let rsmx31="Eu estou terminando a salada, e terminei misturando-a.</br>"
let rsmx32="Eu pego os jogos americanos e guardanapos para pôr a mesa.</br>"
let rsmx33="Eu também me certifico de que haja uma colher, faca, garfo e prato para cada um de nós.</br>"


let arrayESLT5=[null,rsmx30,rsmx31,rsmx32,rsmx33]
let textoMainT_5 = arrayESLT5.join('\n')



let arrayMin5=[null,'667.5','671.2','1195.9','1200.1']


function inter5(a){

  let idVid = document.getElementById('mvd1');
  let frs = document.getElementById('hide_5');
  let min = idVid.currentTime.toFixed(1);

  if(a !='🌐'){

    for ( let i = 1; i < arrayMin5.length; i++ ){
      let texto= textoMain_5.replace(arrayESL5[i],"<d>"+arrayESL5[i]+"</d>");
      if (min == arrayMin5[i]){ frs.innerHTML= texto}

    }

  }else{

    for ( let i = 1; i < arrayMin5.length; i++ ){
      let texto= textoMainT_5.replace(arrayESLT5[i],"<d>"+arrayESLT5[i]+"</d>");
      if (min == arrayMin5[i]){ frs.innerHTML= texto}

    }

  }

}

//#6
let mnt6=[null,'1205.8,1209.4','874.3,885.6']

let rsm34="About 15 minutes later, </br>"
let rsm35="we<r> sit down </r>at the table <v>in the dining room </v></br>"
let rsm36="My wife and I <r>talk about</r> our long day, </br>"
let rsm37="meaning we had many things happen today,</br>"
let rsm38="and maybe we are very tired, so we had a long day.</br>"


let arrayESL6=[null,rsm34,rsm35,rsm36,rsm37,rsm38]
let textoMain_6 = arrayESL6.join('\n')

let rsmx34="Cerca de 15 minutos depois,</br>"
let rsmx35="sentamos à mesa na sala de jantar</br>"
let rsmx36="Minha esposa e eu conversamos sobre nosso longo dia,</br>"
let rsmx37="o que significa que muitas coisas aconteceram hoje,</br>"
let rsmx38="e talvez estejamos muito cansados, então tivemos um longo dia.</br>"


let arrayESLT6=[null,rsmx34,rsmx35,rsmx36,rsmx37,rsmx38]
let textoMainT_6 = arrayESLT6.join('\n')



let arrayMin6=[null,'1205.8','1207.2','874.3','876.8','880.7']


function inter6(a){

  let idVid = document.getElementById('mvd1');
  let frs = document.getElementById('hide_6');
  let min = idVid.currentTime.toFixed(1);

  if(a !='🌐'){

    for ( let i = 1; i < arrayMin6.length; i++ ){
      let texto= textoMain_6.replace(arrayESL6[i],"<d>"+arrayESL6[i]+"</d>");
      if (min == arrayMin6[i]){ frs.innerHTML= texto}

    }

  }else{

    for ( let i = 1; i < arrayMin6.length; i++ ){
      let texto= textoMainT_6.replace(arrayESLT6[i],"<d>"+arrayESLT6[i]+"</d>");
      if (min == arrayMin6[i]){ frs.innerHTML= texto}

    }

  }

}



//#7
let mnt7=[null,'897.1,902.3','903.1,907.2','907.9,911.3','1218.3,1231.6','1133.8,1142.4']

let rsm39="My wife <r>offers to do</r> the <v>dishes</v> because I cooked, </br>"
let rsm40="But of course, <v>since I am</v> a wonderful husband, </br>"
let rsm41="I <r>help out by drying</r> the <v>dishes</v>.</br>"
let rsm42="First, I put some of the <v>leftovers</v> in a <v>Tupperware container </v></br>"
let rsm43="And some in <v>plastic wrap </v>and the rest in <v>aluminum foil</v>. </br>"
let rsm44="Then I <r>dry</r> the pans, plates, glasses, and <v>silverware</v>..</br>"
let rsm45="The <v>silverware</v>, remember, is the spoon, knife, fork</br>"
let rsm46="That you use when you eat. </br>"


let arrayESL7=[null,rsm39,rsm40,rsm41,rsm42,rsm43,rsm44,rsm45,rsm46]
let textoMain_7 = arrayESL7.join('\n')

let rsmx39="Minha esposa se oferece para lavar a louça porque eu cozinhei,</br>"
let rsmx40="Mas é claro, como sou um marido maravilhoso,</br>"
let rsmx41="Eu ajudo secando a louça.</br>"
let rsmx42="Primeiro, coloco algumas das sobras em um recipiente Tupperware</br>"
let rsmx43="E algumas em filme plástico e o restante em papel alumínio.</br>"
let rsmx44="Então eu seco as panelas, pratos, copos e talheres.</br>"
let rsmx45="Os talheres, lembre-se, são a colher, a faca, o garfo</br>"
let rsmx46="Que você usa quando come.</br>"


let arrayESLT7=[null,rsmx39,rsmx40,rsmx41,rsmx42,rsmx43,rsmx44,rsmx45,rsmx46]
let textoMainT_7 = arrayESLT7.join('\n')



let arrayMin7=[null,'897.1','903.1','907.9','1218.3','1222.5','1227.4','1133.8','1140.6']


function inter7(a){

  let idVid = document.getElementById('mvd1');
  let frs = document.getElementById('hide_7');
  let min = idVid.currentTime.toFixed(1);

  if(a !='🌐'){

    for ( let i = 1; i < arrayMin7.length; i++ ){
      let texto= textoMain_7.replace(arrayESL7[i],"<d>"+arrayESL7[i]+"</d>");
      if (min == arrayMin7[i]){ frs.innerHTML= texto}

    }

  }else{

    for ( let i = 1; i < arrayMin7.length; i++ ){
      let texto= textoMainT_7.replace(arrayESLT7[i],"<d>"+arrayESLT7[i]+"</d>");
      if (min == arrayMin7[i]){ frs.innerHTML= texto}

    }

  }

}

 
 


		
		


			
