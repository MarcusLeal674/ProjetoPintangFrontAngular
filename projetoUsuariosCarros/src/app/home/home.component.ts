import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Car } from '@app/_interfaces/car';
import { Users } from '@app/_interfaces/users';
import { HomeService } from '@app/_services/home.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  form!: FormGroup;
  users: Users[] = [];
  cars: Car[] = [];
  user!: Users;

  inputData!: HTMLInputElement;
  inputQuantidade!: HTMLInputElement;

  constructor(
    private service: HomeService,
    private fb: FormBuilder
    ) {
      this.form = this.fb.group({
        nome: [null, [Validators.required]],
      });

    }

  ngOnInit(): void {
    this.listUsers();
  }

  postarDados() {
    const dados = this.form.value;
    const inputData = document.getElementById('users');
    console.log(inputData);
  }

  listUsers(): void {
    this.users = [];
    this.service.listUsers().subscribe((users: []) => {
      this.users = users;
    });
  }

  deleteUser(user: Users): void {
    this.service.deleteUser(user.idUsers).subscribe((users: string) => {
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
}
