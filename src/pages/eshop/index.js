import ProductGrid from '../../components/product/productGrid/productGrid';
import TitlePage from '../../components/UI/Title/TitlePage';
import authService from "../../services/auth.service";
import styles from "./index.module.sass";

const Index = () => {
    return(
        <div>
            <TitlePage title="Products presentation" />
            <ProductGrid />
        </div>
    );
}

export default Index;