console.log('working!');

$(document).ready(onReady);

function onReady(){
    console.log('inside onReady');
    $('#submitEmployee').on('click', emplmoyeeInfo);
}

let empInfo = [];
let empObject = {};

function emplmoyeeInfo(){
    console.log('inside employeeinfo');

    let firstName = $('#first-name').val();
    let lastName = $('#last-name').val();
    let idNum = $('#idNum').val();
    let jobTitle = $('#jobTitle').val();
    let annualSalary = $('#annualSalary').val();

    let empObject = {
        FirstName: firstName,
        LastName: lastName,
        IDNumber: idNum,
        JobTitle: jobTitle,
        AnnualSalary: annualSalary
    }

    $('#first-name').val('');
    $('#last-name').val('');
    $('#idNum').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');

    empInfo.push(empObject);
    
    console.log(empInfo);
}