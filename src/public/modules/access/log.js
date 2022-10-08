import { homePage } from "../home/home.js";


async function log(_user) {

    fetch(`http://localhost:8082/login`, {
        method: "POST",
        body: JSON.stringify(_user),
        headers: { "Content-type": "application/json; charset=UTF-8" },
    })
        .then((res) => {
            if (res.status === 200 || res.status === 401) {
                const dados = res.json();
                return dados;
            }
        })
        .then((dados) => {
            console.log(dados);
            if (dados.message === "Login sucedido") {
                // window.location.href = "./home.html";
                // document.location.reload(true);
                body.innerHTML = homePage();
                // window.onload = account();

            } else if (dados.message === "Email não encontrado") {
                document.getElementById("status").innerHTML = `Conta inexistente`;
                document.getElementById("email").focus();
            } else if (dados.message === "Senha incorreta, acesso negado") {
                document.getElementById("status").innerHTML = `Senha incorreta`;
                document.getElementById("password").focus();
            } else {
                document.getElementById("status").innerHTML = `Erro inexperado...`;
            }
        })
        .catch((erro) => {
            console.log(erro);
            document.getElementById("status").textContent = `Erro inexperado...${erro}`
        });
}

async function acessLogin() {

    const user = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }

    if (user.email !== "" && user.password !== "") {

        const dataacess = await log(user);

        console.log("dataacess", dataacess);
        // if (!dataacess) {
        //     inventario(dataacess);
        // }

    } else {
        document.getElementById("status").innerHTML = `Preencha todos os campos`;
        document.getElementById("email").focus();
    }

}

export { acessLogin }