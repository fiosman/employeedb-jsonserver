import {request} from './HTTPRequests';
import {ui} from './uidisplay'
import {alertMessage} from './uidisplay'
import {name,age,position,salary} from './formvalidation'

employeeName.addEventListener('blur', () => name.validationLogic());

employeeAge.addEventListener('blur', () => age.validationLogic());

employeePosition.addEventListener('blur', () => position.validationLogic());

employeeSalary.addEventListener('blur', () => salary.validationLogic());

//getdata
const getDataBtn = document.querySelector('.displayBtn');
getDataBtn.addEventListener('click', function (e) {
    e.preventDefault()
    getData();
    alertMessage.style.display = 'none'
})

function getData() {
    request.getRequest('http://localhost:3000/employees')
        .then(data => ui.displayData(data))
        .catch(err => console.log(err))
}

//post data
export const inputFetch = document.querySelectorAll('.form-control')
export const submitBtn = document.querySelector('.postBtn')

submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    for (let i = 0; i < inputFetch.length; i++) {
        if (inputFetch[i].classList.contains('is-invalid') ||
            (inputFetch[i].value.length < 1)) {
            return ui.displayAlert(`<strong>Please ensure all fields have valid input!</strong>`, 'alert-danger');
        }
    }
    postData()
})

export function postData() {
    const userData = {
        name: employeeName.value,
        age: employeeAge.value,
        position: employeePosition.value,
        salary: employeeSalary.value
    }
    request.postRequest('http://localhost:3000/employees', userData)
        .then(() => {
            alertMessage.classList.remove('alert-danger')
            ui.displayAlert('Post Added!', 'alert-success')
            ui.displayClear();
        })
        .catch(error => console.log(error))
}


//dete data

export const employeeCard = document.querySelector('.cardContainer')
employeeCard.addEventListener('click', deleteRecord)

function deleteRecord (e) {
    if (e.target.classList.contains('deleteBtn')) {
        const id = (e.target.parentElement.dataset.id)
        request.deleteRequest(`http://localhost:3000/employees/${id}`)
        .then(() => {
            e.target.parentElement.parentElement.remove()
            alertMessage.classList.remove('alert-danger')
            ui.displayAlert('Deleted!', 'alert-success')
        })
        .catch(error => console.log(error))
    }   
}

//edit 

employeeCard.addEventListener('click', update)

let targetID; 
function update(e) { 
    if (e.target.classList.contains('editBtn')) {
        e.preventDefault()
        targetID = e.target.parentElement.dataset.id;
        const spanTag = e.target.parentElement.childNodes[3]
        const recordData =  { 
            name: e.target.parentElement.childNodes[1].children[0].textContent, 
            age: spanTag.children[2].firstElementChild.textContent,
            position: spanTag.children[0].firstElementChild.textContent,
            salary: spanTag.children[1].firstElementChild.textContent,
        } 
        ui.updateForm(recordData)
        submitBtn.style.display = 'none'
        editSubmit.style.display = 'inline-block'

    }
}

export const editSubmit = document.querySelector('.completeEdit')
editSubmit.addEventListener('click', function (e) {
    e.preventDefault()
    for (let i = 0; i < inputFetch.length; i++) {
        if (inputFetch[i].classList.contains('is-invalid') ||
            (inputFetch[i].value.length < 1)) {
            return ui.displayAlert(`<strong>Please ensure all fields have valid input!</strong>`, 'alert-danger')
        }
    }

    editData();
})

function editData() {
    const updatedData = {
        name: employeeName.value,
        age: employeeAge.value,
        position: employeePosition.value,
        salary: employeeSalary.value
     }

    request.editRequest(`http://localhost:3000/employees/${targetID}`, updatedData)
    .then( () => { 
        alertMessage.classList.remove('alert-danger')
        ui.displayAlert('Edited!', 'alert-success')
    })
    .catch(err => console.log(err))
}