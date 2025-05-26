interface CarPlateProps {
    carNumber: String,
    availability?: Boolean,
    date: String,
}

export default function CarPlate({ carNumber, availability, date }: CarPlateProps) {

    return (
        <div className="flex flex-col items-center bg-white pb-3 rounded-lg shadow-lg border border-custom w-full lg:max-w-fit h-fit gap-4">
            <span className="bg-car-plates p-3 text-white w-full rounded-t-lg">
                <p className="text-3xl font-semibold uppercase text-center">{carNumber}</p>
            </span>

            <span className={`${availability ? "bg-success" : "bg-danger"} text-white p-2 text-sm rounded-4xl`}>
                {availability ? "Disponibil" : "Ocupat"}
            </span>

            <p className="text-sm font-medium">{date}</p>
        </div>
    );
}