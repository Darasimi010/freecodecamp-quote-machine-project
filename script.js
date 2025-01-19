const newQuoteButtonElement = document.getElementById("new-quote");
const textSpan = document.getElementById("text");
const authorSpan = document.getElementById("author");

const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
  { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
  { text: "That it will never come again is what makes life so sweet.", author: "Emily Dickinson" },
  { text: "It is never too late to be what you might have been.", author: "George Elliot" },
  { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
  { text: "Pain is inevitable. Suffering is optional", author: "Haruki Murakami" },
  { text: "All the world's a stage, and all the men and women merely players.", author: "William Shakespeare" },
  { text: "Be kind, for everyone you meet is fighting a hard battle.", author: "Plato" },
  { text: "Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great.", author: "Mark Twain" },
  { text: "Don't bend; don't water it down; don't try to make it logical; don't edit your own soul according to the fashion. Rather, follow your most intense obsessions mercilessly.", author: "Franz Kafka" },
  { text: "If I waited for perfection, I would never write a word.", author: "Margaret Atwood" },
  { text: "Amateurs sit and wait for inspiration, the rest of us just get up and go to work.", author: "Stephen King" },
  { text: "Self-awareness and self-love matter. Who we are is how we lead.", author: "Brene Brown" },
  { text: "Life is tough my darling, but so are you.", author: "Stephanie Bennett Henry" },
  { text: "Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well.", author: "Voltaire" },
  { text: "We are all broken, that's how the light gets in.", author: "Ernest Hemingway" },
  { text: "Don't let your happiness depend on something you may lose.", author: " C.S. Lewis" },
  { text: "Get busy living or get busy dying.", author: "Stephen King" },
];

function changeQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  
  textSpan.textContent = quotes[randomIndex].text;
  authorSpan.textContent = quotes[randomIndex].author;
};

newQuoteButtonElement.addEventListener("click", changeQuote);

window.onload = changeQuote;