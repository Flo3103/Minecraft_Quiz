var FragenFriedlich = new Array;
var FriedlichRunden = 0;
var FriedlichPunkte = 0;
var Buttongesperrt = true;
var richtigeAntwort = ''; 

function returnPunkteFriedlich() {
    return FriedlichPunkte
}

DefiniereFragen();
NächsteFrage();

function Choice(gewählteAntwort) {
    if(Buttongesperrt == true){ButtonClickSound.src = ''; return}
    Buttongesperrt = true;
    
    if(gewählteAntwort.getAttribute('id') == richtigeAntwort){
        WhatsRight();
        FriedlichPunkte++;
        document.getElementById('XPBar').src = XPBar[FriedlichPunkte];
    }else{        
        ButtonClickSound.src = '';
        DamageSound.play();
        if(richtigeAntwort == 'Choice2&3'){
            FriedlichPunkte++;
            document.getElementById('Choice2').style.border = '2px solid rgb(13, 241, 13)';
            document.getElementById('Choice3').style.border = '2px solid rgb(13, 241, 13)';
            return
        }
        document.getElementById('Choice1').style.borderColor = 'red';
        document.getElementById('Choice2').style.borderColor = 'red';
        document.getElementById('Choice3').style.borderColor = 'red';
        WhatsRight();
      }   
    document.getElementById('NächsteFrageDiv').style.display = 'flex';
    document.getElementById('Points').innerHTML = '' + FriedlichPunkte + '/' + '20';
}

function NächsteFrage() {
    document.getElementById('Choice3').style.display = 'inline';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById("Choice1").style.border = "2px solid rgb(173, 170, 170)";
    document.getElementById("Choice2").style.border = "2px solid rgb(173, 170, 170)";
    document.getElementById("Choice3").style.border = "2px solid rgb(173, 170, 170)";
    if(FriedlichRunden < 20){
        Buttongesperrt = false;
        ButtonClickSound.src = '../../0 Sounds/click.ogg';
        FriedlichRunden++;
        var AktuelleFrage = FragenFriedlich.shift();
        var FragenAufgeteilt = AktuelleFrage.split('##');
        document.getElementById('Question').innerHTML = FriedlichRunden + '. ' + FragenAufgeteilt[0];
        document.getElementById('Choice1').innerHTML = FragenAufgeteilt[1];
        document.getElementById('Choice2').innerHTML = FragenAufgeteilt[2];
        document.getElementById('Choice3').innerHTML = FragenAufgeteilt[3];  
        richtigeAntwort = FragenAufgeteilt[4];
        if (FragenAufgeteilt[5] === 'JaNeinFrage') {
            document.getElementById('Choice3').style.display = 'none';
        }
    }else{
        document.getElementById("QuestionDiv").style.display = "none";
        document.getElementById("PointScreen").style.display = "flex";
        document.getElementById("PointScreenText").innerHTML = "Du hast <br> Friedlich mit <h3>" + FriedlichPunkte + "/" + '20' + "</h3> Punkten abgeschlossen";
    }
    document.getElementById('Points').innerHTML = '' + FriedlichPunkte + '/' + '20';
}

function PlayAgain() {
    FriedlichPunkte = 0;
    FriedlichRunden = 0;

    document.getElementById('XPBar').src = XPBar[0];

    DefiniereFragen();
    NächsteFrage();

    document.getElementById("QuestionDiv").style.display = "inline";
    document.getElementById("PointScreen").style.display = "none";
}

function DefiniereFragen() {
    FragenFriedlich[0] = 'Was baut man als aller erstes ab, wenn man eine neue Minecraftwelt erstellt?##Holz##Stein##Eisen##Choice1';
    FragenFriedlich[1] = 'Was macht man in seiner aller ersten Minecraft Nacht?##Enderdrachen töten##Ängstlich Einbauen##Jedes Monster Töten##Choice2';
    FragenFriedlich[2] = 'Welches Item braucht man um ein Huhn zu füttern?##Weizen##Samen##Eier##Choice2';
    FragenFriedlich[3] = 'Fließt Wasser schneller als Lava?##Ja##Nein##Ja im Nether##Choice1';
    FragenFriedlich[4] = 'Wie viel Holzbretter geben 13 Holzstämme?##52##64##48##Choice1';
    FragenFriedlich[5] = 'Wie groß ist ein Stack Schneebälle?##24##1##16##Choice3';
    FragenFriedlich[6] = 'Welches dieser Tiere kann Leder droppen?##Schaf##Kuh##Schwein##Choice2';
    FragenFriedlich[7] = 'Können in der Schwierigkeit Friedlich feindliche Mobs spawnen?##Ja##Nein##Nur Creeper##Choice2';
    FragenFriedlich[8] = 'Mit welcher dieser Spitzhacken kann man einen Diamanten abbauen?##Steinspitzhacke##Eisenspitzhacke##Goldspitzhacke##Choice2';
    FragenFriedlich[9] = 'Was passiert wenn man mit einem Delphin schwimmt##Es passiert nichts##Man zähmt ihn##Man wird schneller##Choice3';
    FragenFriedlich[10] = 'Was braucht man um auf einem Schwein zu sitzen##Karottenrute##Sattel##Schweinerüstung & Sattel##Choice2';
    FragenFriedlich[11] = 'Wie heißt der Aller erste Minecraft Skin, den jeder hat?##Wolfgang##Gustaf##Steve##Choice3';
    FragenFriedlich[12] = 'Gibt es in Minecraft einen Mond?##Ja##Nein####Choice1##JaNeinFrage';
    FragenFriedlich[13] = 'Geht die minimale Bauhöhe in der 1.18 in den negativen Bereich?## Ja ##Nein####Choice1##JaNeinFrage';
    FragenFriedlich[14] = 'Kann man in Minecraft Java seinen eigenen Skin zeichnen und benutzen?## Ja ##Nein####Choice1##JaNeinFrage';
    FragenFriedlich[15] = 'Können rote Schafe spawnen?##Ja##Nein####Choice2##JaNeinFrage';
    FragenFriedlich[16] = 'Wie vermehrt man zwei gleiche Tiere?##Beide füttern##Beide in ein Boot setzen##Beide Schlagen##Choice1';
    FragenFriedlich[17] = 'Was droppt ein Eisengolem noch außer Eisen?##zufällige Blume##Mohn Blume##Einen Eimer##Choice2';
    FragenFriedlich[18] = 'Was passiert, wenn man im Nether Wasser platziert?##Es fließt ganz langsam##Es löscht die Lava in der Nähe##Es verdampft##Choice3';
    FragenFriedlich[19] = 'Was passiert, wenn man mit einer Schaufel Rechtsklick auf einen Grasblock macht?##Wird zu Erdblock##Nichts##Wird zum Weg##Choice3';
for(i=1; i<5; i++){
    FragenFriedlich.sort(function(a, b){return Math.random()-0.5;});
}
}

function WhatsRight() {
    if(richtigeAntwort == 'Choice1'){
        document.getElementById('Choice1').style.border = '2px solid rgb(13, 241, 13)';
    }
    if(richtigeAntwort == 'Choice2'){
        document.getElementById('Choice2').style.border = '2px solid rgb(13, 241, 13)';
    }
    if(richtigeAntwort == 'Choice3'){
        document.getElementById('Choice3').style.border = '2px solid rgb(13, 241, 13)';
    }
}