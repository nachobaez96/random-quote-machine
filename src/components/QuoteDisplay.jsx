import React, { useEffect, useState } from 'react';
import quotes from "../quotesData"

export default function QuoteDisplay() {

    // const [quote, setQuote] = useState('')

    // useEffect(() => {
    //     getQuote();
    // }, []);

    // function getQuote() {
    //     const quotesArray = quotes
    //     const randomNumber = Math.floor(Math.random() * quotesArray.length)
    //     setQuote(quotesArray[randomNumber])
    // }

    const [quote, setQuote] = useState({ text: '', author: '' })

    const fetchQuote = async () => {
        try {
            const res = await fetch('https://api.quotable.io/random')
            const data = await res.json()
            setQuote({ text: data.content, author: data.author })
        } catch (error) {
            console.error('Error fetching quote:', error)
        }
    }

    useEffect(() => {
        fetchQuote()
    }, [])

    const getNewQuote = async () => {
        await fetchQuote()
    }

    return (
        <div className='quoteDisplay'>
            <p className='quote'>{quote.text}</p>
            <p className='author'>- {quote.author}</p>
            <button className="new-quote-button" onClick={getNewQuote}>New Quote</button>
        </div>
    )
}