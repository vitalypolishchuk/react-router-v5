import { useParams, useLocation } from "react-router-dom";
import { products } from "../Data";

const Post = ({ match }) => {
  const { id } = useParams();
  const product = products.find((prod) => prod.id === id);

  const query = new URLSearchParams(useLocation().search);
  const name = query.get("name");
  const surname = query.get("surname");

  return (
    <>
      <h1>Id is {product.id}</h1>
      <h1>
        Query: {name} {surname}
      </h1>
    </>
  );
};

export default Post;
