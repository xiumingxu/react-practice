import React , {Component} from 'react';

const ListDisplay = (props) => {
    
    
    <div>
        <p> Shopping list </p>
        <p>{props}</p>
        <ol className="item-list">
          {props.items.map((item, index) => <li key={index}>{item}</li>)}
        </ol>

    </div>


};


export default ListDisplay;
