import Button from "./Button";
import Tooltip from "./Tooltip";
import { Cumparator } from "./Cumparator";

const ObiectContract = ({ onNextStep, onPreviousStep } : Cumparator ) => {
    return (
        <fieldset>
            <legend className="font-bold mb-6">3. Obiectul contractului</legend>

            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span className="flex items-center">
                            Marca autovehiculul
                            <span className="text-red-500">*</span>
                            <Tooltip label="Pozitia D.1 din talon" />
                        </span>
                        <input className="contract-input-field" type="text" name="Marca mijlocului de transport" required />
                    </label>

                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span className="flex items-center">
                            Tipul modelului
                            <span className="text-red-500">*</span>
                            <Tooltip label="Pozitia D.3 din talon" />
                        </span>
                        <input className="contract-input-field" type="text" name="Tipul mijlocului de transport" required />
                    </label>

                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span className="flex items-center">
                            Număr de identificare / Serie de șasiu
                            <span className="text-red-500">*</span>
                            <Tooltip label="Pozitia E din talon" />
                        </span>
                        <input className="contract-input-field" type="text" name="Nr identificare al mijlocului de transport" required />
                    </label>

                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span className="flex items-center">
                            Serie motor
                            <span className="text-red-500">*</span>
                            <Tooltip label="Pozitia 10 din cartea autovehiculului" />
                        </span>
                        <input className="contract-input-field" type="text" name="Seria motorului mijlocului de transport" required />
                    </label>

                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span className="flex items-center">
                            Capacitate cilindrică cm³
                            <span className="text-red-500">*</span>
                            <Tooltip label="Pozitia P.1 din talonul autovehiculului" />
                        </span>
                        <input className="contract-input-field" type="number" name="Capacitatea cilindrica a motorului mijlocului de transport" required />
                    </label>

                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span className="flex items-center">
                            Greutate maximă admisă (pentru remorci/semiremorci)
                            <span className="text-red-500">*</span>
                            <Tooltip label="Pozitia F.1 din talonul autovehiculului" />
                        </span>
                        <input className="contract-input-field" type="number" name="Greutatea maxima admisa a remorcii/semiremorcii" required />
                    </label>

                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span className="flex items-center">
                            Număr de înmatriculare
                            <span className="text-red-500">*</span>
                            <Tooltip label="Pozitia A din talonul autovehiculului" />
                        </span>
                        <input className="contract-input-field" type="text" name="Nr de inmatriculare/inregistrare al mijlocului de transport" required />
                    </label>
                </div>

                <div className="flex flex-col gap-4">
                    <label className="flex flex-col text-sm font-medium text-gray-700"><span>Data expirării ITP</span>
                        <input className="contract-input-field" type="number" name="Data expirarii ITP (format: zz.ll.aaaa)" />
                    </label>

                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span className="flex items-center">
                            Seria și numărul CIV
                            <span className="text-red-500">*</span>
                            <Tooltip label="Pozitia X / Y  din talonul autovehiculului sau pe prima pagina a CIV" />
                        </span>
                        <input className="contract-input-field" type="number" name="Seria nr. CIV" required />
                    </label>

                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span className="flex items-center">
                            An fabricație
                            <span className="text-red-500">*</span>
                            <Tooltip label="Pozitia 5 din cartea autovehiculului imediat dupa numărul de omologare" />
                        </span>
                        <input className="contract-input-field" type="number" name="An de fabricatie" required />
                    </label>

                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span className="flex items-center">
                            Norma euro
                            <span className="text-red-500">*</span>
                            <Tooltip label="Pozitia 5 din cartea autovehiculului la sfârșitul numărului de omologare" />
                        </span>
                        <input className="contract-input-field" type="number" name="Norma euro" required />
                    </label>

                    <label className="flex flex-col text-sm font-medium text-gray-700"><span>Data dobândirii autovehiculului</span>
                        <input className="contract-input-field" type="number" name="Data dobândirii (format: zz.ll.aaaa)" />
                    </label>

                    <label className="flex flex-col text-sm font-medium text-gray-700"><span>Actul dobândirii</span>
                        <input className="contract-input-field" type="text" name="Actul dobandirii" />
                    </label>
                </div>
            </div>

        </fieldset>
    );
};

export default ObiectContract;