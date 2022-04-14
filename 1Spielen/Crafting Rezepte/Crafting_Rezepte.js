//function allowDrop(ev) {
//    ev.preventDefault();
//  }
//  
//  function drag(ev) {
//    ev.dataTransfer.setData("text", ev.target.id);
//  }
//  
//  function drop(ev) {
//    ev.preventDefault();
//    var data = ev.dataTransfer.getData("text");
//    ev.target.appendChild(document.getElementById(data));
//  }


function CraftingRight() {
    document.getElementById('Crafting_RightOrFals').style.display = 'block';
    document.getElementById('Crafting_Correction').style.display = 'block';

    document.getElementById('NächsteFrageDiv').style.display = 'flex';

}

function CraftingFals() {
    document.getElementById('1').src = 'https://www.hofbraeu-wirtshaus.de/wp-content/uploads/2016/05/button-stammtische.jpg';
    document.getElementById('Crafting').style.display = 'none';
}