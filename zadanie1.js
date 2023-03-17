const tajhaslo = document.querySelector("tajhaslo");
console.log(tajhaslo)
function oknoAlert(){
    alert("Ptaki latają kluczem");
}
tajhaslo.addEventListener('click',()=>{oknoAlert();});