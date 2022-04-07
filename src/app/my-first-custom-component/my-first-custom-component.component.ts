import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-my-first-custom-component',
  templateUrl: './my-first-custom-component.component.html',
  styleUrls: ['./my-first-custom-component.component.css'],
})
export class MyFirstCustomComponentComponent implements OnInit {
  constructor() {
    setTimeout(() => {
      console.log('this appears in 4 seconds');
    }, 4000);

    $(document).ready(function () {
      $('#qwerty').click(function () {
        $('#qwerty').hide();
        $("p").click(function(){
          $("#qwerty").show();
        });
      });
    });
  }

  ngOnInit(): void {}
}
