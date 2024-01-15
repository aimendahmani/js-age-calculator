function calculate(){
date = document.querySelector('#date').value;

if (date === ""){
    alert('please enter a valid date');
}
else{
    const birthday = new Date(date);
    const currentDate = new Date();
    age = currentDate.getFullYear() - birthday.getFullYear();
    month = currentDate.getMonth() - birthday.getMonth();
    if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthday.getDate())
  ) {
    age--;
  }
  document.querySelector('#age').innerHTML = `your age is ${age} ${age > 1 ? 'years':'year'} old`;
}

}


