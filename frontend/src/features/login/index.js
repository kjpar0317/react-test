import React, { useState } from 'react';
// import { RandomQuote } from '../../components';

const Login = () => {
    const [ minimumLength, setMinimumLength ] = useState(0);
    const handleChange = (event) => {
        setMinimumLength(parseInt(event.target.value || 0, 10));
    };

    return (
        <div>
            <div>
                {/* <RandomQuote minimumLength={minimumLength} /> */}
            </div>
            <label>
                Minimum quote length:
                <input className="form-control" type="number" min={0} value={minimumLength} onChange={handleChange} />
            </label>
        </div>
    );
};

export default Login;
