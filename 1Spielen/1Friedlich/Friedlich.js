
function FriedlichAllUsed() {    
    document.getElementById('Choice1').style.borderColor = 'rgb(173, 170, 170)';
    document.getElementById('Choice2').style.borderColor = 'rgb(173, 170, 170)';
    document.getElementById('Choice3').style.borderColor = 'rgb(173, 170, 170)';

    document.getElementById('correctionDiv').style.display = 'none';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;
    document.getElementById('correctionImg').src = '';
    document.getElementById('Choice1').onclick = function(){ChoiceFalsFriedlich();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsFriedlich();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsFriedlich();};

}





function NächsteFrageFriedlich2() {
    FriedlichAllUsed();
    document.getElementById('Headline').innerHTML = '2. Was macht man in seiner aller ersten Minecraft Nacht?' ;
    document.getElementById('Choice1').innerHTML = 'Enderdrachen töten' ;
    document.getElementById('Choice2').innerHTML = 'Ängstlich Einbauen' ;
    document.getElementById('Choice3').innerHTML = 'Jedes Monster Töten' ;
    document.getElementById('Choice2').onclick = function(){ChoiceRightFriedlich();};
    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageFriedlich3();
    };
    RightCorrection = 2;
}

function NächsteFrageFriedlich3() {
    FriedlichAllUsed();
    document.getElementById('Headline').innerHTML = '3. Welches Item braucht man um ein Huhn zu füttern?' ;
    document.getElementById('Choice1').innerHTML = 'Weizen' ;
    document.getElementById('Choice2').innerHTML = 'Samen' ;
    document.getElementById('Choice3').innerHTML = 'Eier' ;
    document.getElementById('Choice2').onclick = function(){ChoiceRightFriedlich();};
    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageFriedlich4();
    };
    RightCorrection = 2;
}   


function NächsteFrageFriedlich4() {
    FriedlichAllUsed();
    document.getElementById('Headline').innerHTML = '4. Fließt Wasser schneller als Lava?' ;
    document.getElementById('Choice1').innerHTML = 'Ja' ;
    document.getElementById('Choice2').innerHTML = 'Nein' ;
    document.getElementById('Choice3').innerHTML = 'Ja Im Nether' ;
    document.getElementById('Choice1').onclick = function(){ChoiceRightFriedlich();};
    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageFriedlich5();
    };
    RightCorrection = 1;
}   


function NächsteFrageFriedlich5() {
    FriedlichAllUsed();
    document.getElementById('Headline').innerHTML = '5. Wie viel Holzbretter geben 13 Holzstämme?' ;
    document.getElementById('Choice1').innerHTML = '52' ;
    document.getElementById('Choice2').innerHTML = '64' ;
    document.getElementById('Choice3').innerHTML = '48' ;
    document.getElementById('Choice1').onclick = function(){ChoiceRightFriedlich();};
    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageFriedlich6();
    };
    RightCorrection = 1;
}   


function NächsteFrageFriedlich6() {
    FriedlichAllUsed();
    document.getElementById('Headline').innerHTML = '6. Wie groß ist ein Stack Schneebälle?' ;
    document.getElementById('Choice1').innerHTML = '24' ;
    document.getElementById('Choice2').innerHTML = '1' ;
    document.getElementById('Choice3').innerHTML = '16' ;
    document.getElementById('Choice3').onclick = function(){ChoiceRightFriedlich();};
    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageFriedlich7();
    };
    RightCorrection = 3;
}   


function NächsteFrageFriedlich7() {
    FriedlichAllUsed();
    document.getElementById('Headline').innerHTML = '7. Welches dieser Tiere kann Leder droppen?' ;
    document.getElementById('Choice1').innerHTML = 'Schaf' ;
    document.getElementById('Choice2').innerHTML = 'Kuh' ;
    document.getElementById('Choice3').innerHTML = 'Schwein' ;
    document.getElementById('Choice2').onclick = function(){ChoiceRightFriedlich();};
    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageFriedlich8();
    };
    RightCorrection = 2;
}   

