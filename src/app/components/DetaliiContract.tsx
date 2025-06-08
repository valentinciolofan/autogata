import Button from "./Button";
import { Cumparator } from "./Cumparator";

const DetaliiContract = ({ onNextStep, onPreviousStep }: Cumparator) => {
    return (
        <fieldset className="flex flex-col gap-6">
            <legend className="font-bold mb-6">4. Preț și detalii contract</legend>

            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Locul încheierii contractului</span>
                <input className="contract-input-field" type="text" name="Locul incheierii" />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Prețul (în litere) <span className="text-red-500">*</span></span>
                <input className="contract-input-field" type="text" name="Pret (litere)" required />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Prețul (în cifre) <span className="text-red-500">*</span></span>
                <input className="contract-input-field" type="number" name="Pret (cifre)" required />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Data încheierii contractului</span>
                <input className="contract-input-field" type="text" name="Data incheierii" />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Anexe la contract (Da/Nu)</span>
                <input className="contract-input-field" type="text" name="Anexe NU" />
            </label>

        </fieldset>
    );
};

export default DetaliiContract;