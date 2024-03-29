const ProductCard = props => {
    return(
        <div key={props.key}>
            <ul>
                <li>{props.title}</li>
                <li>{props.price}</li>
                <li>{props.description}</li>
            </ul>
        </div>
    );
}

export default ProductCard;