function NächsteFrageFriedlich8() {
    FriedlichAllUsed();
    document.getElementById('Headline').innerHTML = '8. Können in der Schwierigkeit Friedlich feindliche Mobs spawnen?' ;
    document.getElementById('Choice1').innerHTML = ' Ja ' ;
    document.getElementById('Choice2').innerHTML = 'Nein' ;
    document.getElementById('Choice3').innerHTML = 'Nur Creeper' ;
    document.getElementById('Choice2').onclick = function(){ChoiceRightFriedlich();};
    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageFriedlich9();
    };
    RightCorrection = 2;
}   


function NächsteFrageFriedlich9() {
    FriedlichAllUsed();
    document.getElementById('Headline').innerHTML = '9. Mit welcher dieser Spitzhacken kann man einen Diamanten abbauen?' ;
    document.getElementById('Choice1').innerHTML = 'Steinspitzhacke' ;
    document.getElementById('Choice2').innerHTML = 'Eisenspitzhacke' ;
    document.getElementById('Choice3').innerHTML = 'Goldspitzhacke' ;
    document.getElementById('Choice2').onclick = function(){ChoiceRightFriedlich();};
    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageFriedlich10();
    };
    RightCorrection = 2;
}   

function NächsteFrageFriedlich10() {
    FriedlichAllUsed();
    document.getElementById('Headline').innerHTML = '10. Was passiert wenn man mit einem Delphin schwimmt' ;
    document.getElementById('Choice1').innerHTML = 'Es passiert nichts' ;
    document.getElementById('Choice2').innerHTML = 'Man zähmt ihn' ;
    document.getElementById('Choice3').innerHTML = 'Man wird schneller' ;
    document.getElementById('Choice3').onclick = function(){ChoiceRightFriedlich();};
    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageFriedlich11();
    };
    RightCorrection = 3;
}

function NächsteFrageFriedlich11() {
    FriedlichAllUsed();
    document.getElementById('Headline').innerHTML = '11. Was braucht man um auf einem Schwein zu sitzen' ;
    document.getElementById('Choice1').innerHTML = 'Karottenrute' ;
    document.getElementById('Choice2').innerHTML = 'Sattel' ;
    document.getElementById('Choice3').innerHTML = 'Schweinerüstung & Sattel' ;
    document.getElementById('Choice2').onclick = function(){ChoiceRightFriedlich();};
    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageFriedlich12();
    };
    RightCorrection = 2;
}   

function NächsteFrageFriedlich12() {
    FriedlichAllUsed();
    document.getElementById('Headline').innerHTML = '12. Wie heißt der Aller erste Minecraft Skin, den jeder hat?' ;
    document.getElementById('Choice1').innerHTML = 'Wolfgang' ;
    document.getElementById('Choice2').innerHTML = 'Gustaf' ;
    document.getElementById('Choice3').innerHTML = 'Steve' ;
    document.getElementById('Choice3').onclick = function(){ChoiceRightFriedlich();};
    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageFriedlich13();
    };
    RightCorrection = 3;
}   

function NächsteFrageFriedlich13() {
    FriedlichAllUsed();
    document.getElementById('Headline').innerHTML = '13. Gibt es in Minecraft einen Mond?' ;
    document.getElementById('Choice1').innerHTML = ' Ja ' ;
    document.getElementById('Choice2').innerHTML = 'Nein' ;
    document.getElementById('Choice3').style.display = 'none' ;
    document.getElementById('Choice1').onclick = function(){ChoiceRightFriedlich();};
    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageFriedlich14();
    };
    RightCorrection = 1;
}   

function NächsteFrageFriedlich14() {
    FriedlichAllUsed();
    document.getElementById('Headline').innerHTML = '14. Geht die minimale Bauhöhe in der 1.18 in den negativen Bereich?' ;
    document.getElementById('Choice1').innerHTML = ' Ja ' ;
    document.getElementById('Choice2').innerHTML = 'Nein' ;
    document.getElementById('Choice1').onclick = function(){ChoiceRightFriedlich();};
    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageFriedlich15();
    };
    RightCorrection = 1;
}   




