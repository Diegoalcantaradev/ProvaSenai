const url = 'http://localhost:3000/'
const formVeiculos = document.getElementById('buscarveiculo');
const Veiculo = document.getElementById('Veiculos')
formVeiculos.addEventListener('submit',function(event){
    event.preventDefault();

    let Veiculos = event.target.querySelector('#idVeiculo');

    fetch(`${url}/veiculos/${Veiculos.value}`).then(function(response){
        response.json
    }).then(function(responseBody){
        Veiculos.innerHTML = `${responseBody.id} ${responseBody.placa} ${responseBody.capacidade}`
    });
})