function calculateVAT() {
    const basePrice = parseFloat(document.getElementById('basePrice').value) || 0;
    const vatRate = parseFloat(document.getElementById('vatRate').value) || 0;

    const vatAmount = (basePrice * vatRate) / 100;
    const totalPrice = basePrice + vatAmount;

    document.getElementById('basePriceOutput').textContent = `$${basePrice.toFixed(2)}`;
    document.getElementById('vatAmount').textContent = `$${vatAmount.toFixed(2)}`;
    document.getElementById('totalPrice').textContent = `$${totalPrice.toFixed(2)}`;
}

function reverseCalculateVAT() {
    const totalPrice = parseFloat(document.getElementById('totalPriceInput').value) || 0;
    const vatRate = parseFloat(document.getElementById('vatRateInput').value) || 0;

    const basePrice = totalPrice / (1 + vatRate / 100);
    const vatAmount = totalPrice - basePrice;

    document.getElementById('basePriceReverse').textContent = `$${basePrice.toFixed(2)}`;
    document.getElementById('vatAmountReverse').textContent = `$${vatAmount.toFixed(2)}`;
    document.getElementById('totalPriceReverse').textContent = `$${totalPrice.toFixed(2)}`;
}
function calculate(){
    const p = $("basePrice").val();
    console.log("Base Price",p)
    const vatRate = 7;
    const vat = (p * vatRate)/ 100;
    console.log("VAT",vat);
    const total = parseFloat(p) + vat;
    console.log("Totatl Price",total);

    $("#result").html(`
    <p>Base Price: ${p}</p>
    <p>VAT (7%): ${vat.toFixed(2)}</p>
    <p>Total Price: ${total.toFixed(2)}</p>
    `);
}