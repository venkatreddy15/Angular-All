import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  //  @Input() childMessage: string;


  ViewChildmessage: string = "Receiving Message from child";
  


  // @Output() messageEvent = new EventEmitter();

  // sendMessage() {
  //   this.messageEvent.emit(this.ViewChildmessage)
  // }

  constructor() { }

  ngOnInit() {
  }

}
