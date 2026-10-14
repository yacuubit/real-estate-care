import { Component } from '@angular/core';
import {
  IonBadge,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTitle,
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
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonBadge,
    IonContent,
    IonHeader,
    IonIcon,
    IonLabel,
    IonTabBar,
    IonTabButton,
    IonTitle,
    IonToolbar,
    DashboardCardComponent,
  ],
})
export class HomePage {
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
}