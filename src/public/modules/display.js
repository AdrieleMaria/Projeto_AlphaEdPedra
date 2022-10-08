async function displayReq() {

    fetch(`http://localhost:8082/display`, {
        method: "GET",
        // body: JSON.stringify(_user),
        //enviar o token para autorização
        headers: { "Content-type": "application/json; charset=UTF-8" },
    })
        .then((res) => res.json())
        .then((dados) => {
            console.log(dados);
            // if (dados === "Login sucedido") {
            //     body.innerHTML = homePage();
            // }
        })
        .catch((erro) => {
            console.log(erro);
            document.getElementById("status").innerHTML = `${erro}`;
        });

}

export function display() {


    //montar a pagina de display a partir dos dados obtidos pela displayReq()








}