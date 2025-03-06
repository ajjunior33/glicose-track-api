export interface CreateMeasurementDto {
    level: string;
    date: string;
    moment: string;
    time: string;
    note: string;
    rapidInsulin: string;
    slowInsulin: string;
    userId: string;
}

export interface CreateMeasurementFactoryDto {
    level: string;
    date: Date;
    momentId: number;
    time: string;
    note: string;
    rapidInsulin: string;
    slowInsulin: string;
    userId: number;
}