function Exponent(props) {
  const {num, exponent} = props
  let result = Math.pow(num, exponent)

  let multiplicationString = `${num}`;

  for (let i = 1; i < exponent; i++) {
    multiplicationString += ` * ${num}`;
  }

  return (
    <div className="exponent-counter-container">
    <p className="exponent-label">{num} <sup style={{fontSize:"20px"}}> {exponent}</sup></p>
    <p className="exponent-result">{multiplicationString} = <span className="total">{result}</span></p>
  </div>
  )
}

export default Exponent