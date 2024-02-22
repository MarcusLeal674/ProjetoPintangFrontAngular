import { Component } from '@angular/core';
import { User } from '@app/_models';
import { AccountService } from '@app/_services/account.service';
import { Car } from '@app/_interfaces/car';
import { Users } from '@app/_interfaces/users';
import { HomeService } from '@app/_services/home.service';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],

})
export class RegisterComponent {
[x: string]: any;
  user?: User | null;
  addCar: number[] = [];
  users!: Users;
  car!: Car

  constructor(
    private accountService: AccountService,
    private homeService: HomeService
    ) {
    this.accountService.user.subscribe((x) => (this.user = x));
  }

  closeRegister() {
    this.accountService.logout();
  }

  addCars(): void{
    this.addCar.push(1);
  }

  saveModel(): void {
    this.homeService.saveUser(this.setUser()).subscribe((msg: string) => {
      this.msg = msg
    });
  }

  setUser() {
    this.users.password = (<HTMLInputElement>document.getElementById("exampleInputPassword")).value;
    this.users.firstName = (<HTMLInputElement>document.getElementById("exampleInputFirstName")).value;
    this.users.lastName = (<HTMLInputElement>document.getElementById("exampleInputLastName")).value;
    this.users.email = (<HTMLInputElement>document.getElementById("exampleInputEmail")).value;
    this.users.phone = (<HTMLInputElement>document.getElementById("exampleInputPhone")).value;
    this.users.role = (<HTMLInputElement>document.getElementById("exampleInputRole")).value;
    this.users.login = (<HTMLInputElement>document.getElementById("exampleInputLogin")).value;

    this.car.year = parseFloat((<HTMLInputElement>document.getElementById("exampleInputYear")).value);
    this.car.color = (<HTMLInputElement>document.getElementById("exampleInputColor")).value;
    this.car.licensePlate = (<HTMLInputElement>document.getElementById("exampleInputLicensePlate")).value;
    this.car.model = (<HTMLInputElement>document.getElementById("exampleInputModel")).value;

    this.users.cars.push(this.car);

    return this.users;
  }
}
