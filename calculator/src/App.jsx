import { useState } from 'react'
import './App.css'

function App() {
  const [price, setPrice] = useState('')
  const [discount, setDiscount] = useState('')
  const [grossPrice, setGrossPrice] = useState(0)
  const [vat, setVat] = useState(0)
  const [total, setTotal] = useState(0)
  const [showResult, setShowResult] = useState(false)

  function calculate() {
    const priceValue = parseFloat(price)
    const discountValue = parseFloat(discount)

    if (isNaN(priceValue) || isNaN(discountValue)) {
      alert("Please enter valid numbers.")
      return
    }

    const gross = priceValue - (priceValue * discountValue / 100)
    const vatAmount = gross * 0.07
    const totalAmount = gross + vatAmount

    setGrossPrice(gross)
    setVat(vatAmount)
    setTotal(totalAmount)
    setShowResult(true)
  }

  return (
    <div className="calculator">
      <h2>Discount + VAT Calculator</h2>

      <label htmlFor="price">Price (THB):</label>
      <input
        type="number"
        id="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="e.g. 1000"
      />

      <label htmlFor="discount">Discount (%):</label>
      <input
        type="number"
        id="discount"
        value={discount}
        onChange={(e) => setDiscount(e.target.value)}
        placeholder="e.g. 10"
      />

      <button onClick={calculate}>Calculate</button>

      {showResult && (
        <div className="result" id="result">
          <p>💸 <strong>Gross Price:</strong> <span>{grossPrice.toFixed(2)}</span> THB</p>
          <p>🧾 <strong>VAT (7%):</strong> <span>{vat.toFixed(2)}</span> THB</p>
          <p>🧮 <strong>Total with VAT:</strong> <span>{total.toFixed(2)}</span> THB</p>
        </div>
      )}
    </div>
  )
}

export default App
