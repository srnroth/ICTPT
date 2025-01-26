// Form Validation and Submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", handleSubmit);
  }
});

function handleSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  // Validate Form Data
  if (!validateForm(data)) {
    return;
  }

  // Simulate form submission
  submitForm(data);
}

function validateForm(data) {
  const errors = [];

  if (!data.name || data.name.trim().length < 2) {
    errors.push("Please enter a valid name");
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.push("Please enter a valid email address");
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.push("Message must be at least 10 characters long");
  }

  if (errors.length > 0) {
    showErrors(errors);
    return false;
  }

  return true;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showErrors(errors) {
  // Remove existing error messages
  const existingErrors = document.querySelectorAll(".error-message");
  existingErrors.forEach((error) => error.remove());

  // Create and display new error messages
  const form = document.getElementById("contact-form");
  const errorContainer = document.createElement("div");
  errorContainer.className = "error-container";

  errors.forEach((error) => {
    const errorElement = document.createElement("p");
    errorElement.className = "error-message";
    errorElement.textContent = error;
    errorContainer.appendChild(errorElement);
  });

  form.insertBefore(errorContainer, form.firstChild);
}

function submitForm(data) {
  // Show loading state
  const submitButton = document.querySelector('button[type="submit"]');
  const originalText = submitButton.textContent;
  submitButton.textContent = "Sending...";
  submitButton.disabled = true;

  // Simulate API call
  setTimeout(() => {
    // Show success message
    const form = document.getElementById("contact-form");
    form.reset();

    const successMessage = document.createElement("div");
    successMessage.className = "success-message";
    successMessage.textContent = "Message sent successfully!";
    form.insertBefore(successMessage, form.firstChild);

    // Reset button
    submitButton.textContent = originalText;
    submitButton.disabled = false;

    // Remove success message after 3 seconds
    setTimeout(() => {
      successMessage.remove();
    }, 3000);
  }, 1500);
}
