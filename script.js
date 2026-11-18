const envio = document. getElementById('envio');

envio.addEventListener("click", function(e){
    e.preventDefault();
    let nome = document.getElementById('nome');
    let tel = document.getElementById('tel');
    
    const item = document.getElementById('item');
    item.innerHTML += `<tr>
                        <td>${nome.value}</td>
                        <td>${tel.value}</td>
                    </tr>`;
});