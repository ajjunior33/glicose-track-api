import {CreateMeasurementDto, CreateMeasurementFactoryDto} from "./dto/create-measurement.dto";
import {Measurement, Moment} from "@prisma/client";
import { format } from 'date-fns'
import { ptBR  } from 'date-fns/locale'
class MeasurementFactory {
    static dateToISO(dateInString: string) {
        return new Date(dateInString);
    }

    static converterData(data: CreateMeasurementDto): CreateMeasurementFactoryDto {
        return {
            level: data.level,
            date: this.dateToISO(data.date),
            userId: data.userId,
            momentId: data.moment,
            time: data.time,
            note: data.note,
            rapidInsulin: data.rapidInsulin,
            slowInsulin: data.slowInsulin
        }
    }

    static insulinReturn(insulin: string | null) {
        if(
            insulin === "0" ||
            insulin === "" ||
            !insulin
        ){
            return null
        }

        return `${insulin} UI`;
    }

    static converterToBRL(date: Date): string {
        return format(new Date(date), 'dd/MM/yyyy', {locale: ptBR});
    }

    static converterToReturn(data: ({moment: Moment} & Measurement)[]){
        return data.map(item =>{
            return {
                level: `${item.level} mg/dL`,
                date: this.converterToBRL(item.date),
                user: Number(item.userId),
                moment: item.moment.name,
                time: item.time,
                note: item.note,
                rapidInsulin: this.insulinReturn(item.rapidInsulin),
                slowInsulin: this.insulinReturn(item.slowInsulin)
            }
        })
    }
}

export { MeasurementFactory}