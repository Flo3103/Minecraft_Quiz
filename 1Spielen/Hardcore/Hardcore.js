
function HardcoreAllUsed() {
    document.getElementById('correctionDiv').style.display = 'none';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;
    document.getElementById('correctionImg').src = '';
}



function NächsteFrageHardcore2() {

    document.getElementById('Headline').innerHTML = '2. Wie hoch ist die Wahrscheinlichkeit, dass man, mit einer unverzauberten Angel, ein verzaubertes Buch angelt?' ;
    document.getElementById('Choice1').innerHTML = '0,8%' ;
    document.getElementById('Choice2').innerHTML = '1,5%' ;
    document.getElementById('Choice3').innerHTML = '0,1%' ;

    document.getElementById('Choice1').onclick = function(){ChoiceRightHardcore();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsHardcore()();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsHardcore()();};

    HardcoreAllUsed();

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageHardcore3();
    };
    
    
}   



function NächsteFrageHardcore3() {

    document.getElementById('Headline').innerHTML = '3. Wie lange braucht man um Obsidian mit der Hand abzubauen?' ;
    document.getElementById('Choice1').innerHTML = '200s' ;
    document.getElementById('Choice2').innerHTML = '250s' ;
    document.getElementById('Choice3').innerHTML = '300s' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsHardcore()();};
    document.getElementById('Choice2').onclick = function(){ChoiceRightHardcore();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsHardcore()();};

    HardcoreAllUsed();

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageHardcore4();
    };
    
}   


function NächsteFrageHardcore4() {

    document.getElementById('Headline').innerHTML = '4. Wie hoch ist die Wahrscheinlichkeit, dass ein Wither Skelet seinen Kopf droppt?' ;
    document.getElementById('Choice1').innerHTML = '3,5%' ;
    document.getElementById('Choice2').innerHTML = '5,5%' ;
    document.getElementById('Choice3').innerHTML = '2,5%' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsHardcore()();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsHardcore()();};
    document.getElementById('Choice3').onclick = function(){ChoiceRightHardcore();};

    HardcoreAllUsed();

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageHardcore5();
    };
    
}   


function NächsteFrageHardcore5() {

    document.getElementById('Headline').innerHTML = '5. Wie hoch ist die Wahrscheinlichkeit, dass ein Erwachsenes Schaf als Braunes Schaf spawnt?' ;
    document.getElementById('Choice1').innerHTML = '3%' ;
    document.getElementById('Choice2').innerHTML = '2%' ;
    document.getElementById('Choice3').innerHTML = '1%' ;

    document.getElementById('Choice1').onclick = function(){ChoiceRightHardcore();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsHardcore()();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsHardcore()();};

    HardcoreAllUsed();

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageHardcore6();
    };
    
}   

 
function NächsteFrageHardcore6() {

    document.getElementById('Headline').innerHTML = '6. Wie viele Splash-Texte (Gelber Text im Startmenü) gibt es in Minecraft?' ;
    document.getElementById('Choice1').innerHTML = '221' ;
    document.getElementById('Choice2').innerHTML = '254' ;
    document.getElementById('Choice3').innerHTML = '376' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsHardcore()();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsHardcore()();};
    document.getElementById('Choice3').onclick = function(){ChoiceRightHardcore();};

    HardcoreAllUsed();

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageHardcore7();
    };
    
}   


function NächsteFrageHardcore7() {

    document.getElementById('Headline').innerHTML = '7. Wie hoch ist die Wahrscheinlichkeit, dass ein Endportal Frame ein Enderauge enthält?' ;
    document.getElementById('Choice1').innerHTML = '20%' ;
    document.getElementById('Choice2').innerHTML = '10%' ;
    document.getElementById('Choice3').innerHTML = '5%' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsHardcore()();};
    document.getElementById('Choice2').onclick = function(){ChoiceRightHardcore();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsHardcore()();};

    HardcoreAllUsed();

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageHardcore8();
    };
    
}   


function NächsteFrageHardcore8() {

    document.getElementById('Headline').innerHTML = '8. Wie hoch ist die Wahrscheinlichkeit, dass ein Endportal 12 Enderaugen enthält?' ;
    document.getElementById('Choice1').innerHTML = '0,0000000001%' ;
    document.getElementById('Choice2').innerHTML = '0,00000001%' ;
    document.getElementById('Choice3').innerHTML = '0,0000000000001%' ;

    document.getElementById('Choice1').onclick = function(){ChoiceRightHardcore();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsHardcore()();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsHardcore()();};

    HardcoreAllUsed();

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageHardcore9();
    };
    
}   


