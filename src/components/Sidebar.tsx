import { useEffect, useState } from "react";
import ButtonReset from "./ButtonReset";
import SelectField, { type Option } from "./SelectField";

interface SidebarProps {
    selectedProvince: Option | undefined;
    selectedCity: Option | undefined;
    selectedDistrict: Option | undefined;
    setSelectedProvince: (val: Option | undefined) => void;
    setSelectedCity: (val: Option | undefined) => void;
    setSelectedDistrict: (val: Option | undefined) => void;
}

const Sidebar = ({ selectedProvince, selectedCity, selectedDistrict, setSelectedProvince, setSelectedCity, setSelectedDistrict }: SidebarProps) => {

    const [responseData, setResponseData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/data/indonesia_regions.json");
                if (!response.ok) throw new Error("Failed to fetch");
                const json = await response.json();
                setResponseData(json);
            } catch (err) {
                console.log(`Fetch failed, using dummy data. Error: ${err}`);
            } finally {
                console.log("Fetch attempt completed")
            }
        };

        fetchData();
    }, []);

    const provinces = responseData?.["provinces"] || [];
    const filteredCities = (responseData?.["regencies"] || []).filter(
        (city) => city["province_id"] === Number(selectedProvince?.id)
    );
    const filteredDistricts = (responseData?.["districts"] || []).filter(
        (district) => district["regency_id"] === Number(selectedCity?.id)
    );


    const handleProvinceChange = (val: Option | undefined) => {
        setSelectedProvince(val);
        setSelectedCity(undefined);
        setSelectedDistrict(undefined);
        localStorage.setItem('province', val?.id.toString() || "");
        localStorage.setItem('provName', val?.name || "");
    };

    const handleCityChange = (val: Option | undefined) => {
        setSelectedCity(val);
        localStorage.setItem('city', val?.id.toString() || "");
        localStorage.setItem('cityName', val?.name || "");
    };

    const handleDistrictChange = (val: Option | undefined) => {
        setSelectedDistrict(val);
        localStorage.setItem('district', val?.id.toString() || "");
        localStorage.setItem('cityDistrict', val?.name || "");
    }

    const handleButtonReset = () => {
        setSelectedProvince(undefined);
        setSelectedCity(undefined);
        setSelectedDistrict(undefined);
        localStorage.clear();
    }

    return (
        <div className="flex flex-col w-72 h-screen border-r-2 border-gray-200 px-4 py-4">
            <div className="flex mb-8 gap-2 items-center">
                <img src="/globe.png" alt="arrow" className="w-8 bg-[#e2f0fb] rounded-xl" />
                <p className="font-bold">
                    Frontend Assessment
                </p>
            </div>
            <p className="text-gray-500 mb-2">
                FILTER WILAYAH
            </p>
            <div className="flex flex-col gap-4 mb-8">
                <SelectField
                    label="PROVINSI"
                    value={selectedProvince?.id.toString() || ""}
                    onChange={handleProvinceChange}
                    options={provinces}
                    placeholder="Pilih provinsi..."
                    disabled={false}
                />
                <SelectField
                    label="KOTA/KABUPATEN"
                    value={selectedCity?.id.toString() || ""}
                    onChange={handleCityChange}
                    options={filteredCities}
                    placeholder={selectedProvince ? "Pilih kota..." : "Pilih provinsi dulu"}
                    disabled={!selectedProvince}
                />
                <SelectField
                    label="KECAMATAN"
                    value={selectedDistrict?.id.toString() || ""}
                    onChange={handleDistrictChange}
                    options={filteredDistricts}
                    placeholder={selectedCity ? "Pilih kecamatan..." : "Pilih kota dulu"}
                    disabled={!selectedCity}
                />
            </div>

            <ButtonReset
                handleChange={handleButtonReset}
            />
        </div>
    )
}

export default Sidebar;