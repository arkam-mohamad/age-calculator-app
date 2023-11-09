let currentDate = new Date();
$('#year').attr('max', currentDate.getFullYear());

$('img').click(function (e) { 

  let day = $('#day').val();
  let month = $('#month').val();
  let year = $('#year').val();
  let inputs = $('.inputs');
  let dayError = $('#day-error')

  let birthDate = new Date(`${year}-${month}-${day}`);

  //checking for empty values
  if(day=='' || month=='' || year==''){
    birthDate = NaN;
    $(inputs).addClass('error');
    $('small').text('This field is required');
  } else {
    $(inputs).removeClass('error');
    $('small').empty();
  }

  //checking for day-month combination error
  if(month==4 || month==6 || month==9 || month==11 && day>30){
    $(dayError).text('Must be a valid date');
  }

  //checking February error
  if(day>29 && month==2 && (year%4==0)){
    $('small').text('Must be a valid date');
  } else if(day>28 && month==2 && (year%4!=0)){
    $('small').text('Must be a valid date');
  }

  let ageInMilliseconds = currentDate - birthDate;
  let totalAgeInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24))
  let ageInYears = Math.floor(totalAgeInDays / 365.25);
  let ageInMonths = Math.floor((totalAgeInDays - (ageInYears * 365.25)) / 30);
  let ageInDays = Math.floor(totalAgeInDays - (ageInYears * 365.25) - (ageInMonths * 30))
  
  //show the results
  if(isNaN(birthDate)){
    $('span').text('- -');
  } else{
    $('#show-year').text(ageInYears);
    $('#show-month').text(ageInMonths);
    $('#show-day').text(ageInDays);
  }
});

