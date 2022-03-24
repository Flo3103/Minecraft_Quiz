function EinfachAllUsed() {
    document.getElementById('correctionDiv').style.display = 'none';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;
    document.getElementById('correctionImg').src = '';
}


function NächsteFrageEinfach2() {

    document.getElementById('Headline').innerHTML = '2. Kann man im Nether schlafen?' ;
    document.getElementById('Choice1').innerHTML = 'Ja' ;
    document.getElementById('Choice2').innerHTML = 'Nein' ;
    document.getElementById('Choice3').innerHTML = 'Nur kurz' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsEinfach();};
    document.getElementById('Choice2').onclick = function(){ChoiceRightEinfach();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsEinfach();};

    EinfachAllUsed();


    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageEinfach3();
    };
    
}   

function NächsteFrageEinfach3() {

    document.getElementById('Headline').innerHTML = '3. Wie bekommt man Blätterblöcke?' ;
    document.getElementById('Choice1').innerHTML = 'Einfach abbauen' ;
    document.getElementById('Choice2').innerHTML = 'Mit Schere' ;
    document.getElementById('Choice3').innerHTML = 'Mit Hacke' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsEinfach();};
    document.getElementById('Choice2').onclick = function(){ChoiceRightEinfach();};
    document.getElementById('Choice3').onclick = function(){ChoiceRightEinfach();};

    EinfachAllUsed();


    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageEinfach4();
    };
    
}   


function NächsteFrageEinfach4() {

    document.getElementById('Headline').innerHTML = '4. Wie viele Obsidian Blöcke braucht man mindestens für ein Netherportal?' ;
    document.getElementById('Choice1').innerHTML = '10' ;
    document.getElementById('Choice2').innerHTML = '14' ;
    document.getElementById('Choice3').innerHTML = '12' ;

    document.getElementById('Choice1').onclick = function(){ChoiceRightEinfach();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsEinfach();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsEinfach();};

    EinfachAllUsed();


    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageEinfach5();
    };
    
}   


function NächsteFrageEinfach5() {

    document.getElementById('Headline').innerHTML = '5. Vor was hat ein Enderman angst?' ;
    document.getElementById('Choice1').innerHTML = 'Villager' ;
    document.getElementById('Choice2').innerHTML = 'Wasser' ;
    document.getElementById('Choice3').innerHTML = 'Endermite' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsEinfach();};
    document.getElementById('Choice2').onclick = function(){ChoiceRightEinfach();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsEinfach();};

    EinfachAllUsed();


    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageEinfach6();
    };
    
}   


function NächsteFrageEinfach6() {

    document.getElementById('Headline').innerHTML = '6. Was von dieser Auswahl kann man benutzen um einnen Craftingtabel zu machen?' ;
    document.getElementById('Choice1').innerHTML = '1 Eichenstamm' ;
    document.getElementById('Choice2').innerHTML = '3 Holzbretter' ;
    document.getElementById('Choice3').innerHTML = '2 Stöcke 2 Holzbretter' ;

    document.getElementById('Choice1').onclick = function(){ChoiceRightEinfach();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsEinfach();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsEinfach();};

    EinfachAllUsed();


    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageEinfach7();
    };
    
}   


function NächsteFrageEinfach7() {

    document.getElementById('Headline').innerHTML = '7. Was kann man aus einem Totem Busch bekommen wenn man ihn abbaut?' ;
    document.getElementById('Choice1').innerHTML = 'Holzbretter' ;
    document.getElementById('Choice2').innerHTML = 'Stock' ;
    document.getElementById('Choice3').innerHTML = 'Den Busch selber' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsEinfach();};
    document.getElementById('Choice2').onclick = function(){ChoiceRightEinfach();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsEinfach();};

    EinfachAllUsed();


    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageEinfach8();
    };
    
}   


function NächsteFrageEinfach8() {

    document.getElementById('Headline').innerHTML = '8. Mit welcher Taste läst man sich seine Koordinaten anzeigen?' ;
    document.getElementById('Choice1').innerHTML = 'K' ;
    document.getElementById('Choice2').innerHTML = 'F4' ;
    document.getElementById('Choice3').innerHTML = 'F3' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsEinfach();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsEinfach();};
    document.getElementById('Choice3').onclick = function(){ChoiceRightEinfach();};

    EinfachAllUsed();


    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageEinfach9();
    };
    
}   


