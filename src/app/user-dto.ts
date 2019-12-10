export class UserDTO {

    public static fromJson(json: object): UserDTO {
        return new UserDTO(
            json['id'],
            json['gender'],
            json['lastName'],
            json['firstName'],
            json['email'],
            json['password'],
            json['passwordConfirm'],
            json['mobileTelephone'],
            json['fixedTelephone'],
            json['adress'],
            json['postalCode'],
            json['town'],
            json['profession'],
            json['profile'],
            json['maritalSituation'],
            json['childrenNumber'],
            json['dependant'],
            json['ownedOrRentedAccommodation'],
            json['monthlyNetSalary'],
            json['rentAmount'],
            json['bankLoan'], // !!json['bankLoan']
            json['capitalContribution'],
            json['creditAmount'],
            json['monthlyPayment'],
            json['creditTerminationDate'], // new Date(json['creditTerminationDate'])
            json['SIRETNumber']
        );
    }
    constructor(
        public id: number,
        public gender: string,
        public lastName: string,
        public firstName: string,
        public email: string,
        public password: string,
        public passwordConfirm: string,
        public mobileTelephone: string,
        public fixedTelephone: string,
        public adress: string,
        public postalCode: string,
        public town: string,
        public profession: string,
        public profile: string,
        public maritalSituation: string,
        public childrenNumber: number,
        public dependant: number,
        public ownedOrRentedAccommodation: string,
        public monthlyNetSalary: number,
        public rentAmount: number,
        public bankLoan: number, //boolean
        public capitalContribution: number,
        public creditAmount: number,
        public monthlyPayment: number,
        public creditTerminationDate: number, // Date
        public SIRETNumber: string
    ) {  }

}
