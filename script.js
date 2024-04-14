function toggleApplyButton() {
  var agreeCheckbox = document.getElementById("agree");
  var applyButton = document.getElementById("apply-button");

  // Enable/disable the Apply Now button based on checkbox state
  applyButton.disabled = !agreeCheckbox.checked;
}
