export class CarModel {
    constructor (
        public id?: string,
        public adTitle?: string,
        public adDate?: Date,
        public adPrice?: number,
        public currency?: number,
        public category?: string,
        public status?: number,
        public brand?: string,
        public brandModel?: string,
        public kilometer?: number,
        public modelYear?: string,
        public fuelType?: string,
        public gearType?: string,
        public image?: {
            path?: string,
            name?: string
        }
    ) {}

    getImageFullPath() {
        return "https://bedonwaset.com/" + this.image.path;
    }

    getShortName() {
        return this.adTitle.slice(0, 15);
    }
}