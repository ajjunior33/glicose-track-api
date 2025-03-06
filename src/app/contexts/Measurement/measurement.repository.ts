import {database} from "../../../database/index.database";
import {CreateMeasurementDto, CreateMeasurementFactoryDto} from "./dto/create-measurement.dto";
import {Measurement, Moment} from "@prisma/client";

class MeasurementRepository {

    public async list(userId: string):  Promise<({moment: Moment} & Measurement)[]>{
        return database.measurement.findMany({
            where :{
                userId: userId
            },
            include:{
                moment: true,
            }
        });
    }

    public async create({
                            level,
                            date,
                            momentId,
                            time,
                            note,
                            rapidInsulin,
                            slowInsulin,
                            userId
    }: CreateMeasurementFactoryDto) {
        return database.measurement.create({
            data: {
                level,
                date,
                userId,
                momentId,
                time,
                note,
                rapidInsulin,
                slowInsulin
            }
        })
    }
}

export { MeasurementRepository }