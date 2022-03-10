

//function LevelChoice() {
  //  document.getElementById('StartButtonDiv').style.display = 'none'; 
   // document.getElementById('LevelChoiceDiv').style.display = 'block';}


//function OpenHardcore() {
//    document.getElementById('HardcoreQuestion1').style.display = 'block';
//    document.getElementById('LevelChoiceDiv').style.display = 'none';}




function ChoiceRight() {

    document.getElementById('correctionImg').src = '../../Bilder/Richtig_Falsch/Richtig.png';
    document.getElementById('correctionImg').style.width = '150px';

    document.getElementById('correctionDiv').style.display = 'flex';
    document.getElementById('NächsteFrageDiv').style.display = 'flex';   

    document.getElementById('Choice1').disabled = true;
    document.getElementById('Choice2').disabled = true;
    document.getElementById('Choice3').disabled = true;
}

function ChoiceFals() {

    document.getElementById('correctionImg').src = '../../Bilder/Richtig_Falsch/Falsch.png';
    document.getElementById('correctionDiv').style.display = 'flex';
    document.getElementById('NächsteFrageDiv').style.display = 'flex';
    
    document.getElementById('Choice1').disabled = true;
    document.getElementById('Choice2').disabled = true;
    document.getElementById('Choice3').disabled = true;

}

//Hardcore Questions


function NächsteFrageHardcore2() {

    document.getElementById('Headline').innerHTML = '2. Wie hoch ist die Wahrscheinlichkeit, dass man, mit einer unverzauberten Angel, ein verzaubertes Buch angelt?' ;
    document.getElementById('Choice1').innerHTML = '0,8%' ;
    document.getElementById('Choice2').innerHTML = '1,5%' ;
    document.getElementById('Choice3').innerHTML = '0,1%' ;

    document.getElementById('Choice1').onclick = function(){
        ChoiceRight();
    };

    document.getElementById('Choice2').onclick = function(){
        ChoiceFals();
    };

    document.getElementById('Choice3').onclick = function(){
        ChoiceFals();
    };

    document.getElementById('correctionDiv').style.display = 'none';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageHardcore3();
    };
    
}   

function NächsteFrageHardcore3() {

    document.getElementById('Headline').innerHTML = '3. Wie lange braucht man um Obsidian mit der Hand abzubauen?' ;
    document.getElementById('Choice1').innerHTML = '200s' ;
    document.getElementById('Choice2').innerHTML = '250s' ;
    document.getElementById('Choice3').innerHTML = '300s' ;

    document.getElementById('Choice1').onclick = function(){
        ChoiceFals();
    };

    document.getElementById('Choice2').onclick = function(){
        ChoiceRight();
    };

    document.getElementById('Choice3').onclick = function(){
        ChoiceFals();
    };

    document.getElementById('correctionDiv').style.display = 'none';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageHardcore4();
    };
    
}   


function NächsteFrageHardcore4() {

    document.getElementById('Headline').innerHTML = '4. ?' ;
    document.getElementById('Choice1').innerHTML = '' ;
    document.getElementById('Choice2').innerHTML = '' ;
    document.getElementById('Choice3').innerHTML = '' ;

    document.getElementById('Choice1').onclick = function(){
        ChoiceRight();
    };

    document.getElementById('Choice2').onclick = function(){
        ChoiceFals();
    };

    document.getElementById('Choice3').onclick = function(){
        ChoiceFals();
    };

    document.getElementById('correctionDiv').style.display = 'none';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageHardcore5();
    };
    
}   


function NächsteFrageHardcore5() {

    document.getElementById('Headline').innerHTML = '5. ?' ;
    document.getElementById('Choice1').innerHTML = '' ;
    document.getElementById('Choice2').innerHTML = '' ;
    document.getElementById('Choice3').innerHTML = '' ;

    document.getElementById('Choice1').onclick = function(){
        ChoiceRight();
    };

    document.getElementById('Choice2').onclick = function(){
        ChoiceFals();
    };

    document.getElementById('Choice3').onclick = function(){
        ChoiceFals();
    };

    document.getElementById('correctionDiv').style.display = 'none';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageHardcore6();
    };
    
}   


function NächsteFrageHardcore6() {

    document.getElementById('Headline').innerHTML = '6. ?' ;
    document.getElementById('Choice1').innerHTML = '' ;
    document.getElementById('Choice2').innerHTML = '' ;
    document.getElementById('Choice3').innerHTML = '' ;

    document.getElementById('Choice1').onclick = function(){
        ChoiceRight();
    };

    document.getElementById('Choice2').onclick = function(){
        ChoiceFals();
    };

    document.getElementById('Choice3').onclick = function(){
        ChoiceFals();
    };

    document.getElementById('correctionDiv').style.display = 'none';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageHardcore7();
    };
    
}   


