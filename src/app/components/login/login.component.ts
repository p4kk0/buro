import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(public headerService: HeaderService) {
       
   }

   ngOnInit() {
    this.headerService.hide();
   }

}