function NächsteFrageFriedlich15() {    
    FriedlichAllUsed();
    document.getElementById('Headline').innerHTML = '15. Kann man in Minecraft Java seinen eigenen Skin zeichnen und benutzen?' ;
    document.getElementById('Choice1').innerHTML = ' Ja ' ;
    document.getElementById('Choice2').innerHTML = 'Nein' ;
    document.getElementById('Choice1').onclick = function(){ChoiceRightFriedlich();};
    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageFriedlich16();
    };
    RightCorrection = 1;
}   


function NächsteFrageFriedlich16() {
    FriedlichAllUsed();
    document.getElementById('Headline').innerHTML = '16. Können rote Schafe spawnen?' ;
    document.getElementById('Choice1').innerHTML = ' Ja ' ;
    document.getElementById('Choice2').innerHTML = 'Nein' ;
    document.getElementById('Choice2').onclick = function(){ChoiceRightFriedlich();};
    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageFriedlich17();
    };
    RightCorrection = 2;
}   


function NächsteFrageFriedlich17() {
    FriedlichAllUsed();
    document.getElementById('Choice3').style.display = 'inline' ;
    document.getElementById('Headline').innerHTML = '17. Wie vermehrt man zwei gleiche Tiere?' ;
    document.getElementById('Choice1').innerHTML = 'Beide füttern' ;
    document.getElementById('Choice2').innerHTML = 'Beide in ein Boot setzen' ;
    document.getElementById('Choice3').innerHTML = 'Beide Schlagen' ;
    document.getElementById('Choice1').onclick = function(){ChoiceRightFriedlich();};
    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageFriedlich18();
    };
    RightCorrection = 1;
}   


function NächsteFrageFriedlich18() {
    FriedlichAllUsed();
    document.getElementById('Headline').innerHTML = '18. Was droppt ein Eisengolem noch außer Eisen?' ;
    document.getElementById('Choice1').innerHTML = 'zufällige Blume' ;
    document.getElementById('Choice2').innerHTML = 'Mohn Blume' ;
    document.getElementById('Choice3').innerHTML = 'Einen Eimer' ;
    document.getElementById('Choice2').onclick = function(){ChoiceRightFriedlich();};
    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageFriedlich19();
    };
    RightCorrection = 2;
}   


function NächsteFrageFriedlich19() {
    FriedlichAllUsed();
    document.getElementById('Headline').innerHTML = '19. Was passiert, wenn man im Nether Wasser platziert?' ;
    document.getElementById('Choice1').innerHTML = 'Es fließt ganz langsam' ;
    document.getElementById('Choice2').innerHTML = 'Es löscht die Lava in der Nähe' ;
    document.getElementById('Choice3').innerHTML = 'Es verdampft' ;
    document.getElementById('Choice3').onclick = function(){ChoiceRightFriedlich();};
    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageFriedlich20();
    };
    RightCorrection = 3;
}  


function NächsteFrageFriedlich20() {
    FriedlichAllUsed();
    document.getElementById('Headline').innerHTML = '20. Was passiert, wenn man mit einer Schaufel Rechtsklick auf einen Grasblock macht?' ;
    document.getElementById('Choice1').innerHTML = 'Wird zu Erdblock' ;
    document.getElementById('Choice2').innerHTML = 'Nichts' ;
    document.getElementById('Choice3').innerHTML = 'Wird zum Weg' ;
    document.getElementById('Choice3').onclick = function(){ChoiceRightFriedlich();};
    document.getElementById('NextQuestion').innerHTML = 'Schwierigkeit beenden' ;
    document.getElementById('NextQuestion').onclick = function(){
        PointScreenFriedlich();
    };
    RightCorrection = 3;
}   


function PointScreenFriedlich() {
    document.getElementById('Question').style.display = 'none';
    document.getElementById('PointScreenDiv').style.display = 'inline';
    document.getElementById('Points').innerHTML = 'Du hast Friedlich mit <h3>' + punkteFriedlich + ' von 20</h3> Punkten abgeschlossen';

}   

