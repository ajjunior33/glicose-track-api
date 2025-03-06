import {database} from "../../../database/index.database";
import {CreateMeasurementDto} from "./dto/create-measurement.dto";

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
                            moment,
                            time,
                            note,
                            rapidInsulin,
                            slowInsulin,
                            userId
    }: CreateMeasurementDto) {
        return database.measurement.create({
            data: {
                level,
                date,
                userId: Number(userId),
                moment,
                time,
                note,
                rapidInsulin,
                slowInsulin
            }
        })
    }
}

export { MeasurementRepository }