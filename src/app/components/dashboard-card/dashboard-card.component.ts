import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonBadge, IonIcon } from '@ionic/angular';

@Component({
  selector: 'app-dashboard-card',
  standalone: true,
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss'],
  imports: [IonIcon, IonBadge],
})
export class DashboardCardComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() icon = '';
  @Input() badge?: number;

  @Output() cardSelected = new EventEmitter();
}