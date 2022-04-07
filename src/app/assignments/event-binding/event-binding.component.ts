import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  buttonClicks = 0
  buttonColor = "btn btn-success";
  constructor() { }

  ngOnInit(): void {}

  clickedButton(){
    console.log('button is working')
    this.buttonClicks++
  }

}
