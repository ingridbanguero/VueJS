const originalQuotes = [
    { quote: 'The night is darkest just before the dawn. And I promise you, the dawn is coming.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'I believe what doesn’t kill you simply makes you, stranger.', author: 'The Joker, The Dark Knight' },
    { quote: 'Your anger gives you great power. But if you let it, it will destroy you… As it almost did me', author: 'Henri Ducard, Batman Begins' },
    { quote: 'You either die a hero or live long enough to see yourself become the villain.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'If you’re good at something, never do it for free.', author: 'The Joker, The Dark Knight' },
    { quote: 'Yes, father. I shall become a bat.', author: 'Bruce Wayne/Batman, Batman: Year One' },
]

const {createApp, ref, computed } = Vue;

const app = createApp({
    setup() {
        // Variable reactiva
        const showAuthor = ref(true);
        const quotes = ref(originalQuotes); // valor inicial
        const newMessage = ref('');

        const totalQuotes = computed(() => { // recibe una funcion
            return quotes.value.length;
        }); 

        const toggleAuthor = () => {
            showAuthor.value = !showAuthor.value;
        }

        const addQuote = () => {
            quotes.value.unshift({ // se aplica el value porq es una variable reactiva
                quote: newMessage.value,
                author: "Ingrid Banguero"
            })
            
            newMessage.value = ''; // Limpiar el valor
        }

        return {
            // Variables
            showAuthor,
            quotes,
            newMessage,
            // Funciones
            toggleAuthor,
            addQuote,
            // Funciones computadas
            totalQuotes,
        }
    }
});

app.mount('#myApp');