import React from 'react';
import './card-style.css';
import './cards';

const Card=(props:any)=>{

return(
    <div className="card text-center">
        <div className="overflow">
<div className="card-img-top"></div>
        </div>
        <div className="card-body text-dark">
            <h4 className="card-title">{props.title}

            </h4>
            <p className="card-text text-secondary"></p>
            <button className="btn btn-outline-success"  onClick={props.Change}>{props.Name}</button>
        </div>
    </div>
);
}
export default Card;
