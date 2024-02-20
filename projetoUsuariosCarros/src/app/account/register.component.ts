import { Component } from '@angular/core';
import { User } from '@app/_models';
import { AccountService } from '@app/_services/account.service';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  user?: User | null;

  constructor(private accountService: AccountService) {
    this.accountService.user.subscribe((x) => (this.user = x));
  }

  closeRegister() {
    this.accountService.logout();
  }
}
