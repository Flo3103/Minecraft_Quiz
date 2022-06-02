var Rezepte = new Array();
var punkteCrafting = 0;
var RoundsCrafting = 0;
var Buttongesperrt = true;
var richtigeAntwort;
var XPBar = new Array();
var audio = new Audio("http://music.mp3");



DefiniereRezepte();
NextRoundCrafting();

function Crafting_Choice(gewählterButton) {
    if(Buttongesperrt === true){return}
        Buttongesperrt = true;

    if(gewählterButton.getAttribute("id") === richtigeAntwort) {
        CraftingWhatsRight();
        punkteCrafting++;
        
        document.getElementById('XPBar').src = XPBar[0];
        XPBar.shift();
    }else{
        document.getElementById("Crafting_Fals1").style.display = "block"
        document.getElementById("Crafting_Fals2").style.display = "block"
        document.getElementById("Crafting_Fals3").style.display = "block"
        document.getElementById("Crafting_Choice1").style.border = "3px solid red";
        document.getElementById("Crafting_Choice2").style.border = "3px solid red";
        document.getElementById("Crafting_Choice3").style.border = "3px solid red";
        CraftingWhatsRight();
    }
    audio.oncanplaythrough = function(){
        audio.play();
        }
    document.getElementById('NächsteFrageDiv').style.display = 'flex';
    document.getElementById('Craftingpoints').innerHTML = ''+ punkteCrafting + '/' + '20';

}

function NextRoundCrafting() {
    document.getElementById('NächsteFrageDiv').style.display = 'none';
    document.getElementById("Crafting_Fals1").style.display = "none"
    document.getElementById("Crafting_Fals2").style.display = "none"
    document.getElementById("Crafting_Fals3").style.display = "none"
    document.getElementById("Crafting_Right1").style.display = "none";
    document.getElementById("Crafting_Right2").style.display = "none";
    document.getElementById("Crafting_Right3").style.display = "none";
    document.getElementById("Crafting_Choice1").style.border = "2px solid black";
    document.getElementById("Crafting_Choice2").style.border = "2px solid black";
    document.getElementById("Crafting_Choice3").style.border = "2px solid black";
    document.getElementById('Crafting').style.display = 'inline';
    if(RoundsCrafting < 20){
        Buttongesperrt = false;
        RoundsCrafting++;
        var AktuellesRezept = Rezepte.shift();
        var RezeptGesplittet = AktuellesRezept.split('##');
        document.getElementById('Crafting_Result').src = RezeptGesplittet[0];
        document.getElementById('Choice_Crafting1').src = RezeptGesplittet[1];
        document.getElementById('Choice_Crafting2').src = RezeptGesplittet[2];
        document.getElementById('Choice_Crafting3').src = RezeptGesplittet[3];
        document.getElementById('Crafting_Correction').src = RezeptGesplittet[4];
        richtigeAntwort = RezeptGesplittet[5];
        Rezepte.push(1);   
    }else{
        document.getElementById("Crafting").style.display = "none";
        document.getElementById("PointScreenDiv").style.display = "inline";
        document.getElementById("PointScreenText").innerHTML = "Du hast <br> Crafting mit <h3>" + punkteCrafting + "/" + '20' + "</h3> Punkten abgeschlossen";
    }
    document.getElementById('Craftingpoints').innerHTML = '' + punkteCrafting + '/' + '20';
    document.getElementById('RundenAnzahlCrafting').innerHTML = RoundsCrafting + '.';
}

