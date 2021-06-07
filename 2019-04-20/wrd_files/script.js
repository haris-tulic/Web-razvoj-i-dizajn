function dodaj(id) {
    var nazivSlike=document.getElementById("Slika");
    var cijena=document.getElementById("Cijena");
    var x=document.getElementById(id);
    var y=x.getElementsByTagName("h3");

    if (id==="Slika1") {
        document.getElementById(id).style.border="2px solid yellow";
        document.getElementById("Slika2").style.border="none";
        document.getElementById("Slika3").style.border="none";
        nazivSlike.value="Villa Mostar";
        cijena.value="100";

    }

    else if(id==="Slika2") {
        document.getElementById(id).style.border="2px solid yellow";
        document.getElementById("Slika1").style.border="none";
        document.getElementById("Slika3").style.border="none";
        nazivSlike.value="Villa Buna - Blagaj";
        cijena.value="120";

    }
    else{
        document.getElementById(id).style.border="2px solid yellow";
        document.getElementById("Slika2").style.border="none";
        document.getElementById("Slika1").style.border="none";
        nazivSlike.value="Villa Vlašić";
        cijena.value="130";

    }
}
function izracunaj() {
 var cijena=document.getElementById("Cijena");

 var nbrcijena=parseInt(cijena.value);

 var dani=document.getElementById("Brojdana");
 
 
 var nbrdani=parseInt(dani.value);

 var rez=nbrcijena*nbrdani;
 document.getElementById("iznos").value=rez;
 
}