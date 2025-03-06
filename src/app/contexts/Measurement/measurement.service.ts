import {MeasurementRepository} from "./measurement.repository";
import {CreateMeasurementDto} from "./dto/create-measurement.dto";

class MeasurementService {
    public async list(userId: string){
        const measurementRepository = new MeasurementRepository();
        return measurementRepository.list(userId)
    }

    public async create(data: CreateMeasurementDto) {
        const measurementRepository = new MeasurementRepository();
        return measurementRepository.create(data)
    }
}

export { MeasurementService }