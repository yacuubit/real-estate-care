import { Component, Input } from '@angular/core';
import { IonBadge, IonCard, IonCardContent, IonIcon } from '@ionic/angular';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss'],
  imports: [IonCard, IonCardContent, IonIcon, IonBadge],
})
export class DashboardCardComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() icon = '';
  @Input() badge?: number;
}