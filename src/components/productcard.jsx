// write product card here
import "./product.css";
import ViewProductButton from "./button";
import image from '/image.png'
const productcard = () => {
  const productImage = image;
  const productName = "Apple Watch Series 7";
  const price = "$399.99";

  return (
    <div className="product-card">
      <img src={productImage} alt={productName} className="product-image" />
      <h2 className="product-name">{productName}</h2>
      <p className="price">{price}</p>
      <ViewProductButton />
    </div>
  );
};

export default productcard;
