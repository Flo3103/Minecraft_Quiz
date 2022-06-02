
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
    if(Buttongesperrt == true){ButtonClickSound.src = ''; return}
    Buttongesperrt = true;
    
    if(gewählteAntwort.getAttribute('id') == richtigeAntwort){
        FriedlichWhatsRight();
    }else{
        if(richtigeAntwort == 'Überleben_Choice2&3'){
            document.getElementById('Überleben_Choice2').style.border = '2px solid rgb(13, 241, 13)';
            document.getElementById('Überleben_Choice3').style.border = '2px solid rgb(13, 241, 13)';
            document.getElementById('NächsteFrageDiv').style.display = 'flex';
            return
        }
        document.getElementById('Choice1').style.borderColor = 'red;
        document.getElementById('Choice2').style.borderColor = 'red;
        document.getElementById('Choice3').style.borderColor = 'red;
        FriedlichWhatsRight();
        ButtonClickSound.src = '';
        DamageSound.play();
        
      }  
    
    
}
