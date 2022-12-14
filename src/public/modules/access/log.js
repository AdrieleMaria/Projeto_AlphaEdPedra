import { homePage } from "../home/home.js";
import { inventory } from "../home/inventories.js";

async function sign(_user) {
    try {
        //const response = await fetch(`https://108.61.89.179:443/login`, {
        const response = await fetch(`https://alphaedpedra.ddns.net/login`, {
            method: "POST",
            body: JSON.stringify(_user),
            headers: { "Content-type": "application/json; charset=UTF-8" },
        });

        // headers: { "Content-type": "application/json; charset=UTF-8", "Authorization": `Basic ${token}`},

        const data = await response.json();
        console.log(data);

        if (!response.ok) throw new Error(data.message);

        document.getElementById("status").innerHTML = "";
        //----------------------------------------
        localStorage.setItem("auth", data.token);
        //----------------------------------------
        document.getElementById("body").innerHTML = homePage(data);
        inventory();
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