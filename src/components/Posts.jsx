import { Link } from "react-router-dom";
import { products } from "../Data";

const Posts = () => {
  console.log(products);
  return (
    <>
      {products.map((prod) => {
        return (
          <Link key={prod.id} to={`/post/${prod.id}`} className="product">
            <div className="prod-img-container">
              <img className="prod-img" src={prod.image} />
            </div>
            <h3>{prod.name}</h3>
          </Link>
        );
      })}
    </>
  );
};

export default Posts;
