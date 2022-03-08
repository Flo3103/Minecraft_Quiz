function StartButton() {
    document.getElementById('StartButtonDiv').style.display = 'none'; 
    document.getElementById('LevelChoiceDiv').style.display = 'block';
}




function ChoiceRight() {
    document.getElementById('correctionP').innerHTML = 'Richtig';
    document.getElementById('ChoiceDiv').style.display = 'none';
    document.getElementById('correctionDiv').style.display = 'flex';
    document.getElementById('NächsteFrageDiv').style.display = 'flex';
}

function ChoiceFals() {
    document.getElementById('correctionP').innerHTML = 'Falsch';
}