
import { Component } from 'react';
import '../style/transaction.css'

class Transaction extends Component {

deleteTransaction = () =>
{
    this.props.deleteTransaction(this.props.transaction)
    
}


render()
{
  let transaction = this.props.transaction
  

  return(
    <div className={`transaction ${transaction.amount > 0?'positive':'negative'}`}>
        <div className="amount">Amount: {transaction.amount}$</div>
        <div className="vendor">Vendor: {transaction.vendor}</div>
        <div className="category">Category: {transaction.category}</div>
        <button onClick={this.deleteTransaction}>X</button>
    </div>
 
  );
}
}

export default Transaction;
