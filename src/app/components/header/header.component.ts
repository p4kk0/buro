import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent{

  public href: string = "";

  constructor(public headerService:HeaderService) {

  }

}
