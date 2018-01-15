
let kontakti=(function () {
    

const kljucZaLocalStorage="kontakti";
function unesiIme(ime){

}       //         -otvara polje za unos jedinstvenog imena osobe
function proveriJedinstvenost(ime){

}  //  -provera da li vec postoji kontakt sa tim imenom
function kreirajOsobu(){
    let osoba={
        ime
    }
    return osoba;

}       //      -kreiranje objekta na osnovu jedinstvenog imena
function dodajKontakte (osoba,kontakti){
    return osoba;
}       //     -poziv forme za unos podataka

function sacuvajULocalStorage  (osoba){

} //  -cuvanje kontakta u local storage

function citanjeIzLOcalStorage(ime){
    return osoba;
}  //  -poziva podatke koji su upisani u local storage

        let kontakti=[
            [skype,"pera55"],
            [email,"pera@gm.com"]
        ];
        let osoba={
            ime:"Pera",
            kontakti:kontakti
        };

function izmenaKontakta  (ime,kontakti){

}        // -poziva ispisKontakta,unesiPodatke,sacuvajULocalStorage


function sortiranje  (){

}   //
         
function brisanjeIzLocalStorage(){

}  // -brisanje kontakta iz local storaga

// #########################  metodi interfejsa  #######################
function proveriObaveznaPolja (){
    
}  //  -provera da li su popunjena obavezna polja

function prikazKontakta  (){
    // prikaz kontakta za pregled
}        // -prikazuje jedan kontakt detaljno
function prikazSvihKontakata(){
    
}    // -tabela u kojoj su prikazana samo imena
function ispisKontaktaZaIzmene (){

    }          // -ispisuje podatke iz LS u formu


function isprazniFormu(){
    
    }          //  -prazni formu kad je kontakt sacuvan


function brisanjeIzTabele  (){
    
    }      // -brisanje kontakta iz tabele 
function proveriObaveznaPolja (){
        
}  //  -provera da li su popunjena obavezna polja

}());