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
     Rezepte[0] = '../../0Bilder/Crafting_Rezepte/1/diamond_chestplate.png##../../0Bilder/Crafting_Rezepte/1/1.jpg##../../0Bilder/Crafting_Rezepte/1/2.jpg##../../0Bilder/Crafting_Rezepte/1/3.jpg##../../0Bilder/Crafting_Rezepte/1/1.jpg##Choice_Crafting1';
     Rezepte[1] = '';
     Rezepte[2] = '';
     Rezepte[3] = '';
     Rezepte[4] = '';
     Rezepte[5] = '';
     Rezepte[6] = '';
     Rezepte[7] = '';
     Rezepte[8] = '';
     Rezepte[9] = '';
    Rezepte[10] = '';
    Rezepte[11] = '';
    Rezepte[12] = '';
    Rezepte[13] = '';
    Rezepte[14] = '';
    Rezepte[15] = '';


}







function CraftingWhatsRight() {
    if(richtigeAntwort === 'Choice_Crafting1') {
        document.getElementById("Crafting_Right1").style.display = "block";
        document.getElementById("Crafting_Choice1").style.border = "3px solid green";
        document.getElementById("Crafting_Fals1").style.display = "none";
    }
    if(richtigeAntwort === '2') {
        document.getElementById("Crafting_Right2").style.display = "block";
        document.getElementById("Crafting_Choice2").style.border = "3px solid green";
        document.getElementById("Crafting_Fals2").style.display = "none";
    }
    if(richtigeAntwort === '3') {
        document.getElementById("Crafting_Right3").style.display = "block";
        document.getElementById("Crafting_Choice3").style.border = "3px solid green";
        document.getElementById("Crafting_Fals3").style.display = "none";
    }

}
