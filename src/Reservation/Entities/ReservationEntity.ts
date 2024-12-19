export class Reservation {
  teacher: string;
  lab: string;
  data: string;
  hour: string;

  constructor(teacher: string, lab: string, data: string, hour: string) {
    this.teacher = teacher;
    this.lab = lab;
    this.data = data;
    this.hour = hour;
  }
}
