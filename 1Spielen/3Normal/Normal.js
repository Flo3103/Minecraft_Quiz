
function NächsteFrageNormal2() {

    document.getElementById('Headline').innerHTML = '2. Wie kann man eine Endermid spawnen?' ;
    document.getElementById('Choice1').innerHTML = 'Enderperle werfen' ;
    document.getElementById('Choice2').innerHTML = 'Spawnei finden' ;
    document.getElementById('Choice3').innerHTML = 'Choruspflanze abbauen' ;

    document.getElementById('Choice1').onclick = function(){ChoiceRightNormal();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsNormal();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsNormal();};

    document.getElementById('correctionDiv').style.display = 'none';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageNormal3();
    };
    
}   

function NächsteFrageNormal3() {

    document.getElementById('Headline').innerHTML = '3. Wird Fallschaden mit Honig abgedämpft?' ;
    document.getElementById('Choice1').innerHTML = 'Ja' ;
    document.getElementById('Choice2').innerHTML = 'Nein' ;
    document.getElementById('Choice3').style.display = 'none' ;

    document.getElementById('Choice1').onclick = function(){ChoiceRightNormal();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsNormal();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsNormal();};

    document.getElementById('correctionDiv').style.display = 'none';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageNormal4();
    };
    
}   


function NächsteFrageNormal4() {
    document.getElementById('Choice3').style.display = 'inline' ;

    document.getElementById('Headline').innerHTML = '4. Wie viele Bienen können gleichzeitig in ein Nest?' ;
    document.getElementById('Choice1').innerHTML = '3' ;
    document.getElementById('Choice2').innerHTML = '5' ;
    document.getElementById('Choice3').innerHTML = '2' ;

    document.getElementById('Choice1').onclick = function(){ChoiceRightNormal();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsNormal();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsNormal();};

    document.getElementById('correctionDiv').style.display = 'none';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageNormal5();
    };
    
}   


function NächsteFrageNormal5() {

    document.getElementById('Headline').innerHTML = '5. Was bracuht man um den Wither zu spawnen?' ;
    document.getElementById('Choice1').innerHTML = 'Witherkopf +<br>4 Seelensand' ;
    document.getElementById('Choice2').innerHTML = '3 Witherköpfe +<br>3 Seelensand' ;
    document.getElementById('Choice3').innerHTML = '3 Witherköpfe +<br>4 Seelenerde' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsNormal();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsNormal();};
    document.getElementById('Choice3').onclick = function(){ChoiceRightNormal();};

    document.getElementById('correctionDiv').style.display = 'none';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageNormal6();
    };
    
}   


function NächsteFrageNormal6() {

    document.getElementById('Headline').innerHTML = '6. Wie viele unterschiedliche Netherbiome gibt es?' ;
    document.getElementById('Choice1').innerHTML = '3' ;
    document.getElementById('Choice2').innerHTML = '5' ;
    document.getElementById('Choice3').innerHTML = '7' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsNormal();};
    document.getElementById('Choice2').onclick = function(){ChoiceRightNormal();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsNormal();};

    document.getElementById('correctionDiv').style.display = 'none';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageNormal7();
    };
    
}   


function NächsteFrageNormal7() {

    document.getElementById('Headline').innerHTML = '7. Mit welcher Hilfe, bekommt man einen Zombiekopf?' ;
    document.getElementById('Choice1').innerHTML = 'Creeper' ;
    document.getElementById('Choice2').innerHTML = 'Feuerzeug' ;
    document.getElementById('Choice3').innerHTML = 'Charged Creeper' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsNormal();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsNormal();};
    document.getElementById('Choice3').onclick = function(){ChoiceRightNormal();};

    document.getElementById('correctionDiv').style.display = 'none';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageNormal8();
    };
    
}   


