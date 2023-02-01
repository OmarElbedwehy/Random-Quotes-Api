fetch("https://api.quotable.io/random").then((result) => {
        let Data = result.json();
        return Data
    }).then((quote) => {
        document.querySelector("#quotes").textContent = quote.content;
        document.querySelector("#author").innerHTML = `<span>__</span>${quote.author}`;
        quote_btn.textContent = "New Quote";
        quote_btn.style.opacity = "1";
        if (document.querySelector("#quotes").innerHTML == "") {
            document.querySelector("#quotes").innerHTML = "Proplem Happened Can't Connect With Server You Can Refresh The Page And Try Again";
            document.querySelector("#author").style.display = "none";
            quote_btn.textContent = "Loading Quote...";
            quote_btn.style.opacity = "0.6";
        } else {
            document.querySelector("#quotes").textContent = quote.content;
            document.querySelector("#author").innerHTML = `<span>__</span>${quote.author}`;
            quote_btn.textContent = "New Quote";
            quote_btn.style.opacity = "1";
        }
})

let quote_btn = document.querySelector("#quote_btn");

quote_btn.addEventListener("click", () => {
    quote_btn.textContent = "Loading Quote...";
    quote_btn.style.opacity = "0.6";
    fetch("https://api.quotable.io/random").then((result) => {
        let Data = result.json();
        return Data
    }).then((quote) => {
        document.querySelector("#quotes").textContent = quote.content;
        document.querySelector("#author").innerHTML = `<span>__</span>${quote.author}`;
        quote_btn.textContent = "New Quote";
        quote_btn.style.opacity = "1";
        if (document.querySelector("#quotes").innerHTML == "") {
            document.querySelector("#quotes").innerHTML = "Proplem Happened Can't Connect With Server You Can Refresh The Page And Try Again";
            document.querySelector("#author").style.display = "none";
            quote_btn.textContent = "Loading Quote...";
            quote_btn.style.opacity = "0.6";
        } else {
            document.querySelector("#quotes").textContent = quote.content;
            document.querySelector("#author").innerHTML = `<span>__</span>${quote.author}`;
            quote_btn.textContent = "New Quote";
            quote_btn.style.opacity = "1";
        }
    })
})

let speak = document.querySelector("#speak");

speak.addEventListener("click", () => {
    let quote_text = document.querySelector("#quotes").innerHTML;
    let speech = new SpeechSynthesisUtterance(`${quote_text}`);
    speechSynthesis.speak(speech);
    document.querySelector("#speak_before").style.opacity = 1;
    document.querySelector("#speak_after").style.opacity = 1;
    let i = 0;
    let interval = setInterval(()=>{
        i++;
        if (i == 2){
            document.querySelector("#speak_before").style.opacity = 0;
            document.querySelector("#speak_after").style.opacity = 0;
            clearInterval(interval);
        }
    }, 1000)
})

let copy_btn = document.querySelector("#copy");

copy_btn.addEventListener("click", () => {
    let quote_text = document.querySelector("#quotes").innerHTML;
    navigator.clipboard.writeText(quote_text);
    document.querySelector("#copy_before").style.opacity = 1;
    document.querySelector("#copy_after").style.opacity = 1;
    let i = 0;
    let interval = setInterval(()=>{
        i++;
        if (i == 2){
            document.querySelector("#copy_before").style.opacity = 0;
            document.querySelector("#copy_after").style.opacity = 0;
            clearInterval(interval);
        }
    }, 1000)
})

let tweet_btn = document.querySelector("#twitter");

tweet_btn.addEventListener("click", () => {
    let quote_text = document.querySelector("#quotes").innerHTML;
    let tweet_url = `https://twitter.com/intent/tweet?url=${quote_text}`;
    window.open(tweet_url, "_blank");
})
