import { useState } from "react"

interface IProduct {
    name: string
    image: string
    price: number
}

const initialProducts: IProduct[] =
    [{
        name: 'keyboard',
        image: 'waifu1.jpg',
        price: 200
    },
    {
        name: 'headphones',
        image: 'waifu2.jpg',
        price: 300
    },
    {
        name: 'mouse',
        image: './images/image003.png',
        price: 100
    }
    ]

    
    export default function CardMap() {
    const [products, setProducts] = useState(initialProducts)
    return (
        <>
            <div className="'App-container'">
                {products.map(product => {
                    return (
                        <div className={'App-item'}>
                            <div><h3> {product.name}</h3></div>
                            <div>
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className={'Price-item'}>price${product.price}</div>
                        </div>
                )
                })}</div>
        </>
    );
};