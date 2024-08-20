import './Discount.css'

function Discount() {
    return (
        <section className="home-discount">
            <div className="home-discount-text">
                <h2>PROMO ULANG TAHUN</h2>
                <h2>INDONESIA</h2>
                <p>Berlaku dari tanggal 17 Agustus 2024 - 20 Agustus 2024. <br /><span id="note">*selama persediaan masih ada</span></p>
            </div>
            <div className="home-discount-image">
                <img src="/images/menu-mocha.png" alt="" />
                <p>1 Cup Mocha</p>
                <h2><s>Rp. 35k</s> <span id="discountedPrice">Rp. 25k</span></h2>
            </div>
        </section>
    )
}

export default Discount;