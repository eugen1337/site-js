window.onload = () => {
    loadStartForm();
};


async function loadStartForm() {

    let form = document.createElement('div');

    form.className = "login-box";

    loginForm = `
    <h2>Enter your name</h2>
    <form>
        <div class="user-box">
        <input type="text" name="" required="">
        <label>Name</label>
        </div>
    </form>
    `

    form.insertAdjacentHTML("afterbegin", loginForm)

    /*
    <div class="login-box">
    <h2>Login</h2>
    <form>
        <div class="user-box">
        <input type="text" name="" required="">
        <label>Username</label>
        </div>
    </form>
    </div>
    */ 

    document.body.appendChild(form)

}

