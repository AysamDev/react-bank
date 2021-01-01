
import { Component } from 'react';
import Transaction from './Transaction';
import '../style/transactions.css'

class Transactions extends Component {

render()
{
  let transactions = this.props.transactions
    console.log(transactions)
  return(
    <div className="transactions">
        {transactions.map( (i,t) =>
            {
                return <Transaction key={i} transaction={t} deleteTransaction={this.props.deleteTransaction}/>
            })
        }
    </div>
 
  );
}
}

export default Transactions;
