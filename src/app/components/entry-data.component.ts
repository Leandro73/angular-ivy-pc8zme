import { Component } from '@angular/core';

@Component({
  selector: 'app-entry-data',
  templateUrl: './entry-data.component.html',
  styleUrls: ['./entry-data.component.css']
})
export class EntryDataComponent {
  placeholder: string = 'e-mail';
  placepass: string = 'password';
  color: string = 'red';
}