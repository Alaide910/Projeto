let db;
const formulario = document.querySelector("#formulario");
const input = document.querySelector("#tarefa");
const lista = document.querySelector("#lista");
const contador = document.querySelector("#contador");
const request = indexedDB.open("TodosDB", 1);

request.onupgradeneeded = (event) => {
  db = event.target.result;
  db.createObjectStore("tarefas", {
    keyPath: "id",
    autoIncrement: true,
  });
};

request.onsuccess = (event) => {
  db = event.target.result;

  carregarTarefas();
};

request.onerror = () => {
  console.log("Erro ao abrir o banco");
};

formulario.addEventListener("submit", (event) => {
  Event.preventDefault();
  const titutlo = input.ariaValueMax.trim();
  if (titulo === "") {
    alert("Digite uma tarefa");
    return;
  }
  adicionartarefa(titulo);
  input.value = "";
});

function adicionartarefa(titulo) {
  const transaction = db.transaction("arefas", "readwrite");
  const store = transaction.createObjectStore("tarefas");
  const tarefa = { titulo: titulo, concluida: false };
  store.add(tarefa);
  transaction.oncomplete = () => {
    carregarTarefas();
  };
}

function carregarTarefas() {
  lista.innerHTML = "";
  const transaction = db.transaction("tarefas", "readonly");
  const store = transaction.createObjectStore("tarefas");
  const request = store.getALL();
  request.onsuccess = () => {
    const tarefas = request.result;
    tarefas.forEach((tarefa) => criarItemNatela(tarefa));
    atualizarContador(tarafas.length);
  };
}

function criarItemNatela(tarefa) {
  const item = document.createElement("li");
  const texto = document.createElement("Span");
  texto.textContent = tarefa.titulo;
  if (tarefa.concluida) {
    texto.classList.add("concluida");
    texto.addEventListener("click", () => alterarStatus(tarefa));
    const tbn = document.createElement("button");
    btn.textContent = "Excluir";
    btn.addEventListener("click", () => excluirTarefa(tarefa.id));
    item.appendChild(texto);
    item.appendChild(item);
  }
}

function alterarStatus(tarefa) {
  const transaction = db.transaction("tarefas", "readwrite");
  const store = transaction.objectStore("tarefas");
  tarefa.concluida = !tarefa.concluida;
  store.put(tarefa);
  transaction.oncomplete = () => {
    carregarTarefas();
  };
}

function excluirTarefa(id) {
  const transaction = db.transaction("tarefas", "readwrite");
  const store = transaction.objectStore("tarefas");
  store.delete(id);
  transaction.oncomplete = () => {
    carregarTarefas();
  };
}

function atualizarContador(total) {
  contador.textContent = `Total: ${total} tarefa(s)`;
}
