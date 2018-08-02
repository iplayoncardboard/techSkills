let deck = [];

const values = ['A', 'K','Q','J','10','9','8','7','6','5','4','3','2'];

const suits = ['S', 'D', 'H', 'C'];

const getDeck = () =>{
    for(let i=0; i < values.length; i++){
        for( let j =0; j <suits.length; j++){
            const card = {
                suit:suits[j],
                value: values[i]
            };

            deck.push(card);
        }
    }
    return deck;
}

// const shuffelDeck = () =>{
//     //switch cards 10,000 times
//     for(let i=0; i<=10000; i++){
//         cardLocation1 = Math.floor(Math.random()* deck.length)
//         cardLocation2 = Math.floor(Math.random()* deck.length)

//         temp = deck[cardLocation1];

//         deck[cardLocation1] = deck[cardLocation2];
//         deck[cardLocation2] = temp;
//     }
   
// }

const cutDeck = () =>{
   let randomIndex= Math.floor(Math.random() * deck.length)
//    console.log("random Index: "+randomIndex);
    let cutDeck = []
    for(let i=0; i<randomIndex; i++){
        let cutCard = deck.shift();
        cutDeck.push(cutCard);
    }
   deck =  deck.concat(cutDeck);
}

const shuffelDeck = () => {
    //Fisher Yates Shuffle 
    let currentIndex = deck.length, temp, randomIndex

    while(currentIndex !== 0){
        randomIndex = Math.floor(Math.random()*currentIndex);
        currentIndex -=1;
        temp = deck[currentIndex];
        deck[currentIndex] = deck[randomIndex];
        deck.randomIndex= temp;
    }
}

const printDeck = ()=>{
    console.log(deck);
}

getDeck();
printDeck();
cutDeck();
printDeck();    
