import {MeasurementRepository} from "./measurement.repository";
import {CreateMeasurementDto} from "./dto/create-measurement.dto";
import {MomentService} from "../Moment/moment.service";
import {Exception} from "../../middlewares/exception.middleware";
import HttpStatus from 'http-status-codes';
import {MeasurementFactory} from "./measurement.factory";

class MeasurementService {
    private measurementRepository: MeasurementRepository;
    private momentService: MomentService;

    constructor() {
        this.measurementRepository = new MeasurementRepository();
        this.momentService = new MomentService();
    }

    public async list(userId: string){
        return this.measurementRepository.list(userId)
    }

    public async create(data: CreateMeasurementDto) {
        const moment = await this.momentService.findById(data.moment);

        if(!moment){
            throw new Exception("No moment found.", HttpStatus.BAD_REQUEST);
        }

        const converterData = MeasurementFactory.converterData(data)


        return this.measurementRepository.create(converterData)
    }
}

export { MeasurementService }