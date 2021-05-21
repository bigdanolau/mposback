import { Injectable } from '@nestjs/common';
import { ParkingInterface } from '../interfaces/parking';
import * as random from 'random-id';
@Injectable()
export class ParkingService {
    public  parqueos: ParkingInterface[] = [];
    private charts = '1234568799';
    constructor(){
        
    }
    addPark(nombrePropietario,idPropietario,placaVehiculo,nombrePrestadorServicio,fechaInicio): string {
        this.parqueos.push({
            id: random(5,this.charts),
            nombrePropietario: nombrePropietario,
            idPropietario: idPropietario,
            placa: placaVehiculo,
            nombrePrestadorServicio: nombrePrestadorServicio,
            fechaInicio: fechaInicio,
            estado: true
        })
        return JSON.stringify(this.parqueos);
    }
    updatePark(index:number,parqueo: ParkingInterface){
        
        this.parqueos[index].estado = false;
    }
  
}
