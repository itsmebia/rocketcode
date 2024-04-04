const AtualizarLista = (participantes) => {
    let output = "";

    for (let participante of participantes){
        output += CriarNovoParticipante(participante);
    }


    document.querySelector('tbody').innerHTML = output;
}

// OBJETO 
 
const Participante = {

    nome: "Bia Monteiro",
    email: "bia@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date (2024, 2, 25, 22, 0o0)

}

let participantes = [
    {
      nome: "Bia Monteiro",
      email: "bia@gmail.com",
      dataInscricao: new Date(2024, 2, 22, 19, 20),
      dataCheckIn: new Date(2024, 2, 25, 22, 0o0)
    },
    {
      nome: "Carlos Silva",
      email: "carlos@example.com",
      dataInscricao: new Date(2024, 2, 23, 19, 30),
      dataCheckIn: null
    },
    {
      nome: "Elena Perez",
      email: "elena@domain.com",
      dataInscricao: new Date(2024, 2, 24, 14, 45),
      dataCheckIn: new Date(2024, 2, 27, 16, 30)
    },
    {
      nome: "Fernando Oliveira",
      email: "fernando@example.com",
      dataInscricao: new Date(2024, 2, 25, 8, 10),
      dataCheckIn: new Date(2024, 2, 28, 11, 45)
    },
    {
      nome: "Gabriela Santos",
      email: "gabriela@gmail.com",
      dataInscricao: new Date(2024, 2, 26, 17, 55),
      dataCheckIn: null
    },
    
  ];
  

const CriarNovoParticipante = (Participante) => {
    const dataInscricao = dayjs(Date.now()).to(Participante.dataInscricao);
    let dataCheckIn = dayjs(Date.now()).to(Participante.dataCheckIn);

    if (Participante.dataCheckIn === null){
      dataCheckIn = `<button data-email="${Participante.email}" onclick= "fazerCheckIn(event)" > 
      Confirmar Check-In </button>`
    }

    return `
      <tr>
        <td>
          <strong>${Participante.nome}</strong><br>
          <small>${Participante.email}</small>
        </td>
        <td>${dataInscricao}</td>
        <td>${dataCheckIn}</td>
      </tr>
    `;
  }
  
AtualizarLista(participantes)

const adicionarParticipante = (event) => {
  event.preventDefault();

  const formData =  new FormData(event.target);

  const participante = {
    nome: formData.get("nome"),
    email: formData.get("email"),
    dataInscricao: new Date(),
    dataCheckIn: null
  }

  // VERIFICAÇÃO DO PARTICIPANTE

  const participanteExiste = participantes.find((p) => {
    return p.email === participante.email;
  });  

  if (participanteExiste){
    alert("PARTICIPANTE JÁ CADASTRADO!")
    return
  }

  participantes = [participante, ...participantes]
  AtualizarLista(participantes)

  // LIMPAR FORM

  event.target.querySelector("[name='nome']").value = "";
  event.target.querySelector("[name='email']").value = "";
} 

const fazerCheckIn = (event) => {

  // MENSAGEM DE CONFIRMAÇÃO
const mensagemConfirm = "Tem certeza que deseja fazer o Check-In?"; 

if (confirm(mensagemConfirm === false)){
  return 
};

alert(resultado);

  const email = event.target.dataset.email;
  const participant = participantes.find((p) => p.email === email);

  if (participant) {
    participant.dataCheckIn = new Date();
    AtualizarLista(participantes);
  }
};
