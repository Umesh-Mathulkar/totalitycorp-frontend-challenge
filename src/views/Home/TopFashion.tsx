import { IProductState } from "../../components/interfaces/states/ProductState";
import TopProductsByCategories from "./TopProductsByCategories";

interface ITopElectronicsProps {
    data: IProductState[];
}

const TopFashion = ({ data }: ITopElectronicsProps) => {
    return (
        <div>
            <TopProductsByCategories category="Fashion" products={data} />
        </div>
    );
}

export default TopFashion;
