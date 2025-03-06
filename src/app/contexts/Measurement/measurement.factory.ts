import {CreateMeasurementDto, CreateMeasurementFactoryDto} from "./dto/create-measurement.dto";
import {Measurement} from "@prisma/client";

class MeasurementFactory {
    static dateToISO(dateInString: string) {
        return new Date(dateInString);
    }

    static converterData(data: CreateMeasurementDto): CreateMeasurementFactoryDto {
        return {
            level: data.level,
            date: this.dateToISO(data.date),
            userId: Number(data.userId),
            momentId: Number(data.moment),
            time: data.time,
            note: data.note,
            rapidInsulin: data.rapidInsulin,
            slowInsulin: data.slowInsulin
        }
    }

    static converterToReturn(data: Measurement){
        return {
            level: data.level,
            date: data.date,
            user: Number(data.userId),
            moment: Number(data.momentId),
            time: data.time,
            note: data.note,
            rapidInsulin: data.rapidInsulin,
            slowInsulin: data.slowInsulin
        }
    }
}

export { MeasurementFactory}