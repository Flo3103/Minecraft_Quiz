
function SchwerAllUsed() {
    document.getElementById('correctionDiv').style.display = 'none';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;
    document.getElementById('correctionImg').src = '';
}








function NächsteFrageSchwer2() {

    document.getElementById('Headline').innerHTML = '2. ?' ;
    document.getElementById('Choice1').innerHTML = '' ;
    document.getElementById('Choice2').innerHTML = '' ;
    document.getElementById('Choice3').innerHTML = '' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsSchwer();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsSchwer();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsSchwer();};

    SchwerAllUsed();

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageSchwer3();
    };
    
}   

function NächsteFrageSchwer3() {

    document.getElementById('Headline').innerHTML = '3. ?' ;
    document.getElementById('Choice1').innerHTML = '' ;
    document.getElementById('Choice2').innerHTML = '' ;
    document.getElementById('Choice3').innerHTML = '' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsSchwer();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsSchwer();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsSchwer();};

    SchwerAllUsed();

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageSchwer4();
    };
    
}   


function NächsteFrageSchwer4() {

    document.getElementById('Headline').innerHTML = '4. ?' ;
    document.getElementById('Choice1').innerHTML = '' ;
    document.getElementById('Choice2').innerHTML = '' ;
    document.getElementById('Choice3').innerHTML = '' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsSchwer();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsSchwer();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsSchwer();};

    SchwerAllUsed();

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageSchwer5();
    };
    
}   


function NächsteFrageSchwer5() {

    document.getElementById('Headline').innerHTML = '5. Kann man mit einer Goldspitzhacke Gold abbauen? ?' ;
    document.getElementById('Choice1').innerHTML = ' Ja ' ;
    document.getElementById('Choice2').innerHTML = 'Nein' ;
    document.getElementById('Choice3').style.display = 'none';

    document.getElementById('Choice1').onclick = function(){ChoiceFalsSchwer();};
    document.getElementById('Choice2').onclick = function(){ChoiceRightSchwer();};

    SchwerAllUsed();

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageSchwer6();
    };
    
}   


function NächsteFrageSchwer6() {

    document.getElementById('Headline').innerHTML = '6. ?' ;
    document.getElementById('Choice1').innerHTML = '' ;
    document.getElementById('Choice2').innerHTML = '' ;
    document.getElementById('Choice3').innerHTML = '' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsSchwer();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsSchwer();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsSchwer();};

    SchwerAllUsed();

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageSchwer7();
    };
    
}   


function NächsteFrageSchwer7() {

    document.getElementById('Headline').innerHTML = '7. ?' ;
    document.getElementById('Choice1').innerHTML = '' ;
    document.getElementById('Choice2').innerHTML = '' ;
    document.getElementById('Choice3').innerHTML = '' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsSchwer();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsSchwer();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsSchwer();};

    SchwerAllUsed();

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageSchwer8();
    };
    
}   


function NächsteFrageSchwer8() {

    document.getElementById('Headline').innerHTML = '8. ?' ;
    document.getElementById('Choice1').innerHTML = '' ;
    document.getElementById('Choice2').innerHTML = '' ;
    document.getElementById('Choice3').innerHTML = '' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsSchwer();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsSchwer();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsSchwer();};

    SchwerAllUsed();

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageSchwer9();
    };
    
}   


function NächsteFrageSchwer9() {

    document.getElementById('Headline').innerHTML = '9. Mit welcher Tastenkombination wechselt man bei der java Edition schnell in den Kreativ Modus?' ;
    document.getElementById('Choice1').innerHTML = '' ;
    document.getElementById('Choice2').innerHTML = '' ;
    document.getElementById('Choice3').innerHTML = '' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsSchwer();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsSchwer();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsSchwer();};

    SchwerAllUsed();

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageSchwer10();
    };
    
}   


function NächsteFrageSchwer10() {

    document.getElementById('Headline').innerHTML = '10. Wie viele verschiedene Bastionen gibt es?' ;
    document.getElementById('Choice1').innerHTML = '2' ;
    document.getElementById('Choice2').innerHTML = '3' ;
    document.getElementById('Choice3').innerHTML = '4' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsSchwer();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsSchwer();};
    document.getElementById('Choice3').onclick = function(){ChoiceRight4Schwer();};

    SchwerAllUsed();

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageSchwer11();
    };
    
}   


