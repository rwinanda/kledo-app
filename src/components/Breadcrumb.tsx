import type { Option } from "./SelectField";

interface BreadcrumbProps {
    selectedProvince: Option | undefined;
    selectedCity: Option | undefined;
    selectedDistrict: Option | undefined;
}

const Breadcrumb = ({ selectedProvince, selectedCity, selectedDistrict }: BreadcrumbProps) => {
    const breadcrumb = [selectedProvince, selectedCity, selectedDistrict].filter(Boolean);
    return (
        <div className="flex items-center font-semibold text-sm text-gray-400">
            {breadcrumb.map((item, index) => (
                <div key={index} className="flex items-center">
                    <span
                        className={`${index === breadcrumb.length - 1
                            ? "font-semibold text-blue-600"
                            : "hover:text-blue-600 cursor-pointer"
                            }`}
                    >
                        {item?.name}
                    </span>

                    {index !== breadcrumb.length - 1 && (
                        <span className="mx-2">{">"}</span>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Breadcrumb;