function NächsteFrageEinfach9() {

    document.getElementById('Headline').innerHTML = '9. Wie lässt man alle Effekte sofort verfallen?' ;
    document.getElementById('Choice1').innerHTML = 'Honig Trinken' ;
    document.getElementById('Choice2').innerHTML = 'Ins Wasser springen' ;
    document.getElementById('Choice3').innerHTML = 'Milch Trinken' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsEinfach();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsEinfach();};
    document.getElementById('Choice3').onclick = function(){ChoiceRightEinfach();};

    EinfachAllUsed();


    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageEinfach10();
    };
    
}   


function NächsteFrageEinfach10() {

    document.getElementById('Headline').innerHTML = '10. Wie heilt man einen Zombivillager?' ;
    document.getElementById('Choice1').innerHTML = 'Trank der Heilung' ;
    document.getElementById('Choice2').innerHTML = 'Schwächetrank + Goldapfel' ;
    document.getElementById('Choice3').innerHTML = 'Goldapfel' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsEinfach();};
    document.getElementById('Choice2').onclick = function(){ChoiceRightEinfach();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsEinfach();};

    EinfachAllUsed();


    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageEinfach11();
    };
    
}   

function ChoiceLost1Einfach(){
    document.getElementById('lost').innerHTML = 'Natürlich gibts die spiel <br> mal mehr Minecraft';
    document.getElementById('lost').style.display = 'flex';
    ChoiceRight();
}

function NächsteFrageEinfach11() {

    document.getElementById('Headline').innerHTML = '11. Gibt es rote Kühe?' ;
    document.getElementById('Choice1').innerHTML = 'Ja' ;
    document.getElementById('Choice2').innerHTML = 'Nein' ;
    document.getElementById('Choice3').innerHTML = 'Noch nie gesehen' ;

    document.getElementById('Choice1').onclick = function(){ChoiceRightEinfach();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsEinfach();};
    document.getElementById('Choice3').onclick = function(){ChoiceLost1Einfach();};

    EinfachAllUsed();


    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageEinfach12();
    };
    
}   


function NächsteFrageEinfach12() {

    document.getElementById('lost').style.display = 'none';

    document.getElementById('Headline').innerHTML = '12. Gibt es verschiedene Spinnenarten?' ;
    document.getElementById('Choice1').innerHTML = 'Ja 2' ;
    document.getElementById('Choice2').innerHTML = 'Ja 3' ;
    document.getElementById('Choice3').innerHTML = 'Nein' ;


    document.getElementById('Choice1').onclick = function(){ChoiceRightEinfach();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsEinfach();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsEinfach();};

    EinfachAllUsed();


    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageEinfach13();
    };
    
}   


function NächsteFrageEinfach13() {

    document.getElementById('Headline').innerHTML = '13. In welcher Schwierigkeit kann man an Hunger sterben?' ;
    document.getElementById('Choice1').innerHTML = 'Einfach' ;
    document.getElementById('Choice2').innerHTML = 'Normal' ;
    document.getElementById('Choice3').innerHTML = 'Schwer' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsEinfach();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsEinfach();};
    document.getElementById('Choice3').onclick = function(){ChoiceRightEinfach();};

    EinfachAllUsed();


    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageEinfach14();
    };
    
}   


function NächsteFrageEinfach14() {

    document.getElementById('Headline').innerHTML = '14. Vor welchem Tier hat ein Creeper angst?' ;
    document.getElementById('Choice1').innerHTML = 'Spielern' ;
    document.getElementById('Choice2').innerHTML = 'Katzen' ;
    document.getElementById('Choice3').innerHTML = 'Anderen Creepern' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsEinfach();};
    document.getElementById('Choice2').onclick = function(){ChoiceRightEinfach();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsEinfach();};

    EinfachAllUsed();


    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageEinfach15();
    };
    
}   


