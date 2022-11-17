import { Component } from '@angular/core';

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

  // Déclarer une variable
  title = 'Gestion de Contacts';
}
