
function NächsteFrageHardcore2() {

    document.getElementById('Headline').innerHTML = '2. Wie hoch ist die Wahrscheinlichkeit, dass man, mit einer unverzauberten Angel, ein verzaubertes Buch angelt?' ;
    document.getElementById('Choice1').innerHTML = '0,8%' ;
    document.getElementById('Choice2').innerHTML = '1,5%' ;
    document.getElementById('Choice3').innerHTML = '0,1%' ;

    document.getElementById('Choice1').onclick = function(){ChoiceRight();};
    document.getElementById('Choice2').onclick = function(){ChoiceFals();};
    document.getElementById('Choice3').onclick = function(){ChoiceFals();};

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

    document.getElementById('Headline').innerHTML = '20. Wie hoch ist die Wahrscheinlichkeit, dass sich eine Eisen, Gold und Diamant Pferderüstung in einer Kiste, im Stonghold befinden?' ;
    document.getElementById('Choice1').innerHTML = '0,001563%' ;
    document.getElementById('Choice2').innerHTML = '0,00175%' ;
    document.getElementById('Choice3').innerHTML = '0,00077%' ;

    document.getElementById('Choice1').onclick = function(){ChoiceRight();};
    document.getElementById('Choice2').onclick = function(){ChoiceFals();};
    document.getElementById('Choice3').onclick = function(){ChoiceFals();};

    document.getElementById('NextQuestion').innerHTML += ``;

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
    window.history.back();
}   