const tak = document.querySelector('#jade');
console.log(tak);
function oknoPrompt(){
    var sufit= prompt("Wpisz kolor sufitu: ");
    if(sufit){
        alert("Twoje niebo ma kolor " +sufit);
    }
    else{
        alert("Anulowałeś akcję, a okno prompt zwróciło " +sufit);
    }
}
tak.addEventListener('click',()=>{oknoPrompt();});