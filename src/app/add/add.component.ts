import {Component, EventEmitter, Output} from '@angular/core';
import {Contact} from "../models/contact";

@Component({
  selector: 'app-add-contact',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  @Output() unContactEstCree = new EventEmitter();
  nouveauContact: Contact = new Contact();

  /**
   * Fonction appelée après
   * le submit du formulaire.
   */
  createContact() {

    // -- Vérification dans la console.
    console.log( this.nouveauContact );

    /**
     * Lorsque mon formulaire est soumis, j'émet un
     * évènement qui sera écouté par mon application
     * et qui récupèrera les données du nouveau contact.
     * ------------------------------------------------
     * A l'intérieur de mon évènement je glisse
     * l'objet de mon nouveau contact.
     */
    this.unContactEstCree.emit( this.nouveauContact );

    // -- Je réinitialise le nouveau contact.
    this.nouveauContact = new Contact();

  }
}
