import { useState } from 'react';
import Header from './Header'

/** Generates a header with a button to generate a random quote
 *
 * Props:
 * - none
 *
 * State:
 * - quote
 *
 * App -> HeaderApp -> Header
 *
 */

function HeaderApp() {
  const [quote, setQuote] = useState("");

  async function generateQuote() {
    const newQuoteResp = await fetch("https://inspo-quotes-api.herokuapp.com/quotes/random");
    const newQuote = await newQuoteResp.json()
    setQuote(newQuote.quote);
  }

  return <Header quote={quote} generateQuote={generateQuote}/>;
}

export default HeaderApp;