function NächsteFrageHardcore7() {

    document.getElementById('Headline').innerHTML = '7. ?' ;
    document.getElementById('Choice1').innerHTML = '' ;
    document.getElementById('Choice2').innerHTML = '' ;
    document.getElementById('Choice3').innerHTML = '' ;

    document.getElementById('Choice1').onclick = function(){
        ChoiceRight();
    };

    document.getElementById('Choice2').onclick = function(){
        ChoiceFals();
    };

    document.getElementById('Choice3').onclick = function(){
        ChoiceFals();
    };

    document.getElementById('correctionDiv').style.display = 'none';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageHardcore8();
    };
    
}   


function NächsteFrageHardcore8() {

    document.getElementById('Headline').innerHTML = '8. ?' ;
    document.getElementById('Choice1').innerHTML = '' ;
    document.getElementById('Choice2').innerHTML = '' ;
    document.getElementById('Choice3').innerHTML = '' ;

    document.getElementById('Choice1').onclick = function(){
        ChoiceRight();
    };

    document.getElementById('Choice2').onclick = function(){
        ChoiceFals();
    };

    document.getElementById('Choice3').onclick = function(){
        ChoiceFals();
    };

    document.getElementById('correctionDiv').style.display = 'none';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageHardcore9();
    };
    
}   


function NächsteFrageHardcore9() {

    document.getElementById('Headline').innerHTML = '9. ?' ;
    document.getElementById('Choice1').innerHTML = '' ;
    document.getElementById('Choice2').innerHTML = '' ;
    document.getElementById('Choice3').innerHTML = '' ;

    document.getElementById('Choice1').onclick = function(){
        ChoiceRight();
    };

    document.getElementById('Choice2').onclick = function(){
        ChoiceFals();
    };

    document.getElementById('Choice3').onclick = function(){
        ChoiceFals();
    };

    document.getElementById('correctionDiv').style.display = 'none';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageHardcore10();
    };
    
}   


function NächsteFrageHardcore10() {

    document.getElementById('Headline').innerHTML = '10. ?' ;
    document.getElementById('Choice1').innerHTML = '' ;
    document.getElementById('Choice2').innerHTML = '' ;
    document.getElementById('Choice3').innerHTML = '' ;

    document.getElementById('Choice1').onclick = function(){
        ChoiceRight();
    };

    document.getElementById('Choice2').onclick = function(){
        ChoiceFals();
    };

    document.getElementById('Choice3').onclick = function(){
        ChoiceFals();
    };

    document.getElementById('correctionDiv').style.display = 'none';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageHardcore11();
    };
    
}   


function NächsteFrageHardcore11() {

    document.getElementById('Headline').innerHTML = '11. ?' ;
    document.getElementById('Choice1').innerHTML = '' ;
    document.getElementById('Choice2').innerHTML = '' ;
    document.getElementById('Choice3').innerHTML = '' ;

    document.getElementById('Choice1').onclick = function(){
        ChoiceRight();
    };

    document.getElementById('Choice2').onclick = function(){
        ChoiceFals();
    };

    document.getElementById('Choice3').onclick = function(){
        ChoiceFals();
    };

    document.getElementById('correctionDiv').style.display = 'none';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageHardcore12();
    };
    
}   


function NächsteFrageHardcore12() {

    document.getElementById('Headline').innerHTML = '12. ?' ;
    document.getElementById('Choice1').innerHTML = '' ;
    document.getElementById('Choice2').innerHTML = '' ;
    document.getElementById('Choice3').innerHTML = '' ;

    document.getElementById('Choice1').onclick = function(){
        ChoiceRight();
    };

    document.getElementById('Choice2').onclick = function(){
        ChoiceFals();
    };

    document.getElementById('Choice3').onclick = function(){
        ChoiceFals();
    };

    document.getElementById('correctionDiv').style.display = 'none';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageHardcore13();
    };
    
}   


function NächsteFrageHardcore13() {

    document.getElementById('Headline').innerHTML = '13. ?' ;
    document.getElementById('Choice1').innerHTML = '' ;
    document.getElementById('Choice2').innerHTML = '' ;
    document.getElementById('Choice3').innerHTML = '' ;

    document.getElementById('Choice1').onclick = function(){
        ChoiceRight();
    };

    document.getElementById('Choice2').onclick = function(){
        ChoiceFals();
    };

    document.getElementById('Choice3').onclick = function(){
        ChoiceFals();
    };

    document.getElementById('correctionDiv').style.display = 'none';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageHardcore14();
    };
    
}   


