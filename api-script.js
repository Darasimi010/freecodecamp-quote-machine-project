const newQuoteButtonElement = document.getElementById("new-quote");
const textSpan = document.getElementById("text");
const authorSpan = document.getElementById("author");

const apiUrl = "https://type.fit/api/quotes";

let quotes = [];

// Function to change the quote
function changeQuote() {
  if (quotes.length === 0) {
    textSpan.textContent = "No quotes available.";
    authorSpan.textContent = "";
    return;
  }

  const randomIndex = Math.floor(Math.random() * quotes.length);

  const quote = quotes[randomIndex];
  textSpan.textContent = `"${quote.text}"`;
  authorSpan.textContent = quote.author ? `— ${quote.author}` : "— Unknown";

  textSpan.textContent = `"${quotes[randomIndex].text}"`;
  const parts = quotes[randomIndex].author.split(",");
  if (`- ${parts[0].trim()}` === "- type.fit") {
    authorSpan.textContent = `- ${"Anonymous"}`;
  } else {
    authorSpan.textContent = `- ${parts[0].trim()}`;
  }
}

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("Data not found");
      } else if (response.status === 500) {
        throw new Error("Server error");
      } else {
        throw new Error("Network response was not ok");
      }
    }
    return response.json();
  })
  .then((data) => {
    quotes = data;
    changeQuote();
  })
  .catch((error) => {
    console.error("Error:", error);
    textSpan.textContent = "Failed to load quotes.";
    authorSpan.textContent = "";
  });

newQuoteButtonElement.addEventListener("click", changeQuote);
