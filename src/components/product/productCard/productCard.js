import styles from './ProductCard.module.sass';

const ProductCard = props => {
    return(
        <div key={props.id}>
            <ul>
                <li>{props.title}</li>
                <li>{props.price}</li>
                <li>{props.description}</li>
            </ul>
        </div>
    );
}

export default ProductCard;