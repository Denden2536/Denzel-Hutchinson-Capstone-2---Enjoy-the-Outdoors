window.onload = function () {
  // HTML element variables
  const parkTypeDropdown = document.querySelector("#parkTypeDropdown");
  const stateDropdown = document.getElementById("stateDropdown");
  const stateRadio = document.getElementById("stateRadio");
  const parkTypeRadio = document.getElementById("parkTypeRadio");
  const stateList = document.getElementById("stateList");
  const parkTypeList = document.getElementById("parkTypeList");

  // Function to toggle visibility of dropdowns
  function toggleDropdowns() {
      stateDropdown.style.display = stateRadio.checked ? "block" : "none";
      parkTypeDropdown.style.display = parkTypeRadio.checked ? "block" : "none";
      if (stateRadio.checked) {
          populateParkTable();
      } else if (parkTypeRadio.checked) {
          populateParkTable();
      }
  }

  // Call toggleDropdowns on page load to ensure stateRadio is selected and its dropdown is shown
  toggleDropdowns();

  // Add event listeners to radio buttons
  stateRadio.addEventListener("change", toggleDropdowns);
  parkTypeRadio.addEventListener("change", toggleDropdowns);

  // Add event listeners to dropdowns
  stateList.addEventListener("change", populateParkTable);
  parkTypeList.addEventListener("change", populateParkTable);

  // Populate state dropdown
  for (const location of locationsArray) {
      const option = document.createElement("option");
      option.text = location;
      stateList.appendChild(option);
  }

  function populateParkTypeDropdown() {
      parkTypeList.innerHTML = ""; // Clear previous options

      // Populate park type dropdown
      for (const parkType of parkTypeArray) {
          const option = document.createElement("option");
          option.value = parkType;
          option.textContent = parkType;
          parkTypeList.appendChild(option);
      }
  }

  //display park info
  function populateParkTable() {
      const parksTableBody = document.getElementById("parksTableBody");
      parksTableBody.innerHTML = ""; // Clear previous table data

      // Filter parks based on selected state or park type
      const selectedState = stateList.value;
      const selectedParkType = parkTypeList.value;

      const filteredParks = nationalParksArray.filter(park => {
          return (stateRadio.checked && (selectedState === "" || park.State === selectedState)) ||
              (parkTypeRadio.checked && (selectedParkType === "" || park.LocationName.toLowerCase().includes(selectedParkType.toLowerCase())));
      });

      // Populate table with filtered park information
      filteredParks.forEach(park => {
          const row = document.createElement("tr");
          row.innerHTML = `
              <td>${park.LocationName}</td>
              <td>${park.Address}</td>
              <td>${park.City}</td>
              <td>${park.State}</td>
              <td>${park.ZipCode}</td>
              <td>${park.Phone}</td>
          `;
          parksTableBody.appendChild(row);
      });
  }

  // Initial loading
  populateParkTypeDropdown();
};
