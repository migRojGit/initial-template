import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',

})
export class FirstComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
    console.log('first works!');
  }
}
