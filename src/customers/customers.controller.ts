import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { Observable, of } from "rxjs";
import { CustomerDto } from "./customer.dto";

@Controller("customers")
export class CustomersController {
  @Get()
  findAll(): string {
    return "This action returns all customers";
  }

  @Post()
  create(@Body() createCustomerDto: CustomerDto): Observable<string> {
    return of(`This action adds a new customer ${createCustomerDto.name}`);
  }

  @Put()
  update(@Body() updateCustomerDto: CustomerDto): Observable<string> {
    return of(`This action updates a customer ${updateCustomerDto.name}`);
  }

  @Get(":id")
  findOne(@Param("id") id: string): string {
    return `This action returns a #${id} customer`;
  }

  @Delete(":id")
  remove(@Param("id") id: string): string {
    return `This action removes a #${id} customer`;
  }
}
