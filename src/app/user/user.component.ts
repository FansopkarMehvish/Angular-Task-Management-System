import {Component,EventEmitter,Input,input,Output,output,computed} from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";
// type User = {
//   id: string;
//   name: string;
//   avatar: string;
// }



@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent],
})
export class UserComponent {
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  @Input({required: true}) selected !: boolean
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }

  // id= input.required<string>();
  // avatar= input.required<string>();
  // name= input.required<string>();
  // select = output<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  // onSelectUser(){
  //   this.select.emit(this.id());
  // }
}