function DefiniereRezepte() {
     Rezepte[0] = '../../0Bilder/Crafting_Rezepte/1/0.png##../../0Bilder/Crafting_Rezepte/1/1.png##../../0Bilder/Crafting_Rezepte/1/2.png##../../0Bilder/Crafting_Rezepte/1/3.png##../../0Bilder/Crafting_Rezepte/1/1.png##Choice_Crafting1';
     Rezepte[1] = '../../0Bilder/Crafting_Rezepte/2/0.png##../../0Bilder/Crafting_Rezepte/2/2.png##../../0Bilder/Crafting_Rezepte/2/3.png##../../0Bilder/Crafting_Rezepte/2/1.png##../../0Bilder/Crafting_Rezepte/2/1.png##Choice_Crafting3';
     Rezepte[2] = '../../0Bilder/Crafting_Rezepte/3/0.png##../../0Bilder/Crafting_Rezepte/3/2.png##../../0Bilder/Crafting_Rezepte/3/1.png##../../0Bilder/Crafting_Rezepte/3/3.png##../../0Bilder/Crafting_Rezepte/3/1.png##Choice_Crafting2';
     Rezepte[3] = '../../0Bilder/Crafting_Rezepte/4/0.png##../../0Bilder/Crafting_Rezepte/4/2.png##../../0Bilder/Crafting_Rezepte/4/1.png##../../0Bilder/Crafting_Rezepte/4/3.png##../../0Bilder/Crafting_Rezepte/4/1.png##Choice_Crafting2';
     Rezepte[4] = '../../0Bilder/Crafting_Rezepte/5/0.png##../../0Bilder/Crafting_Rezepte/5/2.png##../../0Bilder/Crafting_Rezepte/5/3.png##../../0Bilder/Crafting_Rezepte/5/1.png##../../0Bilder/Crafting_Rezepte/5/1.png##Choice_Crafting3';
     Rezepte[5] = '../../0Bilder/Crafting_Rezepte/6/0.png##../../0Bilder/Crafting_Rezepte/6/1.png##../../0Bilder/Crafting_Rezepte/6/2.png##../../0Bilder/Crafting_Rezepte/6/3.png##../../0Bilder/Crafting_Rezepte/6/1.png##Choice_Crafting1';
     Rezepte[6] = '../../0Bilder/Crafting_Rezepte/7/0.png##../../0Bilder/Crafting_Rezepte/7/1.png##../../0Bilder/Crafting_Rezepte/7/3.png##../../0Bilder/Crafting_Rezepte/7/2.png##../../0Bilder/Crafting_Rezepte/7/1.png##Choice_Crafting1';
     Rezepte[7] = '../../0Bilder/Crafting_Rezepte/8/0.png##../../0Bilder/Crafting_Rezepte/8/3.png##../../0Bilder/Crafting_Rezepte/8/1.png##../../0Bilder/Crafting_Rezepte/8/2.png##../../0Bilder/Crafting_Rezepte/8/1.png##Choice_Crafting2';
     Rezepte[8] = '../../0Bilder/Crafting_Rezepte/9/0.png##../../0Bilder/Crafting_Rezepte/9/2.png##../../0Bilder/Crafting_Rezepte/9/3.png##../../0Bilder/Crafting_Rezepte/9/1.png##../../0Bilder/Crafting_Rezepte/9/1.png##Choice_Crafting3';
     Rezepte[9] = '../../0Bilder/Crafting_Rezepte/10/0.png##../../0Bilder/Crafting_Rezepte/10/2.png##../../0Bilder/Crafting_Rezepte/10/3.png##../../0Bilder/Crafting_Rezepte/10/1.png##../../0Bilder/Crafting_Rezepte/10/1.png##Choice_Crafting3';
    Rezepte[10] = '../../0Bilder/Crafting_Rezepte/11/0.png##../../0Bilder/Crafting_Rezepte/11/3.png##../../0Bilder/Crafting_Rezepte/11/1.png##../../0Bilder/Crafting_Rezepte/11/2.png##../../0Bilder/Crafting_Rezepte/11/1.png##Choice_Crafting2';
    Rezepte[11] = '../../0Bilder/Crafting_Rezepte/12/0.png##../../0Bilder/Crafting_Rezepte/12/2.png##../../0Bilder/Crafting_Rezepte/12/1.png##../../0Bilder/Crafting_Rezepte/12/3.png##../../0Bilder/Crafting_Rezepte/12/1.png##Choice_Crafting2';
    Rezepte[12] = '../../0Bilder/Crafting_Rezepte/13/0.png##../../0Bilder/Crafting_Rezepte/13/1.png##../../0Bilder/Crafting_Rezepte/13/3.png##../../0Bilder/Crafting_Rezepte/13/2.png##../../0Bilder/Crafting_Rezepte/13/1.png##Choice_Crafting1';
    Rezepte[13] = '../../0Bilder/Crafting_Rezepte/14/0.png##../../0Bilder/Crafting_Rezepte/14/2.png##../../0Bilder/Crafting_Rezepte/14/3.png##../../0Bilder/Crafting_Rezepte/14/1.png##../../0Bilder/Crafting_Rezepte/14/1.png##Choice_Crafting3';
    Rezepte[14] = '../../0Bilder/Crafting_Rezepte/15/0.png##../../0Bilder/Crafting_Rezepte/15/3.png##../../0Bilder/Crafting_Rezepte/15/1.png##../../0Bilder/Crafting_Rezepte/15/2.png##../../0Bilder/Crafting_Rezepte/15/1.png##Choice_Crafting2';
    Rezepte[15] = '../../0Bilder/Crafting_Rezepte/16/0.png##../../0Bilder/Crafting_Rezepte/16/1.png##../../0Bilder/Crafting_Rezepte/16/2.png##../../0Bilder/Crafting_Rezepte/16/3.png##../../0Bilder/Crafting_Rezepte/16/1.png##Choice_Crafting1';
    Rezepte[16] = '../../0Bilder/Crafting_Rezepte/17/0.png##../../0Bilder/Crafting_Rezepte/17/1.png##../../0Bilder/Crafting_Rezepte/17/2.png##../../0Bilder/Crafting_Rezepte/17/3.png##../../0Bilder/Crafting_Rezepte/17/1.png##Choice_Crafting1';
    Rezepte[17] = '../../0Bilder/Crafting_Rezepte/18/0.png##../../0Bilder/Crafting_Rezepte/18/3.png##../../0Bilder/Crafting_Rezepte/18/1.png##../../0Bilder/Crafting_Rezepte/18/2.png##../../0Bilder/Crafting_Rezepte/18/1.png##Choice_Crafting2';
    Rezepte[18] = '../../0Bilder/Crafting_Rezepte/19/0.png##../../0Bilder/Crafting_Rezepte/19/2.png##../../0Bilder/Crafting_Rezepte/19/3.png##../../0Bilder/Crafting_Rezepte/19/1.png##../../0Bilder/Crafting_Rezepte/19/1.png##Choice_Crafting3';
    Rezepte[19] = '../../0Bilder/Crafting_Rezepte/20/0.png##../../0Bilder/Crafting_Rezepte/20/1.png##../../0Bilder/Crafting_Rezepte/20/2.png##../../0Bilder/Crafting_Rezepte/20/3.png##../../0Bilder/Crafting_Rezepte/20/1.png##Choice_Crafting1';
    Rezepte[20] = '../../0Bilder/Crafting_Rezepte/21/0.png##../../0Bilder/Crafting_Rezepte/21/3.png##../../0Bilder/Crafting_Rezepte/21/1.png##../../0Bilder/Crafting_Rezepte/21/2.png##../../0Bilder/Crafting_Rezepte/21/1.png##Choice_Crafting2';
    Rezepte[21] = '../../0Bilder/Crafting_Rezepte/22/0.png##../../0Bilder/Crafting_Rezepte/22/2.png##../../0Bilder/Crafting_Rezepte/22/3.png##../../0Bilder/Crafting_Rezepte/22/1.png##../../0Bilder/Crafting_Rezepte/22/1.png##Choice_Crafting3';
    Rezepte[22] = '../../0Bilder/Crafting_Rezepte/23/0.png##../../0Bilder/Crafting_Rezepte/23/3.png##../../0Bilder/Crafting_Rezepte/23/1.png##../../0Bilder/Crafting_Rezepte/23/2.png##../../0Bilder/Crafting_Rezepte/23/1.png##Choice_Crafting2';
    Rezepte[23] = '../../0Bilder/Crafting_Rezepte/24/0.png##../../0Bilder/Crafting_Rezepte/24/2.png##../../0Bilder/Crafting_Rezepte/24/3.png##../../0Bilder/Crafting_Rezepte/24/1.png##../../0Bilder/Crafting_Rezepte/24/1.png##Choice_Crafting3';
    Rezepte[24] = '../../0Bilder/Crafting_Rezepte/25/0.png##../../0Bilder/Crafting_Rezepte/25/1.png##../../0Bilder/Crafting_Rezepte/25/2.png##../../0Bilder/Crafting_Rezepte/25/3.png##../../0Bilder/Crafting_Rezepte/25/1.png##Choice_Crafting1';
    Rezepte[25] = '../../0Bilder/Crafting_Rezepte/26/0.png##../../0Bilder/Crafting_Rezepte/26/3.png##../../0Bilder/Crafting_Rezepte/26/1.png##../../0Bilder/Crafting_Rezepte/26/2.png##../../0Bilder/Crafting_Rezepte/26/1.png##Choice_Crafting2';

for(i=1; i<5; i++){
		Rezepte.sort(function(a, b){return Math.random()-0.5;});
	}
}

