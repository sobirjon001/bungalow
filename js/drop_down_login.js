const login = () => {
    const loginbtn = document.querySelector('loginbtn');
    const droplogin = document.querySelector('drop-down-login');

    loginbtn.addEventListener('click',() => {
        droplogin.classList.toggle('drop-down-login-active')
    })
}



login();