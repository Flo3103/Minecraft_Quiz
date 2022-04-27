
function SchwerAllUsed() {    
    document.getElementById('Choice1').style.borderColor = 'rgb(173, 170, 170)';
    document.getElementById('Choice2').style.borderColor = 'rgb(173, 170, 170)';
    document.getElementById('Choice3').style.borderColor = 'rgb(173, 170, 170)';

    document.getElementById('correctionDiv').style.display = 'none';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;
    document.getElementById('correctionImg').src = '';
    document.getElementById('Choice1').onclick = function(){ChoiceFalsSchwer();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsSchwer();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsSchwer();};
}


function NächsteFrageSchwer2() {
    SchwerAllUsed();
    document.getElementById('Headline').innerHTML = '2. Wie hoch ist die Wahrscheinlichkeit, <br> dass ein Wolf gezähmt wird, <br> wenn man ihm einen Knochen gibt?' ;
    document.getElementById('Choice1').innerHTML = '2⁄5' ;
    document.getElementById('Choice2').innerHTML = '1⁄5' ;
    document.getElementById('Choice3').innerHTML = '1⁄3' ;
    document.getElementById('Choice3').onclick = function(){ChoiceRightSchwer();};
    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageSchwer3();
    };
    RightCorrection = 3;
}   

function NächsteFrageSchwer3() {
    SchwerAllUsed();
    document.getElementById('Headline').innerHTML = '3. Aus welchem Land kommt Minecraft?' ;
    document.getElementById('Choice1').innerHTML = 'USA' ;
    document.getElementById('Choice2').innerHTML = 'Deutschland' ;
    document.getElementById('Choice3').innerHTML = 'Schweden' ;
    document.getElementById('Choice3').onclick = function(){ChoiceRightSchwer();};
    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageSchwer4();
    };
    RightCorrection = 3;
}   


function NächsteFrageSchwer4() {
    SchwerAllUsed();
    document.getElementById('Headline').innerHTML = '4. Auf welcher von diesen Webseiten kann man einen kostenlosen Minecraft Server erstellen?' ;
    document.getElementById('Choice1').innerHTML = 'minecraft.server' ;
    document.getElementById('Choice2').innerHTML = 'Aternos' ;
    document.getElementById('Choice3').innerHTML = 'nitrado' ;
    document.getElementById('Choice2').onclick = function(){ChoiceRightSchwer();};
    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageSchwer5();
    };
    RightCorrection = 2;
}   


function NächsteFrageSchwer5() {
    SchwerAllUsed();
    document.getElementById('Headline').innerHTML = '5. Kann man mit einer Goldspitzhacke Gold abbauen? ?' ;
    document.getElementById('Choice1').innerHTML = ' Ja ' ;
    document.getElementById('Choice2').innerHTML = 'Nein' ;
    document.getElementById('Choice3').style.display = 'none';
    document.getElementById('Choice2').onclick = function(){ChoiceRightSchwer();};
    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageSchwer6();
    };
    RightCorrection = 2;
}   


function NächsteFrageSchwer6() {
    SchwerAllUsed();
    document.getElementById('Choice3').style.display = 'inline';
    document.getElementById('Headline').innerHTML = '6. Was ist das Maximale Lichtlevel?' ;
    document.getElementById('Choice1').innerHTML = '7' ;
    document.getElementById('Choice2').innerHTML = '10' ;
    document.getElementById('Choice3').innerHTML = '15' ;
    document.getElementById('Choice3').onclick = function(){ChoiceRightSchwer();};
    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageSchwer7();
    };
    RightCorrection = 3;
}   


function NächsteFrageSchwer7() {
    SchwerAllUsed();
    document.getElementById('Headline').innerHTML = '7. Wie viele Arbeitsblöcke gibt es?' ;
    document.getElementById('Choice1').innerHTML = '10' ;
    document.getElementById('Choice2').innerHTML = '13' ;
    document.getElementById('Choice3').innerHTML = '15' ;
    document.getElementById('Choice2').onclick = function(){ChoiceRightSchwer();};
    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageSchwer8();
    };
    RightCorrection = 2;
}   


