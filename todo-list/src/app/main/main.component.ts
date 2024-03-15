import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  // initial data
  private topicId = 3
  public dbTopic:Array<any> = new Array(
    {id: 1, text: 'topic 1', status: true},
    {id: 2, text: 'topic 2', status: true},
    {id: 3, text: 'topic 3', status: true},
  )


  public dbList:Array<any> = new Array(
    {id: 1, text: 'list 1-1', status: true, topicId: 1},
    {id: 2, text: 'list 1-2', status: true, topicId: 1},
    {id: 3, text: 'list 2-1', status: true, topicId: 2},
    {id: 4, text: 'list 2-2', status: true, topicId: 2},
    {id: 5, text: 'list 3-1', status: true, topicId: 3},
  )

  // 
  public topic:Array<any> = new Array({})
  public list:Array<any> = new Array({})

  public newTopicText:string = ''

  constructor() {
    console.log('topic', this.dbTopic)
    console.log('list', this.dbList)
  }

  ngOnInit(): void {
    // Copy Object
    this.topic = [...this.dbTopic]

    // https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy
    // Shallow Copy
    this.list = this.dbList.filter(({topicId})=> topicId === 1)
  }

  // Topic 
  selectTopic($event: number) {
    console.log('seleteTopic: ', $event)

    this.list = this.dbList.filter(({topicId}) => topicId === $event)
  }

  createTopic() {
    this.dbTopic.push({id: ++this.topicId, text: this.newTopicText, status: true})
    this.topic = [...this.dbTopic]
  }

  updateTopic($event: any) {
    console.log($event)

    
  }

  deleteTopic($event: number) {
    console.log($event)

    this.dbTopic = this.dbTopic.filter(({id}) => id !== $event)
    this.topic = [...this.dbTopic]
  }

  // List
  createList($event: any) {
    console.log($event)

  }

  updateList($event: any) {
    console.log('updateList: ', $event)

    // update database list
    let list = this.dbList.find(({id}) => id === $event['id'])
    list['text'] = $event['text']
    list['status'] = $event['status']
  }

  deleteList($event: number) {
    console.log('deleteList: ', $event)

    // temp list
    let list = this.dbList.filter(({id}) => id === $event)

    // update database list
    this.dbList = this.dbList.filter(({id}) => id !== $event)
    this.list = this.dbList.filter(({topicId}) => topicId === list[0].topicId )

  }

}
