$( function() {
  $( "#datepicker" ).datepicker();
} );

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})();

//Advanced js

let bikeModel = [
  
  {
    type: "Kaupunkipyörät",
    image: "../images/bicycle-780049_640.jpg"
  },

  {
    type: "Lasten polkupyörät"
  },

  {
    type: "Hybridipyörät"
  },

  {
    type: "Sähköpyörät"
  },

  {
    type: "Maastopyörät",
    discipline: [
      "Cross Country",
      "Trail",
      "Enduro",
      "Downhill",
      "Dirt/Street",
      "Fat bike"
    ]
  },

  {
    type: "Maantiepyörät"
  }

];

let h3Element = document.querySelector("h3");
let buttonElement1 = document.querySelector("#flush-headingOne .accordion-button");
let buttonElement2 = document.querySelector("#flush-headingTwo .accordion-button");
let buttonElement3 = document.querySelector("#flush-headingThree .accordion-button");
let buttonElement4 = document.querySelector("#flush-headingFour .accordion-button");
let pictureElement = document.querySelector(".accordion");

function bikeType1 () {
  h3Element.innerHTML = bikeModel[0].type;
  pictureElement.innerHTML = "<img id ='image1' src ='"+ bikeModel[0].image +"' class='rounded mx-auto d-block my-5' alt=''/>"
}


function bikeType5 () {
  h3Element.innerHTML = bikeModel[4].type;
  buttonElement1.innerHTML = bikeModel[4].discipline[0];
  buttonElement2.innerHTML = bikeModel[4].discipline[1];
  buttonElement3.innerHTML = bikeModel[4].discipline[2];
  buttonElement4.innerHTML = bikeModel[4].discipline[3];
}


fetch('https://bikeindex.org/api/v3/search')

.then(response => response.json())

.then(data => {

  let ul = document.createElement('ul');

  data.bikes.forEach (title => {

    let li = document.createElement('li');

    li.innerHTML = title.title + " : " + title.status;

    ul.appendChild(li);
  })

  document.getElementById('print-here').appendChild(ul);
  
});

let h5 = document.createElement('h5');

  h5.innerHTML = "Stolen bikes database";

  document.getElementById('print-here').appendChild(h5);

