    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    function countDays(data, ultimaData) {
        let date_ini = new Date(ultimaData);
        let date_end = new Date(data);

        let diff = date_end.getTime() - date_ini.getTime();

        let dias = Math.floor(diff / day);

        return dias
}



function recordClick (convenio) {
    let local = String(convenio)
    let data
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dayIni = date.getDate();

    if (month < 10) {
        month = "0"+month
    }
    
    if (dayIni < 10) {
        dayIni = "0"+dayIni
    }
    
    data = month + "-" + dayIni + "-" + year;
    localStorage.setItem(local, data)

    infoBloqueio()

}

function infoBloqueio() {
    // ADICIONAR CONVENIOS NA ARRAY

    let convenios = ["Aracati", "Barbalha", "Chorozinho", "Crateus", "Crato", "Ico", "Juazeiro-do-Norte", "Tiangua", "Dourados", "Ipatinga", "Cameta", "Itupiranga", "Maraba", "AlagoaGrande", "Cabedelo", "Cajazeiras", "CampinaGrande", "DefensoriaPB", "Esperanca", "Guarabira", "Itabaiana", "Mamanguape", "Monteiro", "Patos", "PedrasDeFogo", "Queimadas", "RioTinto", "SaoBento", "Sape", "Sume", "TCEPB", "TJPB", "Piraquara", "PEConsig", "Caruaru", "DefensoriaPE", "Floresta", "Garanhuns", "Jaboatao", "Macaparana", "Olinda", "Paulista", "Recife", "SaoVicente", "SerraTalhada", "Vicencia"]

    // -------------------------------------------------
    
    let data
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dayIni = date.getDate();

    if (month < 10) {
        month = "0"+month
    }
    
    if (dayIni < 10) {
        dayIni = "0"+dayIni
    }
    
    data = month + "-" + dayIni + "-" + year;

    for (let i = 0; i<convenios.length; i++) {

    let convenioEdit = document.getElementById(convenios[i])
    let ultimaData = localStorage.getItem (convenios[i])
    let contador = countDays(data, ultimaData) 
    let bloqueio = 120 - contador

    if (ultimaData === null) {
        convenioEdit.innerHTML = "Sem registro de acesso."
    } else {
        if (bloqueio <= 0) {
            convenioEdit.innerHTML = "Acesso bloqueado.";
            convenioEdit.style.color = "#DB3540"
            convenioEdit.style.backgroundColor = "#ffb8bd"
        } else if (bloqueio <= 10) {
            convenioEdit.innerHTML = bloqueio + " dias para bloqueio.";
            convenioEdit.style.color = "#DB3540"
            convenioEdit.style.backgroundColor = "#ffb8bd"
        } else if (bloqueio <= 20) {
            convenioEdit.innerHTML = bloqueio + " dias para bloqueio.";
            convenioEdit.style.color = "#DB6A40"
            convenioEdit.style.backgroundColor = "#f2c9ba"
        } else {
            convenioEdit.innerHTML = bloqueio + " dias para bloqueio.";
            convenioEdit.style.backgroundColor = "#e2ffe9"
            convenioEdit.style.color = "#2fa64d";
        }
    }
    
    }


}

function mudaTema(x) {
    let temaEscuro = x
    document.body.classList.toggle("dark");
    localStorage.setItem("temaEscuro", temaEscuro)
  }

function mudaTemaAutomatico() {
    
let temaEscuro = localStorage.getItem ("temaEscuro")

if (temaEscuro == "on") {
    document.body.classList.toggle("dark"); 
}

}

function salvarTxt () {
    event.preventDefault()
    let textArea = document.getElementById("textArea")
    let nome = document.getElementById("nome")
    let matricula = document.getElementById("matricula")
    let telefone = document.getElementById("telefone")
    let data = document.getElementById("data")
    
    let notas = JSON.parse(localStorage.getItem("todasNotas"));

    if (notas == null) {
        localStorage.setItem("todasNotas", "[]");
        notas = [];
    }

    var auxNotas = {
        nome: nome.value,
        matricula: matricula.value,
        telefone: telefone.value,
        textArea: textArea.value,
        data: data.value
    }

    notas.push(auxNotas);

    localStorage.setItem("todasNotas", JSON.stringify(notas))
    alert ("Nota salva com sucesso!")

    textArea.value = "";
    nome.value = "";
    matricula.value = "";
    telefone.value = "";
    data.value = ""
}


function mostrarLista() {
    let listaDeNotas = document.getElementById("listaDeNotas") 
    let notas = JSON.parse(localStorage.getItem("todasNotas"));
    let div = ""

    if (notas == null || notas.length === 0) {
        div = `Nada a ser mostrado! :(`
    } else {
        for (let i = 0; i<notas.length; i++) {
            div += `<div class="card border-light d-inline-flex  mb-3 ml-3" id="card" style="width: 22.5rem;">
                        <div class="card-header d-flex justify-content-between ">Nota ${i + 1}
                        <span class="badge badge-primary align-self-center">${notas[i].data}</span> 

                        <button type="button" class="close" data-dismiss="card" aria-label="Fechar >
                        <span aria-hidden="true" onclick="excluirNota(${i})">&times;</span>
                        </button>
                        
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${notas[i].nome}</h5>
                            <p class="card-text">Matrícula: ${notas[i].matricula}</p>
                            <p class="card-text">Telefone: ${notas[i].telefone}</p>
                            <p class="card-text">Observações: ${notas[i].textArea}</p>
                            </div>
                    </div>`
        }
    }

    console.log (div)

    listaDeNotas.innerHTML = div

}

function excluirNota(x) {
    let notas = JSON.parse(localStorage.getItem("todasNotas"));
    notas.splice(x, 1)
    localStorage.setItem("todasNotas", JSON.stringify(notas))

    mostrarLista()
}

function apagarTudo() {
    let notas = JSON.parse(localStorage.getItem("todasNotas"));
    notas = []
    localStorage.setItem("todasNotas", JSON.stringify(notas))

    mostrarLista()


}