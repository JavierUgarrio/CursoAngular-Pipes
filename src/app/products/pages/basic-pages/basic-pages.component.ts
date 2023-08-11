import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-pages',
  templateUrl: './basic-pages.component.html',
  styleUrls: ['./basic-pages.component.css']
})
export class BasicPagesComponent {

  public nameLower :string = 'javier ugarrio';
  public nameUpper : string ='JAVIER UGARRIO';
  public fullName : string = 'jAVieR UgarRRIo';

  public customDate: Date = new Date()
}
