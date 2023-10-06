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
    saveData(); // Save the updated data
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
    saveData(); // Save the updated data after deleting a racer
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

function exportToPDF() {
  console.log('Export to PDF button clicked.');
    const doc = new jsPDF();

    // Set document properties
    doc.setProperties({
        title: 'Racers Data',
    });

    // Create content for the PDF
    //const content = [];

    //racers.forEach((racer) => {
        //content.push(`${racer.name}: ${racer.time} minutes`);
    //});

    // Join the content array into a single string
    const contentString = content.join('\n');

    // Add content to the PDF
    //doc.text(contentString, 10, 10);
    doc.text("hello")

    // Save the PDF with a specific filename (e.g., racers.pdf)
    doc.save('racers.pdf');
}