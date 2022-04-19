var CraftingChoiceR = 0;
var CraftingChoiceF = 0;

var Rezepte = new Array();

function CraftingWhatsRight() {
    if(CraftingChoiceR === 1) {
        document.getElementById('Crafting_Right1').style.display = 'block';
        document.getElementById('Crafting_Choice1').style.border = '3px solid green';
        document.getElementById('Crafting_Fals1').style.display = 'none';
    }
    if(CraftingChoiceR === 2) {
        document.getElementById('Crafting_Right2').style.display = 'block';
        document.getElementById('Crafting_Choice2').style.border = '3px solid green';
        document.getElementById('Crafting_Fals2').style.display = 'none';
    }
    if(CraftingChoiceR === 2) {
        document.getElementById('Crafting_Right3').style.display = 'block';
        document.getElementById('Crafting_Choice3').style.border = '3px solid green';
        document.getElementById('Crafting_Fals3').style.display = 'none';
    }

}


function CraftingRight() {
    CraftingWhatsRight();
    //document.getElementById('Crafting_RightOrFals').style.display = 'block';
    document.getElementById('Crafting_Correction').style.display = 'block';
    document.getElementById('NächsteFrageDiv').style.display = 'flex';
    
}


function CraftingFals() {
    document.getElementById('Crafting_Correction').style.display = 'block';
    document.getElementById('Crafting_Fals1').style.display = 'block'
    document.getElementById('Crafting_Fals2').style.display = 'block'
    document.getElementById('Crafting_Fals3').style.display = 'block'
    document.getElementById('Crafting_Choice1').style.border = '3px solid red';
    document.getElementById('Crafting_Choice2').style.border = '3px solid red';
    document.getElementById('Crafting_Choice3').style.border = '3px solid red';
    CraftingWhatsRight();
}






function Rezept2() {
    document.getElementById('Crafting').style.display = 'none';
}