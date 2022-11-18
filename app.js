const url = "https://api.adviceslip.com/advice",
    quote_here = document.getElementById('quote_here'),
    quote_no = document.getElementById('quote_no'),
    genQuote = document.getElementById('genQuote');

fetch(url)
    .then(response => response.json())
    .then(data => {

        const dta = data["slip"]
        quote_no.innerText = dta.id
        quote_here.innerHTML = `<i class="fa-solid fa-quote-left si"></i> ${dta.advice} <i class="fa-solid fa-quote-right si"></i>`;

    })
    genQuote.addEventListener('click', () => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const dta = data["slip"]
                quote_no.innerText = dta.id
                quote_here.innerHTML = `<i class="fa-solid fa-quote-left si"></i> ${dta.advice} <i class="fa-solid fa-quote-right si"></i>`;
            })

    })