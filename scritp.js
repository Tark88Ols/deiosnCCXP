const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const lancamento = "1 dec 2023"

function countDown() {
    const dataLancamento = new Date(lancamento);
    const hoje = new Date();

    const segundosTotal = (dataLancamento - hoje) / 1000;

    const finalDias = Math.floor(segundosTotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segundosTotal / 60 / 60) % 24;
    const finalMinutos = Math.floor(segundosTotal / 60) % 60;
    const finalSegundos = Math.floor(segundosTotal) % 60;

    dia.innerHTML = formatoTempo(finalDias) + 'D';
    hora.innerHTML = formatoTempo(finalHoras) + 'H';
    minuto.innerHTML = formatoTempo(finalMinutos) + 'M';
    segundo.innerHTML = formatoTempo(finalSegundos) + 'S';
}

function formatoTempo(tempo) {
    return tempo < 10 ? '0' + tempo : tempo;
}


countDown();
setInterval(countDown, 1000)
/* Função zoom nos cards*/

function cardZoom(selector) {
    var element = document.querySelector(selector);
    element.classList.toggle("cards-zoom");

}

/* Quinta Feira*/
const openModalButton = document.querySelector("#bannerQuinta");
const clouseModalButton = document.querySelector(".closeModal");
const modal = document.querySelector(".modal");
const fade = document.querySelector(".fade");

const toggleModal = () => {
    [modal, fade].forEach((el) => el.classList.toggle("hide"));
};


[openModalButton, clouseModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});

/* Sexta Feira*/
const openModalButtonsexta = document.querySelector("#bannerSexta");
const clouseModalButtonsexta = document.querySelector(".closeModalSexta");
const modalSexta = document.querySelector(".modalSexta");
const fadeSexta = document.querySelector(".fadeSexta");

const toggleModalsexta = () => {
    [modalSexta, fadeSexta].forEach((el) => el.classList.toggle("hideSext"));
};


[openModalButtonsexta, clouseModalButtonsexta, fadeSexta].forEach((el) => {
    el.addEventListener("click", () => toggleModalsexta());
});



/* Sabado - Reserva? */

const openModalButtonsab = document.querySelector("#bannerSabado");
const clouseModalButtonsab = document.querySelector(".closeModalSab");
const modalSab = document.querySelector(".modalSab");
const fadeSab = document.querySelector(".fadeSab");

const toggleModalsab = () => {
    [modalSab, fadeSab].forEach((el) => el.classList.toggle("hideSab"));
};


[openModalButtonsab, clouseModalButtonsab, fadeSab].forEach((el) => {
    el.addEventListener("click", () => toggleModalsab());
});
/* Domingo */

const openModalButtonDom = document.querySelector("#bannerDomingo");
const clouseModalButtonDom = document.querySelector(".closeModalDom");
const modalDom = document.querySelector(".modalDom");
const fadeDom = document.querySelector(".fadeDom");

const toggleModalDom = () => {
    [modalDom, fadeDom].forEach((el) => el.classList.toggle("hideDom"));
};


[openModalButtonDom, clouseModalButtonDom, fadeDom].forEach((el) => {
    el.addEventListener("click", () => toggleModalDom());
});

//Verificar teclas
// function checarTeclado() {
//     document.addEventListener('keydown', (event) => {
//         var name = event.key;
//         var code = event.code;
//         alert(`Tecla Precionada ${name} \r\n Codigo da tecla:  ${code}`);
//     }, false);
// }
// checarTeclado()