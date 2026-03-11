import Breadcrumb from "./Breadcrumb";
import type { Option } from "./SelectField";

interface NavbarProps {
    selectedProvince: Option | undefined;
    selectedCity: Option | undefined;
    selectedDistrict: Option | undefined;
}

const Navbar = ({ selectedProvince, selectedCity, selectedDistrict }: NavbarProps) => {
    return (
        <div className="flex w-full h-20 border-b-2 border-gray-200 items-center px-8">
            <Breadcrumb selectedProvince={selectedProvince} selectedCity={selectedCity} selectedDistrict={selectedDistrict} />
        </div>
    )
}

export default Navbar;