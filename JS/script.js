const quotes = [
      { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
      { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
      { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
      { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
      { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
      { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
      { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
      { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
      { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
      { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" }
    ];

    let lastIndex = -1;

    function displayQuote() {
      let randomIndex;

      do {
        randomIndex = Math.floor(Math.random() * quotes.length);

        console.log("randomIndex:", randomIndex);
      } while (randomIndex === lastIndex && quotes.length > 1);
      lastIndex = randomIndex;

      const quote = quotes[randomIndex];
      document.getElementById('quote').textContent = `"${quote.text}"`;
      document.getElementById('author').textContent = `-- ${quote.author}`;
    }

    document.getElementById('quoteBtn').addEventListener('click', displayQuote);