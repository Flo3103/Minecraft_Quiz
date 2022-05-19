var punkteÜberleben = 0;
var RundenÜberleben = 0;
var ÜberlebenFragen = new Array;
var Buttongesperrt = false;
var richtigeAntwort = '';


DefiniereFragenÜberleben();
NächsteRundeÜberleben();

function Überleben_Choice(gewählteAntwort) {
    if(Buttongesperrt === true){return}
    Buttongesperrt = true;

    if(gewählteAntwort.getAttribute("id") === richtigeAntwort ){
        Überleben_WhatsRight();
    }else{
        document.getElementById('Überleben_Choice1').style.border = '2px solid red';
        document.getElementById('Überleben_Choice2').style.border = '2px solid red';
        document.getElementById('Überleben_Choice3').style.border = '2px solid red';
        Überleben_WhatsRight();

        //Leeres Herz zeichnen

    }

    document.getElementById('NächsteFrageDiv').style.display = 'flex';

}

function Überleben_WhatsRight() {
    if(richtigeAntwort === 'Überleben_Choice1'){
        document.getElementById('Überleben_Choice1').style.border = '2px solid rgb(13, 241, 13)';
}
    if(richtigeAntwort === 'Überleben_Choice2'){
        document.getElementById('Überleben_Choice2').style.border = '2px solid rgb(13, 241, 13)';
}
    if(richtigeAntwort === 'Überleben_Choice3'){
        document.getElementById('Überleben_Choice3').style.border = '2px solid rgb(13, 241, 13)';
}
}

function NächsteRundeÜberleben() {
    document.getElementById('Überleben_Choice3').style.display = 'block';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById("Überleben_Choice1").style.border = "2px solid rgb(173, 170, 170)";
    document.getElementById("Überleben_Choice2").style.border = "2px solid rgb(173, 170, 170)";
    document.getElementById("Überleben_Choice3").style.border = "2px solid rgb(173, 170, 170)";
    
    Buttongesperrt = false;
    RundenÜberleben++;
    var AktuelleFrage = ÜberlebenFragen.shift();
    var FragenAufgeteilt = AktuelleFrage.split('##');
    document.getElementById('ÜberlebenQuestion').innerHTML = RundenÜberleben + ' ' + FragenAufgeteilt[0];
    document.getElementById('Überleben_Choice1').innerHTML = FragenAufgeteilt[1];
    document.getElementById('Überleben_Choice2').innerHTML = FragenAufgeteilt[2];
    document.getElementById('Überleben_Choice3').innerHTML = FragenAufgeteilt[3];
    richtigeAntwort = FragenAufgeteilt[4];
    if (FragenAufgeteilt[5] === 'JaNeinFrage') {
        document.getElementById('Überleben_Choice3').style.display = 'none';
    }
//    if (FragenAufgeteilt[6] === 'ExtraText') {
//        document.getElementById('ExtraTextÜberleben').style.display = 'flex';
//        document.getElementById('ExtraTextÜberleben').innerHTML = FragenAufgeteilt[7];
//    }
//      Lösung finden wie man nur wenn man auf das bestimmt Falsche klickt der extra Text kommt 
}




