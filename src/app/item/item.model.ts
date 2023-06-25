export class Item {
    public id : string;

    constructor(
        public imgURL: string,
        public title: string,
        public description: string,
        public price: number,
    ){
    }
}