function NächsteFrageHardcore9() {

    document.getElementById('Headline').innerHTML = '9. Wie hoch ist die Wahrscheinlichkeit, dass ein Zombie mit Diamant Helm spawnt?' ;
    document.getElementById('Choice1').innerHTML = '1,02%' ;
    document.getElementById('Choice2').innerHTML = '0,006%' ;
    document.getElementById('Choice3').innerHTML = '0,13%' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsHardcore()();};
    document.getElementById('Choice2').onclick = function(){ChoiceRightHardcore();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsHardcore()();};

    HardcoreAllUsed();

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageHardcore10();
    };
    
}   


function NächsteFrageHardcore10() {

    document.getElementById('Headline').innerHTML = '10. Wie hoch ist die Wahrscheinlichkeit, dass ein Fuchs mit einem Emerald in seinem Mund spawnt?' ;
    document.getElementById('Choice1').innerHTML = '20%' ;
    document.getElementById('Choice2').innerHTML = '3%' ;
    document.getElementById('Choice3').innerHTML = '5%' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsHardcore()();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsHardcore()();};
    document.getElementById('Choice3').onclick = function(){ChoiceRightHardcore();};

    HardcoreAllUsed();

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageHardcore11();
    };
    
}   


function NächsteFrageHardcore11() {

    document.getElementById('Headline').innerHTML = '11. Wie hoch ist die Wahrscheinlichkeit, dass ein Zombie einen Eisenbaren droppt?' ;
    document.getElementById('Choice1').innerHTML = '1,21%' ;
    document.getElementById('Choice2').innerHTML = '3%' ;
    document.getElementById('Choice3').innerHTML = '0.83%' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsHardcore()();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsHardcore()();};
    document.getElementById('Choice3').onclick = function(){ChoiceRightHardcore();};

    HardcoreAllUsed();

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageHardcore12();
    };
    
}   


function NächsteFrageHardcore12() {

    document.getElementById('Headline').innerHTML = '12. Wie hoch ist die Wahrscheinlichkeit, dass Blätter einen Apfel droppen?' ;
    document.getElementById('Choice1').innerHTML = '0,5%' ;
    document.getElementById('Choice2').innerHTML = '1%' ;
    document.getElementById('Choice3').innerHTML = '5%' ;

    document.getElementById('Choice1').onclick = function(){ChoiceRightHardcore();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsHardcore()();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsHardcore()();};

    HardcoreAllUsed();

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageHardcore13();
    };
    
}   


function NächsteFrageHardcore13() {

    document.getElementById('Headline').innerHTML = '13. Wie hoch ist die Wahrscheinlichkeit, dass ein Zombie mit einer Waffe spawnt?' ;
    document.getElementById('Choice1').innerHTML = '10%' ;
    document.getElementById('Choice2').innerHTML = '1%' ;
    document.getElementById('Choice3').innerHTML = '3%' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsHardcore()();};
    document.getElementById('Choice2').onclick = function(){ChoiceRightHardcore();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsHardcore()();};

    HardcoreAllUsed();

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageHardcore14();
    };
    
}   


function NächsteFrageHardcore14() {

    document.getElementById('Headline').innerHTML = '14. Wie hoch ist die Wahrscheinlichkeit, dass ein Zombie, in einem Huhn freiem Bereich, auf einem Huhn spawnt?' ;
    document.getElementById('Choice1').innerHTML = '1%' ;
    document.getElementById('Choice2').innerHTML = '0,01%' ;
    document.getElementById('Choice3').innerHTML = '0,25%' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsHardcore()();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsHardcore()();};
    document.getElementById('Choice3').onclick = function(){ChoiceRightHardcore();};

    HardcoreAllUsed();

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageHardcore15();
    };
    
}   


function NächsteFrageHardcore15() {

    document.getElementById('Headline').innerHTML = '15. Wie hoch ist die Wahrscheinlichkeit, dass ein Bienennest an einem Birkenbaum, in einem Birkenwald, generiert?' ;
    document.getElementById('Choice1').innerHTML = '5%' ;
    document.getElementById('Choice2').innerHTML = '1,2%' ;
    document.getElementById('Choice3').innerHTML = '0,2%' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsHardcore()();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsHardcore()();};
    document.getElementById('Choice3').onclick = function(){ChoiceRightHardcore();};

    HardcoreAllUsed();

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageHardcore16();
    };
    
}   


