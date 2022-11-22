console.log('working!');

$(document).ready(onReady);

function onReady(){
    console.log('inside onReady');
    $('#submitEmployee').on('click', emplmoyeeInfo);
    calcMonthlyCosts();
    

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

    displayEmp();
}

function displayEmp(){
    // let salaryTot = 0;
    $('#addToTable').empty();
    
    for (let i=0; i<empInfo.length; i++){
        // console.log('inside loop for addToTable');
        $('#addToTable').append(`
        <tr id="${i}">
            <td>${empInfo[i].FirstName}</td>
            <td>${empInfo[i].LastName}</td>
            <td>${empInfo[i].IDNumber}</td>
            <td>${empInfo[i].JobTitle}</td>
            <td>${empInfo[i].AnnualSalary}</td>
            <td><button class="removeEmpBtn">Remove</button>
        </tr>
        `);
    }
    $('.removeEmpBtn').on('click', removeEmp);
    
    calcMonthlyCosts();
}

function calcMonthlyCosts(){
    console.log('inside calcMonthlyCosts');
    let monthTotalCosts = 0;
    $('#monthTotal').empty();

    for (let i=0; i<empInfo.length; i++){
        monthTotalCosts += Number(empInfo[i].AnnualSalary);
    }
    $('#monthTotal').append(`
        Total Monthly Costs: ${monthTotalCosts}
    `);
    // console.log(monthTotalCosts);
    if (monthTotalCosts > 20000){
        $('#monthTotal').css("background-color", "red");
    }
}

function removeEmp(){
    let idInfo = $(this).closest('tr').attr('id');
    $(this).closest('tr').attr('id');
    $(this).closest('tr').remove();
    empInfo.splice(idInfo, 1);
    console.log(idInfo);
}