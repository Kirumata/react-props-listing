import { item, StyleQuantity, TrimTitle, GetPrice } from './utils';
import './Listing.css'

function Listing({ items }: { items: item[] }) {
    let elements = [];
    for (let i = 0; i < items.length; i++) {
        elements.push(
            <div key={items[i].listing_id} className="item">
                <div className="item-image">
                    <a href={items[i].url}>
                        <img src={items[i].MainImage.url_570xN}></img>
                    </a>
                </div>
                <div className="item-details">
                    <p className="item-title">{TrimTitle(items[i].title)}</p>
                    <p className="item-price">{GetPrice(items[i].currency_code, items[i].price)}</p>
                    <p className={`item-quantity ${StyleQuantity(items[i].quantity)}`}>{items[i].quantity} left</p>
                </div>
            </div>
        );
    }
    return (
        <div className="item-list">
            {elements}
        </div>
    )
}

export default Listing