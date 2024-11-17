// wrapper dei contatti
let contactsWrapper= document.querySelector('#contactsWrapper')
let showContactsBtn = document.querySelector('#showContactsBtn')
let addContactsBtn = document.querySelector('#addContactsBtn')
let removeContactsBtn = document.querySelector('#removeContactsBtn')
// bottoni


// inputs
let nameInput = document.querySelector('#nameInput');
let numberInput = document.querySelector('#numberInput');



// variabile d'appoggio




let check = false

const rubrica = {

    lista_contatti : [ 

        {contac_name : 'Yoda' , phone_number : 3333333},
        {contac_name : 'Anakin' , phone_number : 34444444},
        {contac_name : 'Obi-Wan' , phone_number : 3555555}

    ],

    showContacts: function () {
contactsWrapper.innerHTML = '';
        this.lista_contatti.forEach((contatto) => {

            let div = document.createElement('div')
            div.classList.add('card-custom')
            div.innerHTML = `
        <p class="lead">${contatto.contac_name}</p>
        <p>${contatto.phone_number}</p>
        <i class="fa-solid fa-trash-can icon"></i>`
        contactsWrapper.appendChild(div);

        
        
        
    });
    
    let icon = document.querySelectorAll('.icon')

    icon.forEach((icona , i) => { 
        icona.addEventListener('click' , ( ) => {
          this.lista_contatti.splice(i,1)
          this.showContacts()
            
        })
        
    });
    
    },
    
    addContact : function (newName , newNumber) {

     if (newName && newNumber) { 

        this.lista_contatti.push({contac_name : newName , phone_number : newNumber} )

    showContactsBtn.innerHTML = 'Nascondi contatti'

    check= true
            
        } else { alert('devi inserire sia un nome che un numero')};
},



removeContacts : function (removedName) {

    let names = this.lista_contatti.map( (contatto) => contatto.contac_name);

let index = names.indexOf(removedName)

if(index >= 0) { 
    this.lista_contatti.splice(index,1)
    this.showContacts();

} 



    
},



};


addContactsBtn.addEventListener('click', () => {

    rubrica.addContact( nameInput.value, numberInput.value);
    rubrica.showContacts();

    nameInput.value = ''
    numberInput.value = ''
    
    
});




showContactsBtn.addEventListener('click' , () => {
    
    if (check == false) {
        
        rubrica.showContacts();
        check = true
        showContactsBtn.innerHTML = 'Nascondi contatti'
        
        
    } else { 

        contactsWrapper.innerHTML = '';
check = false
showContactsBtn.innerHTML = 'Mostra contatti'

}

});

removeContactsBtn.addEventListener('click' ,() => {

    rubrica.removeContacts(nameInput.value); 
    rubrica.showContacts();
    if (check == false) {
        
        rubrica.showContacts();
        check = true
        showContactsBtn.innerHTML = 'Nascondi contatti'
        
        
    } 


 })

 icon.addEventListener('click' ,() => {



 } )




