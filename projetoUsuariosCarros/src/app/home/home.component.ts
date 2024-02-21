import { Component, OnInit } from '@angular/core';
import { Car } from '@app/_interfaces/car';
import { Users } from '@app/_interfaces/users';
import { HomeService } from '@app/_services/home.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  users: Users[] = [];
  cars: Car[] = [];
  user!: Users;
  msg: string = '';

  constructor(private service: HomeService) {}

  ngOnInit(): void {
    this.listUsers();
  }

  listUsers(): void {
    this.users = [];
    this.service.listUsers().subscribe((users: []) => {
      this.users = users;
    });
  }

  deleteUser(user: Users): void {
    this.service.deleteUser(user.idUsers).subscribe((msg: string) => {
      this.msg = msg
    });
    const index = this.users.indexOf(user);
    if (index !== -1) this.users.splice(index, 1);
  }

  openModel(id: number): void {
    const modelDiv = document.getElementById('myModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }

    this.service.findUser(id).subscribe((user: Users) => {
      this.user = user;
    });
  }

  closeModel(): void {
    const modelDiv = document.getElementById('myModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }

  updateModel(): void {
    this.service.updateUser(this.setUser(), this.setUser().idUsers).subscribe((msg: string) => {
      this.msg = msg
      this.listUsers();
    });
  }

  setUser() {
    this.user.idUsers = parseFloat((<HTMLInputElement>document.getElementById("idInputFirstName")).value);
    this.user.firstName = (<HTMLInputElement>document.getElementById("exampleInputFirstName")).value;
    this.user.lastName = (<HTMLInputElement>document.getElementById("exampleInputLastName")).value;
    this.user.email = (<HTMLInputElement>document.getElementById("exampleInputEmail")).value;
    this.user.password = (<HTMLInputElement>document.getElementById("exampleInputPassword")).value;
    this.user.phone = (<HTMLInputElement>document.getElementById("exampleInputPhone")).value;
    this.user.role = (<HTMLInputElement>document.getElementById("exampleInputRole")).value;
    this.user.login = (<HTMLInputElement>document.getElementById("exampleInputLogin")).value;
    return this.user;
  }
}
