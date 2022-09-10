var XPBar = new Array();
var SpielerName = "Steve";

const ButtonClickSound = new Audio();
ButtonClickSound.src = '../../0 Sounds/click.ogg';
const DamageSound = new Audio();
DamageSound.src = '../../0 Sounds/hit3.ogg';




XPBarDefinieren();

function XPBarDefinieren() {
    XPBar[0] = '../../0Bilder/Xp Bar/0.png';
    XPBar[1] = '../../0Bilder/Xp Bar/1.jpg';
    XPBar[2] = '../../0Bilder/Xp Bar/2.jpg';
    XPBar[3] = '../../0Bilder/Xp Bar/3.jpg';
    XPBar[4] = '../../0Bilder/Xp Bar/4.jpg';
    XPBar[5] = '../../0Bilder/Xp Bar/5.jpg';
    XPBar[6] = '../../0Bilder/Xp Bar/6.jpg';
    XPBar[7] = '../../0Bilder/Xp Bar/7.jpg';
    XPBar[8] = '../../0Bilder/Xp Bar/8.jpg';
    XPBar[9] = '../../0Bilder/Xp Bar/9.jpg';
    XPBar[10] = '../../0Bilder/Xp Bar/10.jpg';
    XPBar[11] = '../../0Bilder/Xp Bar/11.jpg';
    XPBar[12] = '../../0Bilder/Xp Bar/12.jpg';
    XPBar[13] = '../../0Bilder/Xp Bar/13.jpg';
    XPBar[14] = '../../0Bilder/Xp Bar/14.jpg';
    XPBar[15] = '../../0Bilder/Xp Bar/15.jpg';
    XPBar[16] = '../../0Bilder/Xp Bar/16.jpg';
    XPBar[17] = '../../0Bilder/Xp Bar/17.jpg';
    XPBar[18] = '../../0Bilder/Xp Bar/18.jpg';
    XPBar[19] = '../../0Bilder/Xp Bar/19.jpg';
    XPBar[20] = '../../0Bilder/Xp Bar/20.jpg';
}	

var PlayerName = "Steve"; 					// Setzt Spielername Standartmäßig auf Steve

const urlParms = new URLSearchParams(window.location.search);	// Holt URLParameter aus der URL		

if(urlParms.get('name') != null){				// Überprüft ob ein URL Paramter vorhanden ist (wenn kein Wert eingegeben wurde ist der const URLParms NULL)
    PlayerName = urlParms.get('name');			// Wenn ein Wert mit dem Key Name eingegeben wurde wird die Variable PlayerName mit dem Wert überschrieben
}else{	
    PlayerName = prompt("Gieb deinen Namen ein");		// Wenn der kein Wert vorhanden ist öffne ein Prompt Alert um PlayerName zu bekommen
}    
