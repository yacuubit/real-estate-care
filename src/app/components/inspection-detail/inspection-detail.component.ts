import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IonCard, IonCardContent } from '@ionic/angular';
import { Inspection } from '../../models/inspection.model';

@Component({
  selector: 'app-inspection-detail',
  standalone: true,
  templateUrl: './inspection-detail.component.html',
  styleUrls: ['./inspection-detail.component.scss'],
  imports: [DatePipe, IonCard, IonCardContent],
})
export class InspectionDetailComponent {
  @Input({ required: true }) inspection!: Inspection;

  readonly labels: Record<string, string> = {
    intentional: 'Moedwillig',
    wear: 'Slijtage',
    violence: 'Geweld',
    normalUse: 'Normaal gebruik',
    calamity: 'Calamiteit',
    other: 'Anders',
    painting: 'Schilderwerk',
    woodRot: 'Houtrot',
    electrical: 'Elektra',
    plumbing: 'Leidingwerk',
    glazing: 'Beglazing',
    cooling: 'Koeling',
    heating: 'Verwarming',
    ventilation: 'Luchtverversing',
    security: 'Beveiliging',
    tenant: 'Huurder',
    contractor: 'Aannemer',
    unknown: 'Onbekend',
    accept: 'Accepteren',
    inspect: 'Laten keuren',
    remove: 'Laten verwijderen',
    adjustAndInspect: 'Laten aanpassen en keuren',
    damage: 'Schade',
    maintenance: 'Onderhoud',
    installations: 'Installaties',
    modifications: 'Modificaties',
  };

  label(value: string): string {
    return this.labels[value] ?? value;
  }
}