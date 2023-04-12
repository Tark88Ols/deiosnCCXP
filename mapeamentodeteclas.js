
function checarTeclado() {

    document.addEventListener('keydown', (event) => {

        var name = event.key;
        var code = event.code;

        alert(`Tecla Precionada ${name} /r/n Codigo da tecla ${code}`);


    }, false);
}