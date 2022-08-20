
var FragenNormal = new Array;
var NormalRunden = 0;
var NormalPunkte = 0;
var Buttongesperrt = true;
var richtigeAntwort = ''; 

function returnPunkteNormal() {
    return NormalPunkte
}

DefiniereFragen();
NächsteFrage();

function Choice(gewählteAntwort) {
    if(Buttongesperrt == true){ButtonClickSound.src = ''; return}
    Buttongesperrt = true;
    
    if(gewählteAntwort.getAttribute('id') == richtigeAntwort){
        WhatsRight();
        NormalPunkte++;
        document.getElementById('XPBar').src = XPBar[NormalPunkte];
    }else{        
        ButtonClickSound.src = '';
        DamageSound.play();
        if(richtigeAntwort == 'Choice2&3'){
            NormalPunkte++;
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
    document.getElementById('Points').innerHTML = '' + NormalPunkte + '/' + '20';
}

function NächsteFrage() {
    document.getElementById('Choice3').style.display = 'inline';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById("Choice1").style.border = "2px solid rgb(173, 170, 170)";
    document.getElementById("Choice2").style.border = "2px solid rgb(173, 170, 170)";
    document.getElementById("Choice3").style.border = "2px solid rgb(173, 170, 170)";
    if(NormalRunden < 20){
        Buttongesperrt = false;
        ButtonClickSound.src = '../../0 Sounds/click.ogg';
        NormalRunden++;
        var AktuelleFrage = FragenNormal.shift();
        var FragenAufgeteilt = AktuelleFrage.split('##');
        document.getElementById('Question').innerHTML = NormalRunden + '. ' + FragenAufgeteilt[0];
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
        document.getElementById("PointScreenText").innerHTML = SpielerName + " hat <br> Normal mit <h3>" + NormalPunkte + "/" + '20' + "</h3> Punkten abgeschlossen";
    }
    document.getElementById('Points').innerHTML = '' + NormalPunkte + '/' + '20';
}

function PlayAgain() {
    NormalPunkte = 0;
    NormalRunden = 0;

    document.getElementById('XPBar').src = XPBar[0];

    DefiniereFragen();
    NächsteFrage();

    document.getElementById("QuestionDiv").style.display = "inline";
    document.getElementById("PointScreen").style.display = "none";
}

function DefiniereFragen() {
    FragenNormal[0] = 'Wer ist der berühmteste deutsche Minecraft youtuber?##BastiGHG##Stegi##Trymacs##Choice1##';
    FragenNormal[1] = 'Wie kann man eine Endermid spawnen?##Enderperle werfen##Spawnei finden##Choruspflanzen abbauen##Choice1##';
    FragenNormal[2] = 'Wird Fallschaden mit Honig abgedämpft?##Ja##Nein####Choice1##JaNeinFrage';
    FragenNormal[3] = 'Wie viele Bienen können gleichzeitig in ein Nest?##3##5##2##Choice1##';
    FragenNormal[4] = 'Was braucht man um den Wither zu spawnen?##Witherkopf +<br>4 Seelensand##3 Witherköpfe +<br>3 Seelensand##3 Witherköpfe +<br>4 Seelenerde##Choice3##';
    FragenNormal[5] = 'Wie viele unterschiedliche Netherbiome gibt es?##3##5##7##Choice2##';
    FragenNormal[6] = 'Mit welcher Hilfe, bekommt man einen Zombiekopf?##Creeper##Feuerzeug##Charged Creeper##Choice3##';
    FragenNormal[7] = 'Was ist der berühmteste Mod um Shader zu benutzen?##ShaderGMbh##Optifine##Sodium##Choice2##';
    FragenNormal[8] = 'Auf welcher höhe ist es am besten Diamanten zu farmen?##-60##11##-50##Choice1##';
    FragenNormal[9] = 'Was droppt ein Schwein wenn es vom Wither getötet wird?##Nichts##Witherrose + <br>Schweinefleisch##Schweinefleisch##Choice2##';
    FragenNormal[10] = 'Was braucht man um auf die Netherdecke zu kommen?##Spitzhacke##Enderperle##Leiter + Enderperle##Choice3##';
    FragenNormal[11] = 'Wie kann man Wasser im Nether setzen?##Gar nicht##Im Kessel##Mit Netherite Eimer##Choice2##';
    FragenNormal[12] = 'Wo spawnen schwarze Katzen?##Sumpfhütten##Sumpfhütten und Dorf##Gibt keine schwarze Katze##Choice1##';
    FragenNormal[13] = 'Wo bekommt man Schwämme her?##Ozeanmonumenten##Koralle##Fischen##Choice1##';
    FragenNormal[14] = 'Was hiervon braucht man umbedingt für eine Eisenfarm?##1 Villager##1 Dorf##1 Eisengolem##Choice2##';
    FragenNormal[15] = 'Wie viele TNT-Blöcke sind in einer Pyramide?##3##6##9##Choice3##';
    FragenNormal[16] = 'Wie viele verschiedene Holzbretter Arten gibt es?##5##7##9##Choice3##';
    FragenNormal[17] = 'Kann man mithilfe von Lava ein Netherportal anzünden?##Ja##Nein## ##Choice1##JaNeinFrage';
    FragenNormal[18] = 'Was ist die aktuelle Maximale und Minimale Bauhöhe?##0/256##-64/320##0/356##Choice2##';
    FragenNormal[19] = 'Braucht man um auf einem Skeletpferd zu reiten einen Sattel?##Ja##Nein##Was ist das##Choice1##';
for(i=1; i<5; i++){
    FragenNormal.sort(function(a, b){return Math.random()-0.5;});
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