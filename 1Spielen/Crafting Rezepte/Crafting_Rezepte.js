var Rezepte = new Array();
var punkteCrafting = 0;
var Rounds = 0;
var Buttongesperrt = true;
var richtigeAntwort;

DefiniereRezepte();

function Crafting_Choice(gewählterButton) {
    if(Buttongesperrt === true){return}
        Buttongesperrt = true;

    if(gewählterButton.getAttribute("id") === richtigeAntwort) {
        CraftingWhatsRight();
        punkteCrafting++;
    }else{
        document.getElementById("Crafting_Fals1").style.display = "block"
        document.getElementById("Crafting_Fals2").style.display = "block"
        document.getElementById("Crafting_Fals3").style.display = "block"
        document.getElementById("Crafting_Choice1").style.border = "3px solid red";
        document.getElementById("Crafting_Choice2").style.border = "3px solid red";
        document.getElementById("Crafting_Choice3").style.border = "3px solid red";
        CraftingWhatsRight();
    }
    document.getElementById('NächsteFrageDiv').style.display = 'flex';
    document.getElementById('DivPoints').style.display = 'flex';
    document.getElementById('points').innerHTML = 'Punkte:   '+ punkteCrafting + '/' + Rezepte.length;
} 

function NextRoundCrafting() {
    document.getElementById('Startmenücrafting').style.display = 'none';
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

    if(Rounds < Rezepte.length){
        Buttongesperrt = false;
        Rounds++;
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
        document.getElementById("Points").innerHTML = "Du hast Crafting mit <h3>" + punkteCrafting + "/" + Rezepte.length + "</h3> Punkten abgeschlossen";
    }
}

