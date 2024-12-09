import { Component } from '@angular/core';

@Component({
  selector: 'app-adminform',
  templateUrl: './adminform.component.html',
  styleUrls: ['./adminform.component.css'],
})
export class AdminFormComponent {
  // Form data
  enterpriseId: string = '';
  emailId: string = '';
  domainId: string = '';
  language: string = '';
  versionType: string = 'trial';
  validityDate: string = '';

  // Dropdown options
  domainOptions: string[] = ['Domain1', 'Domain2', 'Domain3'];
  languageOptions: string[] = ['English', 'Spanish', 'French'];
  versionOptions: string[] = ['Trial', 'Full'];

  // API URL (for demonstration purposes)
  apiUrl = 'https://your-api-url.com/submit';

  // Method to handle form submission
  onSubmit() {
    const formData = {
      enterpriseId: this.enterpriseId,
      emailId: this.emailId,
      domainId: this.domainId,
      language: this.language,
      versionType: this.versionType,
      validityDate: this.validityDate,
    };
    console.log('Form Submitted:', formData);

    // API Call (You can replace this with actual HTTP request)
    // this.httpClient.post(this.apiUrl, formData).subscribe(response => {
    //   console.log('API Response:', response);
    // });

    alert('Form submitted successfully!');
  }

  // Disable past dates in the date picker
  minDate(): string {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0
    const yyyy = today.getFullYear();
    return yyyy + '-' + mm + '-' + dd; // Date format: yyyy-mm-dd
  }
}
