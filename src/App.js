import './App.css';
import { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Transactions from './components/Transactions';
import Operations from './components/Operations';
import Categories from './components/Categories';
import axios from 'axios'
class App extends Component {
  constructor()
  {
    super()
    this.state = {
      transactions: [] 
    }
  }
  withdrawAmount = () =>
  {
    this.getTransactions()
  }
  depositAmount = () =>
  {
    this.getTransactions()
  }

  deleteTransaction = async (transaction) =>
  {
    
    await axios.delete('http://localhost:4200/transaction',{data: transaction})
    this.getTransactions()
  }

 async getTransactions()
  {
     const response = await axios.get('http://localhost:4200/transactions')
      this.setState({ transactions: response.data })
  }

  async componentDidMount()
   {
    await this.getTransactions()
  }
render()
{
  const transactions = this.state.transactions
  let balance = 0
 transactions.map( t => 
     balance += t.amount
  )
  return(
    <Router>  
      <div className='App'>
    <nav> 
      <ul className='navBar'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/transactions">Transactions</Link>
        </li>
        <li>
          <Link to="/operations">Operations</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </nav>
    <div id="balance">
      <span className="end1">Balance</span>
      <span className="start1">{balance}$</span> 
    </div>
    <Route exact path="/transactions" render={() => <Transactions transactions={transactions} deleteTransaction={this.deleteTransaction}/>}/>
    <Route exact path="/operations" render={() => <Operations withdrawAmount={this.withdrawAmount} depositAmount={this.depositAmount}/>}/>
    <Route exact path="/categories" render={() => <Categories transactions={transactions}/>}/>
    </div>
    </Router>
    
 
  );
}
}

export default App;