function NächsteFrageSchwer8() {
    SchwerAllUsed();
    document.getElementById('Headline').innerHTML = '8. Was braucht man für eine einfache Redstone-Clock?' ;
    document.getElementById('Choice1').innerHTML = 'Komperator, Redstone, Redstonefackel' ;
    document.getElementById('Choice2').innerHTML = 'Komperator, Redstone' ;
    document.getElementById('Choice3').innerHTML = 'Redstone, Verstärcker, Redstonefackel' ;
    document.getElementById('Choice1').onclick = function(){ChoiceRightSchwer();};
    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageSchwer9();
    };
    RightCorrection = 1;
}   


function NächsteFrageSchwer9() {
    SchwerAllUsed();
    document.getElementById('Headline').innerHTML = '9. Mit welcher Tastenkombination wechselt man bei der java Edition schnell in den Kreativ Modus?' ;
    document.getElementById('Choice1').innerHTML = 'Alt+F4' ;
    document.getElementById('Choice2').innerHTML = 'F5+F6' ;
    document.getElementById('Choice3').innerHTML = 'F3+F4' ;
    document.getElementById('Choice3').onclick = function(){ChoiceRightSchwer();};
    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageSchwer10();
    };
    RightCorrection = 3;
}   


function NächsteFrageSchwer10() {
    SchwerAllUsed();
    document.getElementById('Headline').innerHTML = '10. Wie viele verschiedene Bastionen gibt es?' ;
    document.getElementById('Choice1').innerHTML = '2' ;
    document.getElementById('Choice2').innerHTML = '3' ;
    document.getElementById('Choice3').innerHTML = '4' ;
    document.getElementById('Choice3').onclick = function(){ChoiceRightSchwer();};
    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageSchwer11();
    };
    RightCorrection = 3;
}   


function NächsteFrageSchwer11() {
    SchwerAllUsed();
    document.getElementById('Headline').innerHTML = '11. Von wie vielen Blöcken muss man springen, damit man nur noch ein halbes Herz hat?' ;
    document.getElementById('Choice1').innerHTML = '15' ;
    document.getElementById('Choice2').innerHTML = '22' ;
    document.getElementById('Choice3').innerHTML = '20' ;
    document.getElementById('Choice2').onclick = function(){ChoiceRightSchwer();};
    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageSchwer12();
    };
    RightCorrection = 2;
}   


function NächsteFrageSchwer12() {
    SchwerAllUsed();
    document.getElementById('Headline').innerHTML = '12. Wie viele verschiedene nätürlich vorkommende Tropenfische gibt es?' ;
    document.getElementById('Choice1').innerHTML = '2700' ;
    document.getElementById('Choice2').innerHTML = '2000' ;
    document.getElementById('Choice3').innerHTML = '1500' ;
    document.getElementById('Choice1').onclick = function(){ChoiceRightSchwer();};
    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageSchwer13();
    };
    RightCorrection = 1;
}   


function NächsteFrageSchwer13() {
    SchwerAllUsed();
    document.getElementById('Headline').innerHTML = '13. Auf welcher Höhe generiert die meiste Kohle?' ;
    document.getElementById('Choice1').innerHTML = '85-90' ;
    document.getElementById('Choice2').innerHTML = '50-60' ;
    document.getElementById('Choice3').innerHTML = '95-96' ;
    document.getElementById('Choice3').onclick = function(){ChoiceRightSchwer();};
    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageSchwer14();
    };
    RightCorrection = 3;
}   


function NächsteFrageSchwer14() {
    SchwerAllUsed();
    document.getElementById('Headline').innerHTML = '14. Was ist die Brenndauer eines Lavaeimers?' ;
    document.getElementById('Choice1').innerHTML = '3000s' ;
    document.getElementById('Choice2').innerHTML = '1000s' ;
    document.getElementById('Choice3').innerHTML = '10min' ;
    document.getElementById('Choice2').onclick = function(){ChoiceRightSchwer();};
    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageSchwer15();
    };
    RightCorrection = 2;
}   


