import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  @Input() id:number | null = null;
  @Input() status:boolean | null = null;
  @Input() text:string | null = null;

  @Output() selectTopic:EventEmitter<number> = new EventEmitter();
  @Output() updateTopic:EventEmitter<Object> = new EventEmitter();
  @Output() deleteTopic:EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  onSelectTopic() {
    if(this.id != null) {
      this.selectTopic.emit(this.id)
    }
  }

  onDeleteTopic() {
    if(this.id != null) {
      this.deleteTopic.emit(this.id)
    }
  }

}
