function Newsletter() {
  return (
    <div className="newsletterWrapper">

      <div className="newsletter">

        <h2> Subscribe to our newsletter!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit, rutrum iaculis
          habitasse gravida magna vulputate massa posuere, malesuada quam ad
          ridiculus magnis tristique. Porta fermentum in integer nostra
          scelerisque quis luctus.
        </p>



      </div>

      <form id="newsletterForm">
        <input type="email" className="emailNewsletter"/>
        <button type="submit" className="subscribe">Send!</button>
      </form>


    </div>
  );
}

export default Newsletter;
