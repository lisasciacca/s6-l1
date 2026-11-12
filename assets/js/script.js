// 1. Dati dei prodotti
const prodotti = [
  { id: 1, categoria: "Scarpe", titolo: "Sneaker Run", prezzo: "€ 89", descrizione: "Scarpa leggera per la corsa, suola in gomma traspirante." },
  { id: 2, categoria: "Abbigliamento", titolo: "T-shirt basic", prezzo: "€ 19", descrizione: "Cotone biologico, taglio regolare, disponibile in 5 colori." },
  { id: 3, categoria: "Accessori", titolo: "Borsa city", prezzo: "€ 49", descrizione: "Tessuto resistente, tasca interna, cinghia regolabile." },
  { id: 4, categoria: "Scarpe", titolo: "Sandali estate", prezzo: "€ 39", descrizione: "Plantare anatomico, pelle vegana, perfetti per l'estate." },
  { id: 5, categoria: "Abbigliamento", titolo: "Felpa con cappuccio", prezzo: "€ 59", descrizione: "Tessuto morbido, tasca a marsupio, polsini elasticizzati." },
  { id: 6, categoria: "Accessori", titolo: "Cappello sport", prezzo: "€ 14", descrizione: "Visiera regolabile, traspirante, ideale per gli allenamenti." }
];

// Colore di ogni categoria
const coloriCategorie = {
  Scarpe: 'var(--epi-blue)',
  Abbigliamento: 'var(--epi-red)',
  Accessori: 'var(--epi-yellow)'
};

const grigliaProdotti = document.getElementById('griglia-prodotti');

// 2. Generazione delle card (solo quelle della categoria scelta)
function mostraProdotti(categoria) {
  grigliaProdotti.replaceChildren();

  prodotti
    .filter(p => categoria === 'Tutti' || p.categoria === categoria)
    .forEach(prodotto => {
      const colonna = document.createElement('article');
      colonna.className = 'col-12 col-sm-6 col-xl-4';

      // Tutta la card è il pulsante che apre il modale
      const card = document.createElement('div');
      card.className = 'card h-100 card-prodotto';
      card.style.setProperty('--accent', coloriCategorie[prodotto.categoria]);
      card.setAttribute('role', 'button');
      card.setAttribute('data-bs-toggle', 'modal');
      card.setAttribute('data-bs-target', '#modalProdotto');
      card.setAttribute('data-bs-id', prodotto.id);

      const img = document.createElement('img');
      img.src = 'https://placehold.co/300x180';
      img.className = 'card-img-top';
      img.alt = prodotto.titolo;

      const cardBody = document.createElement('div');
      cardBody.className = 'card-body';

      const h5 = document.createElement('h5');
      h5.className = 'card-title';
      h5.textContent = prodotto.titolo;

      const pText = document.createElement('p');
      pText.className = 'card-text text-muted';
      pText.textContent = prodotto.descrizione;

      const pPrice = document.createElement('p');
      pPrice.className = 'fw-bold fs-5 m-0';
      pPrice.textContent = prodotto.prezzo;

      cardBody.append(h5, pText, pPrice);
      card.append(img, cardBody);
      colonna.appendChild(card);
      grigliaProdotti.appendChild(colonna);
    });
}

mostraProdotti('Tutti');

// 3. Filtri: bottoni sopra la griglia e voci della sidebar fanno la stessa cosa
const bottoniFiltro = document.querySelectorAll('#filtri button');
const vociCategorie = document.querySelectorAll('.categoria-link');
const elementiFiltro = [...bottoniFiltro, ...vociCategorie];

function impostaFiltro(categoria) {
  // "active" resta solo sugli elementi della categoria scelta
  elementiFiltro.forEach(el => {
    el.classList.toggle('active', el.dataset.categoria === categoria);
  });
  mostraProdotti(categoria);
}

elementiFiltro.forEach(el => {
  el.addEventListener('click', () => impostaFiltro(el.dataset.categoria)); //el.dataset.categoria legge l’attributo HTML data-categoria del bottone, per esempio "Scarpe". Quel valore viene passato a mostraProdotti, che svuota la griglia e ridisegna solo le card di quella categoria (o tutte, se il valore è "Tutti").
});

document.getElementById('categorie-tutti').addEventListener('click', () => impostaFiltro('Tutti'));

// 4. Modale riempito in base all'id della card cliccata
const modalProdotto = document.getElementById('modalProdotto');
modalProdotto.addEventListener('show.bs.modal', function (event) {
  const idProdotto = event.relatedTarget.getAttribute('data-bs-id');
  const prodotto = prodotti.find(p => p.id == idProdotto);

  if (prodotto) {
    modalProdotto.querySelector('#modalTitolo').textContent = prodotto.titolo;
    modalProdotto.querySelector('#modalPrezzo').textContent = prodotto.prezzo;
    modalProdotto.querySelector('#modalDescrizione').textContent = prodotto.descrizione;
    modalProdotto.querySelector('#modalImmagine').src = 'https://placehold.co/600x300';
    modalProdotto.querySelector('.modal-content').style.setProperty('--accent', coloriCategorie[prodotto.categoria]);
  }
});

// 5. Tema chiaro / scuro
const btnTema = document.getElementById('toggle-tema');
const html = document.documentElement;

btnTema.addEventListener('click', () => {
  const scuro = html.getAttribute('data-bs-theme') === 'dark';
  html.setAttribute('data-bs-theme', scuro ? 'light' : 'dark');
  btnTema.textContent = scuro ? 'Tema scuro' : 'Tema chiaro';
});