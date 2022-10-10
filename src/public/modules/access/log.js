import { homePage } from "../home/home.js";

async function sign(_user) {
    try {
        const response = await fetch(`http://localhost:8082/login`, {
            method: "POST",
            body: JSON.stringify(_user),
            headers: { "Content-type": "application/json; charset=UTF-8" },
        });

        // headers: { "Content-type": "application/json; charset=UTF-8", "Authorization": `Basic ${token}`},

        const data = await response.json();

        if (!response.ok) throw new Error(data.message);

        document.getElementById("status").innerHTML = "";
        //----------------------------------------
        localStorage.setItem("auth", data.token);
        //----------------------------------------
        document.getElementById("body").innerHTML = homePage();
    } catch (error) {
        document.getElementById("status").innerHTML = error;
    }
}

function acessLogin() {
    const user = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    };

    if (user.email !== "" && user.password !== "") {
        sign(user);
    } else {
        document.getElementById("status").innerHTML = "Preencha todos os campos";
        document.getElementById("email").focus();
    }
}

export { acessLogin };