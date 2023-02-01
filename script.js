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

function onLine(){
    document.querySelector(".message .ico").innerHTML = `<i class="fa-solid fa-wifi"></i>`;
    document.querySelector(".message .ico").style.backgroundColor = "#2ecc71";
    document.querySelector("#message-title").textContent = "You're online now";
    document.querySelector("#message-text").textContent = "Hurray! internet is connected";
    setTimeout(()=>{
        document.querySelector(".message").style.animation = "fade_out 1s 1";
    }, 2000 )
}

function offLine(){
    document.querySelector(".message .ico").innerHTML = `<img src="./wi-fi-off.png" alt="">`;
    document.querySelector(".message .ico").style.backgroundColor = "#ccc";
    document.querySelector("#message-title").textContent = "You're offline now";
    document.querySelector("#message-text").textContent = "Opps! internet is disconneted";
    setTimeout(()=>{
        document.querySelector(".message").style.animation = "fade_in 1s 1 forwards";
    }, 2000)
}

window.onload = ()=>{
    if (window.navigator.onLine){
        onLine()
    }else{
        offLine()
    }
}

setInterval(()=>{
    if (window.navigator.onLine){
        onLine()
    }else{
        offLine()
    }
}, 500);

let close_msg = document.querySelector("#close");

close_msg.addEventListener("click", ()=>{
    document.querySelector(".message").style.animation = "fade_out 1s 1 forwards";
})