function DefiniereFragenÜberleben() {
    ÜberlebenFragen[0] = 'Wer ist der berühmteste deutsche Minecraft youtuber?##BastiGHG##Stegi##Trymacs##Überleben_Choice1##';
    ÜberlebenFragen[1] = 'Wie kann man eine Endermid spawnen?##Enderperle werfen##Spawnei finden##Choruspflanzen abbauen##Überleben_Choice1##';
    ÜberlebenFragen[2] = 'Wird Fallschaden mit Honig abgedämpft?##Ja##Nein####Überleben_Choice##JaNeinFrage';
    ÜberlebenFragen[3] = 'Wie viele Bienen können gleichzeitig in ein Nest?##3##5##2##Überleben_Choice1##';
    ÜberlebenFragen[4] = 'Was braucht man um den Wither zu spawnen?##Witherkopf +<br>4 Seelensand##3 Witherköpfe +<br>3 Seelensand##3 Witherköpfe +<br>4 Seelenerde##Überleben_Choice3##';
    ÜberlebenFragen[5] = 'Wie viele unterschiedliche Netherbiome gibt es?##3##5##7##Überleben_Choice2##';
    ÜberlebenFragen[6] = 'Mit welcher Hilfe, bekommt man einen Zombiekopf?##Creeper##Feuerzeug##Charged Creeper##Überleben_Choice3##';
    ÜberlebenFragen[7] = 'Was ist der berühmteste Mod um Shader zu benutzen?##ShaderGMbh##Optifine##Sodium##Überleben_Choice2##';
    ÜberlebenFragen[8] = 'Auf welcher höhe ist es am besten Diamanten zu farmen?##-60##11##-50##Überleben_Choice1##';
    ÜberlebenFragen[9] = 'Was droppt ein Schwein wenn es vom Wither getötet wird?##Nicht##Witherrose##Schweinefleisch##Überleben_Choice2##';
    ÜberlebenFragen[10] = 'Was braucht man um auf die Netherdecke zu kommen?##Spitzhacke##Enderperle##Leiter + Enderperle##Überleben_Choice3##';
    ÜberlebenFragen[11] = 'Wie kann man Wasser im Nether setzen?##Gar nicht##Im Kessel##Mit Netherite Eimer##Überleben_Choice2##';
    ÜberlebenFragen[12] = 'Wo spawnen schwarze Katzen?##Sumpfhütten##Sumpfhütten und Dorf##Gibt keine schwarze Katze##Überleben_Choice1##';
    ÜberlebenFragen[13] = 'Wo bekommt man Schwämme her?##Ozeanmonumenten##Koralle##Fischen##Überleben_Choice1##';
    ÜberlebenFragen[14] = 'Was hiervon braucht man umbedingt für eine Eisenfarm?##1 Villager##1 Dorf##1 Eisengolem##Überleben_Choice2##';
    ÜberlebenFragen[15] = 'Wie viele TNT-Blöcke sind in einer Pyramide?##3##6##9##Überleben_Choice3##';
    ÜberlebenFragen[16] = 'Wie viele verschiedene Holzbretter Arten gibt es?##5##7##9##Überleben_Choice3##';
    ÜberlebenFragen[17] = 'Kann man mithilfe von Lava ein Netherportal anzünden?##Ja##Nein## ##Überleben_Choice1##JaNeinFrage';
    ÜberlebenFragen[18] = 'Was ist die aktuelle Maximale und Minimale Bauhöhe?##0/256##-64/320##0/356##Überleben_Choice2##';
    ÜberlebenFragen[19] = 'Braucht man um auf einem Skeletpferd zu reiten einen Sattel?##Ja##Nein##Was ist das##Überleben_Choice1##';
    ÜberlebenFragen[20] = '########Überleben_Choice';
    ÜberlebenFragen[21] = '########Überleben_Choice';
    ÜberlebenFragen[22] = '########Überleben_Choice';
    ÜberlebenFragen[23] = '########Überleben_Choice';
    ÜberlebenFragen[24] = '########Überleben_Choice';
    ÜberlebenFragen[25] = '########Überleben_Choice';
    ÜberlebenFragen[26] = '########Überleben_Choice';
    ÜberlebenFragen[27] = '########Überleben_Choice';
    ÜberlebenFragen[28] = '########Überleben_Choice';
    ÜberlebenFragen[29] = '########Überleben_Choice';
    ÜberlebenFragen[30] = '########Überleben_Choice';
    ÜberlebenFragen[31] = '########Überleben_Choice';
    ÜberlebenFragen[32] = '########Überleben_Choice';
    ÜberlebenFragen[33] = '########Überleben_Choice';
    ÜberlebenFragen[34] = '########Überleben_Choice';
    ÜberlebenFragen[35] = '########Überleben_Choice';
    ÜberlebenFragen[36] = '########Überleben_Choice';
    ÜberlebenFragen[37] = '########Überleben_Choice';
    ÜberlebenFragen[38] = '########Überleben_Choice';
    ÜberlebenFragen[39] = '########Überleben_Choice';
    ÜberlebenFragen[40] = '########Überleben_Choice';
    ÜberlebenFragen[41] = '########Überleben_Choice';
    ÜberlebenFragen[42] = '########Überleben_Choice';
    ÜberlebenFragen[43] = '########Überleben_Choice';
    ÜberlebenFragen[44] = '########Überleben_Choice';
    ÜberlebenFragen[45] = '########Überleben_Choice';
    ÜberlebenFragen[46] = '########Überleben_Choice';
    ÜberlebenFragen[47] = '########Überleben_Choice';
    ÜberlebenFragen[48] = '########Überleben_Choice';
    ÜberlebenFragen[49] = '########Überleben_Choice';
    ÜberlebenFragen[50] = '########Überleben_Choice';
    ÜberlebenFragen[51] = '########Überleben_Choice';
    ÜberlebenFragen[52] = '########Überleben_Choice';
    ÜberlebenFragen[53] = '########Überleben_Choice';
    ÜberlebenFragen[54] = '########Überleben_Choice';
    ÜberlebenFragen[55] = '########Überleben_Choice';
    ÜberlebenFragen[56] = '########Überleben_Choice';
    ÜberlebenFragen[57] = '########Überleben_Choice';
    ÜberlebenFragen[58] = '########Überleben_Choice';
    ÜberlebenFragen[59] = '########Überleben_Choice';
    ÜberlebenFragen[60] = '########Überleben_Choice';
    ÜberlebenFragen[61] = '########Überleben_Choice';
    ÜberlebenFragen[62] = '########Überleben_Choice';
    ÜberlebenFragen[63] = '########Überleben_Choice';
    ÜberlebenFragen[64] = '########Überleben_Choice';
    ÜberlebenFragen[65] = '########Überleben_Choice';
    ÜberlebenFragen[66] = '';
    ÜberlebenFragen[67] = '';
    ÜberlebenFragen[68] = '';
    ÜberlebenFragen[69] = '';
    ÜberlebenFragen[70] = '';
    ÜberlebenFragen[71] = '';
    ÜberlebenFragen[72] = '';
    ÜberlebenFragen[73] = '';
    ÜberlebenFragen[74] = '';
    ÜberlebenFragen[75] = '';
    ÜberlebenFragen[76] = '';
    ÜberlebenFragen[77] = '';
    ÜberlebenFragen[78] = '';
    ÜberlebenFragen[79] = '';
    ÜberlebenFragen[80] = '';
    ÜberlebenFragen[81] = '';
    ÜberlebenFragen[82] = '';
    ÜberlebenFragen[83] = '';
    ÜberlebenFragen[84] = '';
    ÜberlebenFragen[85] = '';
    ÜberlebenFragen[86] = '';
    ÜberlebenFragen[87] = '';
    ÜberlebenFragen[88] = '';
    ÜberlebenFragen[89] = '';
    ÜberlebenFragen[90] = '';
    ÜberlebenFragen[91] = '';
    ÜberlebenFragen[92] = '';
    ÜberlebenFragen[93] = '';
    ÜberlebenFragen[94] = '';
    ÜberlebenFragen[95] = '';
    ÜberlebenFragen[96] = '';
    ÜberlebenFragen[97] = '';
    ÜberlebenFragen[98] = '';
    ÜberlebenFragen[99] = '';
    ÜberlebenFragen[100] = '';
for(i=1; i<5; i++){
	ÜberlebenFragen.sort(function(a, b){return Math.random()-0.5;});
}
}