
var punkteFriedlich = 0;
var punkteEinfach = 0;
var punkteNormal = 0;
var punkteSchwer = 0;
var punkteHardcore = 0;

function ChoiceRight() {
  document.getElementById('correctionImg').src = '../../0Bilder/Richtig_Falsch/01.png';
  //document.getElementById('correctionImg').style.width = '100px';
  document.getElementById('correctionDiv').style.display = 'flex';

  document.getElementById('DivPoints').style.display = 'flex';

  document.getElementById('NächsteFrageDiv').style.display = 'flex';   

  document.getElementById('Choice1').disabled = true;
  document.getElementById('Choice2').disabled = true;
  document.getElementById('Choice3').disabled = true;
}

function ChoiceFals() {
  document.getElementById('correctionImg').src = '../../0Bilder/Richtig_Falsch/02.png';
  //document.getElementById('correctionImg').style.width = '80px';
  document.getElementById('correctionDiv').style.display = 'flex';

  document.getElementById('DivPoints').style.display = 'flex';

  document.getElementById('NächsteFrageDiv').style.display = 'flex';

  document.getElementById('Choice1').disabled = true;
  document.getElementById('Choice2').disabled = true;
  document.getElementById('Choice3').disabled = true;
} 


//Friedlich
function ChoiceRightFriedlich() {
  ChoiceRight();
  punkteFriedlich++;
  document.getElementById('points').innerHTML = 'Punkte:  ' + punkteFriedlich + '/20';
}

function ChoiceFalsFriedlich() {
  ChoiceFals();
    document.getElementById('points').innerHTML = 'Punkte:  ' + punkteFriedlich + '/20';
} 

//Einfach
function ChoiceRightEinfach() {
  ChoiceRight();
  punkteEinfach++;
  document.getElementById('points').innerHTML = 'Punkte:  ' + punkteEinfach + '/20';
}

function ChoiceFalsEinfach() {
  ChoiceFals();
    document.getElementById('points').innerHTML = 'Punkte:  ' + punkteEinfach + '/20';
} 
//Normal
function ChoiceRightNormal() {
  ChoiceRight();
  punkteNormal++;
  document.getElementById('points').innerHTML = 'Punkte:  ' + punkteNormal + '/20';
}

function ChoiceFalsNormal() {
  ChoiceFals();
    document.getElementById('points').innerHTML = 'Punkte:  ' + punkteNormal + '/20';
}

//Schwer
function ChoiceRightSchwer() {
  ChoiceRight();
  punkteSchwer++;
  document.getElementById('points').innerHTML = 'Punkte:  ' + punkteSchwer + '/20';
}

function ChoiceFalsSchwer() {
  ChoiceFals();
  document.getElementById('points').innerHTML = 'Punkte:  ' + punkteSchwer + '/20';
} 

//Hardcore

function ChoiceRightHardcore() {
  ChoiceRight();
  punkteHardcore++;
  document.getElementById('points').innerHTML = 'Punkte:  ' + punkteHardcore + '/20';
}

function ChoiceFalsHardcore() {
  ChoiceFals();
    document.getElementById('points').innerHTML = 'Punkte:  ' + punkteHardcore + '/20';
} 



function NewHighscoreHardcore(punkteHardcore) {

  if (punkteHardcore <= 3) {
      document.getElementById('Points').innerHTML =+ 'Lol du bist ja richtig gut';
  }
}



//if(document.getElementById('Choice1').onclick = ChoiceFals()){
  //     document.getElementById('Choice1').style.color = 'red';
    //} else{
      //   document.getElementById('Choice1').style.color = 'rgb(3, 250, 3)';}
