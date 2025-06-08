import Button from "./Button"

interface FormChangeStepButtonsProps {
    formStep: number;
    onPreviousStep: () => void;
    onNextStep: () => void;
}

const FormChangeStepButtons = ({
    formStep,
    onPreviousStep,
    onNextStep
}: FormChangeStepButtonsProps) => {

    return (
        <div className="flex justify-between">
            {formStep !== 1 && (
                <Button
                    label={"Înapoi"}
                    onClick={onPreviousStep}
                    className="!bg-zinc-400 hover:!bg-zinc-500"
                />
            )}

            <Button
                label={"Continuă"}
                onClick={onNextStep}
                className={`${formStep !== 1 ? "ml-auto" : "mx-auto"}`}
            />
        </div >
    )
}

export default FormChangeStepButtons;