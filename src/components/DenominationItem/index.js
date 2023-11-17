// Write your code here
import './index.css'

const DenominationItem = props => {
  const {details, updateBalance} = props
  const {value} = details

  const withdrawMoney = () => {
    updateBalance(value)
  }
  return (
    <li className="denomination-item">
      <button type="button" className="button" onClick={withdrawMoney}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
