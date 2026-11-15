import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Inspection } from '../models/inspection.model';

@Injectable({ providedIn: 'root' })
export class InspectionService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:3000/api/inspections';

  getCompletedInspections(): Observable<Inspection[]> {
    return this.http.get<Inspection[]>(this.apiUrl).pipe(
      map((inspections) =>
        inspections
          .filter((inspection) => inspection.status === 'completed')
          .sort(
            (first, second) =>
              Date.parse(second.inspectionDate) -
              Date.parse(first.inspectionDate)
          )
      )
    );
  }
}