function NächsteFrageHardcore16() {

    document.getElementById('Headline').innerHTML = '16. Wie hoch ist die Wahrscheinlichkeit, dass am 31 October ein Zombifizierter Piglin mit einer Kürbislaterne spawnt?' ;
    document.getElementById('Choice1').innerHTML = '2,5%' ;
    document.getElementById('Choice2').innerHTML = '10%' ;
    document.getElementById('Choice3').innerHTML = '31%' ;

    document.getElementById('Choice1').onclick = function(){ChoiceRightHardcore();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsHardcore()();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsHardcore()();};

    HardcoreAllUsed();

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageHardcore17();
    };
    
}   


function NächsteFrageHardcore17() {

    document.getElementById('Headline').innerHTML = '17. Wie Wahrscheinlich ist es das ein braunes Baby Schaf spawnt?' ;
    document.getElementById('Choice1').innerHTML = '0,15%' ;
    document.getElementById('Choice2').innerHTML = '0,75%' ;
    document.getElementById('Choice3').innerHTML = '0,05%' ;

    document.getElementById('Choice1').onclick = function(){ChoiceRightHardcore();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsHardcore()();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsHardcore()();};

    HardcoreAllUsed();

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageHardcore18();
    };
    
}   


function NächsteFrageHardcore18() {

    document.getElementById('Headline').innerHTML = '18. Zu welcher Warscheinlichkeit kann ein Zombifizierter Piglin, jeden Tick auf einem Netherportal Block spawnen?' ;
    document.getElementById('Choice1').innerHTML = '0,5&' ;
    document.getElementById('Choice2').innerHTML = '0,05%' ;
    document.getElementById('Choice3').innerHTML = '5%' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsHardcore()();};
    document.getElementById('Choice2').onclick = function(){ChoiceRightHardcore();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsHardcore()();
    };

    HardcoreAllUsed();

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageHardcore19();
    };
    
}   


function NächsteFrageHardcore19() {

    document.getElementById('Headline').innerHTML = '19. wie hoch ist die Wahrscheinlichkeit, während einem Tick, dass ein Blitz irgendwo in einem Chunk einschlägt?' ;
    document.getElementById('Choice1').innerHTML = '0,0001%' ;
    document.getElementById('Choice2').innerHTML = '0,001%' ;
    document.getElementById('Choice3').innerHTML = '0,003%' ;

    document.getElementById('Choice1').onclick = function(){ChoiceFalsHardcore();};
    document.getElementById('Choice2').onclick = function(){ChoiceRightHardcore();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsHardcore();};

    HardcoreAllUsed();

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageHardcore20();
    };
    
}   

function NächsteFrageHardcore20() {

    document.getElementById('Headline').innerHTML = '20. Wie hoch ist die Wahrscheinlichkeit, dass sich eine Eisen, Gold und Diamant Pferderüstung in einer Kiste, im Stonghold befinden?' ;
    document.getElementById('Choice1').innerHTML = '0,001563%' ;
    document.getElementById('Choice2').innerHTML = '0,00175%' ;
    document.getElementById('Choice3').innerHTML = '0,00077%' ;

    document.getElementById('Choice1').onclick = function(){ChoiceRightHardcore();};
    document.getElementById('Choice2').onclick = function(){ChoiceFalsHardcore()();};
    document.getElementById('Choice3').onclick = function(){ChoiceFalsHardcore()();};

    document.getElementById('NextQuestion').innerHTML = 'Schwierigkeit Beenden';

    HardcoreAllUsed();

    document.getElementById('NextQuestion').onclick = function(){
        PointsScreen();
    };
    
}   


function PointsScreen() {
    //window.history.back();
    //document.getElementById('LevelChoiceDiv').style.display = 'block';
    //document.getElementById('Hardcore').innerHTML = 'Abgeschlossen';

    //document.getElementById('Question').style.display = 'none';
    //document.getElementById('PointsScreen').style.display = 'flex';
    //document.getElementById('LevelChoiceDiv').style.display = 'block';
    //document.getElementById('Hardcore').innerHTML = 'Abgeschlossen';
}   
