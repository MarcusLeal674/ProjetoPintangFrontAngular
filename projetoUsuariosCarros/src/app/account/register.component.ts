import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { User } from '@app/_models';
import { AccountService } from '@app/_services/account.service';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Car } from '@app/_interfaces/car';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],

})
export class RegisterComponent {
[x: string]: any;
  user?: User | null;
  cars: number[] = [];

  constructor(
    private accountService: AccountService
    ) {
    this.accountService.user.subscribe((x) => (this.user = x));
  }

  closeRegister() {
    this.accountService.logout();
  }


  createItems() {
    return this.builder.group({
      temporalidad: [],
      descripcion: [],
      fileImg: this.builder.array([])
    });

  }

  addCars(): void{
    this.cars.push(1);
  }

  removeAnalisis(index: number) {
    //this.tempArray.removeAt(index);
  }

  //get analisisArray() { return this.dataForm.get('analisis') as FormArray; }
  //get tempArray() { return this.dataForm.controls.analisis as FormArray; }
}
