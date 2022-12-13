const url = "http://localhost:8080/api/v1/biosaida"

function getUser() {
    axios.get(url)
    .then(response => {
        console.log(response)
    })
    .catch(error => console.log(error));
}

//getUser()

function postUser() {
    axios.post(url, {id: 'a3e37de6-cd44-4712-b087-d76931563e73', 
    individuoid: 'a3e37de6-cd44-4712-b087-d76931563e73', 
    sensorBiometricoId: 'a3e37de6-cd44-4712-b087-d76931563e73',
    dataHora: '2022-12-13T19:57:09.009'})
    .then(response => {
        console.log(response)
    })
    .catch(error => console.log(error))
}

postUser()

