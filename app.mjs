function startApp() {
  // Your entire app should not necessarily be coded inside this 
  // single function (though there's no penalty for that), 
  // so create and use/call additional functions from here

  // pls remove the below and make some magic in here!
  
// Array of each network's preceding numbers 
const mtnComp = ["0803", "0806", "0703", "0706", "0813", "0816", "0810", "0814", "0903"]
const airtelComp = ["0802", "0808", "0708", "0812", "0701", "0902"]
const gloComp = ["0811", "0905", "0805", "0805", "0705", "0815", "0807"]
const etisalatComp = ["0809", "0817", "0818", "0909", "0908"]

const networkArray = [mtnComp,airtelComp, gloComp, etisalatComp]
// console.log (networkArray)


const phoneNumber = document.getElementById("tel")
const networkImg = document.getElementById("image")



//  Function to show network-icon based on the number inputted
phoneNumber.addEventListener("keyup", () => {
  let phoneNumberValue = phoneNumber.value

  if (phoneNumberValue == "") {
    networkImg.style.display = "none"
    networkImg.src = "./"
  }

  for (let i = 0; i < mtnComp.length; i++) {
    if (phoneNumberValue.startsWith(mtnComp[i])) {
      networkImg.style.display = "block"
      networkImg.src = "./images/mtn.png"
    }
  }

  for (let i = 0; i < airtelComp.length; i++) {
    if (phoneNumberValue.startsWith(airtelComp[i])) {
      networkImg.style.display = "block"
      networkImg.src = "./images/Airtel.jpg"
    }
  }

  for (let i = 0; i < gloComp.length; i++) {
    if (phoneNumberValue.startsWith(gloComp[i])) {
      networkImg.style.display = "block"
      networkImg.src = "./images/glo1.jpg"
    }
  }

  for (let i = 0; i < etisalatComp.length; i++) {
    if (phoneNumberValue.startsWith(etisalatComp[i])) {
      networkImg.style.display = "block"
      networkImg.src = "./images/etisalat.jpeg"
    }
  }
})


// Function for International Number
function getIp(callback) {
  fetch('https://ipinfo.io/json?token=f39aecef09d628', { headers: { 'Accept': 'application/json' } })
    .then((resp) => resp.json())
    .catch(() => {
      return {
        country: 'ng',
      };
    })
    .then((resp) => callback(resp.country));
}

const phoneInputField = document.querySelector("#tel");
const phoneInput = window.intlTelInput(phoneInputField, {
  initialCountry: "auto",
  geoIpLookup: getIp,
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});


// Phone Number Validation Function
const form = document.getElementById('form');
const error = document.querySelector(".alert-error");
const input = document.querySelectorAll('input')

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const clearInputsValue = () => {
    for (let i = 0; i < input.length; i++) {

      input[i].value = ''

    }
    networkImg.style.display = "none"
  }

  if (!phoneInput.isValidNumber() || phoneInputField > 11) {
    error.style.display = "block";
    error.innerHTML = `Invalid phone number.`;
      
  } else {
    error.style.display = "none";
    clearInputsValue();
      alert( " Form Submitted Successfully😊 ")
  }
 

});

};

// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //