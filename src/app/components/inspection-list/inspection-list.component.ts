import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IonButton, IonItem, IonLabel, IonList, IonSpinner } from '@ionic/angular';

import { Inspection } from '../../models/inspection.model';
import { InspectionService } from '../../services/inspection.services';
import { InspectionDetailComponent } from '../inspection-detail/inspection-detail.component';

@Component({
  selector: 'app-inspection-list',
  standalone: true,
  templateUrl: './inspection-list.component.html',
  styleUrls: ['./inspection-list.component.scss'],
  imports: [
    DatePipe,
    IonButton,
    IonItem,
    IonLabel,
    IonList,
    IonSpinner,
    InspectionDetailComponent,
  ],
})
export class InspectionListComponent implements OnInit {
  private readonly inspectionService = inject(InspectionService);
  private readonly destroyRef = inject(DestroyRef);

  readonly inspections = signal<Inspection[]>([]);
  readonly selectedInspection = signal<Inspection | null>(null);
  readonly loading = signal(true);
  readonly errorMessage = signal('');

  ngOnInit(): void {
    this.loadInspections();
  }

  loadInspections(): void {
    this.loading.set(true);
    this.errorMessage.set('');
    this.selectedInspection.set(null);
    this.inspections.set([]);

    this.inspectionService.getCompletedInspections()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (inspections) => {
          this.inspections.set(inspections);
          this.loading.set(false);
        },
        error: (error: unknown) => {
          console.error('Loading inspections failed:', error);
          this.errorMessage.set('Inspecties konden niet worden geladen. Controleer of de API draait.');
          this.loading.set(false);
        },
      });
  }

  selectInspection(inspection: Inspection): void {
    const selected = this.selectedInspection();

    this.selectedInspection.set(
        selected?.id === inspection.id ? null : inspection
    );
  }
}