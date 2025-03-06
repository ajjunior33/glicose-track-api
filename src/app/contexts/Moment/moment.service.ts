import {MomentRepository} from "./moment.repository";
import {Exception} from "../../middlewares/exception.middleware";
import HttpStatus from "http-status-codes";

class MomentService{

    private momentRepository ;

    constructor() {
        this.momentRepository = new MomentRepository();
    }
    public async createMoment({name}: CreateMomentDto) {
        return await this.momentRepository.store({name});
    }

    public async listMoments() {
        return await this.momentRepository.list();
    }

    public async destroyMoment(id: string){
        const convertIdToNumber = Number(id);
        const moment = await this.momentRepository.findById(convertIdToNumber);

        if(!moment){
            throw new Exception("Moment not found!", HttpStatus.NOT_FOUND);
        }

        return await this.momentRepository.destroy(convertIdToNumber)
    }
}

export {MomentService}