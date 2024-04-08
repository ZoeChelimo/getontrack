function addHabit() {
    var habitInput = document.getElementById("habitInput");
    var habit = habitInput.value;
    
    if (habit === "") {
      alert("Please enter a habit.");
      return;
    }
    
    var habitList = document.getElementById("habitList");
    var habitItem = document.createElement("div");
    habitItem.classList.add("habit");
    
    habitItem.innerHTML = `
      <input type="checkbox">
      <span>${habit}</span>
      <input type="number" min="0" placeholder="0" class="count">
    `;
    
    habitList.appendChild(habitItem);
    habitInput.value = "";
  }