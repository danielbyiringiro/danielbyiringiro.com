document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        let name = document.getElementById('name').value;
        let number = document.getElementById('number').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;
        sendMail(name, number, email, message);
    });
});

function sendMail(name, number, email, message) {
    let subject = `Portfolio: Mail From ${name}`;
    let recipientEmail = 'daniel.byiringiro@ashesi.edu.gh';
    var body = message + "\n" + `Phone Number: ${number}` + "\n" + `Email: ${email}`;
    console.log(`Subject: ${subject} \n Email: ${recipientEmail}\n Body: ${body}`);
    document.getElementById('name').value = '';
    document.getElementById('number').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
}
