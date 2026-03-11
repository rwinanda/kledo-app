import type { Option } from "./SelectField";

interface ContentProps {
    selectedProvince: Option | undefined;
    selectedCity: Option | undefined;
    selectedDistrict: Option | undefined;
}

const Content = ({selectedProvince, selectedCity, selectedDistrict}: ContentProps) => {
    return (
        <div className={`flex flex-col min-h-screen items-center py-20 gap-8`}>
            <div className={`flex flex-col gap-2 items-center justify-center ${selectedProvince?.name ? "" : "hidden"}`}>
                <p className="text-xs text-[#68ade7]">
                    PROVINSI
                </p>
                <p className="text-4xl font-bold">
                    {selectedProvince?.name}
                </p>
            </div>

            <div className={`flex flex-col gap-2 items-center justify-center ${selectedCity?.name ? "" : "hidden"}`}>
                <p className="text-xs text-[#68ade7]">
                    KOTA / KABUPATEN
                </p>
                <p className="text-3xl font-bold">
                    {selectedCity?.name}
                </p>
            </div>

            <div className={`flex flex-col gap-2 items-center justify-center ${selectedDistrict?.name ? "" : "hidden"}`}>
                <p className="text-xs text-[#68ade7]">
                    KECAMATAN
                </p>
                <p className="text-xl font-bold">
                    {selectedDistrict?.name}
                </p>
            </div>
        </div>
    )
}

export default Content;