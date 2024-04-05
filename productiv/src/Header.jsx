import "./Header.css";

/** Renders page header
 *
 * Props:
 * - quote
 * - generateQuote()
 *
 * State:
 * - none
 *
 * HeaderApp -> Header
 *
 */

function Header({ quote = "", generateQuote }) {

  return (
    <header className="container-fluid pt-4 pb-1">
      <div className="container">
        <h1>Prøductïv</h1>
        <p className="lead">The best name in todo list management.</p>
      </div>
      <div className="container Header-quote-area">
        <p className="Header-quote">{ quote && `${quote.text} -${quote.author}`}</p>
        <button
          onClick={generateQuote}
          className="Header-button">
          {quote
            ? "Nü quøte"
            : "Click here for an inspirational quøte!"}
        </button>
      </div>
    </header>
  );
}

export default Header;