function NächsteFrageSchwer11() {

    document.getElementById('Headline').innerHTML = '11. ?' ;
    document.getElementById('Choice1').innerHTML = '' ;
    document.getElementById('Choice2').innerHTML = '' ;
    document.getElementById('Choice3').innerHTML = '' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsSchwer();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsSchwer();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsSchwer();};

    SchwerAllUsed();

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageSchwer12();
    };
    
}   


function NächsteFrageSchwer12() {

    document.getElementById('Headline').innerHTML = '12. ?' ;
    document.getElementById('Choice1').innerHTML = '' ;
    document.getElementById('Choice2').innerHTML = '' ;
    document.getElementById('Choice3').innerHTML = '' ;


    document.getElementById('Choice1').onclick = function(){ChoiceFalsSchwer();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsSchwer();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsSchwer();};

    SchwerAllUsed();

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageSchwer13();
    };
    
}   


function NächsteFrageSchwer13() {

    document.getElementById('Headline').innerHTML = '13. ?' ;
    document.getElementById('Choice1').innerHTML = '' ;
    document.getElementById('Choice2').innerHTML = '' ;
    document.getElementById('Choice3').innerHTML = '' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsSchwer();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsSchwer();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsSchwer();};

    SchwerAllUsed();

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageSchwer14();
    };
    
}   


function NächsteFrageSchwer14() {

    document.getElementById('Headline').innerHTML = '14. ?' ;
    document.getElementById('Choice1').innerHTML = '' ;
    document.getElementById('Choice2').innerHTML = '' ;
    document.getElementById('Choice3').innerHTML = '' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsSchwer();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsSchwer();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsSchwer();};

    SchwerAllUsed();

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageSchwer15();
    };
    
}   


function NächsteFrageSchwer15() {

    document.getElementById('Headline').innerHTML = '15. ?' ;
    document.getElementById('Choice1').innerHTML = '' ;
    document.getElementById('Choice2').innerHTML = '' ;
    document.getElementById('Choice3').innerHTML = '' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsSchwer();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsSchwer();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsSchwer();};

    SchwerAllUsed();

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageSchwer16();
    };
    
}   


function NächsteFrageSchwer16() {

    document.getElementById('Headline').innerHTML = '16. ?' ;
    document.getElementById('Choice1').innerHTML = '' ;
    document.getElementById('Choice2').innerHTML = '' ;
    document.getElementById('Choice3').innerHTML = '' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsSchwer();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsSchwer();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsSchwer();};

    SchwerAllUsed();

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageSchwer17();
    };
    
}   


function NächsteFrageSchwer17() {

    document.getElementById('Headline').innerHTML = '17. ?' ;
    document.getElementById('Choice1').innerHTML = '' ;
    document.getElementById('Choice2').innerHTML = '' ;
    document.getElementById('Choice3').innerHTML = '' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsSchwer();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsSchwer();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsSchwer();};

    SchwerAllUsed();

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageSchwer18();
    };
    
}   


function NächsteFrageSchwer18() {

    document.getElementById('Headline').innerHTML = '18. ?' ;
    document.getElementById('Choice1').innerHTML = '' ;
    document.getElementById('Choice2').innerHTML = '' ;
    document.getElementById('Choice3').innerHTML = '' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsSchwer();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsSchwer();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsSchwer();};

    SchwerAllUsed();

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageSchwer19();
    };
    
}   


function NächsteFrageSchwer19() {

    document.getElementById('Headline').innerHTML = '19. ?' ;
    document.getElementById('Choice1').innerHTML = '' ;
    document.getElementById('Choice2').innerHTML = '' ;
    document.getElementById('Choice3').innerHTML = '' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsSchwer();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsSchwer();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsSchwer();};

    SchwerAllUsed();

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageSchwer20();
    };
    
}   


function NächsteFrageSchwer20() {

    document.getElementById('Headline').innerHTML = '20. ?' ;
    document.getElementById('Choice1').innerHTML = '' ;
    document.getElementById('Choice2').innerHTML = '' ;
    document.getElementById('Choice3').innerHTML = '' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsSchwer();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsSchwer();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsSchwer();};
    
    SchwerAllUsed();

    document.getElementById('NextQuestion').innerHTML = 'Schwierigkeit beenden' ;
    document.getElementById('NextQuestion').onclick = function(){
        PointsScreen();
    };
    
}   


