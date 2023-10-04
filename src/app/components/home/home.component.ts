import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  isFormSubmitted = false;

  submitForm() {
    if (this.isFormValid()) {
      // Log the form data (you can replace this with your desired action)
      console.log('Form submitted');
      // Set the flag to display the submission message
      this.isFormSubmitted = true;
    }
  }

  isFormValid() {
    // Check if all form fields are valid
    return (
      this.isInputValid('firstName') &&
      this.isInputValid('lastName') &&
      this.isInputValid('mobileNumber')
    );
  }

  isInputValid(inputName: string) {
    const input = document.querySelector(`[name="${inputName}"]`);
    return input && input.classList.contains('ng-valid');
  }

}


