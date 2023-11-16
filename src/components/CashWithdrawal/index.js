// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  updateBalance = value => {
    this.setState(prevstate => ({
      balance:
        prevstate.balance - value >= 0
          ? prevstate.balance - value
          : prevstate.balance,
    }))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    // console.log(balance)

    return (
      <div className="bg-container">
        <div className="balance-container">
          <div className="name-container">
            <h1 className="icon">S</h1>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="amount-container">
            <p className="balance">Your Balance</p>
            <p className="amount"> {balance}</p>
          </div>

          <p className="rupee">In Rupees</p>
          <p className="withdraw">Withdraw</p>
          <p className="sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominationlist">
            {denominationsList.map(denomination => (
              <DenominationItem
                key={denomination.id}
                details={denomination}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
