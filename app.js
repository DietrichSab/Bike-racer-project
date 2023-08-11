// Sample array to store racers and their times
let racers = [];

window.addEventListener('load', () => {
    const savedRacers = localStorage.getItem('racers');
    if (savedRacers) {
        racers = JSON.parse(savedRacers);
        updateRacersList();
    }
});

function addRacer() {
    const nameInput = document.getElementById('nameInput');
    const timeInput = document.getElementById('timeInput');
@ -16,6 +24,8 @@ function addRacer() {
    const racer = { name, time };
    racers.push(racer);

    localStorage.setItem('racers', JSON.stringify(racers));

    updateRacersList();
    nameInput.value = '';
    timeInput.value = '';
@ -25,11 +35,25 @@ function updateRacersList() {
    const racersList = document.getElementById('racersList');
    racersList.innerHTML = '';

    racers.forEach((racer) => {
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
    localStorage.setItem('racers', JSON.stringify(racers));
    updateRacersList();
}

