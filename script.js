document.addEventListener("DOMContentLoaded", () => {
    const botoes = document.querySelectorAll(".btn");

    botoes.forEach(botao => {
        botao.addEventListener("click", (e) => {
            e.preventDefault();
            const telefone = "5492607668";
            const mensagem = encodeURIComponent("Valdecir Souza agradece seu contato! Em que posso lhe ajudar?");
            const url = `https://wa.me/${telefone}?text=${mensagem}`;
            window.location.href = url;
        });
    });
});
