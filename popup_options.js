const dateRangeSelect = document.getElementById("dateRangeSelect");
const currentSelection = document.getElementById("currentSelection"); 
const customDateRange = document.getElementById("customDateRange");
const fromDateInput = document.getElementById("fromDate");
const toDateInput = document.getElementById("toDate");
const saveButton = document.getElementById("saveButton");
const savedMessage = document.getElementById("savedMessage");

function updateCustomDateRangeVisibility() {
  if (dateRangeSelect.value === "custom") {
    customDateRange.style.display = "block";
  } else {
    customDateRange.style.display = "none";
  }
}

function sendOptionsToBackground() {
  browser.runtime.sendMessage({
    dateRangeOption: dateRangeSelect.value,
    fromDate: fromDateInput.value,
    toDate: toDateInput.value,
  });

  savedMessage.style.display = "inline";
  setTimeout(() => {
    savedMessage.style.display = "none";
  }, 2000);
}

// display current options
function updateOptionDisplays() {
  dateRangeSelect.value = currentOptions.dateRangeOption;

  if (currentOptions.fromDate) {
    fromDateInput.value = currentOptions.fromDate;
  }
  if (currentOptions.toDate) {
    toDateInput.value = currentOptions.toDate;
  }

  updateCustomDateRangeVisibility(); 
}

browser.runtime.sendMessage({ type: "getOptions" }).then(response => {
  currentOptions = response;
  updateOptionDisplays();
});

saveButton.addEventListener("click", sendOptionsToBackground);
