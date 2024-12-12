export class Register {
    firstName = '';
    lastName = '';

    get emailPreview() {
        if (this.firstName !== '' && this.lastName !== '') {
            return `${this.firstName.toLowerCase()}.${this.lastName.toLowerCase()}@domain.tld`;
        }
        return '';
  }
}