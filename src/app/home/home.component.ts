import { Component, OnInit } from '@angular/core';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FirstComponent, SecondComponent ],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
        console.log('home works!');
  }
}
