function muereVoldemort(){
    document.querySelector("#img-attack").src = "img/voldemort_attack2.gif";
}

function defiendeteHarry(){
    document.querySelector("#img-attack").src = "img/harry_potter_wand_red.gif";
}

document.querySelector("#img-attack").addEventListener("mouseover",muereVoldemort);
document.querySelector("#img-attack").addEventListener("mouseout",defiendeteHarry);