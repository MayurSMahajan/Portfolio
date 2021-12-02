import React from 'react';

function AttributeDiv (props){
    return (
        <div className="attribute-div">
            <h2 className="attribute-name">{props.name}</h2>
            {props.content.map(content => <p className="attribute-content">{content}</p>)}
        </div>
    );
}

export default AttributeDiv;