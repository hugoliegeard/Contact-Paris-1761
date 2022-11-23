import { Injectable } from '@angular/core';
import {Contact} from "../models/contact";

@Injectable({
  providedIn: 'root'
})
export class ContactStorageService {

  /**
   * Le but du constructeur est d'initialiser
   * certaines valeurs au chargement
   * du composant/service.
   */
  constructor() { }

  /**
   * Permet de sauvegarder nos contacts
   */
  saveContacts( contacts: Contact[] ) {
    /**
     * Pour stocker mon tableau de contact dans le localstorage
     * je dois au préalable le convertir en 'string'
     */
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  /**
   * Permet de récupérer les contacts.
   */
  getContacts(): Contact[] {

    /**
     * Avant de retourner les données, je m'assure
     * qu'il y a bien des contacts dans le localstorage.
     * S'il n'y en a pas, je retourne un nouveau tableau.
     */

    // -- Condition classique :

    // const contacts = JSON.parse(<string>localStorage.getItem('contacts'));
    // if (contacts !== null) {
    //   return contacts;
    // } else {
    //   return [];
    // }

    // -- Condition ternaire :
    return JSON.parse(<string>localStorage.getItem('contacts')) ?? [];
  }

}
