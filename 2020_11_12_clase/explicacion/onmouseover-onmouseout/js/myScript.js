document.querySelector("#img-wizard").addEventListener("mouseover",muereteVoldemort);
document.querySelector("#img-wizard").addEventListener("mouseout", defiendeteHarry);

function muereteVoldemort(){
    document.querySelector("#img-wizard").src = "img/voldemort_attack2.gif";
}

function defiendeteHarry(){
    document.querySelector("#img-wizard").src = "img/harry_potter_wand_red.gif";
}