function NächsteFrageEinfach15() {

    document.getElementById('Headline').innerHTML = '15. Was braucht man um einen Eisengolem zu bauen?' ;
    document.getElementById('Choice1').innerHTML = '4 Eisenblöcke <br> 1 geschnitzter Kürbis' ;
    document.getElementById('Choice2').innerHTML = '2 Eisenblöcke <br> 1 geschnitzter Kürbis' ;
    document.getElementById('Choice3').innerHTML = '4 eisenblöcke <br> 1 Kürbis' ;

    document.getElementById('Choice1').onclick = function(){ChoiceRightEinfach();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsEinfach();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsEinfach();};

    EinfachAllUsed();


    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageEinfach16();
    };
    
}   


function NächsteFrageEinfach16() {

    document.getElementById('Headline').innerHTML = '16. Kann man einen Enderman mit einem Bogen abschießen?' ;
    document.getElementById('Choice1').innerHTML = 'Ja' ;
    document.getElementById('Choice2').innerHTML = 'Nein' ;
    document.getElementById('Choice3').style.display = 'none' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsEinfach();};
    document.getElementById('Choice2').onclick = function(){ChoiceRightEinfach();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsEinfach();};

    EinfachAllUsed();


    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageEinfach17();
    };
    
}   


function NächsteFrageEinfach17() {
    document.getElementById('Choice3').style.display = 'inline' ;

    document.getElementById('Headline').innerHTML = '17. Welches Mob droppt ein Totem?' ;
    document.getElementById('Choice1').innerHTML = 'Vex' ;
    document.getElementById('Choice2').innerHTML = 'Whither' ;
    document.getElementById('Choice3').innerHTML = 'Evoker' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsEinfach();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsEinfach();};
    document.getElementById('Choice3').onclick = function(){ChoiceRightEinfach();};

    EinfachAllUsed();


    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageEinfach18();
    };
    
}   


function NächsteFrageEinfach18() {

    document.getElementById('Headline').innerHTML = '18. Welchen Job braucht ein Villager, um Pfeile zu tradden?' ;
    document.getElementById('Choice1').innerHTML = 'Fletcher' ;
    document.getElementById('Choice2').innerHTML = 'Cleric' ;
    document.getElementById('Choice3').innerHTML = 'Butcher' ;

    document.getElementById('Choice1').onclick = function(){ChoiceRightEinfach();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsEinfach();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsEinfach();};

    EinfachAllUsed();


    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageEinfach19();
    };
    
}   


function NächsteFrageEinfach19() {

    document.getElementById('Headline').innerHTML = '19. Wer ist der Losteste Minecraft Spieler?' ;
    document.getElementById('Choice1').innerHTML = 'Monte' ;
    document.getElementById('Choice2').innerHTML = 'Trymacs' ;
    document.getElementById('Choice3').innerHTML = 'Angela Merkel' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsEinfach();};
    document.getElementById('Choice2').onclick = function(){ChoiceRightEinfach();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsEinfach();};

    EinfachAllUsed();


    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageEinfach20();
    };
    
}   


function NächsteFrageEinfach20() {

    document.getElementById('Headline').innerHTML = '20. Was passiert mit einem Kessel, der im Regen steht?' ;
    document.getElementById('Choice1').innerHTML = 'Er rostet' ;
    document.getElementById('Choice2').innerHTML = 'Er füllt sich' ;
    document.getElementById('Choice3').innerHTML = 'Nichts' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsEinfach();};
    document.getElementById('Choice2').onclick = function(){ChoiceRightEinfach();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsEinfach();};

    document.getElementById('NextQuestion').innerHTML = 'Schwierigkeit beenden' ;

    EinfachAllUsed();


    document.getElementById('NextQuestion').onclick = function(){
        PointScreenEinfach();
    };
    
}   


function PointScreenEinfach() {

    document.getElementById('Question').style.display = 'none';
    document.getElementById('PointScreenDiv').style.display = 'inline';
    document.getElementById('Points').innerHTML = 'Du hast Einfach mit <h3>' + punkteEinfach + ' von 20</h3> Punkten abgeschlossen';

}   
