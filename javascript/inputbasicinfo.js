function loadpage1 () {
    document.querySelector(".paginteira").innerHTML = `<h1>Comece pelo começo</h1>
    <div class="firstform">
        <form>
            <input type="text" placeholder="Título do seu quizz">
            <input type="text" placeholder="URL da imagem do seu quizz">
            <input type="text" placeholder="Quantidade de perguntas do quizz">
            <input type="text" placeholder="Quantidade de níveis do quizz">
        </form>
    </div>
    <button onClick="getInformation()">Prosseguir para criar perguntas</button>`;
}
 loadpage1();

 function getInformation() {
    let entries = document.querySelectorAll('input').value;
    validateData(entries);
 }

 function validateData(data) {

 }

 function notValid() {
    alert("Dados inválidos. Por favor preencha o formulário novamente.");
 }