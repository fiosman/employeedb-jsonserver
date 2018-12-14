import {alertMessage, ui} from './uidisplay'

export const employeeName = document.querySelector('#employeeName')
export const employeeAge = document.querySelector('#employeeAge');
export const employeePosition = document.querySelector('#employeePosition');
export const employeeSalary = document.querySelector('#employeeSalary');

class Validation {
    constructor(inputField, regExp) {
        this.inputField = inputField;
        this.regExp = regExp
    }

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
    validationLogic() {
        if (this.inputField.value) {
            if (!this.regExp.test(this.inputField.value)) {
                this.inputField.classList.add('is-invalid')
                ui.displayAlert(`<strong>Please ensure all fields have valid input!</strong>`,'alert-danger')
            } else {
                this.inputField.classList.remove('is-invalid')
                this.inputField.classList.add('is-valid')
                alertMessage.style.display = 'none'
            }
        }
    }
    
}

export const name = new Validation(employeeName, /^[^\W^\d^_]+[\s][^\W^\d^_]+$/);
export const age = new Validation(employeeAge, /^\d{2}$/);
export const position = new Validation(employeePosition, /^[^\W^\d^_]+[\s]?[^\W^\d^_]+$/);
export const salary = new Validation(employeeSalary, /^[$]\d+$/);
