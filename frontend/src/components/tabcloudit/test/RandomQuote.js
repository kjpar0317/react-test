import React from 'react';
import { Subscription } from "react-apollo";
import { QUOTES_SUBSCRIPTION } from '../../../gqls'
import LoadingMessage from './LoadingMessage'
import Quote from './Quote'

const RandomQuote = ({minimumLength}) => {
    return (
        <Subscription subscription={QUOTES_SUBSCRIPTION} variables={{minimumLength}}>
        {({ data, loading }) => (
            loading ? <LoadingMessage /> : <Quote quote={data.randomQuote} />
        )}
        </Subscription>
    );
};

export default RandomQuote;
