function verifyInput(){
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let cellphone = document.getElementById("cellphone").value;
    let  picture = document.getElementById("picture").value;
    let birthdate = document.getElementById("birthdate").value;
    let email = document.getElementById("email").value;
    let cep = document.getElementById("cep").value;
    let address = document.getElementById("address").value;
    let instagram = document.getElementById("instagram").value;
    let git = document.getElementById("git").value;

    if (name == "" || phone == "" || cellphone == "" || picture == "" || birthdate == "" || email == "" || cep == "" || address == "" || instagram == "" || git == "") {
        console.log("Os dados estao vazios");
        return true;
    } else {
        console.log("Os dados nao estao em branco");
        return false;
    }
}

function messages(message, type) {
    let messageDiv = document.getElementById("message");
    messageDiv.innerHTML = "";

    let tela = `
    <p class='${type}'>${message}</p>
    `

    messageDiv.innerHTML += tela;

    setTimeout (function() {
        messageDiv.innerHTML = "";
    }, 4000);
}

class Contact{
    constructor(id, name, phone, cellphone, picture, birthdate, email, cep, address, instagram, git, age, sign){
        this.id= id;
        this.name = name;
        this.phone = phone;
        this.cellphone = cellphone;
        this.picture = picture;
        this.birthdate = birthdate;
        this.email = email;
        this.cep = cep;
        this.address = address;
        this.instagram = instagram;
        this.git = git;
        this.age = this.calculateAge();
        this.sign = this.getZodiacSign();
 }

    calculateAge(){
        const today = new Date();
        const birthDate = new Date(this.birthdate);
        let ages = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        ages--;
        }
        return ages;
        }

     getZodiacSign() {
            let birthdate = new Date(this.birthdate);
            let day = birthdate.getDate();
            let month = birthdate.getMonth() + 1;
        
            if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
                return "Capricórnio ♑";
            } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
                return "Aquário ♒";
            } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
                return "Peixes ♓";
            } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
                return "Áries ♈";
            } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
                return "Touro ♉";
            } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
                return "Gêmeos ♊";
            } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
                return "Câncer ♋";
            } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
                return "Leão ♌";
            } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
                return "Virgem ♍";
            } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
                return "Libra ♎";
            } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
                return "Escorpião ♏";
            } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
                return "Sagitário ♐";
            }
    
    }
}

    function addContact(){
        let name = document.getElementById("name").value;
        let phone = document.getElementById("phone").value;
        let cellphone = document.getElementById("cellphone").value;
        let  picture = document.getElementById("picture").value;
        let birthdate = document.getElementById("birthdate").value;
        let email = document.getElementById("email").value;
        let cep = document.getElementById("cep").value;
        let address = document.getElementById("address").value;
        let instagram = document.getElementById("instagram").value;
        let git = document.getElementById("git").value;

        const id = this.nextContactId ++;
        const contact = new Contact(id, name, phone, cellphone, picture, birthdate, email, cep, address, instagram, git)
        console.log(contact);

        libraryContacts.add(contact)

        renderContent();
 }

 class ContacList {
    constructor(){
        this.contactListArray = [];
        this.nextContactId = 0;
    }
    add(parameter){
        if (verifyInput()){
            messages("Preencha todos os campos!", "error");
        } else{
            this.contactListArray.push(parameter);
            clearInputs();
            messages("Contato adcionado!", "success")
        }
    }
 }

 const libraryContacts = new ContacList();

 function formatedCellphone(cellphone) {
    console.log("Passou pela funcao formatedCellphone()");

    let cellphoneArray = cellphone.split("");
    let cellphoneFormated = "(" + cellphoneArray[0] + cellphoneArray[1] + ")"
        + " " + cellphoneArray[2] + cellphoneArray[3] + cellphoneArray[4]
        + cellphoneArray[5] + cellphoneArray[6] + "-"
        + cellphoneArray[7] + cellphoneArray[8]
        + cellphoneArray[9] + cellphoneArray[10];
    return cellphoneFormated;
}

 function clearInputs(){
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("cellphone").value = "";
    document.getElementById("picture").value = "";
    document.getElementById("birthdate").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cep").value = "";
    document.getElementById("address").value = "";
    document.getElementById("instagram").value = "";
    document.getElementById("git").value = "";
 }

 function formatedCellphone(cellphone) {
    console.log("Passou pela funcao formatedCellphone()");

    let cellphoneArray = cellphone.split("");
    let cellphoneFormated = "(" + cellphoneArray[0] + cellphoneArray[1] + ")"
        + " " + cellphoneArray[2] + cellphoneArray[3] + cellphoneArray[4]
        + cellphoneArray[5] + cellphoneArray[6] + "-"
        + cellphoneArray[7] + cellphoneArray[8]
        + cellphoneArray[9] + cellphoneArray[10];
    return cellphoneFormated;
}

 function renderContent(){
    const htmlList = document.getElementById("list");
    htmlList.innerHTML = '';
    
    let array = libraryContacts.contactListArray;

    array.forEach(contact => {
        const contactDiv = `
    <div id='contactExibe' onclick="renderAll()">
        <p><strong>${contact.name}</strong></p>
        <p>Telefone Fixo:${formatedCellphone(contact.phone)}</p>
        <p>Telefone Celular:${formatedCellphone(contact.cellphone)}</p>
        <img src="${contact.picture}">
    </div>
    `
    htmlList.innerHTML += contactDiv;

    });
 }

 function renderAll(){
    const htmlLists = document.getElementById("list2");
    htmlLists.innerHTML = '';
    
    let arrays = libraryContacts.contactListArray;

    arrays.forEach(contact => {
        const contactDiv = `
    <div id="contactExibe2">
        <img src="${contact.picture}">
        <p><strong>${contact.name}</strong></p>
        <p>${contact.id}</p>
        <p>Telefone Fixo:${formatedCellphone(contact.phone)}</p>
        <p>Telefone Celular:${formatedCellphone(contact.cellphone)}</p>
        <p>Data de Nascimento:${contact.birthdate}</p>
        <p>Idade:${contact.calculateAge()}</p>
        <p>Signo:${contact.getZodiacSign()}</p>
        <p>Email:${contact.email}</p>
        <p>CEP:${contact.cep}</p>
        <p>Cidade:${contact.address}</p>
        <p>Instagram:${contact.instagram}</p>
        <p>Github:${contact.git}</p>
    </div>
    `
    htmlLists.innerHTML += contactDiv;

    });
 }

 function exibContent(){
    document.getElementById("list2").classList.remove("hidden");
    document.getElementById("contactExibe2").classList.add("hidden");
 }