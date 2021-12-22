import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pushes',
  templateUrl: './pushes.component.html',
  styleUrls: ['./pushes.component.scss']
})
export class PushesComponent implements OnInit {

  constructor() { }

  date = new Date()

  ngOnInit(): void {
  }

  submitForm() {

  }

}