function NächsteFrageHardcore14() {

    document.getElementById('Headline').innerHTML = '14. ?' ;
    document.getElementById('Choice1').innerHTML = '' ;
    document.getElementById('Choice2').innerHTML = '' ;
    document.getElementById('Choice3').innerHTML = '' ;

    document.getElementById('Choice1').onclick = function(){
        ChoiceRight();
    };

    document.getElementById('Choice2').onclick = function(){
        ChoiceFals();
    };

    document.getElementById('Choice3').onclick = function(){
        ChoiceFals();
    };

    document.getElementById('correctionDiv').style.display = 'none';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageHardcore15();
    };
    
}   


function NächsteFrageHardcore15() {

    document.getElementById('Headline').innerHTML = '15. ?' ;
    document.getElementById('Choice1').innerHTML = '' ;
    document.getElementById('Choice2').innerHTML = '' ;
    document.getElementById('Choice3').innerHTML = '' ;

    document.getElementById('Choice1').onclick = function(){
        ChoiceRight();
    };

    document.getElementById('Choice2').onclick = function(){
        ChoiceFals();
    };

    document.getElementById('Choice3').onclick = function(){
        ChoiceFals();
    };

    document.getElementById('correctionDiv').style.display = 'none';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageHardcore16();
    };
    
}   


function NächsteFrageHardcore16() {

    document.getElementById('Headline').innerHTML = '16. ?' ;
    document.getElementById('Choice1').innerHTML = '' ;
    document.getElementById('Choice2').innerHTML = '' ;
    document.getElementById('Choice3').innerHTML = '' ;

    document.getElementById('Choice1').onclick = function(){
        ChoiceRight();
    };

    document.getElementById('Choice2').onclick = function(){
        ChoiceFals();
    };

    document.getElementById('Choice3').onclick = function(){
        ChoiceFals();
    };

    document.getElementById('correctionDiv').style.display = 'none';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageHardcore17();
    };
    
}   


function NächsteFrageHardcore17() {

    document.getElementById('Headline').innerHTML = '17. ?' ;
    document.getElementById('Choice1').innerHTML = '' ;
    document.getElementById('Choice2').innerHTML = '' ;
    document.getElementById('Choice3').innerHTML = '' ;

    document.getElementById('Choice1').onclick = function(){
        ChoiceRight();
    };

    document.getElementById('Choice2').onclick = function(){
        ChoiceFals();
    };

    document.getElementById('Choice3').onclick = function(){
        ChoiceFals();
    };

    document.getElementById('correctionDiv').style.display = 'none';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageHardcore18();
    };
    
}   


function NächsteFrageHardcore18() {

    document.getElementById('Headline').innerHTML = '18. ?' ;
    document.getElementById('Choice1').innerHTML = '' ;
    document.getElementById('Choice2').innerHTML = '' ;
    document.getElementById('Choice3').innerHTML = '' ;

    document.getElementById('Choice1').onclick = function(){
        ChoiceRight();
    };

    document.getElementById('Choice2').onclick = function(){
        ChoiceFals();
    };

    document.getElementById('Choice3').onclick = function(){
        ChoiceFals();
    };

    document.getElementById('correctionDiv').style.display = 'none';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageHardcore19();
    };
    
}   


function NächsteFrageHardcore19() {

    document.getElementById('Headline').innerHTML = '19. ?' ;
    document.getElementById('Choice1').innerHTML = '' ;
    document.getElementById('Choice2').innerHTML = '' ;
    document.getElementById('Choice3').innerHTML = '' ;

    document.getElementById('Choice1').onclick = function(){
        ChoiceRight();
    };

    document.getElementById('Choice2').onclick = function(){
        ChoiceFals();
    };

    document.getElementById('Choice3').onclick = function(){
        ChoiceFals();
    };

    document.getElementById('correctionDiv').style.display = 'none';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageHardcore20();
    };
    
}   


function NächsteFrageHardcore20() {

    document.getElementById('Headline').innerHTML = '20. ?' ;
    document.getElementById('Choice1').innerHTML = '' ;
    document.getElementById('Choice2').innerHTML = '' ;
    document.getElementById('Choice3').innerHTML = '' ;

    document.getElementById('Choice1').onclick = function(){
        ChoiceRight();
    };

    document.getElementById('Choice2').onclick = function(){
        ChoiceFals();
    };

    document.getElementById('Choice3').onclick = function(){
        ChoiceFals();
    };

    document.getElementById('NextQuestion').innerHTML = 'Schwierigkeit beenden  ' ;
    document.getElementById('correctionDiv').style.display = 'none';
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        LevelScreen();
    };
    
}   


function LevelScreen() {
    document.getElementById('Question').style.display = 'none';


    document.getElementById('Hardcore').innerHTML += `Hardcore<span class="material-icons-outlined">done</span>`;
}   