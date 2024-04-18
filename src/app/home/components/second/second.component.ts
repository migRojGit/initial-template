import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',

})
export class SecondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('second works!');
  }
}
