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

  function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('time').textContent = timeString;
  }
  
  setInterval(updateTime, 1000);