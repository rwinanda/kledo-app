interface ButtonResetProps {
    handleChange: () => void;
}


const ButtonReset = ({ handleChange }: ButtonResetProps) => {
    return (
        <div
            className="flex w-full h-12 items-center justify-center font-semibold text-gray-700 border-2 border-blue-600 rounded-xl hover:bg-[#e0eaf5]"
            onClick={handleChange}
        >
            RESET
        </div>
    )
}

export default ButtonReset;