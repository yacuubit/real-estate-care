import { Component, inject } from '@angular/core';
import {
  AlertController,
  IonBadge,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonLabel,
  IonRow,
  IonTabBar,
  IonTabButton,
  IonToolbar,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  bookOutline,
  checkmarkCircleOutline,
  chevronForwardOutline,
  clipboardOutline,
  documentTextOutline,
  homeOutline,
  notificationsOutline,
  settingsOutline,
} from 'ionicons/icons';

import { DashboardCardComponent } from '../components/dashboard-card/dashboard-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonBadge,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon,
    IonLabel,
    IonRow,
    IonTabBar,
    IonTabButton,
    IonToolbar,
    DashboardCardComponent,
  ],
})
export class HomePage {
  private readonly alertController = inject(AlertController);

  constructor() {
    addIcons({
      bookOutline,
      checkmarkCircleOutline,
      chevronForwardOutline,
      clipboardOutline,
      documentTextOutline,
      homeOutline,
      notificationsOutline,
      settingsOutline,
    });
  }

  async openFeature(title: string) {
    const alert = await this.alertController.create({
      header: title,
      message: 'Deze functie wordt in een volgende stap uitgewerkt.',
      buttons: ['Sluiten'],
    });

    await alert.present();
  }
}