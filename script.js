// Consegna
// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero (in ordine) tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49


// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati -
//  abbiamo calpestato una bomba - 
//  la cella si colora di rosso e la partita termina, 
//  altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.


const livel = document.querySelector('#Difficolta')
const btn = document.querySelector('#Play')
const container = document.querySelector('.container');
let bombeList; 

btn.addEventListener('click', function() {
    container.innerHTML = ''
    if(livel.value == 'Easy'){
        bombe(49);
        for (let i = 0; i < 49; i++){
            let item = document.createElement('div');
            item.classList.add('square');
            item.classList.add('easy')
            item.innerHTML = i;
            container.append(item);
            item.addEventListener('click', function(){
                for(j = 0; j < bombeList.length; j++){
                    if(i == bombeList[j]){
                        console.log('hai perso');
                        item.classList.add('bomb');
                    }else{
                        item.classList.add('select-quadrato');
                        console.log('continua cosi');
                    } 
                }
            })
        }
    }else if(livel.value == 'Medium'){
        bombe(81)
        for (let i = 1; i <= 81; i++){
            let item = document.createElement('div');
            item.classList.add('square');
            item.classList.add('medium');
            item.innerHTML = i;
            container.append(item);
            item.addEventListener('click', function(){
                for(j = 0; j < bombeList.length; j++){
                    if(i == bombeList[j]){
                        console.log('hai perso');
                        item.classList.add('bomb');
                    }else{
                        item.classList.add('select-quadrato');
                        console.log('continua cosi');
                    } 
                }
            })
        }
    }else{
        bombe(100)
        for (let i = 1; i <= 100; i++){
            let item = document.createElement('div');
            item.classList.add('square');
            item.classList.add('hard');
            item.innerHTML = i;
            container.append(item);
            item.addEventListener('click', function(){
                for(j = 0; j < bombeList.length; j++){
                    if(i == bombeList[j]){
                        console.log('hai perso');
                        item.classList.add('bomb');
                    }else{
                        item.classList.add('select-quadrato');
                        console.log('continua cosi');
                    } 
                }
            })
        }
    }
    console.log(bombeList)
})




function bombe(max){
    bombeList = [];
    while(bombeList.length < 16){
    let randomNumber = Math.floor(Math.random() * max);
    console.log(randomNumber);
    if(!bombeList.includes(randomNumber)){
        bombeList.push(randomNumber);
    }
    }
}