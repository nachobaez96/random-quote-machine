import React, { useEffect, useState } from 'react';
import quotes from "../quotesData"

export default function QuoteDisplay() {

    const [quote, setQuote] = useState('')

    useEffect(() => {
        getQuote();
    }, []);

    function getQuote() {
        const quotesArray = quotes
        const randomNumber = Math.floor(Math.random() * quotesArray.length)
        setQuote(quotesArray[randomNumber])
    }

        return (
            <div className='quoteDisplay'>
                <p className='quote'>{quote.text}</p>
                <p className='author'>- {quote.author}</p>
                <button className="new-quote-button" onClick={getQuote}>New Quote</button>
            </div>
        )
    }

// change background color depending on . etc

// https://v1.scrimba.com/learn/learnreact/project-refactor-state-coaf8489fbc3d70a207f29713