function DefiniereRezepte() {
     Rezepte[0] = 'https://docs.google.com/uc?export=&id=1Zv7Yz52WT2TaZaQdClTAZpvWKsTAu4zE##https://docs.google.com/uc?export=&id=1ZuI8NwUsr3blWj8fhmRrJqWJpLPVfQoj##https://docs.google.com/uc?export=&id=1ZrnQhXCsAezlhgq_iDSKhfOnE4lLPC3h##https://docs.google.com/uc?export=&id=1Zmy8Nnm0r9loz8mOlB-FlVTto48enkbo##https://docs.google.com/uc?export=&id=1ZuI8NwUsr3blWj8fhmRrJqWJpLPVfQoj##Choice_Crafting1';
     Rezepte[1] = 'https://docs.google.com/uc?export=&id=1MJLkJhnBwSpHaLxS83e7j0GxWTphkeMV##https://docs.google.com/uc?export=&id=1MI91wPjPnPS1O-07I0Gaup3OKaXOtAqc##https://docs.google.com/uc?export=&id=1T_qT8dPVTBHVQz17uXcgYTQI_OzWsSF1##https://docs.google.com/uc?export=&id=1MccuwOinsYsTBSozEUJPGytlITaxf1ZG##https://docs.google.com/uc?export=&id=1MccuwOinsYsTBSozEUJPGytlITaxf1ZG##Choice_Crafting3';
     Rezepte[2] = 'https://docs.google.com/uc?export=&id=1NU77x-XQ3C5T9q3jtEQXhsRG-kf3Vfde##https://docs.google.com/uc?export=&id=1N3uVbKUJI3-7QP5u0wY-lf94Y2S0Rx0_##https://docs.google.com/uc?export=&id=1N0gsZIHwfursK8BRn0hCcCLTAwKZPWRg##https://docs.google.com/uc?export=&id=1N5GAzOF4IhIE7VhMhgwLQMRg_GqHcDVq##https://docs.google.com/uc?export=&id=1N5GAzOF4IhIE7VhMhgwLQMRg_GqHcDVq##Choice_Crafting3';
     Rezepte[3] = 'https://docs.google.com/uc?export=&id=1OqPbpzDe65qsTUSs1a-5RY9ebXFMgJ44##https://docs.google.com/uc?export=&id=1NPpCqvmp8JrIl480lZCHJAdaz2BEiiEU##https://docs.google.com/uc?export=&id=1NH0urU82wyVBiJTG4fmdEHEaizAo8IMq##https://docs.google.com/uc?export=&id=1NHoqwRK9g70lQSQ-j7yQ6H8B3HtbUsFw##https://docs.google.com/uc?export=&id=1NPpCqvmp8JrIl480lZCHJAdaz2BEiiEU##Choice_Crafting1';
     Rezepte[4] = 'https://docs.google.com/uc?export=&id=1NWjrLV2iG6zI6L6-53USXaA6FSBzJQFU##https://docs.google.com/uc?export=&id=1Mo8zglK95h0nd1dwq7kboEJvGgM97HJH##https://docs.google.com/uc?export=&id=1My8M0pmj-PzMAEl0tMcjXFmtYvCjMwrG##https://docs.google.com/uc?export=&id=1Mn-JsMiE48viNvc2EfUMrnP86leTm1NR##https://docs.google.com/uc?export=&id=1My8M0pmj-PzMAEl0tMcjXFmtYvCjMwrG##Choice_Crafting2';
     Rezepte[5] = 'https://docs.google.com/uc?export=&id=1MFueMB-BFBwEALlzd-Qxgmqr9kVzxlgE##https://docs.google.com/uc?export=&id=1NSktqnfNELCz7BAMu37r52p_yeSQOt1j##https://docs.google.com/uc?export=&id=1NQB6ELfXFl7P2dJJ3-9gvs6Nb-XjEj5Z##https://docs.google.com/uc?export=&id=1MEVlprJjHa9pFmCiIQl8DHmu85LUG_89##https://docs.google.com/uc?export=&id=1NQB6ELfXFl7P2dJJ3-9gvs6Nb-XjEj5Z##Choice_Crafting2';
     Rezepte[6] = 'https://docs.google.com/uc?export=&id=1OuqVv1PwxXCRoAqJRtovEEvSdLM-VM0B##https://docs.google.com/uc?export=&id=1MZWsEdBgAD_Xm-dboU2gqfIXxFzcVkXs##https://docs.google.com/uc?export=&id=1NQbskS7-a0VPVoRpwq9UhTie2RWpdmQH##https://docs.google.com/uc?export=&id=1MYKP9Sbx2BJ6-2BXJWwVSYpZxp633nJd##https://docs.google.com/uc?export=&id=1MZWsEdBgAD_Xm-dboU2gqfIXxFzcVkXs##Choice_Crafting1';
     Rezepte[7] = 'https://docs.google.com/uc?export=&id=1P6bRPsIkVi11__qqpiUJ_147dhJtIc6C##https://docs.google.com/uc?export=&id=1P6FcIclBO7yY9osZzM5JrOI1FsrfrQsM##https://docs.google.com/uc?export=&id=1P0_cN1E_MxqBq7_tC-QJfkuBfPB2u7wa##https://docs.google.com/uc?export=&id=1S4u3tZTb0WZ8hZCkZEDwoaQUaZnHF9jT##https://docs.google.com/uc?export=&id=1S4u3tZTb0WZ8hZCkZEDwoaQUaZnHF9jT##Choice_Crafting3';
     Rezepte[8] = 'https://docs.google.com/uc?export=&id=1TaYDLSrLZYadKGxsNnv5orqc8ZBh-gLc##https://docs.google.com/uc?export=&id=1PGOEvAgm63rwuCV44_Mdi1IbLKxaPmSS##https://docs.google.com/uc?export=&id=1PZcqGviv-Z3-GcDBbvqzdtcpJtcGtd8M##https://docs.google.com/uc?export=&id=1PPGiO3oPJEUlqjoJXRiRUAAQ7yQ-7HiI##https://docs.google.com/uc?export=&id=1PZcqGviv-Z3-GcDBbvqzdtcpJtcGtd8M##Choice_Crafting2';
     Rezepte[9] = 'https://docs.google.com/uc?export=&id=1S9YaKl0HZ2aUBgiQjduq20uFMR-aOq6U##https://docs.google.com/uc?export=&id=1PAfLrvGaYB4QhkTQggclkHTsFqm2taZ3##https://docs.google.com/uc?export=&id=1P8JyDZlnsLLtrKPVQTZ8_BgBKPUkApSA##https://docs.google.com/uc?export=&id=1PAWAJcmZ3Uejh4iRBzdWQMqSRALhQWtB##https://docs.google.com/uc?export=&id=1PAfLrvGaYB4QhkTQggclkHTsFqm2taZ3##Choice_Crafting1';
    Rezepte[10] = '##########Choice_Crafting1';
    Rezepte[11] = '##########Choice_Crafting2';
    Rezepte[12] = '##########Choice_Crafting3';
    Rezepte[13] = '##########Choice_Crafting2';
    Rezepte[14] = '##########Choice_Crafting1';
    Rezepte[15] = '##########Choice_Crafting1';
    Rezepte[16] = '##########Choice_Crafting3';

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
