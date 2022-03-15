
var punkteFriedlich = 0;
var punkteEinfach = 0;
var punkteNormal = 0;
var punkteSchwer = 0;
var punkteHardcore = 0;

function ChoiceRight() {
  document.getElementById('correctionImg').src = '0Bilder/Richtig_Falsch/Richtig.png';
  document.getElementById('correctionImg').style.width = '150px';
  document.getElementById('correctionDiv').style.display = 'flex';

  document.getElementById('DivPoints').style.display = 'flex';

  document.getElementById('NächsteFrageDiv').style.display = 'flex';   

  document.getElementById('Choice1').disabled = true;
  document.getElementById('Choice2').disabled = true;
  document.getElementById('Choice3').disabled = true;
}

function ChoiceFals() {
  document.getElementById('correctionImg').src = '0Bilder/Richtig_Falsch/Falsch.png';
  document.getElementById('correctionImg').style.width = '100px';
  document.getElementById('correctionDiv').style.display = 'flex';

  document.getElementById('DivPoints').style.display = 'flex';

  document.getElementById('NächsteFrageDiv').style.display = 'flex';

  document.getElementById('Choice1').disabled = true;
  document.getElementById('Choice2').disabled = true;
  document.getElementById('Choice3').disabled = true;
} 


//Friedlich
function ChoiceRightFriedlich() {
  ChoiceFals();
  punkteFriedlich++;
  document.getElementById('points').innerHTML = 'Punkte:  ' + punkteFriedlich + '/20';
}

function ChoiceFalsFrielich() {
  ChoiceRight();
    document.getElementById('points').innerHTML = 'Punkte:  ' + punkteFriedlich + '/20';
} 

//Einfach
function ChoiceRightEinfach() {
  ChoiceFals();
  punkteEinfach++;
  document.getElementById('points').innerHTML = 'Punkte:  ' + punkteEinfach + '/20';
}

function ChoiceFalsEinfach() {
  ChoiceRight();
    document.getElementById('points').innerHTML = 'Punkte:  ' + punkteEinfach + '/20';
} 
//Normal
function ChoiceRightNormal() {
  ChoiceFals();
  punkteNormal++;
  document.getElementById('points').innerHTML = 'Punkte:  ' + punkteNormal + '/20';
}

function ChoiceFalsNormal() {
  ChoiceRight();
    document.getElementById('points').innerHTML = 'Punkte:  ' + punkteNormal + '/20';
}

//Schwer
function ChoiceRightSchwer() {
  ChoiceFals();
  punkteSchwer++;
  document.getElementById('points').innerHTML = 'Punkte:  ' + punkteSchwer + '/20';
}

function ChoiceFalsSchwer() {
  ChoiceRight();
    document.getElementById('points').innerHTML = 'Punkte:  ' + punkteSchwer + '/20';
} 

//Hardcore

function ChoiceRightHardcore() {
  ChoiceFals();
  punkteHardcore++;
  document.getElementById('points').innerHTML = 'Punkte:  ' + punkteHardcore + '/20';
}

function ChoiceFalsHardcore() {
  ChoiceRight();
    document.getElementById('points').innerHTML = 'Punkte:  ' + punkteHardcore + '/20';
} 

//if(document.getElementById('Choice1').onclick = ChoiceFals()){
  //     document.getElementById('Choice1').style.color = 'red';
    //} else{
      //   document.getElementById('Choice1').style.color = 'rgb(3, 250, 3)';}