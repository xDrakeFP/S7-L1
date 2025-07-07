class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  compareName = function (other) {
    if (this.ownerName === other.ownerName) {
      return true;
    } else {
      return false;
    }
  };
}

const petArray = [];

const petNameInput = document.getElementById("petName");
const ownerNameInput = document.getElementById("ownerName");
const speciesInput = document.getElementById("species");
const breedInput = document.getElementById("breed");

const formElement = document.getElementById("petForm");

const select1 = document.getElementById("petSelect1"); // Per aggiornare Select
const select2 = document.getElementById("petSelect2");
const selects = [select1, select2];
const risultato = document.getElementById("compareResults");

const updateSelect = () => {
  selects.forEach((select) => {
    select.innerHTML = `<option disabled selected>Seleziona</option>`;
    petArray.forEach((pet, i) => {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = `${pet.petName} - ${pet.ownerName}`;
      select.appendChild(option);
    });
  });
};

formElement.addEventListener("submit", function (e) {
  e.preventDefault();
  const newPet = new Pet(
    petNameInput.value,
    ownerNameInput.value,
    speciesInput.value,
    breedInput.value
  );
  petArray.push(newPet);

  const row = document.createElement("div");
  row.classList.add("row", "my-3", "py-2f", "border-bottom", "text-center");
  const colPet = document.createElement("div");
  colPet.classList.add("col-3");
  colPet.textContent = newPet.petName;

  const colOwner = document.createElement("div");
  colOwner.classList.add("col-3");
  colOwner.textContent = newPet.ownerName;

  const colSpecies = document.createElement("div");
  colSpecies.classList.add("col-3");
  colSpecies.textContent = newPet.species;

  const colBreed = document.createElement("div");
  colBreed.classList.add("col-3");
  colBreed.textContent = newPet.breed;

  row.appendChild(colPet);
  row.appendChild(colOwner);
  row.appendChild(colSpecies);
  row.appendChild(colBreed);

  document.getElementById("display").appendChild(row);

  formElement.reset();
  updateSelect();
});

const comparing = document.getElementById("compareButton");
comparing.addEventListener("click", () => {
  const i1 = select1.value;
  const i2 = select2.value;
  if (i1 === "" || i2 === "" || i1 === i2) {
    compareResults.textContent =
      "Devi selezionare due animali e devono essere diversi";
    return;
  }

  const owner1 = petArray[i1];
  const owner2 = petArray[i2];

  if (owner1.compareName(owner2)) {
    compareResults.textContent = `${owner1.petName} e ${owner2.petName} hanno lo stesso padrone : ${owner1.ownerName}`;
  } else {
    compareResults.textContent = `${owner1.petName} e ${owner2.petName} hanno padroni diversi : ${owner1.ownerName} e ${owner2.ownerName}`;
  }
});
