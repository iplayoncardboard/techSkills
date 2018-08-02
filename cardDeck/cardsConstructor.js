 class Deck {
    constructor(){
        this.deck=[]
        this.deltCards=[]
    }

    generateDeck() {
        let card = (suit,value)=> {
            this.name = `${value} of ${suit}`
            this.suit = suit
            this.value = value
            return ({name: this.name, suit: this.suit, value: this.value})
        }

        const values = ['A', 'K','Q','J','10','9','8','7','6','5','4','3','2'];
        const suits = ['Spades', 'Diamonds', 'Hearts', 'Clubs'];

        for(let v=0; v < values.length; v++){
            for( let s=0; s < suits.length; s++){
                this.deck.push(card(suits[s],values[v]))
            }
        }
        return deck;
    }

    printDeck() {
        if (this.deck.length === 0){
            console.log(`No Deck Generated`);
        } 

        else{
            for(let c =0; c < this.deck.length; c++){
                console.log(this.deck[c]);
            }
        }
    }

    shuffle() {
        let current_ind = this.deck.length, temp_val, rand_ind

        while (0 != current_ind){
            rand_ind= Math.floor(Math.random() * current_ind)
            current_ind -=1;
            temp_val = this.deck[current_ind];
            this.deck[current_ind] = this.deck[rand_ind]
            this.deck[rand_ind] = temp_val
        }
    }
    deal () {
        let deltCard = this.deck.shift();
        this.deltCards.push(deltCard);
        return deltCard;
    }

    replace () {
        this.deck.unshift(this.deltCards.shift())
    }

    clearDeck () {
        this.deck = []
    }

    cut () {
        let randomIndex = Math.floor(Math.random() * this.deck.length), cutDeck=[], cutCard;

        for(let i=0; i<randomIndex; i++){
            cutCard = this.deck.shift();
            cutDeck.push(cutCard);
        }
        this.deck = this.deck.concat(cutDeck);

    }

}

    deck = new Deck();
    deck.generateDeck();
    deck.cut();
    deck.printDeck();
    // console.log('DELT', deck.deal())
    // deck.printDeck();

