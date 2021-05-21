import { Controller, Get,Body,Post,Req,Request, Put, } from '@nestjs/common';
import { AppService } from './app.service';
import { ParkingService } from './parking/parking.service';
import {CrearParqueo} from './models/parkinkModel';
import { ParkingInterface } from './interfaces/parking';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService,private parkingService: ParkingService) {}
  @Get()
  getPark(@Req() req:Request): ParkingInterface[] {
    return this.parkingService.parqueos.filter(parqueo => parqueo.estado === true);
  }
_
  @Post()
  addPark(@Req() req:Request): ParkingInterface[] {    
    const placa = req.body['placa'];
    const nombrePropietario = req.body['nombrePropietario'];
    const idPropietario = req.body['idPropietario'];
    const nombrePrestadorServicio = req.body['nombrePrestadorServicio'];
    const fechaInicio = req.body['fechaInicio'];

    this.parkingService.addPark(nombrePropietario,idPropietario,placa,nombrePrestadorServicio,fechaInicio);
    return this.parkingService.parqueos;
  }
  @Put()
  update(@Req() req:Request): ParkingInterface[] {   
    var dataPark: ParkingInterface = {
      id: req.body['id'],
      estado: false
    }; 
    
    console.log(req);
    let index = this.parkingService.parqueos.findIndex(parqueo => parqueo.id === dataPark.id);

    this.parkingService.updatePark(index,dataPark);
    return this.parkingService.parqueos;
  }
  
}
