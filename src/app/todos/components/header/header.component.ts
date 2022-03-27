import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  text: string = '';



  constructor() { }

  ngOnInit(): void {
  }


  changeText(event: Event) {

    const target = event.target as HTMLInputElement;
    this.text = target.value;

  }


  addTodo(): void {
    console.log('addTodo', this.text);
  }

}
