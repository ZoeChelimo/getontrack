// Array to store journal entries
let entries = [];

// Function to display entries
function displayEntries() {
    const entriesDiv = document.getElementById("entries");
    entriesDiv.innerHTML = ""; // Clear existing entries
    entries.forEach((entry, index) => {
        const entryDiv = document.createElement("div");
        entryDiv.innerHTML = `
            <h3>${entry.name}</h3>
            <p>${entry.content}</p>
            <button onclick="deleteEntry(${index})">Delete</button>
        `;
        entriesDiv.appendChild(entryDiv);
    });
}

// Function to delete an entry
function deleteEntry(index) {
    entries.splice(index, 1);
    displayEntries();
}

// Function to handle form submission
document.getElementById("journal-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    const entryName = document.getElementById("entry-name").value;
    const entryContent = document.getElementById("entry-content").value;
    entries.push({ name: entryName, content: entryContent });
    displayEntries();
    // Clear form fields
    document.getElementById("entry-name").value = "";
    document.getElementById("entry-content").value = "";
});

// Initial display of entries
displayEntries();