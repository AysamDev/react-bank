
import { Component } from 'react';
import Table from 'react-bootstrap/Table'
import '../style/categories.css'
class Categories extends Component {


handleTransactions = (transactions) =>
{
    let categories = {}
    transactions.map(t => {
        categories[t.category]?categories[t.category] += t.amount: categories[t.category] = t.amount
        return true;
    })
    return Object.entries(categories)
}

render()
{
  let transactions = this.props.transactions
  transactions = this.handleTransactions(transactions)

  return(
    <div className="categories">
<Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Category</th>
      <th>Amount ($)</th>
    </tr>
  </thead>
  <tbody>
      {
    transactions.map(
        (t,i) =>
        {
            let amount = t[1]
            return(
                <tr key={i} className={amount > 0?'cpositive':'cnegative'}>
                <td>{i}</td>
                <td>{t[0]}</td>
                <td>{amount}</td>
            </tr>
            )
    })
      }
  </tbody>
</Table>
    </div>
 
  );
}
}

export default Categories;
