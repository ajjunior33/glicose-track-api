import {database} from "../../../database/index.database";
import {CreateMeasurementDto, CreateMeasurementFactoryDto} from "./dto/create-measurement.dto";

class MeasurementRepository {

    public async list(userId: string){
        return database.measurement.findMany({
            where :{
                userId: Number(userId)
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