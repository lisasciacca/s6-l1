# s6-l1
```
<body>

  <header class="bg-primary text-white py-3">
    <!-- bg-primary: Sfondo con il colore primario di Bootstrap (blu) -->
    <!-- text-white: Testo bianco -->
    <!-- py-3: Padding verticale (sopra e sotto) -->

    <div class="container d-flex justify-content-between align-items-center">
      <!-- container: Centra il contenuto e imposta una larghezza massima responsiva -->
      <!-- d-flex: Converte il blocco in un container Flexbox -->
      <!-- justify-content-between: Spazia gli elementi figli agli estremi opposti (sinistra e destra) -->
      <!-- align-items-center: Allinea verticalmente gli elementi al centro -->

      <h1 class="fs-3 m-0">EpiShop</h1>
      <!-- fs-3: Imposta la dimensione del font (Font Size 3) -->
      <!-- m-0: Rimuove tutti i margini esterni (Margin 0) -->

      <nav>
        <!-- Link di navigazione con classi Bootstrap per colori, decorazioni e margini -->
        <a class="text-white text-decoration-none mx-2">Prodotti</a>
        <a class="text-white text-decoration-none mx-2">Offerte</a>
        
        <!-- d-none d-lg-inline: Nasconde il link sui dispositivi piccoli (d-none) e lo mostra come inline da schermi grandi in su (d-lg-inline) -->
        <a class="text-white text-decoration-none mx-2 d-none d-lg-inline">Contatti</a>
      </nav>
    </div>
  </header>


  <!-- ================= SEZIONE HERO / BANNER ================= -->
  <section class="bg-light py-5">
    <!-- bg-light: Sfondo grigio chiaro -->
    <!-- py-5: Padding verticale ampio (livello 5) -->

    <div class="container text-center">
      <!-- text-center: Allinea tutto il testo al centro -->

      <h2 class="fs-1 fw-bold mb-3">Saldi di primavera</h2>
      <!-- fs-1: Titolo molto grande -->
      <!-- fw-bold: Grassetto (Font Weight Bold) -->
      <!-- mb-3: Margine inferiore (Margin Bottom) di livello 3 -->

      <p class="fs-5 text-muted mb-4">Scopri le offerte sui prodotti in evidenza, fino al 50% di sconto.</p>
      <!-- fs-5: Testo leggermente più grande del normale -->
      <!-- text-muted: Colore del testo attenuato (grigio) -->
      <!-- mb-4: Margine inferiore di livello 4 -->

      <!-- Pulsante (stile bottone tramite classi di spaziatura e colori) -->
      <a class="d-inline-block bg-primary text-white text-decoration-none py-2 px-4 rounded">Vedi i prodotti</a>
      <!-- d-inline-block: Comportamento a blocco in linea -->
      <!-- py-2 px-4: Padding verticale (2) e orizzontale (4) -->
      <!-- rounded: Arrotonda gli angoli dell'elemento -->
    </div>
  </section>


  <!-- ================= CONTENUTO PRINCIPALE ================= -->
  <main class="container my-4">
    <!-- my-4: Margine verticale (sopra e sotto) di livello 4 -->

    <div class="row">
      <!-- row: Contenitore della griglia Bootstrap (gestisce i float/flex delle colonne) -->

      <!-- ================= SIDEBAR CATEGORIE ================= -->
      <!-- d-none d-lg-block: La sidebar è nascosta di default (d-none) e compare solo da schermi "large" (lg) in su -->
      <aside class="col-lg-3 d-none d-lg-block">
        <!-- col-lg-3: Occupa 3 colonne su 12 disponibili nei dispositivi large -->

        <div class="bg-light p-3 rounded border">
          <!-- bg-light: Sfondo chiaro -->
          <!-- p-3: Padding interno uniforme -->
          <!-- rounded: Angoli arrotondati -->
          <!-- border: Aggiunge un bordo sottile -->

          <h3 class="fs-5 fw-bold mb-3">Categorie</h3>
          
          <!-- Voci di categoria con margini verticali azzerati e piccoli padding -->
          <p class="m-0 py-1">Scarpe</p>
          <p class="m-0 py-1">T-shirt</p>
          <p class="m-0 py-1">Borse</p>
          <p class="m-0 py-1">Accessori</p>
        </div>
      </aside>


      <!-- ================= GRIGLIA PRODOTTI ================= -->
      <!-- col-12 col-lg-9: Occupa tutta la larghezza su mobile (12), e 9 colonne su schermi grandi (lasciando 3 alla sidebar) -->
      <section class="col-12 col-lg-9">
        
        <h2 class="fs-3 fw-bold mb-4 text-center text-md-start">Prodotti in evidenza</h2>
        <!-- text-center text-md-start: Centrato su mobile, allineato a sinistra da schermi medi (md) in su -->

        <div class="row">
          <!-- Sotto-griglia per disporre le card dei prodotti -->

          <!-- PRODOTTO 1 -->
          <!-- col-12 col-sm-6 col-xl-4: 1 colonna per riga su mobile, 2 su schermi piccoli (sm), 3 su schermi extra-large (xl) -->
          <article class="col-12 col-sm-6 col-xl-4 mb-3">
            <!-- mb-3: Margine inferiore per distanziare la riga sottostante -->

            <div class="border rounded p-3 bg-white shadow-sm">
              <!-- border, rounded, p-3: Bordo, angoli arrotondati e spaziatura interna -->
              <!-- bg-white: Sfondo bianco -->
              <!-- shadow-sm: Aggiunge un'ombra leggera -->

              <!-- Contenitore segnaposto per l'immagine del prodotto -->
              <div class="bg-secondary mb-2 rounded" style="height: 160px;"></div>
              <!-- bg-secondary: Sfondo grigio neutro di supporto -->
              <!-- mb-2: Margine inferiore -->

              <h3 class="fs-5 fw-bold m-0">Sneaker Run</h3>
              <p class="text-muted m-0">€ 89,00</p>
            </div>
          </article>


          <!-- PRODOTTO 2 -->
          <article class="col-12 col-sm-6 col-xl-4 mb-3">
            <div class="border rounded p-3 bg-white shadow-sm">
              <div class="bg-secondary mb-2 rounded" style="height: 160px;"></div>
              <h3 class="fs-5 fw-bold m-0">T-shirt basic</h3>
              <p class="text-muted m-0">€ 19,00</p>
            </div>
          </article>


          <!-- PRODOTTO 3 -->
          <article class="col-12 col-sm-6 col-xl-4 mb-3">
            <div class="border rounded p-3 bg-white shadow-sm">
              <div class="bg-secondary mb-2 rounded" style="height: 160px;"></div>
              <h3 class="fs-5 fw-bold m-0">Borsa city</h3>
              <p class="text-muted m-0">€ 49,00</p>
            </div>
          </article>

        </div>
      </section>

    </div>
  </main>


  <!-- ================= FOOTER ================= -->
  <footer class="bg-dark text-white py-4 mt-5">
    <!-- bg-dark: Sfondo scuro (nero/grigio scuro) -->
    <!-- text-white: Testo bianco -->
    <!-- py-4: Padding verticale di livello 4 -->
    <!-- mt-5: Margine superiore distanziato (Margin Top 5) -->

    <div class="container text-center">
      <!-- container e text-center: Allineamento centrato e vincolato alla griglia -->
      <p class="m-0">2026 EpiShop - tutti i diritti riservati</p>
    </div>
  </footer>

</body>

</html>