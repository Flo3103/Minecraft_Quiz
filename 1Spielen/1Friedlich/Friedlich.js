
function FriedlichAllUsedNächsteRunde() {    
    document.getElementById('Choice1').style.borderColor = 'rgb(173, 170, 170)';
    document.getElementById('Choice2').style.borderColor = 'rgb(173, 170, 170)';
    document.getElementById('Choice3').style.borderColor = 'rgb(173, 170, 170)';



    document.getElementById('correctionImg').src = '';


}
var FriedlichRunden = 0;
var FriedlichPunkte = 0;
var Buttongesperrt = true;
var richtigeAntwort

function returnPunkte() {
    return FriedlichPunkte
}

function Choice(gewählteAntwort) {
    if(Buttongesperrt == true){ButtonClickSound.src = ''; return}
    Buttongesperrt = true;
    
    if(gewählteAntwort.getAttribute('id') == richtigeAntwort){
        WhatsRight();
    }else{
        if(richtigeAntwort == 'Überleben_Choice2&3'){
            document.getElementById('Überleben_Choice2').style.border = '2px solid rgb(13, 241, 13)';
            document.getElementById('Überleben_Choice3').style.border = '2px solid rgb(13, 241, 13)';
            document.getElementById('NächsteFrageDiv').style.display = 'flex';
            return
        }
        document.getElementById('Choice1').style.borderColor = 'red';
        document.getElementById('Choice2').style.borderColor = 'red';
        document.getElementById('Choice3').style.borderColor = 'red';
        WhatsRight();
        ButtonClickSound.src = '';
        DamageSound.play();
        
      }  
    
    
}



























function WhatsRight() {
    if(gewählteAntwort == 'Choice1'){
        document.getElementById('Choice1').style.border = '2px solid rgb(13, 241, 13)';
    }
    if(gewählteAntwort == 'Choice2'){
        document.getElementById('Choice2').style.border = '2px solid rgb(13, 241, 13)';
    }
    if(gewählteAntwort == 'Choice3'){
        document.getElementById('Choice3').style.border = '2px solid rgb(13, 241, 13)';
    }
}
