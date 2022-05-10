import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const dummy_products = [
  {
    id: "p1",
    price: 2,
    title: "my first book",
    description: "blabla",
  },
  {
    id: "p2",
    price: 5,
    title: "my second book",
    description: "blablabla",
  },
  {
    id: "p3",
    price: 5,
    title: "my third book",
    description: "blboringashell",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummy_products.map((product) => {
          return (
            <ProductItem
              id={product.id}
              key={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
