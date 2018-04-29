import ReactDOM from 'react-dom';
import React from 'react';

const look = "You shouldn't look too far."
const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
]

// Define these exported classes
export class OlderCoaster extends React.Component {
render(){
  return(
    <div className="oldercoaster">
    <p>Two grannies having the time of their life!</p>
    <p>Passengers:</p>
    <ul>
    <li>Agnes</li>
    <li>Muriel</li>
    </ul>
    </div>
  )
}
}

export class InFrontOfYou extends React.Component {
render(){
  return(
    <div>
  <p>{look}</p>
  <p>Sometimes, the solution is right in front of you.</p>
</div>
  )
}
}

export class ButcherShop extends React.Component {
render(){
  return(
    <div class="butcher-shop">
    <p>Hello! We have the following products for sale today:</p>
    <ul>
    {BUTCHER_PRODUCTS.map(function(product){
      return(<li>{product}</li>)
    })}</ul>
    </div>
  )
}
}


ReactDOM.render(
  <div>
  <OlderCoaster></OlderCoaster>
  <InFrontOfYou></InFrontOfYou>
  <ButcherShop></ButcherShop>
  </div>,
  document.getElementById('root')
)
