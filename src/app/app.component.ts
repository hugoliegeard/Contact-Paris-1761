import { Component } from '@angular/core';

class Contact {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: object;
  phone?: number;
  website?: string;
  company?: object;
}

/**
 * @Component est ce qu'on appel un décorateur.
 * Il va nous permettre de définir 3 paramètres
 * essentiels à notre application...
 */
@Component({
  /**
   * Le sélecteur (selector) détermine
   * le nom de la balise HTML, permettant
   * d'afficher notre composant dans l'app :
   * <app-root></app-root>. Vous devez
   * OBLIGATOIREMENT avoir la balise
   * d'ouverture et de fermeture.
   */
  selector: 'app-root',
  /**
   * "templateUrl" est la
   * partie visible du composant. C'est
   * ce qui s'affiche à l'écran lorsque
   * le composant est utilisé. (HTML ...)
   */
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/**
 * La classe contient les données du
 * composant, mais aussi son comportement.
 * Dans notre contexte MVVM, notre classe
 * correspond au Model.
 */
export class AppComponent {

  // -- Déclarer une variable
  title = 'Gestion de Contacts';

  // -- Déclarer un objet javascript (json)
  unContact: Contact = {
    // CLE : VALEUR
      id: 1,
    name: 'Hugo LIEGEARD',
    username: 'hugoliegeard',
    email: 'hugo@biyn.media'
  }

  // -- Tableau de contacts.
  // Permet de sauvegarder les contacts de notre application.
  mesContacts: Contact[] = [
    {
      // CLE : VALEUR
      id: 1,
      name: 'Hugo LIEGEARD',
      username: 'hugoliegeard',
      email: 'hugo@biyn.media'
    },
    {
      // CLE : VALEUR
      id: 2,
      name: 'Abdoulaye TOURE',
      username: 'abdoulayetoure',
      email: 'abdoulaye@wf3.fr'
    },
    {
      // CLE : VALEUR
      id: 3,
      name: 'Victor DELEAU',
      username: 'victordeleau',
      email: 'victor@wf3.fr'
    },
    {
      // CLE : VALEUR
      id: 4,
      name: 'Sara RAHALI',
      username: 'sararahali',
      email: 'sara@wf3.fr'
    }
  ];

  /**
   * Contact choisi par mon utilisateur
   */
  contactActif:Contact;

  /**
   * Permet d'afficher un contact.
   * @param contact
   */
  displayContact(contact: Contact) {
    this.contactActif = contact;
  }
}
