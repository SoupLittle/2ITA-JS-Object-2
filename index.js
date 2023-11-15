var bold ="font-weight: bold"

var ansatt = [

    {
    
    ansatt_id: 1,
    
    forNavn: "Jorunn",
    
    etterNavn: "Johnsen",
    
    alder: 38,
    
    address: "100 Internet Dr",
    
    postNumber: 1383,
    
    postSted: "Asker",
    
    jobbNavn: "Manager",
    
    lønn: 60000,
    
    state: true,
    
    phoneNumbers: [
    
    { "Mobile": "111-111-1111" },
    
    { "Home": "222-222-2222" }
    
    ],
    
    epost: "jorunn@gmail.com",
    
    navn: function () {
    
    return this.forNavn+" "+this.etterNavn
    
    },
    
    bildet: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    
    },
    
    {
    
    ansatt_id: 2,
    
    forNavn: "Rasmuss",
    
    etterNavn: "Rasmussen",
    
    alder: 28,
    
    adress: "101 Internet Dr",
    
    postNumber: 1385,
    
    postSted: "Asker",
    
    jobbNavn: "Analyst",
    
    lønn: 50000,
    
    state: true,
    
    phoneNumbers: [
    
    { "Mobile": "333-111-1111" },
    
    { "Home": "333-222-2222" }
    
    ],
    
    epost: "rasmuss@gmail.com",
    
    navn: function () {
    
    return this.forNavn+" "+this.etterNavn
    
    },
    
    bildet: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    
    },
    
    {
    
    ansatt_id: 3,
    
    forNavn: "Andrea",
    
    etterNavn: "Onstad",
    
    alder: 30,
    
    adress: "102 Internet Dr",
    
    postNumber: 3400,
    
    postSted: "Lier",
    
    jobbNavn: "Analyst",
    
    lønn: 50000,
    
    state: true,
    
    phoneNumbers: [
    
    { "Mobile": "444-111-1111" },
    
    { "Home": "444-222-2222" }
    
    ],
    
    epost: "andrea@gmail.com",
    
    navn: function () {
    
    return this.forNavn+" "+this.etterNavn
    
    },
    
    bildet: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    
    },
    
    {
    
    ansatt_id: 4,
    
    forNavn: "Marius",
    
    etterNavn: "Helseth",
    
    alder: 25,
    
    adress: "102 Internet Dr",
    
    postNumber: 3427,
    
    postSted: "Gullaug",
    
    jobbNavn: "kontorist",
    
    lønn: 40000,
    
    state: true,
    
    phoneNumbers: [
    
    { "Mobile": "555-111-1111" },
    
    { "Home": "555-222-2222" }
    
    ],
    
    epost: "marius@gmail.com",
    
    navn: function () {
    
    return this.forNavn+" "+this.etterNavn
    
    },
    
    bildet: "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    
    },
    
    {
    
    ansatt_id: 5,
    
    forNavn: "Tom",
    
    etterNavn: "Rin Tin Tin",
    
    alder: 25,
    
    adress: "104 Internet Dr",
    
    postNumber: 3427,
    
    postSted: "Gullaug",
    
    jobbNavn: "kontorist",
    
    lønn: 40000,
    
    state: true,
    
    phoneNumbers: [
    
    { "Mobile": "666-111-1111" },
    
    { "Home": "666-222-2222" }
    
    ],
    
    epost: "joris@gmail.com",
    
    navn: function () {
    
    return this.forNavn+" "+this.etterNavn
    
    },
    
    bildet: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    
    },
    
    {
    
    ansatt_id: 6,
    
    forNavn: "Jostein",
    
    etterNavn: "Winsnes",
    
    alder: 45,
    
    adress: "105 Internet Dr",
    
    postNumber: 3400,
    
    postSted: "Lier",
    
    jobbNavn: "Manager",
    
    lønn: 60000,
    
    state: true,
    
    phoneNumbers: [
    
    { "Mobile": "777-111-1111" },
    
    { "Home": "777-222-2222" }
    
    ],
    
    epost: "jostein@gmail.com",
    
    navn: function () {
    
    return this.forNavn+" "+this.etterNavn
    
    },
    
    bildet: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    
    },
    
    {
    
    ansatt_id: 7,
    
    forNavn: "Markus",
    
    etterNavn: "Snare",
    
    alder: 41,
    
    adress: "106 Internet Dr",
    
    postNumber: 3400,
    
    postSted: "Lier",
    
    jobbNavn: "portier",
    
    lønn: 35000,
    
    state: true,
    
    phoneNumbers: [
    
    { "Mobile": "888-111-1111" },
    
    { "Home": "888-222-2222" }
    
    ],
    
    epost: "markus@gmail.com",
    
    navn: function () {
    
    return this.forNavn+" "+this.etterNavn
    
    },
    
    bildet: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    
    }
    
    ]


