const inputDay = document.querySelector('.day');
const inputMonth = document.querySelector('.month');
const inputYear = document.querySelector('.year');
const btn = document.querySelector('.btn');

let today = new Date();


btn.addEventListener('click' , (e) => {
  e.preventDefault();
  cleanError();

  const inputYearValue = inputYear.value.trim();
  const inputMonthValue = inputMonth.value.trim();
  const inputDayValue = inputDay.value.trim();
  
  let date = new Date(inputYearValue, inputMonthValue -1, inputDayValue);

  const  message = "This field is require";
  checkImput(inputDay, message);
  checkImput(inputMonth, message);
  checkImput(inputYear, message);

 
  if(date.getDate() != inputDayValue){
    sendError(inputDay , "Must be a valid date");

  }else if(date.getMonth() != inputMonthValue -1){
    sendError(inputMonth , "Must be a valid month");

  }else if(date.getFullYear() != inputYearValue || date.getFullYear() > today.getFullYear() ) {
    sendError(inputYear , "Must be a valid Year");

  }else {

    calculateAges(date);

  }
})

// check the input values 
const checkImput= (input, message) => {
  const inputValue = input.value.trim();

  if(!inputValue){
    sendError(input, message);
    
  }else {
    input.nextElementSibling.innerHTML = "";
  }
}

// add error class
const sendError = (input, message) =>{
  input.parentElement.parentElement.classList.add('error');
  input.nextElementSibling.innerHTML = message;
}

// clear the form error
const cleanError = () =>{
  inputDay.parentElement.parentElement.classList.remove('error');
}

// calculate years months and days
const calculateAges =(date) => {
  let year = today.getFullYear() - date.getFullYear() ;
  let month;
  let day;

  if(date.getMonth() > today.getMonth()){
      year = year - 1;
      month = today.getMonth() + (12 - date.getMonth()) 
  }else {
    month = today.getMonth() - date.getMonth();
  }

  if(date.getDate() > today.getDate()){
    month = month -1;
    day = today.getDate() + (new Date(today.getFullYear(), today.getMonth(), 0).getDate() - date.getDate() - 1)
  }else {
    day = today.getDate() - date.getDate();
  }

  print(year, month, day);
}

// Print result 
const print = (year, month, day) => {
  const result = document.querySelector('.result');
   const spans = result.querySelectorAll('span');

   spans[0].innerHTML = year.toString();
   spans[1].innerHTML = month.toString();
   spans[2].innerHTML = day.toString();  
}


