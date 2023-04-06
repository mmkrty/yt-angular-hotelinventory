import { Component,Input, Output, EventEmitter } from '@angular/core';
import { Room } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent {

  @Input() rooms: Room[] = [];

  @Output() selectedRoom = new EventEmitter<Room>()

  selectRoom(room: Room){
    this.selectedRoom.emit(room)
  }
}
