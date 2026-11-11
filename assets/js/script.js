
// 1. Array con i dati dei prodotti
const prodotti = [
  {
    id: 1,
    titolo: "Sneaker Run",
    prezzo: "€ 89,00",
    descrizione: "Scarpe da running comode e leggere, ideali per lo sport e il tempo libero.",
    immagine: "https://placehold.co/300x180",
    immagineModal: "https://placehold.co/600x300"
  },
  {
    id: 2,
    titolo: "T-shirt basic",
    prezzo: "€ 19,00",
    descrizione: "Maglietta in cotone 100% basic, comoda per tutti i giorni.",
    immagine: "https://placehold.co/300x180",
    immagineModal: "https://placehold.co/600x300"
  },
  {
    id: 3,
    titolo: "Borsa city",
    prezzo: "€ 49,00",
    descrizione: "Borsa spaziosa ed elegante per la città e il lavoro.",
    immagine: "https://placehold.co/300x180",
    immagineModal: "https://placehold.co/600x300"
  }
];

const grigliaProdotti = document.getElementById('griglia-prodotti');

// 2. Generazione dinamica delle card tramite metodi del DOM
prodotti.forEach(prodotto => {
  // Creazione <article class="col-12 col-sm-6 col-xl-4 mb-3">
  const colonna = document.createElement('article');
  colonna.className = 'col-12 col-sm-6 col-xl-4 mb-3';

  // Creazione <div class="card h-100 shadow-sm">
  const card = document.createElement('div');
  card.className = 'card h-100 shadow-sm';

  // Creazione <img src="..." class="card-img-top">
  const img = document.createElement('img');
  img.src = prodotto.immagine;
  img.className = 'card-img-top';
  img.alt = prodotto.titolo;

  // Creazione <div class="card-body">
  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';

  // Creazione <h5 class="card-title">
  const h5 = document.createElement('h5');
  h5.className = 'card-title';
  h5.textContent = prodotto.titolo;

  // Creazione <p class="card-text text-muted">
  const pText = document.createElement('p');
  pText.className = 'card-text text-muted';

  // Creazione <p class="fw-bold fs-5 m-0">
  const pPrice = document.createElement('p');
  pPrice.className = 'fw-bold fs-5 m-0';
  pPrice.textContent = prodotto.prezzo;

  // Assemblaggio del card-body
  cardBody.appendChild(h5);
  cardBody.appendChild(pText);
  cardBody.appendChild(pPrice);

  // Creazione <div class="card-footer bg-body border-0">
  const cardFooter = document.createElement('div');
  cardFooter.className = 'card-footer bg-body border-0';

  // Creazione del bottone "Dettagli"
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'btn btn-primary w-100';
  button.setAttribute('data-bs-toggle', 'modal');
  button.setAttribute('data-bs-target', '#modalProdotto');
  button.setAttribute('data-bs-id', prodotto.id);
  button.textContent = 'Dettagli';

  // Assemblaggio del footer
  cardFooter.appendChild(button);

  // Assemblaggio finale della card e della colonna
  card.appendChild(img);
  card.appendChild(cardBody);
  card.appendChild(cardFooter);
  colonna.appendChild(card);

  // Inserimento nel contenitore principale della pagina
  grigliaProdotti.appendChild(colonna);
});

// 3. Gestione dinamica del Modale basata sull'ID
const modalProdotto = document.getElementById('modalProdotto');
modalProdotto.addEventListener('show.bs.modal', function (event) {
  const button = event.relatedTarget;
  const idProdotto = button.getAttribute('data-bs-id');

  // Cerca il prodotto corrispondente nell'array usando l'id
  const prodottoTrovato = prodotti.find(p => p.id == idProdotto);

  // Riempi la modale con i dati del prodotto trovato
  if (prodottoTrovato) {
    modalProdotto.querySelector('#modalTitolo').textContent = prodottoTrovato.titolo;
    modalProdotto.querySelector('#modalPrezzo').textContent = prodottoTrovato.prezzo;
    modalProdotto.querySelector('#modalDescrizione').textContent = prodottoTrovato.descrizione;
    modalProdotto.querySelector('#modalImmagine').src = prodottoTrovato.immagineModal;
  }
});

const btnTema = document.getElementById('toggle-tema');
// document.documentElement è l’elemento <html>, la radice della pagina. Lo salvo in html perché è lì che Bootstrap legge l’attributo del tema.
const html = document.documentElement;


btnTema.addEventListener('click', () => {
  const scuro = html.getAttribute('data-bs-theme') === 'dark'; //Prende il tema se è scuro
  html.setAttribute('data-bs-theme', scuro ? 'light' : 'dark'); //Applica il tema al click
  // condizione ? valore_se_vero : valore_se_falso

  btnTema.textContent = scuro ? 'Tema scuro' : 'Tema chiaro'; //Cambia la scritta nel bottone - è invertito, se il tema è scuro spunta chiaro, se chiaro spunta scuro
});