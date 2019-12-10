export class ResultatLoiPinelDTO {

    public static fromJson(json: Object): ResultatLoiPinelDTO {
        return new ResultatLoiPinelDTO(
            json['loyerMaximum'],
            json['reductionImpots6ans'],
            json['reductionImpots9ans'],
            json['reductionImpots12ans']
        );
    }
    constructor(
        public loyerMaximum: number,
        public reductionImpots6ans: number,
        public reductionImpots9ans: number,
        public reductionImpots12ans: number) {
    }
}