function CraftingWhatsRight() {
    if(richtigeAntwort === 'Choice_Crafting1') {
        document.getElementById("Crafting_Right1").style.display = "block";
        document.getElementById("Crafting_Choice1").style.border = "3px solid green";
        document.getElementById("Crafting_Fals1").style.display = "none";
    }
    if(richtigeAntwort === 'Choice_Crafting2') {
        document.getElementById("Crafting_Right2").style.display = "block";
        document.getElementById("Crafting_Choice2").style.border = "3px solid green";
        document.getElementById("Crafting_Fals2").style.display = "none";
    }
    if(richtigeAntwort === 'Choice_Crafting3') {
        document.getElementById("Crafting_Right3").style.display = "block";
        document.getElementById("Crafting_Choice3").style.border = "3px solid green";
        document.getElementById("Crafting_Fals3").style.display = "none";
    }

}
XPBarDefinieren();

function XPBarDefinieren() {
    XPBar[0] = '../../0Bilder/Xp Bar/1.jpg';
    XPBar[1] = '../../0Bilder/Xp Bar/2.jpg';
    XPBar[2] = '../../0Bilder/Xp Bar/3.jpg';
    XPBar[3] = '../../0Bilder/Xp Bar/4.jpg';
    XPBar[4] = '../../0Bilder/Xp Bar/5.jpg';
    XPBar[5] = '../../0Bilder/Xp Bar/6.jpg';
    XPBar[6] = '../../0Bilder/Xp Bar/7.jpg';
    XPBar[7] = '../../0Bilder/Xp Bar/8.jpg';
    XPBar[8] = '../../0Bilder/Xp Bar/9.jpg';
    XPBar[9] = '../../0Bilder/Xp Bar/10.jpg';
    XPBar[10] = '../../0Bilder/Xp Bar/11.jpg';
    XPBar[11] = '../../0Bilder/Xp Bar/12.jpg';
    XPBar[12] = '../../0Bilder/Xp Bar/13.jpg';
    XPBar[13] = '../../0Bilder/Xp Bar/14.jpg';
    XPBar[14] = '../../0Bilder/Xp Bar/15.jpg';
    XPBar[15] = '../../0Bilder/Xp Bar/16.jpg';
    XPBar[16] = '../../0Bilder/Xp Bar/17.jpg';
    XPBar[17] = '../../0Bilder/Xp Bar/18.jpg';
    XPBar[18] = '../../0Bilder/Xp Bar/19.jpg';
    XPBar[19] = '../../0Bilder/Xp Bar/20.jpg';

}

