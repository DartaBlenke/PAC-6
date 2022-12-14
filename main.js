
// Requisicoes POST
const biosaida = "http://localhost:8080/api/v1/biosaida";
const bioEntrada = "http://localhost:8080/api/v1/bioEntrada";
const individuo = "http://localhost:8080/api/v1/individuo";
const sensorBiometrico = "http://localhost:8080/api/v1/sensorBiometrico";
const comodo = "http://localhost:8080/api/v1/comodo";



function getAllBioEntrada() {
    axios.get(bioEntrada)
    .then(response => {
        console.log(response)
    })
    .catch(error => console.log(error));
}

function getAllBioSaida() {
    axios.get(biosaida)
    .then(response => {
        console.log(response)
    })
    .catch(error => console.log(error));
}

function postBioSaida(saidaDTO) {
    axios.post(biosaida, {
        id: saidaDTO.id, 
        individuoid: saidaDTO.individuoid, 
        sensorBiometricoId: saidaDTO.sensorBiometricoId,
        dataHora: saidaDTO.dataHora
    })
    .then(response => {
        console.log(response)
    })
    .catch(error => console.log(error))
}


function postBioEntrada(entradaDTO) {
    axios.post(bioEntrada, 
        {id: entradaDTO.id, 
        individuoid: entradaDTO.individuoid, 
        sensorBiometricoId: entradaDTO.sensorBiometricoId,
        dataHora: entradaDTO.dataHora
    })
    .then(response => {
        console.log(response)
    })
    .catch(error => console.log(error))
}

function postIndividuo(individuoDTO) {
    axios.post(individuo, 
        {
        id: individuoDTO.id, 
        nome: individuoDTO.nome, 
        cpf: individuoDTO.cpf,
        biometria: individuoDTO.biometria
    })
    .then(response => {
        console.log(response)
    })
    .catch(error => console.log(error))
}

function postSensorBiometrico(sensorDTO) {
    axios.post(sensorBiometrico, 
        {
        codigo: sensorDTO.codigo, 
        status: sensorDTO.status,
        comodo_id: sensorDTO.comodo_id
    })
    .then(response => {
        console.log(response)
    })
    .catch(error => console.log(error))
}

function postComodo(comodoDTO) {
    axios.post(comodo, 
        {id: comodoDTO.id, 
        nome: comodoDTO.nome
    })
    .then(response => {
        console.log(response)
    })
    .catch(error => console.log(error))
}