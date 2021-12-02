let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".cta")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];

let cerrar1 = document.querySelectorAll(".close1")[0];
let abrir1 = document.querySelectorAll(".cta1")[0];
let modal1 = document.querySelectorAll(".modal1")[0];
let modalC1 = document.querySelectorAll(".modal1-container")[0];

let cerrar2 = document.querySelectorAll(".close2")[0];
let abrir2 = document.querySelectorAll(".cta2")[0];
let modal2 = document.querySelectorAll(".modal2")[0];
let modalC2 = document.querySelectorAll(".modal2-container")[0];

abrir.addEventListener("click", function(e){
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");
});

cerrar.addEventListener("click", function(){
    modal.classList.toggle("modal-close");
    modalC.style.opacity = "0";
    modalC.style.visibility = "hidden";
    setTimeout(function(){

    }, 700)
})

window.addEventListener("click", function(e){
    console.log(e.target)
    if(e.target == modalC){
        modal.classList.toggle("modal-close");

        this.setTimeout(function(){
            modalC.style.opacity = "0";
            modalC.style.visibility = "hidden";  
        }, 700)
    }
})

abrir1.addEventListener("click", function(e){
    e.preventDefault();
    modalC1.style.opacity = "1";
    modalC1.style.visibility = "visible";
    modal1.classList.toggle("modal1-close");
});

cerrar1.addEventListener("click", function(){
    modal1.classList.toggle("modal1-close");
    modalC1.style.opacity = "0";
    modalC1.style.visibility = "hidden";
    setTimeout(function(){

    }, 700)
})

window.addEventListener("click", function(e){
    console.log(e.target)
    if(e.target == modalC1){
        modal1.classList.toggle("modal1-close");

        this.setTimeout(function(){
            modalC1.style.opacity = "0";
            modalC1.style.visibility = "hidden";  
        }, 700)
    }
})

abrir2.addEventListener("click", function(e){
    e.preventDefault();
    modalC2.style.opacity = "1";
    modalC2.style.visibility = "visible";
    modal2.classList.toggle("modal2-close");
});

cerrar2.addEventListener("click", function(){
    modal2.classList.toggle("modal2-close");
    modalC2.style.opacity = "0";
    modalC2.style.visibility = "hidden";
    setTimeout(function(){

    }, 700)
})

window.addEventListener("click", function(e){
    console.log(e.target)
    if(e.target == modalC2){
        modal.classList.toggle("modal2-close");

        this.setTimeout(function(){
            modalC2.style.opacity = "0";
            modalC2.style.visibility = "hidden";  
        }, 700)
    }
})