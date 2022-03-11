
var punkteHardcore = 0;



function ChoiceRight() {

    document.getElementById('correctionImg').src = '../../Bilder/Richtig_Falsch/Richtig.png';
    document.getElementById('correctionImg').style.width = '150px';
    document.getElementById('correctionDiv').style.display = 'flex';

    punkteHardcore++;
    document.getElementById('points').innerHTML = 'Punkte:  ' + punkteHardcore + '/20';
    document.getElementById('DivPoints').style.display = 'flex';

    document.getElementById('NächsteFrageDiv').style.display = 'flex';   

    document.getElementById('Choice1').disabled = true;
    document.getElementById('Choice2').disabled = true;
    document.getElementById('Choice3').disabled = true;
}

function ChoiceFals() {

    document.getElementById('correctionImg').src = '../../Bilder/Richtig_Falsch/Falsch.png';
    document.getElementById('correctionDiv').style.display = 'flex';

    document.getElementById('DivPoints').style.display = 'flex';

    document.getElementById('NächsteFrageDiv').style.display = 'flex';
    
    document.getElementById('Choice1').disabled = true;
    document.getElementById('Choice2').disabled = true;
    document.getElementById('Choice3').disabled = true;

}
