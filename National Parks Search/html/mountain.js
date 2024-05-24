document.addEventListener("DOMContentLoaded", function () {
    const mountainDropdown = document.getElementById("mountainTypeList");

    // Populate mountain dropdown
    for (const mountain of mountainsArray) {
        const option = document.createElement("option");
        option.value = mountain.name;
        option.textContent = mountain.name;
        mountainDropdown.appendChild(option);
    }

    mountainDropdown.addEventListener("change", function () {
        const selectedValue = mountainDropdown.value;
        const mountainDetailsContainer = document.getElementById("mountainDetails");
        mountainDetailsContainer.innerHTML = ""; // Clear previous mountain details

        const selectedMountain = mountainsArray.find(mountain => mountain.name === selectedValue);

        if (selectedMountain) {
            const nameElement = document.createElement("h2");
            nameElement.textContent = selectedMountain.name;

            const elevationElement = document.createElement("p");
            elevationElement.textContent = "Elevation: " + selectedMountain.elevation + " feet";

            const effortElement = document.createElement("p");
            effortElement.textContent = "Effort: " + selectedMountain.effort;

            const descElement = document.createElement("p");
            descElement.textContent = selectedMountain.desc;

            const latElement = document.createElement("p")
            latElement.textContent = "Latitude: " + selectedMountain.coords.lat;

            const longElement = document.createElement("p")
            longElement.textContent = "Longitude: " + selectedMountain.coords.lng;

            const imgElement = document.createElement("img");
            imgElement.src = selectedMountain.img;
            imgElement.alt = selectedMountain.name;

            mountainDetailsContainer.appendChild(nameElement);
            mountainDetailsContainer.appendChild(elevationElement);
            mountainDetailsContainer.appendChild(effortElement);
            mountainDetailsContainer.appendChild(descElement);
            mountainDetailsContainer.appendChild(imgElement);
            mountainDetailsContainer.appendChild(latElement);
            mountainDetailsContainer.appendChild(longElement);
        }
    });
});
