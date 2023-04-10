import { ChangeDetectionStrategy,Component,Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Room } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnChanges {

  @Input() rooms: Room[] = [];

  @Input() title: string = '';

  @Output() selectedRoom = new EventEmitter<Room>()

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    if(changes['title']){
      this.title = changes['title'].currentValue.toUpperCase()
    }
  }

  selectRoom(room: Room){
    this.selectedRoom.emit(room)
  }
}
