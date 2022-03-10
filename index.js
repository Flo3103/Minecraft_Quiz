

function LevelChoice() {
    document.getElementById('StartButtonDiv').style.display = 'none'; 
    document.getElementById('LevelChoiceDiv').style.display = 'block';
}


function OpenHardcore() {
    document.getElementById('HardcoreQuestion1').style.display = 'block';
    document.getElementById('LevelChoiceDiv').style.display = 'none';
}




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




function NächsteFrageHardcore1() {
    
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
    
    document.getElementById('HeadlineHardcore').innerHTML = 'Wie hoch ist die Wahrscheinlichkeit, dass man, mit einer unverzauberten Angel, ein verzaubertes Buch angelt?' ;
    document.getElementById('Choice1').innerHTML = '0,8%' ;
    document.getElementById('Choice2').innerHTML = '1,5%' ;
    document.getElementById('Choice3').innerHTML = '0,1%' ;

    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageHardcore2();
    };
    

}   


function NächsteFrageHardcore2() {
    
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
    
    document.getElementById('HeadlineHardcore').innerHTML = '?' ;
    document.getElementById('Choice1').innerHTML = '' ;
    document.getElementById('Choice2').innerHTML = '' ;
    document.getElementById('Choice3').innerHTML = '' ;

    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageHardcore3();
    };

}   

function NächsteFrageHardcore3() {
    
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
    
    document.getElementById('HeadlineHardcore').innerHTML = '?' ;
    document.getElementById('Choice1').innerHTML = '' ;
    document.getElementById('Choice2').innerHTML = '' ;
    document.getElementById('Choice3').innerHTML = '' ;

    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageHardcore4();
    };

}   

function NächsteFrageHardcore4() {
    
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
    
    document.getElementById('HeadlineHardcore').innerHTML = '?' ;
    document.getElementById('Choice1').innerHTML = '' ;
    document.getElementById('Choice2').innerHTML = '' ;
    document.getElementById('Choice3').innerHTML = '' ;

    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageHardcore5();
    };

}   

function NächsteFrageHardcore5() {
    
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
    
    document.getElementById('HeadlineHardcore').innerHTML = '?' ;
    document.getElementById('Choice1').innerHTML = '' ;
    document.getElementById('Choice2').innerHTML = '' ;
    document.getElementById('Choice3').innerHTML = '' ;

    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageHardcore6();
    };

}   

function NächsteFrageHardcore6() {
    
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
    
    document.getElementById('HeadlineHardcore').innerHTML = '?' ;
    document.getElementById('Choice1').innerHTML = '' ;
    document.getElementById('Choice2').innerHTML = '' ;
    document.getElementById('Choice3').innerHTML = '' ;

    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageHardcore7();
    };

}   

function NächsteFrageHardcore7() {
    
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
    
    document.getElementById('HeadlineHardcore').innerHTML = '?' ;
    document.getElementById('Choice1').innerHTML = '' ;
    document.getElementById('Choice2').innerHTML = '' ;
    document.getElementById('Choice3').innerHTML = '' ;

    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageHardcore8();
    };

}   

function NächsteFrageHardcore8() {
    
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
    
    document.getElementById('HeadlineHardcore').innerHTML = '?' ;
    document.getElementById('Choice1').innerHTML = '' ;
    document.getElementById('Choice2').innerHTML = '' ;
    document.getElementById('Choice3').innerHTML = '' ;

    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageHardcore9();
    };

}   

function NächsteFrageHardcore9() {
    
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
    
    document.getElementById('HeadlineHardcore').innerHTML = '?' ;
    document.getElementById('Choice1').innerHTML = '' ;
    document.getElementById('Choice2').innerHTML = '' ;
    document.getElementById('Choice3').innerHTML = '' ;

    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageHardcore10();
    };

}   

function NächsteFrageHardcore10() {
    
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
    
    document.getElementById('HeadlineHardcore').innerHTML = '?' ;
    document.getElementById('Choice1').innerHTML = '' ;
    document.getElementById('Choice2').innerHTML = '' ;
    document.getElementById('Choice3').innerHTML = '' ;

    document.getElementById('Choice1').disabled = false;
    document.getElementById('Choice2').disabled = false;
    document.getElementById('Choice3').disabled = false;

    document.getElementById('NextQuestion').onclick = function(){
        NächsteFrageHardcore11();
    };

}   