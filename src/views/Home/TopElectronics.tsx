import { IProductState } from "../../components/interfaces/states/ProductState";
import TopProductsByCategories from "./TopProductsByCategories";

interface ITopElectronicsProps {
    data: IProductState[];
}

const TopElectronics = ({ data }: ITopElectronicsProps) => {
    return (
        <div>
            <TopProductsByCategories category="Electronics" products={data} />
        </div>
    );
}

export default TopElectronics;
