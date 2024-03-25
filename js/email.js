(function () {
    emailjs.init("b8gtW2FDM-CKFhpIS");
    new WOW().init();

    function sendEmail() {
        emailjs.send("service_y7k4lry", "template_czbiblj", {
            name: $('#name').val(),
            email: $('#InputEmail').val(),
            message: $('#your_message').val(),
        }).then(function (message) {
            $('#name').val(''),
                $('#InputEmail').val(''),
                $('#your_message').val(''),
                alert("mail sent successfully");
            $('#sendEmail').prop('disabled', false)
        });
    }
    $('#form').submit(function (e) {
        e.preventDefault();
        $('#sendEmail').prop('disabled', true)
        sendEmail();
    })
})();