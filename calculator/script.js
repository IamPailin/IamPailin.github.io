function calculate() {
    const price = parseFloat(document.getElementById("price").value);
    const discount = parseFloat(document.getElementById("discount").value);
  
    if (isNaN(price) || isNaN(discount)) {
      alert("Please enter valid numbers.");
      return;
    }
  
    const gross = price - (price * discount / 100);
    const vat = gross * 0.07;
    const total = gross + vat;
  
    document.getElementById("grossPrice").innerText = gross.toFixed(2);
    document.getElementById("vat").innerText = vat.toFixed(2);
    document.getElementById("total").innerText = total.toFixed(2);
    document.getElementById("result").style.display = "block";
  }
  