function NächsteFrageNormal8() {

    document.getElementById('Headline').innerHTML = '8. Was ist der berühmteste Mod um Shader zu benutzen?' ;
    document.getElementById('Choice1').innerHTML = 'ShaderGMbh' ;
    document.getElementById('Choice2').innerHTML = 'Optifine' ;
    document.getElementById('Choice3').innerHTML = 'Sodium' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsNormal();};
    document.getElementById('Choice2').onclick = function(){ChoiceRightNormal();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsNormal();};

    document.getElementById('correctionDiv').style.display = 'none';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageNormal9();
    };
    
}   


function NächsteFrageNormal9() {

    document.getElementById('Headline').innerHTML = '9. Auf welcher höhe ist es am besten Diamanten zu farmen?' ;
    document.getElementById('Choice1').innerHTML = '-60' ;
    document.getElementById('Choice2').innerHTML = '11' ;
    document.getElementById('Choice3').innerHTML = '-50' ;

    document.getElementById('Choice1').onclick = function(){ChoiceRightNormal();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsNormal();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsNormal();};

    document.getElementById('correctionDiv').style.display = 'none';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageNormal10();
    };
    
}   


function NächsteFrageNormal10() {

    document.getElementById('Headline').innerHTML = '10. Was droppt ein Schwein wenn es vom Wither getötet wird?' ;
    document.getElementById('Choice1').innerHTML = 'Nicht' ;
    document.getElementById('Choice2').innerHTML = 'Witherrose' ;
    document.getElementById('Choice3').innerHTML = 'Schweinefleisch' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsNormal();};
    document.getElementById('Choice2').onclick = function(){ChoiceRightNormal();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsNormal();};

    document.getElementById('correctionDiv').style.display = 'none';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageNormal11();
    };
    
}   


function NächsteFrageNormal11() {

    document.getElementById('Headline').innerHTML = '11. Was braucht man um auf die Netherdecke zu kommen?' ;
    document.getElementById('Choice1').innerHTML = 'Spitzhacke' ;
    document.getElementById('Choice2').innerHTML = 'Enderperle' ;
    document.getElementById('Choice3').innerHTML = 'Leiter + Enderperle' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsNormal();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsNormal();};
    document.getElementById('Choice3').onclick = function(){ChoiceRightNormal();};

    document.getElementById('correctionDiv').style.display = 'none';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageNormal12();
    };
    
}   


function NächsteFrageNormal12() {

    document.getElementById('Headline').innerHTML = '12. Wie kann man Wasser im Nether setzen?' ;
    document.getElementById('Choice1').innerHTML = 'Gar nicht' ;
    document.getElementById('Choice2').innerHTML = 'Im Kessel' ;
    document.getElementById('Choice3').innerHTML = 'Mit Netherite Eimer' ;


    document.getElementById('Choice1').onclick = function(){ChoiceFalsNormal();};
    document.getElementById('Choice2').onclick = function(){ChoiceRightNormal();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsNormal();};

    document.getElementById('correctionDiv').style.display = 'none';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageNormal13();
    };
    
}   


function NächsteFrageNormal13() {

    document.getElementById('Headline').innerHTML = '13. Wo spawnen schwarze Katzen?' ;
    document.getElementById('Choice1').innerHTML = 'Sumpfhütten' ;
    document.getElementById('Choice2').innerHTML = 'Sumpfhütten und Dorf' ;
    document.getElementById('Choice3').innerHTML = 'Gibt keine schwarze Katze' ;

    document.getElementById('Choice1').onclick = function(){ChoiceRightNormal();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsNormal();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsNormal();};

    document.getElementById('correctionDiv').style.display = 'none';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageNormal14();
    };
    
}   


function NächsteFrageNormal14() {

    document.getElementById('Headline').innerHTML = '14. Wo bekommt man Schwäme her?' ;
    document.getElementById('Choice1').innerHTML = 'Ozeanmonumenten' ;
    document.getElementById('Choice2').innerHTML = 'Koralle' ;
    document.getElementById('Choice3').innerHTML = 'Fischen' ;

    document.getElementById('Choice1').onclick = function(){ChoiceRightNormal();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsNormal();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsNormal();};

    document.getElementById('correctionDiv').style.display = 'none';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageNormal15();
    };
    
}   


