import { Component } from '@angular/core';
import {Contact} from "./models/contact";
import {ContactStorageService} from "./services/contact-storage.service";

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

  /**
   * Grâce au constructeur, on va charger
   * dans notre composant, le contactStorageService.
   * @param contactStorageService
   */
  constructor(private contactStorageService: ContactStorageService) {

    /**
     * Au chargement de mon composant, je vais récupérer
     * la liste de mes contacts depuis le localstorage
     * et l'affecter à mon tableau "mesContacts".
     */
    this.mesContacts = contactStorageService.getContacts();

  }

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
    /*{
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
    }*/
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

  /**
   * Permet de sauvegarder
   * un nouveau contact.
   * @param contact
   */
  pushContact(contact: Contact) {
    // -- Vérification dans la console
    console.log(contact);

    // -- Attribution d'un ID
    contact.id = Date.now()

    // -- Ajouter le contact dans mon tableau
    this.mesContacts.push( contact );

    // -- Déclencher la sauvegarder dans le storage
    this.saveContacts();
  }

  /**
   * Permet de sauvegarder UNIQUEMENT les contacts
   * dans le localstorage, via notre service.
   */
  saveContacts() {
    // -- Déclencher la sauvegarder dans le storage
    this.contactStorageService.saveContacts( this.mesContacts );
  }

  /**
   * Permet de supprimer un contact
   * @param contact
   */
  deleteContact(contact: Contact) {

    // -- Supprimer le contact du tableau
    this.mesContacts.splice( this.mesContacts.indexOf(contact), 1 );

    // -- Sauvegarder les contacts
    this.saveContacts();

  }
}
