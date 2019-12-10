export class Search {
    public type: string;
    public isParking: number;
    public isLift: number;
    public isGardien: number;
    public isCheminee: number;
    public nbrPieceMin: number;
    public nbrPieceMax: number;
    public nbrChambreMin: number;
    public nbrChambreMax: number;
    public dateMiseEnLigneMin: number;
    public dateMiseEnLigneMax: number;
    public dateConstructionMin: number;
    public dateConstructionMax: number;
    public codePostal: string;
    public zone: string;
    public ville: string;
    public prix: number;
    public prixMin: number;
    public prixMax: number;
    public surfaceMin: number;
    public surfaceMax: number;
    public aim: string;  // aim : 'L' => To live in, 'I' => To Invest
    public prestation: string;  // prestation : 'A' => Achetter, 'L' => Louer

    public page: number;
    public pageSize: number;

    public result = [];

    constructor() {}
}
