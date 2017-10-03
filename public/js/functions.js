$('document').ready(function() {
    // ---- ENTER NEW PASSWORDS ----
    var service = $('#service');
    var email = $('#email');
    var password = $('#password');
    var additional = $('#additional');

    $('#submitPw').on('click', function(event) {
        event.preventDefault();

        var newPw = {
            service: service.val().trim(),
            email: email.val().trim(),
            password: password.val().trim(),
            additional: additional.val().trim()
        }
        submitPw(newPw);

        service.val('');
        email.val('');
        password.val('');
        additional.val('');
    });

    function submitPw(Pw) {
        $.post('/api/pw', Pw, function(data) {
            console.log(data);
        });
    }

    // ---- FIND PASSWORDS ----
    $('#findSubmit').on('click', function(event) {
        event.preventDefault();
        var serviceSearched = $('#findService').val().trim();
        
        $.get('/api/pw/service/' + serviceSearched, function(data) {
            console.log(data);
            renderService(data);
        });
        $('#findService').val('');
    });


    function renderService(data) {
        if (data.length !== 0) {
            $('.info').empty();
            $('.info').toggle(400);
            $('.updatebtn').show();
            for (var i = 0; i < data.length; i++) {
                var div = $('<div>');
                div.append('<h3>Details</h3>')
                div.append('<p><strong>Service:</strong> ' + data[i].service + '</p>');
                div.append('<p><strong>Email:</strong>  ' + data[i].email + '</p>');
                div.append('<p><strong>Password:</strong>  ' + data[i].password + '</p>');
                div.append('<p><strong>Additional Details:</strong>  ' + data[i].additional + '</p>');
                $('.info').append(div);
            }
        } 
    };

    // ---- UPDATE PASSWORDS ----
    // $('.edit').on('click', function(event) {
    //     event.preventDefault();
    //     updatePw(Pw)
    // });
    
    // function updatePw(Pw) {
    //     $.ajax({
    //         method: 'PUT',
    //         url: '/api/pw',
    //         data: Pw
    //     }).done(function() {
    //         window.location.href = '/';
    //     });
    // }
});