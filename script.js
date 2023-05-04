$(function () {
  const dateTime = luxon.DateTime.now();
  document.getElementById("currentDay").textContent = dateTime.toFormat("MM/dd/yyyy HH:mm");
  const now = luxon.DateTime.local().hour;

  // Loop through all the time blocks
  $(".time-block").each(function () {
    const id = parseInt($(this).attr("id").split("-")[1]);

    // Add or remove the appropriate class based on the time
    if (id < now) {
      $(this).addClass("past");
    } else if (id === now) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  // Get all the textareas and save buttons
const textAreas = document.querySelectorAll(".description");
const saveButtons = document.querySelectorAll(".saveBtn");

// Add event listeners to the save buttons
saveButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Get the text area's content
    const text = textAreas[index].value;
    // Save the content to local storage using the hour as the key
    localStorage.setItem(`hour-${index+9}`, text);
  });
});

// Retrieve the saved data from local storage and display it in the text areas
textAreas.forEach((textArea, index) => {
  const savedText = localStorage.getItem(`hour-${index+9}`);
  if (savedText) {
    textArea.value = savedText;
  }
});

  
  
});
