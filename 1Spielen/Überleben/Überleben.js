var punkteÜberleben = 0;
var RundenÜberleben = 0;
var ÜberlebenFragen = new Array;
var Buttongesperrt = false;
var richtigeAntwort = '';
var FalscheAntwortenÜberleben = 0;
const DamageSound = new Audio();
DamageSound.src = '../../0 Sounds/hit3.ogg'

DefiniereFragenÜberleben();
NächsteRundeÜberleben();

function Überleben_Choice(gewählteAntwort) {

    if(Buttongesperrt === true){ButtonClickSound.src = '';return}
    Buttongesperrt = true;


    if(gewählteAntwort.getAttribute("id") === richtigeAntwort ){
        Überleben_WhatsRight();
    }else{
        document.getElementById('Überleben_Choice1').style.border = '2px solid red';
        document.getElementById('Überleben_Choice2').style.border = '2px solid red';
        document.getElementById('Überleben_Choice3').style.border = '2px solid red';
        Überleben_WhatsRight();
        FalscheAntwortenÜberleben++;
        ButtonClickSound.src = '';
        DamageSound.play();


        if (FalscheAntwortenÜberleben == 1){document.getElementById('ÜberlebenHerz3').style.visibility = 'hidden'}
        if (FalscheAntwortenÜberleben == 2){document.getElementById('ÜberlebenHerz2').style.visibility = 'hidden'}
        if (FalscheAntwortenÜberleben == 3){
            document.getElementById('ÜberlebenHerz1').style.display = 'none';
            document.getElementById('ÜberlebenHerz2').style.display = 'none';
            document.getElementById('ÜberlebenHerz3').style.display = 'none';
            document.getElementById('NächsteFrageDiv').style.display = 'none';

            document.getElementById('TodesNachricht').style.display = 'flex';
            document.getElementById('ÜberlebenWiederbelebenDiv').style.display = 'flex';
            DamageSound.play();
        
            return
        
        }


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
    if(richtigeAntwort == 'Überleben_Choice2&3'){
        document.getElementById('Überleben_Choice2').style.border = '2px solid rgb(13, 241, 13)';
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
    ButtonClickSound.src = '../../0 Sounds/click.ogg';
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
    //Normal
    ÜberlebenFragen[0] = 'Wer ist der berühmteste deutsche Minecraft youtuber?##BastiGHG##Stegi##Trymacs##Überleben_Choice1##';
    ÜberlebenFragen[1] = 'Wie kann man eine Endermid spawnen?##Enderperle werfen##Spawnei finden##Choruspflanzen abbauen##Überleben_Choice1##';
    ÜberlebenFragen[2] = 'Wird Fallschaden mit Honig abgedämpft?##Ja##Nein####Überleben_Choice1##JaNeinFrage';
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
    //Hardcore bis zu Frage 10
    ÜberlebenFragen[20] = 'Wie hoch ist die Wahrscheinlichkeit, dass ein Erwachsenes pinkes Schaf spawnt?##1,598%##0,164%##0,361%##Überleben_Choice2';
    ÜberlebenFragen[21] = 'Wie hoch ist die Wahrscheinlichkeit, dass man, mit einer unverzauberten Angel, ein verzaubertes Buch angelt?##0,8%##1,5%##0,1%##Überleben_Choice1';
    ÜberlebenFragen[22] = 'Wie lange braucht man um Obsidian mit der Hand abzubauen?##200s##250s##300s##Überleben_Choice2';
    ÜberlebenFragen[23] = 'Wie hoch ist die Wahrscheinlichkeit, dass ein Witherskelett seinen Kopf droppt?##3,5%##5,5%##2,5%##Überleben_Choice3';
    ÜberlebenFragen[24] = 'Wie hoch ist die Wahrscheinlichkeit, dass ein Erwachsenes Schaf als Braunes Schaf spawnt?##3%##2%##1%##Überleben_Choice1';
    ÜberlebenFragen[25] = 'Wie viele Splash-Texte (Gelber Text im Startmenü) gibt es in Minecraft?##221##254##376##Überleben_Choice3';
    ÜberlebenFragen[26] = 'Wie hoch ist die Wahrscheinlichkeit, dass ein Endportal Frame ein Enderauge enthält?##20%##10%##5%##Überleben_Choice2';
    ÜberlebenFragen[27] = 'Wie hoch ist die Wahrscheinlichkeit, dass ein Endportal 12 Enderaugen enthält?##0,0000000001%##0,00000001%##0,0000000000001%##Überleben_Choice1';
    ÜberlebenFragen[28] = 'Wie hoch ist die Wahrscheinlichkeit, dass ein Zombie mit Diamant Helm spawnt?##1,02%##0,006%##0,13%##Überleben_Choice2';
    ÜberlebenFragen[29] = 'Wie hoch ist die Wahrscheinlichkeit, dass ein Fuchs mit einem Emerald in seinem Mund spawnt?##20%##3%##5%##Überleben_Choice3';
    //Friedlich
    ÜberlebenFragen[30] = 'Was baut man als aller erstes ab, wenn man eine neue Minecraftwelt erstellt?##Holz##Stein##Eisen##Überleben_Choice1';
    ÜberlebenFragen[31] = 'Was macht man in seiner aller ersten Minecraft Nacht?##Enderdrachen töten##Ängstlich Einbauen##Jedes Monster Töten##Überleben_Choice2';
    ÜberlebenFragen[32] = 'Welches Item braucht man um ein Huhn zu füttern?##Weizen##Samen##Eier##Überleben_Choice2';
    ÜberlebenFragen[33] = 'Fließt Wasser schneller als Lava?##Ja##Nein##Ja im Nether##Überleben_Choice1';
    ÜberlebenFragen[34] = 'Wie viel Holzbretter geben 13 Holzstämme?##52##64##48##Überleben_Choice1';
    ÜberlebenFragen[35] = 'Wie groß ist ein Stack Schneebälle?##24##1##16##Überleben_Choice3';
    ÜberlebenFragen[36] = 'Welches dieser Tiere kann Leder droppen?##Schaf##Kuh##Schwein##Überleben_Choice2';
    ÜberlebenFragen[37] = 'Können in der Schwierigkeit Friedlich feindliche Mobs spawnen?##Ja##Nein##Nur Creeper##Überleben_Choice2';
    ÜberlebenFragen[38] = 'Mit welcher dieser Spitzhacken kann man einen Diamanten abbauen?##Steinspitzhacke##Eisenspitzhacke##Goldspitzhacke##Überleben_Choice2';
    ÜberlebenFragen[39] = 'Was passiert wenn man mit einem Delphin schwimmt##Es passiert nichts##Man zähmt ihn##Man wird schneller##Überleben_Choice3';
    ÜberlebenFragen[40] = 'Was braucht man um auf einem Schwein zu sitzen##Karottenrute##Sattel##Schweinerüstung & Sattel##Überleben_Choice2';
    ÜberlebenFragen[41] = 'Wie heißt der Aller erste Minecraft Skin, den jeder hat?##Wolfgang##Gustaf##Steve##Überleben_Choice3';
    ÜberlebenFragen[42] = 'Gibt es in Minecraft einen Mond?##Ja##Nein####Überleben_Choice1##JaNeinFrage';
    ÜberlebenFragen[43] = 'Geht die minimale Bauhöhe in der 1.18 in den negativen Bereich?## Ja ##Nein####Überleben_Choice1##JaNeinFrage';
    ÜberlebenFragen[44] = 'Kann man in Minecraft Java seinen eigenen Skin zeichnen und benutzen?## Ja ##Nein####Überleben_Choice1##JaNeinFrage';
    ÜberlebenFragen[45] = 'Können rote Schafe spawnen?##Ja##Nein####Überleben_Choice2##JaNeinFrage';
    ÜberlebenFragen[46] = 'Wie vermehrt man zwei gleiche Tiere?##Beide füttern##Beide in ein Boot setzen##Beide Schlagen##Überleben_Choice1';
    ÜberlebenFragen[47] = 'Was droppt ein Eisengolem noch außer Eisen?##zufällige Blume##Mohn Blume##Einen Eimer##Überleben_Choice2';
    ÜberlebenFragen[48] = 'Was passiert, wenn man im Nether Wasser platziert?##Es fließt ganz langsam##Es löscht die Lava in der Nähe##Es verdampft##Überleben_Choice3';
    ÜberlebenFragen[49] = 'Was passiert, wenn man mit einer Schaufel Rechtsklick auf einen Grasblock macht?##Wird zu Erdblock##Nichts##Wird zum Weg##Überleben_Choice3';
    //Einfach
    ÜberlebenFragen[50] = 'Wie färbt man Schafe?##Mit farbigem Wasser##Mit Arbeitsblock Färber##Mit Farbstoff##Überleben_Choice3';
    ÜberlebenFragen[51] = 'Kann man im Nether schlafen?## Ja ##Nein##Nur kurz##Überleben_Choice2';
    ÜberlebenFragen[52] = 'Wie bekommt man Blätterblöcke?##Einfach abbauen##Mit Schere##Mit Hacke##Überleben_Choice2&3';
    ÜberlebenFragen[53] = 'Wie viele Obsidian Blöcke braucht man mindestens für ein Netherportal?##10##14##12##Überleben_Choice1';
    ÜberlebenFragen[54] = 'Vor was hat ein Enderman angst?##Villager##Wasser##Endermite##Überleben_Choice2';
    ÜberlebenFragen[55] = 'Was von dieser Auswahl kann man benutzen um einen Craftingtable zu machen?##1 Eichenstamm##3 Holzbretter##2 Stöcke 2 Holzbretter##Überleben_Choice1';
    ÜberlebenFragen[56] = 'Was kann man aus einem Totem Busch bekommen wenn man ihn abbaut?##Holzbretter##Stock##Den Busch selber##Überleben_Choice2';
    ÜberlebenFragen[57] = 'Mit welcher Taste lässt man sich seine Koordinaten anzeigen?##K##F4##F3##Überleben_Choice3';
    ÜberlebenFragen[58] = 'Wie lässt man alle Effekte sofort verfallen?##Honig Trinken##Ins Wasser springen##Milch Trinken##Überleben_Choice3';
    ÜberlebenFragen[59] = 'Wie heilt man einen Zombivillager?##Trank der Heilung##Schwächetrank + Goldapfel##Goldapfel##Überleben_Choice2';
    ÜberlebenFragen[60] = 'Gibt es rote Kühe## Ja ##Nein##Noch nie gesehen##Überleben_Choice1';
    ÜberlebenFragen[61] = 'Gibt es verschiedene Spinnenarten?##Ja 2##Ja 3##nein##Überleben_Choice1';
    ÜberlebenFragen[62] = 'In welcher Schwierigkeit kann man an Hunger sterben?##Einfach##Normal##Schwer##Überleben_Choice3';
    ÜberlebenFragen[63] = 'Vor welchem Tier hat ein Creeper angst?##Spielern##Katzen##Anderen Creepern##Überleben_Choice2';
    ÜberlebenFragen[64] = 'Was braucht man um einen Eisengolem zu bauen?##4 Eisenblöcke <br> 1 geschnitzter Kürbis##2 Eisenblöcke <br> 1 geschnitzter Kürbis##4 eisenblöcke <br> 1 Kürbis##Überleben_Choice1';
    ÜberlebenFragen[65] = 'Kann man einen Enderman mit einem Bogen abschießen?##Ja##Nein####Überleben_Choice2##JaNeinFrage';
    ÜberlebenFragen[66] = 'Welches Mob droppt ein Totem?##Vex##Whither##Evoker##Überleben_Choice3';
    ÜberlebenFragen[67] = 'Welchen Job braucht ein Villager, um Pfeile zu tradden?##Fletcher##Cleric##Butcher##Überleben_Choice1';
    ÜberlebenFragen[68] = 'Wer ist der Losteste Minecraft Spieler?##Monte##Trymacs##Angela Merkel##Überleben_Choice2';
    ÜberlebenFragen[69] = 'Was passiert mit einem Kessel, der im Regen steht##Er rostet##Er füllt sich##Nichts##Überleben_Choice2';
    //Schwer
    ÜberlebenFragen[70] = '1. In welchem Jahr wurde Minecraft erfunden?##2009##2006##2010##Überleben_Choice1';
    ÜberlebenFragen[71] = 'Wie hoch ist die Wahrscheinlichkeit, <br> dass ein Wolf gezähmt wird, <br> wenn man ihm einen Knochen gibt?##2⁄5##1⁄5##1⁄3##Überleben_Choice3';
    ÜberlebenFragen[72] = 'Aus welchem Land kommt Minecraft?##USA##Deutschland##Schweden##Überleben_Choice3';
    ÜberlebenFragen[73] = 'Auf welcher von diesen Webseiten kann man einen kostenlosen Minecraft Server erstellen?##minecraft.server##Aternos##Nitrado##Überleben_Choice2';
    ÜberlebenFragen[74] = 'Kann man mit einer Goldspitzhacke Gold abbauen? ?## Ja ##Nein####Überleben_Choice2JaNeinFrage';
    ÜberlebenFragen[75] = 'Was ist das Maximale Lichtlevel?##7##10##15##Überleben_Choice3';
    ÜberlebenFragen[76] = 'Wie viele Arbeitsblöcke gibt es##10##13##15##Überleben_Choice2';
    ÜberlebenFragen[77] = 'Was braucht man für eine einfache Redstone-Clock?##Komperator, Redstone, Redstonefackel##Komperator, Redstone##Redstone, Verstärcker, Redstonefackel##Überleben_Choice1';
    ÜberlebenFragen[78] = 'Mit welcher Tastenkombination wechselt man bei der java Edition schnell in den Kreativ Modus?##Alt+F4##F5+F6##F3+F4##Überleben_Choice3';
    ÜberlebenFragen[79] = 'Wie viele verschiedene Bastionen gibt es?##2##3##4##Überleben_Choice3';
    ÜberlebenFragen[80] = 'Von wie vielen Blöcken muss man springen, damit man nur noch ein halbes Herz hat?##15##22##20##Überleben_Choice2';
    ÜberlebenFragen[81] = 'Wie viele verschiedene nätürlich vorkommende Tropenfische gibt es?##2700##2000##1500##Überleben_Choice1';
    ÜberlebenFragen[82] = 'Auf welcher Höhe generiert die meiste Kohle?##85-90##50-60##95-96##Überleben_Choice3';
    ÜberlebenFragen[83] = 'Was ist die Brenndauer eines Lavaeimers?##3000s##1000s##10min##Überleben_Choice2';
    ÜberlebenFragen[84] = 'Wie viele Erzblöcke braucht man für einen Full Beacon?##64##164##192##Überleben_Choice2';
    ÜberlebenFragen[85] = 'Mit welcher Tastenkombination lässt man sich die Chunks anzeigen?##F3+G##F3+C##F3+S##Überleben_Choice1';
    ÜberlebenFragen[86] = 'Wie muss man ein Schaf benenne, damit es zum Regenbogenschaf wird?##jakob_##jeb_##_rainbow_##Überleben_Choice2';
    ÜberlebenFragen[87] = 'Wer hat Minecraft erfunden##Linus Torvalds##Jens Bergernsten##Markus Alesej Persson##Überleben_Choice3';
    ÜberlebenFragen[88] = 'Wie viele Tiere können maximal in ein 1 Block breites Loch, ohne das welche ersticken?##25##24##19##Überleben_Choice2';
    ÜberlebenFragen[89] = 'An welchem Datum wurde Minecraft erfunden?##31.10.2009##20.02.2009##17.04.2009##Überleben_Choice3';

for(i=1; i<5; i++){
	ÜberlebenFragen.sort(function(a, b){return Math.random()-0.5;});
}
}

function ÜberlebenWiederbeleben() {

    DefiniereFragenÜberleben();
    NächsteRundeÜberleben();

    document.getElementById('TodesNachricht').style.display = 'none';
    document.getElementById('ÜberlebenWiederbelebenDiv').style.display = 'none';

    document.getElementById('ÜberlebenHerz1').style.display = 'block';
    document.getElementById('ÜberlebenHerz2').style.display = 'block';
    document.getElementById('ÜberlebenHerz3').style.display = 'block';

    document.getElementById('ÜberlebenHerz2').style.visibility = 'visible';
    document.getElementById('ÜberlebenHerz3').style.visibility = 'visible';

    FalscheAntwortenÜberleben = 0;
    RundenÜberleben = 0;




}