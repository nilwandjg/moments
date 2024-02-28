import { Component, EventEmitter, Output } from '@angular/core';
import { Moment } from '../../../Moment';
import { MomentService } from '../../../services/moment.service';
import { MessagesService } from '../../../services/messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrl: './new-moment.component.css'
})
export class NewMomentComponent {
  @Output() onSubmit = new EventEmitter<Moment>();

  btnText = "Compartilhar!";

  constructor(
    private momentService: MomentService,
    private messagesService: MessagesService,
    private router: Router,
  ) { }

  async createHandler(moment: Moment) {
    const formData = new FormData();

    formData.append('title', moment.title);
    formData.append('description', moment.description);

    if (moment.image) {
      formData.append('image', moment.image);
    }

    await this.momentService.createMoment(formData).subscribe();

    //exibir msg
    this.messagesService.add("Momento adicionado com sucesso!");

    //redirect
    this.router.navigate(['/']);
  }
}
