import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HeaderService } from '../../services/header.service'

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styles: []
})
export class PrincipalComponent implements OnInit {

  safeURL:any = "";
  videoURL:string = "https://www.youtube.com/watch?v=9dFhZFUkzuQ";

  constructor(private _sanitizer: DomSanitizer, public headerService: HeaderService){
   this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoURL);
 }

  ngOnInit() {
    this.headerService.hide();
  }

}
