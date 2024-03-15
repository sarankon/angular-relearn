import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // public isComplete:boolean = false
  public get isComplete() {
    return this._isComplete
  }

  public set isComplete(value: boolean) {
    this._isComplete = value
    let updateList = {
      id: this.id,
      text: this.text,
      status: !this._isComplete
    }
    this.update.emit(updateList)
  }
  
  public isEditable:boolean = false
  public tempText:string | null = null
  public _isComplete:boolean = false

  @Input() id:number | null = null
  @Input() status:boolean = false
  @Input() text:string | null = null
  @Input() topicId:number | null = null

  @Output() update:EventEmitter<Object> = new EventEmitter()
  @Output() delete:EventEmitter<number> = new EventEmitter()

  constructor() {
    
  }

  ngOnInit(): void {
    this.tempText = this.text
    this._isComplete = !this.status
  }

  onPointerEnter() {
    this.isEditable = true
  }

  onPointerLeave() {
    this.isEditable = false
    this.tempText = this.text
  }

  onUpdateBtnClick() {
    this.text = this.tempText
    let updateList = {
      id: this.id,
      text: this.text,
      status: !this._isComplete,
      topicId: this.topicId
    }
    this.update.emit(updateList)
    this.isEditable = false
  }

  onDeleteBtnClick() {
    if(this.id != null) {
      this.delete.emit(this.id)
    }
  }

}
