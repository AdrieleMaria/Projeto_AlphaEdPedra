import { homePage } from "../home/home.js";

async function register(_user) {

    fetch(`http://localhost:8082/register`, {
        method: "POST",
        body: JSON.stringify(_user),
        headers: { "Content-type": "application/json; charset=UTF-8" },
    })
        .then((res) => res.json())
        .then((dados) => {
            console.log(dados);
            if (dados.message === "Login sucedido") {
                body.innerHTML = homePage();
            } else {
                if (dados.message === "Usuário existente") {
                    document.getElementById("status").innerHTML = `Conta já existente`;
                }
            }
        })
        .catch((erro) => {
            console.log(erro);
            document.getElementById("status").innerHTML = `${erro}`;
        });

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