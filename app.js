let racers = [];

window.addEventListener('load', () => {
    loadData(); // Load saved data on page load
    updateRacersList();
});

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

    racers.forEach((racer, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${racer.name}: ${racer.time} minutes`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            deleteRacer(index);
        });

        listItem.appendChild(deleteButton);
        racersList.appendChild(listItem);
    });
}

function deleteRacer(index) {
    racers.splice(index, 1);
    updateRacersList();
}

function saveData() {
    localStorage.setItem('racers', JSON.stringify(racers));
    alert('Data saved.');
}

function deleteData() {
    localStorage.removeItem('racers');
    racers = [];
    updateRacersList();
    alert('Data deleted.');
}

function loadData() {
    const savedRacers = localStorage.getItem('racers');
    if (savedRacers) {
        racers = JSON.parse(savedRacers);
    }
}
