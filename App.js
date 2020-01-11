function formSubmission(e) {
  e.preventDefault();
  let form = e.target;
  let formData = {
    firstName: form.firstName.value,
    lastName: form.lastName.value,
    email: form.email.value,
    phone: form.phone.value,
    dogName1: form.dogName1.value,
    dog1Size: form.dog1Size.checked,
    dogName2: form.dogName2.value,
    dog2Size: form.dog2Size.checked,
    dogName3: form.dogName3.value,
    dog3Size: form.dog3Size.checked,
    annMor: form.annMor.checked,
    military: form.military.checked,
    morrisHill: form.morrisHill.checked
  };
}

// function displayTime() {
//   let currentTime = new Date();
//   let hours = currentTime.getHours();
//   let minutes = currentTime.getMinutes();
//   let seconds = currentTime.getSeconds();
//   let meridiem = "AM";
//   if (hours > 11) {
//     meridiem = "PM";
//   }
//   if (hours > 12) {
//     hours = hours - 12;
//   }
//   if (hours === 0) {
//     hours = 12;
//   }
//   if (seconds < 10) {
//     seconds = "0" + seconds;
//   }
//   if (minutes < 10) {
//     minutes = "0" + minutes;
//   }
//   if (hours < 10) {
//     hours = "0" + hours;
//   }

//   let clock = document.querySelector("#clock");
//   clock.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;
// }
// displayTime();
// setInterval(displayTime, 1000);
