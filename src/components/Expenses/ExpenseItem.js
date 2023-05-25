import React from 'react';

import ExapenseDate from '../Expenses/ExpenseDate'
import Card from '../UI/Card';
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // const [title, setTitle]=useState(props.title);

  // const clickHandler = () => {
  //   setTitle('update');
  //   console.log(title);
  // }
  return (
    <Card className="expense-item">
      <ExapenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
}

export default ExpenseItem;
