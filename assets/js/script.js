$(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $('#enviarCorreo').click(function (){
        alert("El correo fue enviado correctamente...")
    });

    $('body').on('dblclick','h4',function (e) {
        e.preventDefault();
        $(this).css("color",'red');
    });

    $('.card-title').click(function(){
        $('.card-text').toggle();
    });
});