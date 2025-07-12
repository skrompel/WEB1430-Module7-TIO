let loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', event => {
    event.preventDefault();

    let username = document.getElementById('username');
    let password = document.getElementById('password');

    if (username.value == "" || password.value == "") {
        alert("Ensure you input a value in both fields!");
    } else {
        alert("This form has been successfully submitted!");

        console.log(`This form has a username of ${username.value} and a password of ${password.value}`);
    }

    username.value = "";
    password.value = "";
});
