import {employeeName,employeeAge,employeePosition,employeeSalary} from './formvalidation'
import {employeeCard} from './app'
import {inputFetch} from './app'

export const alertMessage = document.querySelector('.alert');

export class Display {
    constructor() {
        this.employeeName = employeeName
        this.employeeAge = employeeAge
        this.employeePosition = employeePosition
        this.employeeSalary = employeeSalary
    }

    //Display data when you click display employees
    displayData(data) {
        let displayCard = ""
        data.forEach((employee) => {
            displayCard += `
               <div class="card border-primary mb-3" style="min-width: 20rem;">
                    <div class="card-body" data-id=${employee.id}>
                        <h4 class="card-title"><span>${employee.name}</span></h4>
                        <ul class="card-text">
                            <li>Position: <span>${employee.position}</span></li>
                            <li >Salary: <span>${employee.salary}</span></li>
                            <li >Age: <span>${employee.age}</span></li>
                            <li >ID: <span>${employee.id}</span></li>
                        </ul>
                        <button class="btn btn-primary btn submit deleteBtn">Delete</button>
                        <button class="btn btn-primary btn submit editBtn">Edit</button>
                    </div>  
                </div>`
        })
        employeeCard.innerHTML = displayCard;
    }

    displayAlert(message, sourceClass) {
        alertMessage.classList.add(sourceClass)
        alertMessage.innerHTML = `<strong>${message}</strong>`
        alertMessage.style.display = 'block';
    }

    displayClear() {
        inputFetch.forEach(function (item) {
            item.value = ""
            item.classList.remove('is-valid')
        })
    }

    updateForm(data) { 
        this.employeeName.value = data.name
        this.employeeAge.value = data.age
        this.employeePosition.value = data.position
        this.employeeSalary.value = data.salary
        }
    }

export const ui = new Display()