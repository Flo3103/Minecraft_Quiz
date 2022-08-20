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
        document.getElementById("PointScreenText").innerHTML = SpielerName + " hat <br> Schwer mit <h3>" + SchwerPunkte + "/" + '20' + "</h3> Punkten abgeschlossen";
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
    FragenSchwer[0] = 'Wie hoch ist die Wahrscheinlichkeit, dass ein Erwachsenes pinkes Schaf spawnt?##1,598%##0,164%##0,361%##Choice2';
    FragenSchwer[1] = 'Wie hoch ist die Wahrscheinlichkeit, dass man, mit einer unverzauberten Angel, ein verzaubertes Buch angelt?##0,8%##1,5%##0,1%##Choice1';
    FragenSchwer[2] = 'Wie lange braucht man um Obsidian mit der Hand abzubauen?##200s##250s##300s##Choice2';
    FragenSchwer[3] = 'Wie hoch ist die Wahrscheinlichkeit, dass ein Witherskelett seinen Kopf droppt?##3,5%##5,5%##2,5%##Choice3';
    FragenSchwer[4] = 'Wie hoch ist die Wahrscheinlichkeit, dass ein Erwachsenes Schaf als Braunes Schaf spawnt?##3%##2%##1%##Choice1';
    FragenSchwer[5] = 'Wie viele Splash-Texte (Gelber Text im Startmenü) gibt es in Minecraft?##221##254##376##Choice3';
    FragenSchwer[6] = 'Wie hoch ist die Wahrscheinlichkeit, dass ein Endportal Frame ein Enderauge enthält?##20%##10%##5%##Choice2';
    FragenSchwer[7] = 'Wie hoch ist die Wahrscheinlichkeit, dass ein Endportal 12 Enderaugen enthält?##0,0000000001%##0,00000001%##0,0000000000001%##Choice1';
    FragenSchwer[8] = 'Wie hoch ist die Wahrscheinlichkeit, dass ein Zombie mit Diamant Helm spawnt?##1,02%##0,006%##0,13%##Choice2';
    FragenSchwer[9] = 'Wie hoch ist die Wahrscheinlichkeit, dass ein Fuchs mit einem Emerald in seinem Mund spawnt?##20%##3%##5%##Choice3';
    FragenSchwer[10] = 'Wie hoch ist die Wahrscheinlichkeit, dass ein Zombie einen Eisenbaren droppt?##1,21%##3%##0,83%##Choice3##';
    FragenSchwer[11] = 'Wie hoch ist die Wahrscheinlichkeit, dass Blätter einen Apfel droppen?##0,5%##1%##5%##Choice1##';
    FragenSchwer[12] = 'Wie hoch ist die Wahrscheinlichkeit, dass ein Zombie mit einer Waffe spawnt?##10%##1%##3%##Choice2';
    FragenSchwer[13] = 'Wie hoch ist die Wahrscheinlichkeit, dass ein Zombie, in einem Huhn freiem Bereich, auf einem Huhn spawnt?##1%##0,01%##0,25%##Choice3##';
    FragenSchwer[14] = 'Wie hoch ist die Wahrscheinlichkeit, dass ein Bienennest an einem Birkenbaum, in einem Birkenwald, generiert?##5%##1,2%##0,2%##Choice3';
    FragenSchwer[15] = 'Wie hoch ist die Wahrscheinlichkeit, dass am 31 October ein Zombifizierter Piglin mit einer Kürbislaterne spawnt?##2,5%##10%##31%##Choice1';
    FragenSchwer[16] = 'Wie Wahrscheinlich ist es das ein braunes Baby Schaf spawnt?##0,15%##0,75%##0,05%##Choice1';
    FragenSchwer[17] = 'Zu welcher Warscheinlichkeit kann ein Zombifizierter Piglin, jeden Tick auf einem Netherportal Block spawnen?##0,5%##0,05%##5%##Choice2';
    FragenSchwer[18] = 'Wie hoch ist die Wahrscheinlichkeit, während einem Tick, dass ein Blitz irgendwo in einem Chunk einschlägt?##0,0001%##0,001%##0,003%##Choice2##';
    FragenSchwer[19] = 'Wie hoch ist die Wahrscheinlichkeit, dass sich eine Eisen, Gold und Diamant Pferderüstung in einer Kiste, im Stonghold befinden?##0,001563%##0,00175%##0,00077%##Choice1';
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