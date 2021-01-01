
import axios from 'axios';
import { Component } from 'react';
import {
    Redirect
  } from "react-router-dom";
import '../style/operations.css'
class Operations extends Component {
constructor()
{
    super()
    this.state = {
        amount: 0,
        vendor:"",
        category:"",
        redirect:false
    }
}

handleInputChange = event => {
    const {value, name} = event.target;    
    this.setState({
      [name]: value
    });
}

depositAmount = () =>
{
    this.componentDidMount()

}
withdrawAmount = () =>
{

    this.setState
    (
        {
            amount: this.state.amount * -1
        }
    ) 
    this.componentDidMount()
   
    
}
 componentDidMount = async () =>
{
    if(this.state.amount !== 0)
    {
        const save = this.state
        console.log(save)

        const resp = await axios.post('http://localhost:4200/transaction',save)
        console.log(resp.data)
        this.setState(
            {
                amount: 0,
                vendor:``,
                category: ``,
                redirect:true
            })
        this.props.depositAmount()
    }
}
render()
{


  return( 
    <div className="operations">
        <span>Enter Amount:</span>
         <input id="amount-input" type="number" value={this.state.amount} name="amount" onChange={this.handleInputChange}/>
         <span>Enter Vendor:</span>
         <input placeholder="Vendor..." id="vendor-input" name="vendor" value={this.state.vendor} onChange={this.handleInputChange}/>
         <span>Enter Category:</span>
         <input placeholder="Category..." id="category-input" name="category" value={this.state.category} onChange={this.handleInputChange}/>
         <button onClick={this.depositAmount} >Deposit</button>
         <button onClick={this.withdrawAmount}>Withdraw</button>
         {this.state.redirect?<Redirect to="/transactions"/>:null}
    </div>
  )
}
}

export default Operations;
