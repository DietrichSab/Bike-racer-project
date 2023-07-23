// Sample array to store racers and their times
let racers = [];

function addRacer() {
    const nameInput = document.getElementById('nameInput');
    const timeInput = document.getElementById('timeInput');

    const name = nameInput.value.trim();
    const time = parseInt(timeInput.value);

    if (name === '' || isNaN(time)) {
        alert('Please enter valid name and time.');
        return;
    }

    const racer = { name, time };
    racers.push(racer);

    updateRacersList();
    nameInput.value = '';
    timeInput.value = '';
}

function updateRacersList() {
    const racersList = document.getElementById('racersList');
    racersList.innerHTML = '';

    racers.forEach((racer) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${racer.name}: ${racer.time} seconds`;
        racersList.appendChild(listItem);
    });
}