// Opg 1

console.log("%cOppgave 1: Print alle navnene (både fornavn og etternavn)", bold)

for (let i = 0; i < ansatt.length ; i++) {
    console.log(ansatt[i].navn())
}

// Opg 2

console.log("%cOppgave 2: Endre Rasmuss sin alder", bold)

ansatt.find(ansatt => ansatt.ansatt_id === 2 && (ansatt.alder = 30))

console.log(ansatt[1])

// Opg 3

console.log("%cOppgave 3: Legg til et tlf numer", bold)

var markus = ansatt.find(ansatt => ansatt.forNavn === "Markus")

if (markus) {
    markus.phoneNumbers.push({"Bedrift" : "999-111-1111"})
    console.log(markus)
}

// Opg 4

console.log("%cOppgave 4: Fjern Marius sin epost", bold)

var marius = ansatt.find(ansatt => ansatt.forNavn === "Marius")

if (marius) {
    delete marius.epost
    console.log(marius)
}

// Opg 5

console.log("%cOppgave 5: Vis bilde av alle som er ansatt", bold)

console.log("Click the 'Oppgave 5' button on page")

function alleImg() {
    document.getElementById('hiddenText').hidden = false

    for (var i of ansatt) {
        var divcontainer = document.createElement("div")
        divcontainer.className = 'container'
        document.body.appendChild(divcontainer)

        img = document.createElement('img')
        img.src = i.bildet
        divcontainer.appendChild(img)
    }

    setTimeout(function() {
        document.getElementById('hiddenText').hidden = true
        window.location.reload()
    }, 9000)
}


// OPg 6

console.log("%cOppgave 6: Vis bilde av Marius", bold)

console.log("Click the 'Oppgave 6' button on page")

function mariusImg() {
    document.getElementById('hiddenText').hidden = false

    var marius = ansatt.find(ansatt => ansatt.forNavn === "Marius")

    if (marius) {
        var divcontainer = document.createElement("div")
        divcontainer.className = 'container'
        document.body.appendChild(divcontainer)

        img = document.createElement('img')
        img.src = marius.bildet
        divcontainer.appendChild(img)

        setTimeout(function() {
            document.getElementById('hiddenText').hidden = true
            window.location.reload()
        }, 9000)
    } 
}


// Opg 7
console.log("%cOppgave 7: Vis bilde av alle som jobber i Lier", bold)

console.log("Click the 'Oppgave 7' button on page")


function lierImg(postSted) {

    document.getElementById('hiddenText').hidden = false

    for (var i of ansatt) {
        if (i.postSted === postSted) {
            var divcontainer = document.createElement("div")
            divcontainer.className = 'container'
            document.body.appendChild(divcontainer)

            img = document.createElement('img')
            img.src = i.bildet
            divcontainer.appendChild(img)
        }
    }

    setTimeout(function() {
        document.getElementById('hiddenText').hidden = true
        window.location.reload()
    }, 9000)

}

// Opg 8

console.log("%cOppgave 8: Vis bilde av alle som er Manager", bold)

console.log("Click the 'Oppgave 8' button on page")

function managersImg() {

    document.getElementById('hiddenText').hidden = false;

    var managers = ansatt.filter(ansatt => ansatt.jobbNavn === "Manager");

    for (var manager of managers) {

        var divcontainer = document.createElement("div");
        divcontainer.className = 'container';
        document.body.appendChild(divcontainer);

        img = document.createElement('img');
        img.src = manager.bildet;
        divcontainer.appendChild(img);
    }

    setTimeout(function() {
        document.getElementById('hiddenText').hidden = true;
        window.location.reload();
    }, 9000);
}

