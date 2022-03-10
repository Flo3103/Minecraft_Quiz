

function LevelChoice() {
    document.getElementById('StartButtonDiv').style.display = 'none'; 
    document.getElementById('LevelChoiceDiv').style.display = 'block';
}


function OpenHardcore() {
    document.getElementById('HardcoreQuestion1').style.display = 'block';
    document.getElementById('LevelChoiceDiv').style.display = 'none';
}




function ChoiceRight() {
    document.getElementById('notClick').disabled = true;
    document.getElementById('correctionDiv').style.display = 'flex';
    document.getElementById('NächsteFrageDiv').style.display = 'flex';
}

function ChoiceFals() {
    document.getElementById('correctionImg').src = '../Minecraft_Quiz/Bilder/Falsch.png';
    document.getElementById('correctionDiv').style.display = 'flex';
    document.getElementById('NächsteFrageDiv').style.display = 'flex';
}

function NächsteFrageHardcore1() {
    
}