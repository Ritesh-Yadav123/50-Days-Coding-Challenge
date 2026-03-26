let convert = document.getElementById("convertBtn");
let disresult = document.getElementById("result");

convert.addEventListener("click", currencyExchange);

async function currencyExchange() {
    let amount = document.getElementById("amountInput").value;
    let from = document.getElementById("fromCurrencyInput").value;
    let to = document.getElementById("toCurrencyInput").value;

    try {
        let url = `https://open.er-api.com/v6/latest/${from}`;
        let res = await fetch(url);
        let data = await res.json();

        let rate = data.rates[to];

        let result = amount * rate;

        disresult.innerText = `${amount} ${from} = ${result.toFixed(2)} ${to}`;

    }


    catch (err) {
        document.getElementById("result").innerText = "Error fetching data";
        console.log(err);
    }

}