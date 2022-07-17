export class User {
    firstName: string;
    lastName: string;
    email: string;
    birthDate: number;
    street: string;
    zipCode: number;
    city: string;

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName: '';                //Erklärung im Modul 15 Video 09 / Minute 4:55
        this.lastName = obj ? obj.lastName: '';                  // obj ? ist sowas wie eine if-Abfrage. Wenn obj nicht existiert wird '' angezeigt. Ansonsten würde es zur Fehlermeldung in der Console kommen (undefined)
        this.email = obj ? obj.email: '';
        this.birthDate = obj ? obj.birthDate: '';
        this.street = obj ? obj.street: '';
        this.zipCode = obj ? obj.zipCode: '';
        this.city = obj ? obj.city: '';
    }

    public toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            birthDate: this.birthDate,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city
        };
    }
}