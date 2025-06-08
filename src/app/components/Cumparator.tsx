import Button from "./Button";

export interface Cumparator {
    persoanaJuridica?: (personType: string) => void;
    personType?: boolean,
    onNextStep?: () => void,
    onPreviousStep?: () => void,
}

const Cumparator = ({
    persoanaJuridica,
    personType,
    onNextStep,
    onPreviousStep
}: Cumparator) => {

    return (
        <fieldset className="flex flex-col gap-6">
            <legend className="font-bold mb-6">2. Persoana care dobândește (cumpărător)</legend>

            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Nume / Prenume <span className="text-red-500">*</span></span>
                <input className="contract-input-field" type="text" name="Nume/denumire cumparator" required />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Țara</span>
                <input className="contract-input-field" type="text" name="Tara cumparator" />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Județ <span className="text-red-500">*</span></span>
                <input className="contract-input-field" type="text" name="Judet cumparator" required />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Cod poștal</span>
                <input className="contract-input-field" type="text" name="CP cumparator" />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Municipiu / oraș / comună <span className="text-red-500">*</span></span>
                <input className="contract-input-field" type="text" name="Municipiu/oras/comuna cumparator" required />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Sat / sector <span className="text-red-500">*</span></span>
                <input className="contract-input-field" type="text" name="Sat/sector cumparator" required />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Strada  <span className="text-red-500">*</span></span>
                <input className="contract-input-field" type="text" name="Str cumparator" required />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Număr</span>
                <input className="contract-input-field" type="text" name="Nr cumparator" />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Bloc</span>
                <input className="contract-input-field" type="text" name="Bl cumparator" />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Scara</span>
                <input className="contract-input-field" type="text" name="Sc cumparator" />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Etaj</span>
                <input className="contract-input-field" type="text" name="Et cumparator" />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Apartament</span>
                <input className="contract-input-field" type="text" name="Ap cumparator" />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Serie act identitate  <span className="text-red-500">*</span></span>
                <input className="contract-input-field" type="text" name="Serie CI cumparator" required />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Număr act de identitate <span className="text-red-500">*</span></span>
                <input className="contract-input-field" type="text" name="Nr CI cumparator" required />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Telefon / Fax</span>
                <input className="contract-input-field" type="text" name="Tel/Fax cumparator" />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Email</span>
                <input className="contract-input-field" type="text" name="E-mail cumparator" />
            </label>

            <div className={`${personType === "persoanaJuridica" ? "flex" : "hidden"} flex-col gap-4 md:basis-1/2`}>
                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Țara fiscală</span>
                    <input className="contract-input-field" type="text" name="Tara fiscala cumparator" />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Județ fiscal</span>
                    <input className="contract-input-field" type="text" name="Judet fiscal cumparator" />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Cod poștal fiscal</span>
                    <input className="contract-input-field" type="text" name="CP fiscal cumparator" />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Municipiu / oraș / comună fiscal(ă)</span>
                    <input className="contract-input-field" type="text" name="Municipiu/oras/comuna fiscal cumparator" />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Sat / sector fiscal</span>
                    <input className="contract-input-field" type="text" name="Sat/sector fiscal cumparator" />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Strada fiscală</span>
                    <input className="contract-input-field" type="text" name="Str fiscala cumparator" />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Număr fiscal</span>
                    <input className="contract-input-field" type="text" name="Nr fiscal cumparator" />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Bloc fiscal</span>
                    <input className="contract-input-field" type="text" name="Bl fiscal cumparator" />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Scara fiscal</span>
                    <input className="contract-input-field" type="text" name="Sc fiscal cumparator" />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Etaj fiscal</span>
                    <input className="contract-input-field" type="text" name="Et fiscal cumparator" />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Apartament fiscal</span>
                    <input className="contract-input-field" type="text" name="Ap fiscal cumparator" />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Nume / Prenume reprezentant legal</span>
                    <input className="contract-input-field" type="text" name="Reprezentant cumparator" />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Serie act identitate</span>
                    <input className="contract-input-field" type="text" name="Serie CI reprezentant cumparator" />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Număr act de identitate</span>
                    <input className="contract-input-field" type="text" name="Nr CI reprezentant cumparator" />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>CNP/CIF reprezentant</span>
                    <input className="contract-input-field" type="text" name="CNP reprezentant cumparator" />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Telefon / Fax</span>
                    <input className="contract-input-field" type="text" name="Tel/Fax reprezentant cumparator" />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Email reprezentant</span>
                    <input className="contract-input-field" type="text" name="E-mail reprezentant cumparator" />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Calitate reprezentant</span>
                    <input className="contract-input-field" type="text" name="Calitate reprezentant cumparator" />
                </label>
            </div>

        </fieldset>
    );
};

export default Cumparator;