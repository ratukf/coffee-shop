import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
              <div class="left">
                <h1>CoffeeKing</h1>
                <p>
                Experience the freshness of coffee daily at CoffeeKing 
                </p>

                <div className="iconFooter">
                    <a href="/"><i></i></a>
                    <a href="/"><i></i></a>
                    <a href="/"><i></i></a>
                </div>
            </div>
            <div class="right">
                <p>Subscribe to our newsletter</p>
                <p>Dapatkan informasi terbaru mengenai promo, diskon, dan product terbaru dari CoffeeKing</p>
                <input placeholder='Enter your email' />
                <div>
                    <button className='subscribeButton' type="submit" name='submit' disabed>Submit</button>
                </div>
                 
            </div>
        </footer>
    )
}

export default Footer;