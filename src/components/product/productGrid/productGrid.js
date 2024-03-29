import { getProducts } from "../../../graphql/queries/products";
import { useQuery } from "@apollo/react-hooks";
import ProductCard from "../productCard/productCard";

const ProductGrid = () => {
    const { loading, error, data } = useQuery(getProducts);
    
    if (loading) {
        return "loading...";
    }

    if (error) {
        console.log(error);
        return null;
    }

    console.log(data);

    return(
        <div> this is my product grid
            {
                data.getProducts.map((product) => (
                    <ProductCard 
                        key={product.id}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                    />
                ) )
            }
        </div>
    );
}

export default ProductGrid;