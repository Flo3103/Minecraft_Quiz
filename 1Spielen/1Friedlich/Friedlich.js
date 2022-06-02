
function FriedlichAllUsed() {    
    document.getElementById('Choice1').style.borderColor = 'rgb(173, 170, 170)';
    document.getElementById('Choice2').style.borderColor = 'rgb(173, 170, 170)';
    document.getElementById('Choice3').style.borderColor = 'rgb(173, 170, 170)';

    document.getElementById('correctionDiv').style.display = 'none';
    document.getElementById('NächsteFrageDiv').style.display = 'none';

    document.getElementById('correctionImg').src = '';


}
var FriedlichRunden = 0;
var FriedlichPunkte = 0;
var Buttongesperrt = true;
var richtigeAntwort

function returnPunkte() {
    return FriedlichPunkte
}

function Friedlich_Choice(gewählteAntwort) {
    
    document.getElementById('correctionDiv').style.display = 'none';
    document.getElementById('NächsteFrageDiv').style.display = 'none';

    if(Buttongesperrt == true){ButtonClickSound.src = ''; return}
    Buttongesperrt = true;
    
    if(gewählteAntwort.getAttribute('id') == richtigeAntwort){
     
        
        
    }  
    
    
}
