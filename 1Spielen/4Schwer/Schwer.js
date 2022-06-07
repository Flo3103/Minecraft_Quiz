var FragenSchwer = new Array;
var SchwerRunden = 0;
var SchwerPunkte = 0;
var Buttongesperrt = true;
var richtigeAntwort = ''; 

function returnPunkteSchwer() {
    return SchwerPunkte
}

DefiniereFragen();
NächsteFrage();

function Choice(gewählteAntwort) {
    if(Buttongesperrt == true){ButtonClickSound.src = ''; return}
    Buttongesperrt = true;
    
    if(gewählteAntwort.getAttribute('id') == richtigeAntwort){
        WhatsRight();
        SchwerPunkte++;
        document.getElementById('XPBar').src = XPBar[SchwerPunkte];
    }else{        
        ButtonClickSound.src = '';
        DamageSound.play();
        if(richtigeAntwort == 'Choice2&3'){
            SchwerPunkte++;
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
    document.getElementById('Points').innerHTML = '' + SchwerPunkte + '/' + '20';
}

function NächsteFrage() {
    document.getElementById('Choice3').style.display = 'inline';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById("Choice1").style.border = "2px solid rgb(173, 170, 170)";
    document.getElementById("Choice2").style.border = "2px solid rgb(173, 170, 170)";
    document.getElementById("Choice3").style.border = "2px solid rgb(173, 170, 170)";
    if(SchwerRunden < 20){
        Buttongesperrt = false;
        ButtonClickSound.src = '../../0 Sounds/click.ogg';
        SchwerRunden++;
        var AktuelleFrage = FragenSchwer.shift();
        var FragenAufgeteilt = AktuelleFrage.split('##');
        document.getElementById('Question').innerHTML = SchwerRunden + '. ' + FragenAufgeteilt[0];
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
        document.getElementById("PointScreenText").innerHTML = "Du hast <br> Schwer mit <h3>" + SchwerPunkte + "/" + '20' + "</h3> Punkten abgeschlossen";
    }
    document.getElementById('Points').innerHTML = '' + SchwerPunkte + '/' + '20';
}

function PlayAgain() {
    SchwerPunkte = 0;
    SchwerRunden = 0;

    document.getElementById('XPBar').src = XPBar[0];

    DefiniereFragen();
    NächsteFrage();

    document.getElementById("QuestionDiv").style.display = "inline";
    document.getElementById("PointScreen").style.display = "none";
}

function DefiniereFragen() {
    FragenSchwer[0] = 'In welchem Jahr wurde Minecraft erfunden?##2009##2006##2010##Choice1';
    FragenSchwer[1] = 'Wie hoch ist die Wahrscheinlichkeit, <br> dass ein Wolf gezähmt wird, <br> wenn man ihm einen Knochen gibt?##2⁄5##1⁄5##1⁄3##Choice3';
    FragenSchwer[2] = 'Aus welchem Land kommt Minecraft?##USA##Deutschland##Schweden##Choice3';
    FragenSchwer[3] = 'Auf welcher von diesen Webseiten kann man einen kostenlosen Minecraft Server erstellen?##minecraft.server##Aternos##Nitrado##Choice2';
    FragenSchwer[4] = 'Kann man mit einer Goldspitzhacke Gold abbauen? ?## Ja ##Nein####Choice2##JaNeinFrage';
    FragenSchwer[5] = 'Was ist das Maximale Lichtlevel?##7##10##15##Choice3';
    FragenSchwer[6] = 'Wie viele Arbeitsblöcke gibt es##10##13##15##Choice2';
    FragenSchwer[7] = 'Was braucht man für eine einfache Redstone-Clock?##Komperator, Redstone, Redstonefackel##Komperator, Redstone##Redstone, Verstärcker, Redstonefackel##Choice1';
    FragenSchwer[8] = 'Mit welcher Tastenkombination wechselt man bei der java Edition schnell in den Kreativ Modus?##Alt+F4##F5+F6##F3+F4##Choice3';
    FragenSchwer[9] = 'Wie viele verschiedene Bastionen gibt es?##2##3##4##Choice3';
    FragenSchwer[10] = 'Von wie vielen Blöcken muss man springen, damit man nur noch ein halbes Herz hat?##15##22##20##Choice2';
    FragenSchwer[11] = 'Wie viele verschiedene nätürlich vorkommende Tropenfische gibt es?##2700##2000##1500##Choice1';
    FragenSchwer[12] = 'Auf welcher Höhe generiert die meiste Kohle?##85-90##50-60##95-96##Choice3';
    FragenSchwer[13] = 'Was ist die Brenndauer eines Lavaeimers?##3000s##1000s##10min##Choice2';
    FragenSchwer[14] = 'Wie viele Erzblöcke braucht man für einen Full Beacon?##64##164##192##Choice2';
    FragenSchwer[15] = 'Mit welcher Tastenkombination lässt man sich die Chunks anzeigen?##F3+G##F3+C##F3+S##Choice1';
    FragenSchwer[16] = 'Wie muss man ein Schaf benenne, damit es zum Regenbogenschaf wird?##jakob_##jeb_##_rainbow_##Choice2';
    FragenSchwer[17] = 'Wer hat Minecraft erfunden##Linus Torvalds##Jens Bergernsten##Markus Alesej Persson##Choice3';
    FragenSchwer[18] = 'Wie viele Tiere können maximal in ein 1 Block breites Loch, ohne das welche ersticken?##25##24##19##Choice2';
    FragenSchwer[19] = 'An welchem Datum wurde Minecraft erfunden?##31.10.2009##20.02.2009##17.04.2009##Choice3';
for(i=1; i<5; i++){
    FragenSchwer.sort(function(a, b){return Math.random()-0.5;});
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