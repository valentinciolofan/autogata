import { LayoutProps } from "../../../.next/types/app/layout";
import CarPlate from "@/app/components/CarPlate";
import Button from "@/app/components/Button";

export default function CarPlatesCheckPage() {

    return (
        <main className="flex flex-col gap-14 px-5 mt-20 md:px-8 lg:px-14">
            <div className="flex justify-between gap-4 border border-custom bg-white shadow-lg rounded-lg px-8 py-4">
                <input className="contract-input-field w-full md:w-5/10" type="text" name="searchCarPlateAvailability" placeholder="Ex. B001DVL" />
                <Button label={"Caută număr"}/>
            </div>

            <section className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(150px,1fr))] xl:grid-cols-[repeat(auto-fit,minmax(150px,max-content))] xl:justify-center">
                <CarPlate carNumber={"vl07cio"} availability={true} date={"Azi la 10:45"} />
                <CarPlate carNumber={"vl07cio"} availability={true} date={"Azi la 10:45"} />
                <CarPlate carNumber={"vl07cio"} availability={true} date={"Azi la 10:45"} />
                <CarPlate carNumber={"vl07cio"} availability={true} date={"Azi la 10:45"} />
                <CarPlate carNumber={"vl07cio"} availability={false} date={"Azi la 10:45"} />
                <CarPlate carNumber={"vl07cio"} availability={true} date={"Azi la 10:45"} />
                <CarPlate carNumber={"vl07cio"} availability={true} date={"Azi la 10:45"} />
                <CarPlate carNumber={"vl07cio"} availability={false} date={"Azi la 10:45"} />
                <CarPlate carNumber={"vl07cio"} availability={true} date={"Azi la 10:45"} />
                <CarPlate carNumber={"vl07cio"} availability={true} date={"Azi la 10:45"} />
            </section>
        </main>



    );
};