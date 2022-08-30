var FragenEinfach = new Array;
var EinfachRunden = 0;
var EinfachPunkte = 0;
var Buttongesperrt = true;
var richtigeAntwort = ''; 

function returnPunkteEinfach() {
    return EinfachPunkte
}

DefiniereFragen();
NächsteFrage();




function Choice(gewählteAntwort) {    
    
    document.getElementById('NächsteFrageDiv').style.display = 'flex';
    document.getElementById('Points').innerHTML = '' + EinfachPunkte + '/' + '20';

    if(Buttongesperrt == true){ButtonClickSound.src = ''; return}
    Buttongesperrt = true;
    
    if(gewählteAntwort.getAttribute('id') == richtigeAntwort){
        WhatsRight();
        EinfachPunkte++;
        document.getElementById('XPBar').src = XPBar[EinfachPunkte];
    }else{        
        ButtonClickSound.src = '';
        DamageSound.play();
        if(richtigeAntwort == 'Choice2&3'){
            EinfachPunkte++;
            document.getElementById('Choice2').style.border = '2px solid rgb(13, 241, 13)';
            document.getElementById('Choice3').style.border = '2px solid rgb(13, 241, 13)';
            document.getElementById('NächsteFrageDiv').style.display = 'flex';
            document.getElementById('Points').innerHTML = '' + EinfachPunkte + '/' + '20';
            return
        }
        document.getElementById('Choice1').style.borderColor = 'red';
        document.getElementById('Choice2').style.borderColor = 'red';
        document.getElementById('Choice3').style.borderColor = 'red';
        WhatsRight();
      }   

}

function NächsteFrage() {
    document.getElementById('Choice3').style.display = 'inline';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById("Choice1").style.border = "2px solid rgb(173, 170, 170)";
    document.getElementById("Choice2").style.border = "2px solid rgb(173, 170, 170)";
    document.getElementById("Choice3").style.border = "2px solid rgb(173, 170, 170)";
    if(EinfachRunden < 20){
        Buttongesperrt = false;
        ButtonClickSound.src = '../../0 Sounds/click.ogg';
        EinfachRunden++;
        var AktuelleFrage = FragenEinfach.shift();
        var FragenAufgeteilt = AktuelleFrage.split('##');
        document.getElementById('Question').innerHTML = EinfachRunden + '. ' + FragenAufgeteilt[0];
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
        document.getElementById("PointScreenText").innerHTML = PlayerName + " hat <br> Einfach mit <h3>" + EinfachPunkte + "/" + '20' + "</h3> Punkten abgeschlossen";
    }
    document.getElementById('Points').innerHTML = '' + EinfachPunkte + '/' + '20';
}

function PlayAgain() {
    EinfachPunkte = 0;
    EinfachRunden = 0;

    document.getElementById('XPBar').src = XPBar[0];

    DefiniereFragen();
    NächsteFrage();

    document.getElementById("QuestionDiv").style.display = "inline";
    document.getElementById("PointScreen").style.display = "none";
}

function DefiniereFragen() {
    FragenEinfach[0] = 'Wie färbt man Schafe?##Mit farbigem Wasser##Mit Arbeitsblock Färber##Mit Farbstoff##Choice3';
    FragenEinfach[1] = 'Kann man im Nether schlafen?## Ja ##Nein##Nur kurz##Choice2';
    FragenEinfach[2] = 'Wie bekommt man Blätterblöcke?##Einfach abbauen##Mit Schere##Mit Hacke##Choice2&3';
    FragenEinfach[3] = 'Wie viele Obsidian Blöcke braucht man mindestens für ein Netherportal?##10##14##12##Choice1';
    FragenEinfach[4] = 'Vor was hat ein Enderman angst?##Villager##Wasser##Endermite##Choice2';
    FragenEinfach[5] = 'Was von dieser Auswahl kann man benutzen um einen Craftingtable zu machen?##1 Eichenstamm##3 Holzbretter##2 Stöcke 2 Holzbretter##Choice1';
    FragenEinfach[6] = 'Was kann man aus einem Totem Busch bekommen wenn man ihn abbaut?##Holzbretter##Stock##Den Busch selber##Choice2';
    FragenEinfach[7] = 'Mit welcher Taste lässt man sich seine Koordinaten anzeigen?##K##F4##F3##Choice3';
    FragenEinfach[8] = 'Wie lässt man alle Effekte sofort verfallen?##Honig Trinken##Ins Wasser springen##Milch Trinken##Choice3';
    FragenEinfach[9] = 'Wie heilt man einen Zombivillager?##Trank der Heilung##Schwächetrank + Goldapfel##Goldapfel##Choice2';
    FragenEinfach[10] = 'Gibt es rote Kühe## Ja ##Nein##Noch nie gesehen##Choice1';
    FragenEinfach[11] = 'Gibt es verschiedene Spinnenarten?##Ja 2##Ja 3##nein##Choice1';
    FragenEinfach[12] = 'In welcher Schwierigkeit kann man an Hunger sterben?##Einfach##Normal##Schwer##Choice3';
    FragenEinfach[13] = 'Vor welchem Tier hat ein Creeper angst?##Spielern##Katzen##Anderen Creepern##Choice2';
    FragenEinfach[14] = 'Was braucht man um einen Eisengolem zu bauen?##4 Eisenblöcke <br> 1 geschnitzter Kürbis##2 Eisenblöcke <br> 1 geschnitzter Kürbis##4 eisenblöcke <br> 1 Kürbis##Choice1';
    FragenEinfach[15] = 'Kann man einen Enderman mit einem Bogen abschießen?##Ja##Nein####Choice2##JaNeinFrage';
    FragenEinfach[16] = 'Welches Mob droppt ein Totem?##Vex##Whither##Evoker##Choice3';
    FragenEinfach[17] = 'Welchen Job braucht ein Villager, um Pfeile zu tradden?##Fletcher##Cleric##Butcher##Choice1';
    FragenEinfach[18] = 'Wer ist der Losteste Minecraft Spieler?##Monte##Trymacs##Angela Merkel##Choice2';
    FragenEinfach[19] = 'Was passiert mit einem Kessel, der im Regen steht##Er rostet##Er füllt sich##Nichts##Choice2';
for(i=1; i<5; i++){
    FragenEinfach.sort(function(a, b){return Math.random()-0.5;});
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