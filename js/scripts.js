let form = document.getElementById("app")

function parseDate(getdate) {
  let selectedDate = new Date(getdate);
  let dateformat = getdate.split('-')
  let displaydate = document.getElementById('time')
  
  
  return selectedDate.getDay();
}
form.addEventListener("submit", function(e) {
  e.preventDefault();
  let birthday = this.elements[0].value
  let gender = this.querySelector('input[name="gender"]:checked').value;
  let age = this.elements[3].value
  let index = parseDate(birthday)
  let akanName;
  
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	let dayOfTheWeek = days[index];
  
  maleAkan = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', "Yaw", "Kofi", "Kwame"]
  femaleAkan = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
  
  if (gender === "male") {
  	akanName = maleAkan[index]
  } else {
  	akanName = femaleAkan[index]
  }
  
  
  console.log(birthday, gender, age, akanName)
  
})
