import { useState } from "react";
import VideoKSE from "./videoKSE";

const noWaifus: any = [];

interface IProduct {
  name: string;
  image: string;
  price: number;
}

const initialProducts: IProduct[] = [
  {
    name: "waifu",
    image: "waifu1.jpg",
    price: 2000,
  },
  {
    name: "waifu",
    image: "waifu2.jpg",
    price: 3000,
  },
  {
    name: "waifu",
    image: "waifu3.jpg",
    price: 1000,
  },
];

export default function CardMap() {
  const [products, setProducts] = useState(initialProducts);
  return (
    <>
      <VideoKSE />
      <div className="waifu4BG">
        <img src="waifu4.jpg" alt=" " className="waifu4"></img>
      </div>
        <div className="div-button-item">
          <button
            className="button-item"
            onClick={() => {
              setProducts(noWaifus);
            }}
          >
            Block da Waifus
          </button>
        </div>
        <div className="div-button-item2">
          <button
            className="button-item2"
            onClick={() => {
              setProducts(initialProducts);
            }}
          >
            Active da Waifus
          </button>
        </div>
      <div className="'App-container'">
        {products.map((product) => {
          return (
            <div className={"App-item"}>
              <div>
                <h3> {product.name}</h3>
              </div>
              <div>
                <img src={product.image} alt={product.name} />
              </div>
              <div className={"Price-item"}>price${product.price}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
