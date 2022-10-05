import { FormControl, FormGroup } from ".";
import type { FormControlType } from "../types";

export const getFormGroup = (formName: string) => {
  const fieldSetEl = document.getElementById(formName) as HTMLFieldSetElement || null;
	if(fieldSetEl === null) throw Error(`Fieldset with name: ${name} doesn't exist!`);
  
  const formGroup = new FormGroup([], formName);
  fieldSetEl.querySelectorAll("input").forEach(field => [
    formGroup.controls.push(getFormControl(field.name))
  ]);

  return formGroup;
}

const getFormControl = (name : string) => {
	const inputEl = document.getElementById(name) as HTMLInputElement | null;
	if(inputEl === null) throw Error(`Input with name: ${name} doesn't exist!`);

	const formControl = new FormControl(
		{
			name : inputEl.name, 
			value : inputEl.value, 
			type: inputEl.type as FormControlType,
			label : inputEl.dataset.label as string,
			labelPosition : inputEl.dataset.labelPosition as "right" | "left"
		}
		);
 
	inputEl.addEventListener('change', (e) => {
		if(!(e.target instanceof HTMLInputElement)) return;
		let value = e.target.value;
		if(formControl.type === "checkbox") {
			value = formControl.value === "checked" ? "" : "checked"
		}
		formControl.setValue(value); 
		formControl.setIsPristine(false);
	})
	return formControl;
};
