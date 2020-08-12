export class Module21 {
  name = '';
  description = '';

  getName() {
    return this.name;
  }

  getDescription() {
    return this.description;
  }

  getLog() {
    console.info(this);
  }
}
