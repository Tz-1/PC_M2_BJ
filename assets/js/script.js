$(document).ready(function () {
    $('#loginForm').on('submit', function(e){
        e.preventDefault();
        // Ocultar el login y mostrar el portafolio
        $('#loginContainer').fadeOut(500, function(){
            $('#portfolioContent').fadeIn(500);
            $('body').css('background-color', '#fff');
        });
    });

    function fillProgressBar(barId, targetValue) {
        var progressBar = document.getElementById(barId);
        var currentValue = 0;
        var increment = 1;

    var interval = setInterval(function () {
        if (currentValue < targetValue) {
            progressBar.value = currentValue;
            currentValue += increment;
        } else {
            progressBar.value = targetValue;
            clearInterval(interval);
        }
      }, 20); // Velocidad de la animacion
    }

    // Ve si el usuario esta viendo
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    //Valores de las barras
    function handleScroll() {
        var htmlProgressBar = document.getElementById("html-progress");
        var jsProgressBar = document.getElementById("js-progress");
        var sqlProgressBar = document.getElementById("sql-progress");
        var pyProgressBar = document.getElementById("py-progress");
        var njsProgressBar = document.getElementById("n.js-progress");
        var excProgressBar = document.getElementById("exc-progress");

    if (isElementInViewport(htmlProgressBar) && htmlProgressBar.value === 0) {
        fillProgressBar("html-progress", 95);
    }

    if (isElementInViewport(jsProgressBar) && jsProgressBar.value === 0) {
        fillProgressBar("js-progress", 70);
    }

    if (isElementInViewport(sqlProgressBar) && sqlProgressBar.value === 0) {
        fillProgressBar("sql-progress", 85);
    }

    if (isElementInViewport(pyProgressBar) && pyProgressBar.value === 0) {
        fillProgressBar("py-progress", 80);
    }

    if (isElementInViewport(njsProgressBar) && njsProgressBar.value === 0) {
        fillProgressBar("n.js-progress", 20);
    }

    if (isElementInViewport(excProgressBar) && excProgressBar.value === 0) {
        fillProgressBar("exc-progress", 92);
    }
    }

    window.addEventListener("scroll", handleScroll);

    handleScroll();

$("#formSend").click(function (event) {
    // Previene el envío del formulario
    event.preventDefault();

    // Obtiene los valores de los campos del formulario
    var name = $("#name").val().trim();
    var email = $("#email").val().trim();
    var message = $("#message").val().trim();

    // Verifica si todos los campos están llenos
    if (name !== "" && email !== "" && message !== "") {
        alert("Muchas gracias por contactarse conmigo.");
        // Aquí puedes agregar el código para enviar el formulario si es necesario
        // Por ejemplo: $("#contactForm").submit();
    } else {
        alert("Por favor, complete todos los campos antes de enviar.");
    }
});

});
