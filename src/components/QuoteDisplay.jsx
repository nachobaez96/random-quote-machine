import { useEffect, useState } from 'react';
// import quotes from "../quotesData"

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
    const [favourites, setFavourites] = useState(() => {
        const savedFavs = localStorage.getItem('favs')
        return savedFavs ? JSON.parse(savedFavs) : []
      })

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(favourites))
      }, [favourites])

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

    const addFavourite = () => {
        setFavourites((prevFavourites) => [...prevFavourites, quote])
    }

    const removeFavourite = (index) => {
        setFavourites((prevFavourites) => prevFavourites.filter((el, elIndex) => elIndex !== index))
    }

    return (
        <div>
            <div className='quote-display'>
                <p className='quote'>{quote.text}</p>
                <p className='author'>- {quote.author}</p>
                <button className="new-quote-button" onClick={getNewQuote}>New Quote</button>
                <button className="new-quote-button" onClick={addFavourite}>Add to Favourites</button>
            </div>
            <div className='favourites-container'>
                {favourites.map((fav, index) => (
                    <div className='favourite-box' key={index}>
                        <p className='quote'>{fav.text}</p>
                        <p className='author'>- {fav.author}</p>
                        <button className="remove-fav-button" onClick={() => removeFavourite(index)}>Remove favourite</button>
                    </div>
                ))}
            </div>
        </div>
    )
}