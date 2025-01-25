// SELEZIONO GLI ELEMENTI DI OUTPUT
const cardContainer = document.querySelector('.container');
const cardImage = document.querySelector('cardImage');



// SALVO L'ENDPOINT IN UNA VARIABILE
const endepoint = 'https://lanciweb.github.io/demo/api/pictures/';

// FACCIO PARTIRE LA RICHIESTA AJAX VERSO L'API
axios.get(endepoint)
    .then(response => {
        // codice che viene eseguito in caso di successo
        const album = response.data;

        // creo ciclo per estrarre gli oggetti con le relative proprietà
        album.forEach((card) => {
            console.log(card);
            
            // creo le card
            cardContainer.innerHTML +=  `
            <div class="card m-2" style="width: 12rem;">
                <img src="${card.url}" class="card-img-top" alt="...">
                <div class="pin"><img src="./img/pin.svg" alt="pin"></div>
                <div class="card-body">
                    <p class="card-text">${card.date}</p>
                    <h5 class="card-title">${card.title.toUpperCase()}</h5>  
                </div>
            </div>
            `;
        });
            
        
        // Aggiungo listener per aprire il modal
        document.querySelectorAll('.card img').forEach((img) => {
            img.addEventListener('click', (openModal) => {
            // Prevengo il comportamento predefinito
            openModal.preventDefault(); 

            const modal = document.getElementById('imageModal');
            const modalImage = document.getElementById('modalImage');
            // Imposto la sorgente dell'immagine
            modalImage.src = img.src;
             // Mostro il modal 
            modal.classList.add('show');
            });
        });

        // Aggiungo listener per chiudere il modal con il bottone "Chiudi"
        document.querySelector('.close-button').addEventListener('click', () => {
            const modal = document.getElementById('imageModal');
            modal.classList.remove('show'); // Nasconde il modal
        });

        
    })
    .catch(error => {
        // codice che viene eseguito in caso di errore
        console.error(error);
   
    });
    
