import { homePage } from "../home/home.js";
import { inventory } from "../home/inventories.js";

async function register(_user) {

    try {
        //const response = await fetch(`https://108.61.89.179:443/register`, {
        const response = await fetch(`https://alphaedpedra.ddns.net/register`, {
            method: "POST",
            body: JSON.stringify(_user),
            headers: { "Content-type": "application/json; charset=UTF-8" },
        });
        // .then((res) => res.json())
        // .then((dados) => {
        //     console.log(dados);
        //     if (dados.message === "Login sucedido") {

        //         body.innerHTML = homePage();
        //     } else {
        //         if (dados.message === "Usuário existente") {
        //             document.getElementById("status").innerHTML = `Conta já existente`;
        //         }
        //     }
        // })
        // .catch((erro) => {
        //     console.log(erro);
        //     document.getElementById("status").innerHTML = `${erro}`;
        // });
        const data = await response.json();

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

async function acessCadastro() {

    const user = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }

    if (user.name !== "" && user.phone !== "" && user.email !== "" && user.password !== "") {

        const passwordValid = document.getElementById("password2").value;
        if (user.password !== passwordValid) {
            document.getElementById("password").value = "";
            document.getElementById("password2").value = "";
            document.getElementById("status").innerHTML = `Preencha com a mesma senha`;
            document.getElementById("password").focus();
        } else {

            const dataacess = await register(user);
            // console.log("dataacess", dataacess);

        }

    } else {
        document.getElementById("status").innerHTML = `Preencha todos os campos`;
    }

}

export { acessCadastro }