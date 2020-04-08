export class CarDetailModel {
    constructor (
        public adDate?: Date,
        public adPrice?: number,
        public currency?: number,
        public adNumber?: number,
        public country?: number,
        public cityName?: string,
        public category?: string,
        public brand?: string,
        public brandModel?: string,
        public cylinder?: string,
        public kilometer?: number,
        public modelYear?: Date,
        public fuelType?: string,
        public gearType?: string,
        public exteriorColor?: string,
        public image?: [],
    ) {}

    getFullPath(path: string) {
        return "https://bedonwaset.com/" + path;
    }
}