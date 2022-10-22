import { useParams } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = () => {
  const params = useParams();
  console.log(params.id);

  const productsArr = [
    {
      id: 1,

      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id: 2,

      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id: 3,

      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      id: 4,

      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <div>
      {productsArr.map((prod) => {
        return (
          <div className="product">
            <h3>{prod.id}</h3>
            <h2>{prod.title}</h2>
            <img src={prod.imageUrl} alt=" " />
            <h3>{prod.price}</h3>
            <div className="foot">
              <h1>REVIEW</h1>
              <p>
                This product is one of the best product present in the WORLD...!
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductDetail;