function NächsteFrageNormal15() {

    document.getElementById('Headline').innerHTML = '15. Was hiervon braucht man umbedingt für eine Eisenfarm?' ;
    document.getElementById('Choice1').innerHTML = '1 Villager' ;
    document.getElementById('Choice2').innerHTML = '1 Dorf' ;
    document.getElementById('Choice3').innerHTML = '1 Eisengolem' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsNormal();};
    document.getElementById('Choice2').onclick = function(){ChoiceRightNormal();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsNormal();};

    document.getElementById('correctionDiv').style.display = 'none';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageNormal16();
    };
    
}   


function NächsteFrageNormal16() {

    document.getElementById('Headline').innerHTML = '16. Wie viele TNT-Blöcke sind in einer Pyramide?' ;
    document.getElementById('Choice1').innerHTML = '3' ;
    document.getElementById('Choice2').innerHTML = '6' ;
    document.getElementById('Choice3').innerHTML = '9' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsNormal();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsNormal();};
    document.getElementById('Choice3').onclick = function(){ChoiceRightNormal();};

    document.getElementById('correctionDiv').style.display = 'none';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageNormal17();
    };
    
}   


function NächsteFrageNormal17() {

    document.getElementById('Headline').innerHTML = '17. Wie viele verschiedene Holzbretter Arten gibt es?' ;
    document.getElementById('Choice1').innerHTML = '5' ;
    document.getElementById('Choice2').innerHTML = '7' ;
    document.getElementById('Choice3').innerHTML = '9' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsNormal();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsNormal();};
    document.getElementById('Choice3').onclick = function(){ChoiceRightNormal();};

    document.getElementById('correctionDiv').style.display = 'none';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageNormal18();
    };
    
}   


function NächsteFrageNormal18() {

    document.getElementById('Headline').innerHTML = '18. Kann man mithilfe von Lave ein Netherportal anzünden?' ;
    document.getElementById('Choice1').innerHTML = 'Ja' ;
    document.getElementById('Choice2').innerHTML = 'Nein' ;
    document.getElementById('Choice3').style.display = 'none' ;

    document.getElementById('Choice1').onclick = function(){ChoiceRightNormal();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsNormal();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsNormal();};

    document.getElementById('correctionDiv').style.display = 'none';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageNormal19();
    };
    
}   


function NächsteFrageNormal19() {
    document.getElementById('Choice3').style.display = 'inline' ;

    document.getElementById('Headline').innerHTML = '19. Was ist die aktuelle Maximal und Minimale Bauhöhe?' ;
    document.getElementById('Choice1').innerHTML = '0/256' ;
    document.getElementById('Choice2').innerHTML = '-64/320' ;
    document.getElementById('Choice3').innerHTML = '0/356' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsNormal();};
    document.getElementById('Choice2').onclick = function(){ChoiceRightNormal();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsNormal();};

    document.getElementById('correctionDiv').style.display = 'none';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageNormal20();
    };
    
}   


function NächsteFrageNormal20() {

    document.getElementById('Headline').innerHTML = '20. Braucht man um auf einem Skeletpferd zu reiten einen Sattel?' ;
    document.getElementById('Choice1').innerHTML = 'Ja' ;
    document.getElementById('Choice2').innerHTML = 'Nein' ;
    document.getElementById('Choice3').innerHTML = 'Was ist das' ;

    document.getElementById('Choice1').onclick = function(){ChoiceRightNormal();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsNormal();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsNormal();};

    document.getElementById('NextQuestion').innerHTML = 'Schwierigkeit beenden' ;
    document.getElementById('correctionDiv').style.display = 'none';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        PointScreenNormal();
    };
    
}   


function PointScreenNormal() {


    document.getElementById('Question').style.display = 'none';
    document.getElementById('PointScreenDiv').style.display = 'inline';
    document.getElementById('Points').innerHTML = 'Du hast Normal mit <h3>' + punkteNormal + ' von 20</h3> Punkten abgeschlossen';

}   