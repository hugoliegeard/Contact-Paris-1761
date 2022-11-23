import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Contact} from "../models/contact";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {
  @Input() contactProfil: Contact;
  @Output() contactHasChangedEvent = new EventEmitter();

  /**
   * Se déclenche quand l'utilisateur
   * modifie la valeur du champ INPUT.
   */
  contactHasChanged() {
    this.contactHasChangedEvent.emit();
  }
}
