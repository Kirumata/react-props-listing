export interface item {
    listing_id: number,
    url: string,
    MainImage: {
        url_570xN: string,
    },
    title: string,
    currency_code: string,
    price: string,
    quantity: number,
}

export function TrimTitle(fullTitle: string): string {
    if (fullTitle.length < 50) {
        return fullTitle;
    }
    else {
        return `${fullTitle.substring(0, 50)}...`;
    }
}

export function StyleQuantity(quantity: number): string {
    if (quantity > 20) {
        return "level-high";
    }
    if (quantity <= 20) {
        return "level-medium";
    }
    if (quantity <= 10) {
        return "level-low";
    }
    else return "";
}

export function GetPrice(currency_code: string, price: string): string {
    switch (currency_code) {
        case "USD":{
            return `$${price}`;
        }
        case "EUR":{
            return `€${price}`;
        }
        default:{
            return `${price} ${currency_code}`;
        }
    }
}