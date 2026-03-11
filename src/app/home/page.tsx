import { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import type { Option } from "../../components/SelectField";
import Content from "../../components/Content";

const HomePages = () => {
    const idProvince = localStorage.getItem('province');
    const idCity = localStorage.getItem('city');
    const idDistrict = localStorage.getItem('district');
    const nameProvince = localStorage.getItem('provName');
    const nameCity = localStorage.getItem('cityName');
    const nameDistrict = localStorage.getItem('cityDistrict');

    const initialProvince: Option | undefined = idProvince
        ? { id: Number(idProvince), name: nameProvince } as Option
        : undefined;
    
    const initialCity: Option | undefined = idCity
    ? { id: Number(idCity), name: nameCity } as Option
    : undefined;

    const initialDistrict: Option | undefined = idDistrict
    ? { id: Number(idDistrict), name: nameDistrict } as Option
    : undefined;

    const [selectedProvince, setSelectedProvince] = useState<Option | undefined>(initialProvince);
    const [selectedCity, setSelectedCity] = useState<Option | undefined>(initialCity);
    const [selectedDistrict, setSelectedDistrict] = useState<Option | undefined>(initialDistrict);

    return (
        <main className="flex w-full min-h-screen bg-[#f8fafc]">
            <Sidebar
                selectedProvince={selectedProvince}
                selectedCity={selectedCity}
                selectedDistrict={selectedDistrict}
                setSelectedProvince={setSelectedProvince}
                setSelectedCity={setSelectedCity}
                setSelectedDistrict={setSelectedDistrict}
            />
            <div className="flex flex-col w-full">
                <Navbar
                    selectedProvince={selectedProvince}
                    selectedCity={selectedCity}
                    selectedDistrict={selectedDistrict}
                />
                <Content
                    selectedProvince={selectedProvince}
                    selectedCity={selectedCity}
                    selectedDistrict={selectedDistrict}
                />
            </div>
        </main>
    )
}

export default HomePages;