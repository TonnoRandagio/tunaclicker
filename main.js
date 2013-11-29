var tonni=0;
function tonnoclick(numero){
	tonni=tonni+numero;
	document.getElementById("tonno").innerHTML = tonni;
};
var soldi=0;
function convsoldi(numero){
	if (tonni>0){
	tonni=tonni-numero;
	soldi=soldi+5;
	document.getElementById("bigmoney").innerHTML = soldi;
	document.getElementById("tonno").innerHTML = tonni;
	}
};
var tunagen=0;						//piccola barca
function buygentonno1(){
    var tunagen1cost = Math.floor(10 * Math.pow(1.5,tunagen));   
    if(tonni >= tunagen1cost){                            
        tunagen = tunagen + 1;                               
    	tonni = tonni - tunagen1cost;                         
        document.getElementById('tunagen').innerHTML = tunagen; 
        document.getElementById('tonno').innerHTML = tonni;  
    };
    var nextCost = Math.floor(10 * Math.pow(1.5,tunagen));    
    document.getElementById('tunagen1cost').innerHTML = nextCost; 
};

var fishbot=0;						//barca media
function buyfishbot(){
    var fishbotcost = Math.floor(25 * Math.pow(1.5,fishbot));   
    if(tonni >= fishbotcost){                            
        fishbot = fishbot + 1;                               
    	tonni = tonni - fishbotcost;                         
        document.getElementById('fishbot').innerHTML = fishbot; 
        document.getElementById('tonno').innerHTML = tonni;  
    };
    var nextCost2 = Math.floor(25 * Math.pow(1.5,fishbot));    
    document.getElementById('fishbotcost').innerHTML = nextCost2; 
};


















window.setInterval(function(){
tonnoclick(tunagen);
tonnoclick(fishbot*3);
}, 1000);