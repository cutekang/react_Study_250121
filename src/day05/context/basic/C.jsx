import React from 'react';
import CharContext from './CharContext';

const C = () => {
    return (
        <CharContext.Consumer>
            {
                (context) => <p style={{color : context.color}}>ddd</p>
            }
        </CharContext.Consumer>
    );
};

export default C;