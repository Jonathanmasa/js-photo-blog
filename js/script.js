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
            
            // creo un addeventlistener per aprire le corrispondenti immagini al click
            document.querySelectorAll('.card').forEach((card, index) => {
                card.addEventListener('click', () => {
                    window.location.href = album[index].url;

                });
                
            });

            
        

        
    })
    .catch(error => {
        // codice che viene eseguito in caso di errore
        console.error(error);
   
    });
    
