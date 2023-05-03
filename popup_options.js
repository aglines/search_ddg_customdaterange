const dateRangeSelect = document.getElementById('dateRangeSelect');
const customDateRange = document.getElementById('customDateRange');
const fromDateInput = document.getElementById('fromDate');
const toDateInput = document.getElementById('toDate');


function updateCustomDateRangeVisibility() {
    if (dateRangeSelect.value === "custom") {
        customDateRange.style.display = "block";
    } else {
        customDateRange.style.display = "none";
    }
}

dateRangeSelect.addEventListener('change', () => {
    updateCustomDateRangeVisibility();
    browser.storage.local.set({
        dateRangeOption: dateRangeSelect.value,
        fromDate: fromDateInput.value,
        toDate: toDateInput.value,
    });
});

fromDateInput.addEventListener('change', () => {
    browser.storage.local.set({ fromDate: fromDateInput.value });
});

toDateInput.addEventListener('change', () => {
    browser.storage.local.set({ toDate: toDateInput.value });
});

// Show popup with previously saved values
browser.storage.local.get(["dateRangeOption", "fromDate", "toDate"]).then(result => {
    if (result.dateRangeOption) {
        dateRangeSelect.value = result.dateRangeOption;
    }
    if (result.fromDate) {
        fromDateInput.value = result.fromDate;
    }
    if (result.toDate) {
        toDateInput.value = result.toDate;
    }
    updateCustomDateRangeVisibility();
});