function InfoCraftingResult() {

    document.getElementById('InfoCraftingResult').style.display = 'inline';



}




















//Rezepte[0] = 'https://docs.google.com/uc?export=&id=1Zv7Yz52WT2TaZaQdClTAZpvWKsTAu4zE##https://docs.google.com/uc?export=&id=1ZuI8NwUsr3blWj8fhmRrJqWJpLPVfQoj##https://docs.google.com/uc?export=&id=1ZrnQhXCsAezlhgq_iDSKhfOnE4lLPC3h##https://docs.google.com/uc?export=&id=1Zmy8Nnm0r9loz8mOlB-FlVTto48enkbo##https://docs.google.com/uc?export=&id=1ZuI8NwUsr3blWj8fhmRrJqWJpLPVfQoj##Choice_Crafting1';
//Rezepte[1] = 'https://docs.google.com/uc?export=&id=1MJLkJhnBwSpHaLxS83e7j0GxWTphkeMV##https://docs.google.com/uc?export=&id=1MI91wPjPnPS1O-07I0Gaup3OKaXOtAqc##https://docs.google.com/uc?export=&id=1T_qT8dPVTBHVQz17uXcgYTQI_OzWsSF1##https://docs.google.com/uc?export=&id=1MccuwOinsYsTBSozEUJPGytlITaxf1ZG##https://docs.google.com/uc?export=&id=1MccuwOinsYsTBSozEUJPGytlITaxf1ZG##Choice_Crafting3';
//Rezepte[2] = 'https://docs.google.com/uc?export=&id=1NU77x-XQ3C5T9q3jtEQXhsRG-kf3Vfde##https://docs.google.com/uc?export=&id=1N3uVbKUJI3-7QP5u0wY-lf94Y2S0Rx0_##https://docs.google.com/uc?export=&id=1N0gsZIHwfursK8BRn0hCcCLTAwKZPWRg##https://docs.google.com/uc?export=&id=1N5GAzOF4IhIE7VhMhgwLQMRg_GqHcDVq##https://docs.google.com/uc?export=&id=1N5GAzOF4IhIE7VhMhgwLQMRg_GqHcDVq##Choice_Crafting3';
//Rezepte[3] = 'https://docs.google.com/uc?export=&id=1OqPbpzDe65qsTUSs1a-5RY9ebXFMgJ44##https://docs.google.com/uc?export=&id=1NPpCqvmp8JrIl480lZCHJAdaz2BEiiEU##https://docs.google.com/uc?export=&id=1NH0urU82wyVBiJTG4fmdEHEaizAo8IMq##https://docs.google.com/uc?export=&id=1NHoqwRK9g70lQSQ-j7yQ6H8B3HtbUsFw##https://docs.google.com/uc?export=&id=1NPpCqvmp8JrIl480lZCHJAdaz2BEiiEU##Choice_Crafting1';
//Rezepte[4] = 'https://docs.google.com/uc?export=&id=1NWjrLV2iG6zI6L6-53USXaA6FSBzJQFU##https://docs.google.com/uc?export=&id=1Mo8zglK95h0nd1dwq7kboEJvGgM97HJH##https://docs.google.com/uc?export=&id=1My8M0pmj-PzMAEl0tMcjXFmtYvCjMwrG##https://docs.google.com/uc?export=&id=1Mn-JsMiE48viNvc2EfUMrnP86leTm1NR##https://docs.google.com/uc?export=&id=1My8M0pmj-PzMAEl0tMcjXFmtYvCjMwrG##Choice_Crafting2';
//Rezepte[5] = 'https://docs.google.com/uc?export=&id=1MFueMB-BFBwEALlzd-Qxgmqr9kVzxlgE##https://docs.google.com/uc?export=&id=1NSktqnfNELCz7BAMu37r52p_yeSQOt1j##https://docs.google.com/uc?export=&id=1NQB6ELfXFl7P2dJJ3-9gvs6Nb-XjEj5Z##https://docs.google.com/uc?export=&id=1MEVlprJjHa9pFmCiIQl8DHmu85LUG_89##https://docs.google.com/uc?export=&id=1NQB6ELfXFl7P2dJJ3-9gvs6Nb-XjEj5Z##Choice_Crafting2';
//Rezepte[6] = 'https://docs.google.com/uc?export=&id=1OuqVv1PwxXCRoAqJRtovEEvSdLM-VM0B##https://docs.google.com/uc?export=&id=1MZWsEdBgAD_Xm-dboU2gqfIXxFzcVkXs##https://docs.google.com/uc?export=&id=1NQbskS7-a0VPVoRpwq9UhTie2RWpdmQH##https://docs.google.com/uc?export=&id=1MYKP9Sbx2BJ6-2BXJWwVSYpZxp633nJd##https://docs.google.com/uc?export=&id=1MZWsEdBgAD_Xm-dboU2gqfIXxFzcVkXs##Choice_Crafting1';
//Rezepte[7] = 'https://docs.google.com/uc?export=&id=1P6bRPsIkVi11__qqpiUJ_147dhJtIc6C##https://docs.google.com/uc?export=&id=1P6FcIclBO7yY9osZzM5JrOI1FsrfrQsM##https://docs.google.com/uc?export=&id=1P0_cN1E_MxqBq7_tC-QJfkuBfPB2u7wa##https://docs.google.com/uc?export=&id=1S4u3tZTb0WZ8hZCkZEDwoaQUaZnHF9jT##https://docs.google.com/uc?export=&id=1S4u3tZTb0WZ8hZCkZEDwoaQUaZnHF9jT##Choice_Crafting3';
//Rezepte[8] = 'https://docs.google.com/uc?export=&id=1TaYDLSrLZYadKGxsNnv5orqc8ZBh-gLc##https://docs.google.com/uc?export=&id=1PGOEvAgm63rwuCV44_Mdi1IbLKxaPmSS##https://docs.google.com/uc?export=&id=1PZcqGviv-Z3-GcDBbvqzdtcpJtcGtd8M##https://docs.google.com/uc?export=&id=1PPGiO3oPJEUlqjoJXRiRUAAQ7yQ-7HiI##https://docs.google.com/uc?export=&id=1PZcqGviv-Z3-GcDBbvqzdtcpJtcGtd8M##Choice_Crafting2';
//Rezepte[9] = 'https://docs.google.com/uc?export=&id=1S9YaKl0HZ2aUBgiQjduq20uFMR-aOq6U##https://docs.google.com/uc?export=&id=1PAfLrvGaYB4QhkTQggclkHTsFqm2taZ3##https://docs.google.com/uc?export=&id=1P8JyDZlnsLLtrKPVQTZ8_BgBKPUkApSA##https://docs.google.com/uc?export=&id=1PAWAJcmZ3Uejh4iRBzdWQMqSRALhQWtB##https://docs.google.com/uc?export=&id=1PAfLrvGaYB4QhkTQggclkHTsFqm2taZ3##Choice_Crafting1';
//Rezepte[10] = 'https://docs.google.com/uc?export=&id=1SFUOuC_SVyJk6yVtyJN5nS9WavQNxcK5##https://docs.google.com/uc?export=&id=1Q0ERh1ohQm_JytCDfM4F2BgyNB2yaQxd##https://docs.google.com/uc?export=&id=1QpkmMt2Y2Eyb3lJ66uTtEMrES0tKxRjH##https://docs.google.com/uc?export=&id=1QqoWfBBULP8UTFxZGnj35mn0JmGzt8N9##https://docs.google.com/uc?export=&id=1Q0ERh1ohQm_JytCDfM4F2BgyNB2yaQxd##Choice_Crafting1';
//Rezepte[11] = 'https://docs.google.com/uc?export=&id=1SKdpYCegLhV0UfxMgf-pE7eXlbBGz8_y##https://docs.google.com/uc?export=&id=1Qmy85yonNuwQw38IQJHMeSLxkk0nVgPg##https://docs.google.com/uc?export=&id=1QotuUKrPYSWZab4gNJQ58R9F0bqqAlrv##https://docs.google.com/uc?export=&id=1QhW4Ub6Em38X4kQ4S7O7UXwVeGKqSOXf##https://docs.google.com/uc?export=&id=1QotuUKrPYSWZab4gNJQ58R9F0bqqAlrv##Choice_Crafting2';
//Rezepte[12] = 'https://docs.google.com/uc?export=&id=1SYV8qzOdPHx3Y5KXNIqRQ3OqAo5YoyeS##https://docs.google.com/uc?export=&id=1Qb24XnklW447x_QWvoGO-i1WwvNXHoaB##https://docs.google.com/uc?export=&id=1Q_9WmvQo6ZcWMuP5494Mc9H0XPvoUSYo##https://docs.google.com/uc?export=&id=1QelQqoyGOCxNAeeb_DSeo3yKikncJYsL##https://docs.google.com/uc?export=&id=1QelQqoyGOCxNAeeb_DSeo3yKikncJYsL##Choice_Crafting3';
//Rezepte[13] = 'https://docs.google.com/uc?export=&id=1SYp2_gJk6wPE08xyqrf1Fij1GQYsCuSL##https://docs.google.com/uc?export=&id=1QUMWaZU-jag07_jNPvGAI06Rd7xJYdhi##https://docs.google.com/uc?export=&id=1Q_6lj9HOggmvlb-P8XOGVRdrpmnyaKPz##https://docs.google.com/uc?export=&id=1RHXVtMvS2M1PI4udV5AJDPluVJy4XhLq##https://docs.google.com/uc?export=&id=1Q_6lj9HOggmvlb-P8XOGVRdrpmnyaKPz##Choice_Crafting2';
//Rezepte[14] = 'https://docs.google.com/uc?export=&id=1RGQJJ730fcatsUywMMfd2ggdIdUV0wfT##https://docs.google.com/uc?export=&id=1ScQwq8qa5uOHW7ODTyzjj8ZE_fBtP8w1##https://docs.google.com/uc?export=&id=1RDYU1YwgYki4N0FM5umOHfVWeej-Q7Ut##https://docs.google.com/uc?export=&id=1R9fdg3uEdZCE97ALGo15TXRZ6v_26ZcW##https://docs.google.com/uc?export=&id=1ScQwq8qa5uOHW7ODTyzjj8ZE_fBtP8w1##Choice_Crafting1';
//Rezepte[15] = 'https://docs.google.com/uc?export=&id=1SgMX2kcDz61xAzvUtKcgEUGrSeRrwu28##https://docs.google.com/uc?export=&id=1R9NQqqeW2tZXRMMKVYcAm0M1f2znYjLu##https://docs.google.com/uc?export=&id=1R79DgPcJK6nOSmJtM0mAZaYAewo-Gtpg##https://docs.google.com/uc?export=&id=1R9QMtBRdo7DzxEMs9Lxwq_2mkpytNqwB##https://docs.google.com/uc?export=&id=1R9NQqqeW2tZXRMMKVYcAm0M1f2znYjLu##Choice_Crafting1';
//Rezepte[16] = 'https://docs.google.com/uc?export=&id=1SgaYFfR48N8lpsJ7Xc7UM55FufNnMArk##https://docs.google.com/uc?export=&id=1R22UxOn9vfgjBzSxL4K-xiLwIC0qlnay##https://docs.google.com/uc?export=&id=1R-CXAtTQ6CoTTsHQbgFWk4BqcAS4IIvM##https://docs.google.com/uc?export=&id=1R2KQpIraOY-_eenYc4vjscn3vusknfDP##https://docs.google.com/uc?export=&id=1R2KQpIraOY-_eenYc4vjscn3vusknfDP##Choice_Crafting3';
//Rezepte[17] = 'https://docs.google.com/uc?export=&id=1RX8Wk3e0fLSTYbQk4nMBrwbGwlJmnNK0##https://docs.google.com/uc?export=&id=1ShWXuIQ-UYWRx3UKeVGquyeMn0YY1bPF##https://docs.google.com/uc?export=&id=1RQsFRLB5ZgWC2U5OoXgsvOd6vXmINdTP##https://docs.google.com/uc?export=&id=1ROd_kA2b-Dx_ppvRQ0wehxqMfqtQARNB##https://docs.google.com/uc?export=&id=1ShWXuIQ-UYWRx3UKeVGquyeMn0YY1bPF##Choice_Crafting1';
//Rezepte[18] = 'https://docs.google.com/uc?export=&id=1ShX7sENhPH8gx1V5rWowwQ7znHjdBWKB##https://docs.google.com/uc?export=&id=1RJ-a5j8eTUD-51jIqH6NUtVYNzuOzq3_##https://docs.google.com/uc?export=&id=1RKewu2_XE4mxbB_bioxM4zZGNqYV-51h##https://docs.google.com/uc?export=&id=1RHmh6QhKT04ItYK6ERmS_1yzzxRpxugb##https://docs.google.com/uc?export=&id=1RKewu2_XE4mxbB_bioxM4zZGNqYV-51h##Choice_Crafting2';
//Rezepte[19] = 'https://docs.google.com/uc?export=&id=1Si_kRJNATHwtzCilUsBulKngRc46w03-##https://docs.google.com/uc?export=&id=1PnNpM-2vYUFloqKnN4NmWFH4jIUIHu-Q##https://docs.google.com/uc?export=&id=1PsuAYd3Moc1pfdvROjzV1NQxOJI3-iPg##https://docs.google.com/uc?export=&id=1Pl9ybce-U7oqgWtFyAH8zZSWerL7WZMZ##https://docs.google.com/uc?export=&id=1PsuAYd3Moc1pfdvROjzV1NQxOJI3-iPg##Choice_Crafting2';
//Rezepte[20] = 'https://docs.google.com/uc?export=&id=1T3OLbLs0p7-Zr5V-bbWySYnYsiIapbKL##https://docs.google.com/uc?export=&id=1PeXJo8ySzKsR0ipkWUU_JXUibPR8e0Nv##https://docs.google.com/uc?export=&id=1Pd_jBFEgiGjnKpuw_A8Tt0w0tH1Jk42m##https://docs.google.com/uc?export=&id=1T6RQglRyBAzsfUpykLDrGbv2pjbLdrdp##https://docs.google.com/uc?export=&id=1T6RQglRyBAzsfUpykLDrGbv2pjbLdrdp##Choice_Crafting3';
//Rezepte[21] = 'https://docs.google.com/uc?export=&id=1PcoA7-UwGO6ZZMS9gWWdq2xiTqSlOAdt##https://docs.google.com/uc?export=&id=1T91qdtPy_WGWgZ6C5ghM0lk3BP67T2dA##https://docs.google.com/uc?export=&id=1ParwpVV7HptbvdUdXqHNwbLAJz6ajRAp##https://docs.google.com/uc?export=&id=1PZeRDMTTcGkfL0HQWC2FZRvq4ZtlHt8q##https://docs.google.com/uc?export=&id=1T91qdtPy_WGWgZ6C5ghM0lk3BP67T2dA##Choice_Crafting1';
//Rezepte[22] = 'https://docs.google.com/uc?export=&id=1T9OqnVqC9uJkaZ2ugGnLaFrXw2FOv5yJ##https://docs.google.com/uc?export=&id=1QRlfOJqmUquUiSy9NlRoqiNXtEh7Vnjx##https://docs.google.com/uc?export=&id=1QTj2e_rY4AJ7tcK5JOOGGu3J-NMZtEaj##https://docs.google.com/uc?export=&id=1QSUMIwnnM7vQJdJPQEESU6DyMZV0RfMi##https://docs.google.com/uc?export=&id=1QTj2e_rY4AJ7tcK5JOOGGu3J-NMZtEaj##Choice_Crafting2';
//Rezepte[23] = 'https://docs.google.com/uc?export=&id=1TAJp5cQB0mnlEmEmDflSiXJ12QTiPbpD##https://docs.google.com/uc?export=&id=1Q9M8_Oi20iPSaVe2FT5zcM22K7b1tiha##https://docs.google.com/uc?export=&id=1Q8jj-eWWFnwUJQ_uA5DU7LO9cq8sKVuQ##https://docs.google.com/uc?export=&id=1QIPuUcFBN-OAP9oT6cy2wA5aVdkDlHhd##https://docs.google.com/uc?export=&id=1QIPuUcFBN-OAP9oT6cy2wA5aVdkDlHhd##Choice_Crafting3';
//Rezepte[24] = 'https://docs.google.com/uc?export=&id=1TK5dB8QXPVToG-C3V4lzSkkV8Bmw1QEb##https://docs.google.com/uc?export=&id=1Q7fKNEDEeFTKYwiRuYsCSdu_XKV60jaK##https://docs.google.com/uc?export=&id=1Q8ERaN2uSA0kIa0rTCrJnOZ5oWwSPeQ1##https://docs.google.com/uc?export=&id=1Q36H8ykqk-BuAhHVP8TLLyQngMZTpBAQ##https://docs.google.com/uc?export=&id=1Q8ERaN2uSA0kIa0rTCrJnOZ5oWwSPeQ1##Choice_Crafting2';
//Rezepte[25] = 'https://docs.google.com/uc?export=&id=1NWx_xexGNNBfdGnQksH12jsq-8aLWlZU##https://docs.google.com/uc?export=&id=1MjNFLn0rF-Qcq-CBbopskwiY1ek32K-g##https://docs.google.com/uc?export=&id=1Mhz2D_VrjSu8ARWmmAlRBvmT7UhV-ghL##https://docs.google.com/uc?export=&id=1MdMn1a3l0imcLR5UgsotWP2Syo4SgMN_##https://docs.google.com/uc?export=&id=1MjNFLn0rF-Qcq-CBbopskwiY1ek32K-g##Choice_Crafting1';