import Button from "./Button";

interface Vanzator {
    invalidFields?: Object;
    persoanaJuridica?: (personType: string) => void;
    personType?: boolean,
    onNextStep?: () => void
}

const Vanzator = ({
    invalidFields,
    persoanaJuridica,
    personType,
    onNextStep
}: Vanzator) => {

    return (
        <fieldset className="flex flex-col gap-6">
            <legend className="font-bold mb-6">1. Persoana care înstrăinează (vânzător)</legend>

            <label className="flex flex-col text-sm font-medium text-gray-700 relative"><span>Nume / Prenume <span className="text-red-500">*</span></span>
                <input className={`contract-input-field ${invalidFields?.includes("Nume/denumire vanzator") ? "border-2 !border-red-500" : ""}`} type="text" name="Nume/denumire vanzator" minLength={3} maxLength={50} pattern="[A-Za-z]+" required />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Țara</span>
                <input className="contract-input-field" type="text" name="Tara vanzator" />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Județ <span className="text-red-500">*</span></span>
                <input className="contract-input-field" type="text" name="Judet vanzator"
                    minLength={1}
                    maxLength={20}
                    pattern="^(Alba|Arad|Arge[sș]|Bacău|Bihor|Bistrița[- ]Năsăud|Boto[sș]ani|Brăila|Bra[sș]ov|Bucure[sș]ti|Buzău|Călăra[sș]i|Cara[sș][- ]Severin|Cluj|Constanța|Covasna|Dâmbovița|Dolj|Galați|Giurgiu|Gorj|Harghita|Hunedoara|Ialomița|Ia[sș]i|Ilfov|Maramure[sș]|Mehedinți|Mure[sș]|Neamț|Olt|Prahova|Sălaj|Satu[- ]Mare|Sibiu|Suceava|Teleorman|Timi[sș]|Tulcea|Vâlcea|Vaslui|Vrancea)$"
                    required
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Cod poștal</span>
                <input className="contract-input-field" type="text" name="CP vanzator" />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Municipiu / oraș / comună <span className="text-red-500">*</span></span>
                <input className="contract-input-field" type="text" name="Municipiu/oras/comuna vanzator"
                    minLength={3}
                    maxLength={40}
                    pattern="^[A-Za-zĂÂÎȘȚăâîșț \-']{3,40}$"
                    required />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Sat / sector <span className="text-red-500">*</span></span>
                <input className="contract-input-field" type="text" name="Sat/sector vanzator"
                    minlength="3"
                    maxlength="40"
                    pattern="^[A-Za-zĂÂÎȘȚăâîșț0-9 \-']{3,40}$"
                    required
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Strada <span className="text-red-500">*</span></span>
                <input className="contract-input-field" type="text" name="Str vanzator" required minlength="2" maxlength="60" pattern="^[A-Za-z0-9\s\.,\-]+$" />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Număr</span>
                <input className="contract-input-field" type="text" name="Nr vanzator" />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Bloc</span>
                <input className="contract-input-field" type="text" name="Bl vanzator" />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Scara</span>
                <input className="contract-input-field" type="text" name="Sc vanzator" />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Etaj</span>
                <input className="contract-input-field" type="text" name="Et vanzator" />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Apartament</span>
                <input className="contract-input-field" type="text" name="Ap vanzator" />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Serie act identitate <span className="text-red-500">*</span></span>
                <input className="contract-input-field" type="text" name="Serie CI vanzator" required minLength={2} maxLength={5} pattern="^[A-Z]{1,2}$" />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Număr act de identitate <span className="text-red-500">*</span></span>
                <input className="contract-input-field" type="text" name="Nr CI vanzator" required minLength={6} maxLength={8} pattern="^\d{6,8}$" />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Telefon / Fax</span>
                <input className="contract-input-field" type="text" name="Tel/Fax vanzator" pattern="^\d{10}$" />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Email</span>
                <input className="contract-input-field" type="text" name="E-mail vanzator" />
            </label>
            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Strada <span className="text-red-500">*</span></span>
                <input
                    className="contract-input-field"
                    type="text"
                    name="Str vanzator"
                    required
                    minLength={2}
                    maxLength={50}
                    pattern="^[A-Za-zĂăÂâÎîȘșȚț\s\-]+$"
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Număr</span>
                <input className="contract-input-field" type="text" name="Nr vanzator" />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Bloc</span>
                <input className="contract-input-field" type="text" name="Bl vanzator" />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Scara</span>
                <input className="contract-input-field" type="text" name="Sc vanzator" />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Etaj</span>
                <input className="contract-input-field" type="text" name="Et vanzator" />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Apartament</span>
                <input className="contract-input-field" type="text" name="Ap vanzator" />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Serie act identitate <span className="text-red-500">*</span></span>
                <input
                    className="contract-input-field"
                    type="text"
                    name="Serie CI vanzator"
                    required
                    minLength={2}
                    maxLength={3}
                    pattern="^[A-Z]{1,3}$"
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Număr act de identitate <span className="text-red-500">*</span></span>
                <input
                    className="contract-input-field"
                    type="text"
                    name="Nr CI vanzator"
                    required
                    minLength={6}
                    maxLength={8}
                    pattern="^\d{6,8}$"
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Telefon / Fax</span>
                <input
                    className="contract-input-field"
                    type="text"
                    name="Tel/Fax vanzator"
                    pattern="^\d{10}$"
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Email</span>
                <input className="contract-input-field" type="email" name="E-mail vanzator" />
            </label>

            <div className={`${personType === "persoanaJuridica" ? "flex" : "hidden"} flex-col gap-4`}>
                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Țara fiscală</span>
                    <input className="contract-input-field" type="text" name="Tara fiscala vanzator" />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Județ fiscal</span>
                    <input className="contract-input-field" type="text" name="Judet fiscal vanzator" />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Cod poștal fiscal</span>
                    <input className="contract-input-field" type="text" name="CP fiscal vanzator" />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Municipiu / oraș / comună fiscal(ă)</span>
                    <input className="contract-input-field" type="text" name="Municipiu/oras/comuna fiscal vanzator" />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Sat / sector fiscal</span>
                    <input className="contract-input-field" type="text" name="Sat/sector fiscal vanzator" />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Strada fiscală</span>
                    <input className="contract-input-field" type="text" name="Str fiscala vanzator" />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Număr fiscal</span>
                    <input className="contract-input-field" type="text" name="Nr fiscal vanzator" />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Bloc fiscal</span>
                    <input className="contract-input-field" type="text" name="Bl fiscal vanzator" />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Scara fiscal</span>
                    <input className="contract-input-field" type="text" name="Sc fiscal vanzator" />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Etaj fiscal</span>
                    <input className="contract-input-field" type="text" name="Et fiscal vanzator" />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Apartament fiscal</span>
                    <input className="contract-input-field" type="text" name="Ap fiscal vanzator" />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Nume / Prenume reprezentant legal</span>
                    <input className="contract-input-field" type="text" name="Reprezentant vanzator" />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Serie act identitate reprezentant</span>
                    <input className="contract-input-field" type="text" name="Serie CI reprezentant vanzator" />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Număr act de identitate reprezentant</span>
                    <input className="contract-input-field" type="text" name="Nr CI reprezentant vanzator" />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>CNP/CIF reprezentant</span>
                    <input className="contract-input-field" type="text" name="CNP reprezentant vanzator" />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Telefon / Fax reprezentant</span>
                    <input className="contract-input-field" type="text" name="Tel/Fax reprezentant vanzator" />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Email reprezentant</span>
                    <input className="contract-input-field" type="text" name="E-mail reprezentant vanzator" />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Calitate reprezentant</span>
                    <input className="contract-input-field" type="text" name="Calitate reprezentant vanzator" />
                </label>
            </div>
        </fieldset >
    );
};

export default Vanzator;