function NächsteFrageSchwer15() {
    SchwerAllUsed();
    document.getElementById('Headline').innerHTML = '15. Wie viele Erzblöcke braucht man für einen Full Beacon?' ;
    document.getElementById('Choice1').innerHTML = '64' ;
    document.getElementById('Choice2').innerHTML = '164' ;
    document.getElementById('Choice3').innerHTML = '192' ;
    document.getElementById('Choice2').onclick = function(){ChoiceRightSchwer();};
    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageSchwer16();
    };
    RightCorrection = 2;
}   


function NächsteFrageSchwer16() {
    SchwerAllUsed();
    document.getElementById('Headline').innerHTML = '16. Mit welcher Tastenkombination lässt man sich die Chunks anzeigen?' ;
    document.getElementById('Choice1').innerHTML = 'F3+G' ;
    document.getElementById('Choice2').innerHTML = 'F3+C' ;
    document.getElementById('Choice3').innerHTML = 'F3+S' ;
    document.getElementById('Choice1').onclick = function(){ChoiceRightSchwer();};
    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageSchwer17();
    };
    RightCorrection = 1;
}   


function NächsteFrageSchwer17() {
    SchwerAllUsed();
    document.getElementById('Headline').innerHTML = '17. Wie muss man ein Schaf benenne, damit es zum Regenbogenschaf wird?' ;
    document.getElementById('Choice1').innerHTML = 'jakob_' ;
    document.getElementById('Choice2').innerHTML = 'jeb_' ;
    document.getElementById('Choice3').innerHTML = '_rainbow_' ;
    document.getElementById('Choice2').onclick = function(){ChoiceRightSchwer();};
    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageSchwer18();
    };
    RightCorrection = 2;
}   


function NächsteFrageSchwer18() {
    SchwerAllUsed();
    document.getElementById('Headline').innerHTML = '18. Wer hat Minecraft erfunden?' ;
    document.getElementById('Choice1').innerHTML = 'Linus Torvalds' ;
    document.getElementById('Choice2').innerHTML = 'Jens Bergensten' ;
    document.getElementById('Choice3').innerHTML = 'Markus Alesej Persson' ;
    document.getElementById('Choice3').onclick = function(){ChoiceRightSchwer();};
    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageSchwer19();
    };
    RightCorrection = 3;
}   


function NächsteFrageSchwer19() {
    SchwerAllUsed();
    document.getElementById('Headline').innerHTML = '19. Wie viele Tiere können maximal in ein 1 Block breites Loch, ohne das welche ersticken?' ;
    document.getElementById('Choice1').innerHTML = '25' ;
    document.getElementById('Choice2').innerHTML = '24' ;
    document.getElementById('Choice3').innerHTML = '19' ;
    document.getElementById('Choice2').onclick = function(){ChoiceRightSchwer();};
    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageSchwer20();
    };
    RightCorrection = 2;
}   

function NächsteFrageSchwer20() {
    SchwerAllUsed();
    document.getElementById('Headline').innerHTML = '20. An welchem Datum wurde Minecraft erfunden?' ;
    document.getElementById('Choice1').innerHTML = '31.10.2009' ;
    document.getElementById('Choice2').innerHTML = '20.02.2009' ;
    document.getElementById('Choice3').innerHTML = '17.04.2009' ;
    document.getElementById('Choice3').onclick = function(){ChoiceRightSchwer();};
    document.getElementById('NextQuestion').innerHTML = 'Schwierigkeit beenden' ;
    document.getElementById('NextQuestion').onclick = function(){
        PointScreenSchwer();
    };
    RightCorrection = 3;
}   

function PointScreenSchwer() {

    document.getElementById('Question').style.display = 'none';
    document.getElementById('PointScreenDiv').style.display = 'inline';
    document.getElementById('Points').innerHTML = 'Du hast Schwer mit <h3>' + punkteSchwer + ' von 20</h3> Punkten abgeschlossen';

}   

