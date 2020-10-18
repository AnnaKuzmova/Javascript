// Do the animation for the modal/add Client
let showModal = document.querySelector('#open-modal-button');
let addClientModal =document.querySelector('#modal-addClient');

showModal.addEventListener('click', function(){
    addClientModal.style.display = 'block';
    addClientModal.style.transform = 'scale(1)';
});

//Add client and close the clientModal 
class Client {

    constructor(name, weight, clientPayment, clientVisits){
        this.clientName = name;
        this.clientWeight = weight;
        this.clientTotalPayment = clientPayment;
        this.clientTotalVisits = clientVisits;
    }
}

let addClientButton = document.querySelector('#modal-add-button');
let arrayOfClients = [];

addClientButton.addEventListener('click', function(){
    //Get and add the data to the Client class
    let name = document.querySelector('#name');
    let clientWeight = document.querySelector('#weight');
    let clientTotalPayment = document.querySelector('#payment');
    let clientTotalVisits = document.querySelector('#visits');
    let client = new Client(name.value, clientWeight.value, clientTotalPayment.value, clientTotalVisits.value);
    arrayOfClients.push(client);

    //Clear the inputs
    name.value = ' ';
    clientWeight.value = ' ';
    clientTotalPayment.value = ' ';
    clientTotalVisits.value = ' ';

    //Close the modal 
    addClientModal.style.display = 'none';
    addClientModal.style.transform = 'scale(0)';
});

//Filter the clients data and display it: 
let filterButton = document.querySelector('#filter-clients-button');

filterButton.addEventListener('click', function(){
   // All clients 
   let allClientsHolder = document.querySelector('.all-clients');
   allClientsHolder.innerHTML = ' ';
   arrayOfClients.forEach(client => {
       let text = document.createTextNode(`${client.clientName} - ${client.clientWeight} - ${parseFloat(client.clientTotalPayment).toFixed(2)}lv `);
       let li = document.createElement('li');
       li.appendChild(text);
       allClientsHolder.appendChild(li);
    });
       //Clients with made payment more than 35.00 and visits more than 10
        let filterdPaymentVisit = document.querySelector('.visits-payment-filter');
        filterdPaymentVisit.innerHTML = ' ';
        let filteredPaymentArray = arrayOfClients
        .filter(client =>
             {
               return  parseFloat(client.clientTotalPayment).toFixed(2) > 35.50 && parseInt(client.clientTotalVisits) > 10
            })
        .forEach(client => {
            let text = document.createTextNode(`${client.clientName} - ${client.clientWeight} - ${parseFloat(client.clientTotalPayment).toFixed(2)}lv `);
            let li = document.createElement('li');
            li.appendChild(text);
            filterdPaymentVisit.appendChild(li);
        });

        //Clients with weight between 60kg and 90kg
        let weightFilterHolder = document.querySelector('.weight-filter');
        weightFilterHolder.innerHTML = ' ';
        let filteredWeight = arrayOfClients.filter(client => {
            return parseInt(client.clientWeight) >= 60 && parseFloat(client.clientWeight) <= 90;
        }).forEach(client => {
            let text = document.createTextNode(`${client.clientName} - ${client.clientWeight} - ${parseFloat(client.clientTotalPayment).toFixed(2)}lv `);
            let li = document.createElement('li');
            li.appendChild(text);
            weightFilterHolder.appendChild(li);
        });
    
});
