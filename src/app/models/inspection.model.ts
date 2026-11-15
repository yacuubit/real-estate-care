export interface Inspection {
  id: string;
  inspectionDate: string;
  status: 'assigned' | 'completed';
  property: Property;
  inspector: Inspector;
  findings: InspectionFindings;
}

export interface Property {
  id: string;
  address: string;
  city: string;
  tenantId: string;
}

export interface Inspector {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface InspectionFindings {
  damage: DamageFinding[];
  maintenance: MaintenanceFinding[];
  installations: InstallationFinding[];
  modifications: ModificationFinding[];
  photos: InspectionPhoto[];
}

export interface DamageFinding {
  location: string;
  isNewDamage: boolean;
  damageType: 'intentional' | 'wear' | 'violence' | 'normalUse' | 'calamity' | 'other';
  date: string;
  requiresUrgentAction: boolean;
  description: string;
}

export interface MaintenanceFinding {
  location: string;
  maintenanceType: 'painting' | 'woodRot' | 'electrical' | 'plumbing' | 'glazing';
  requiresUrgentAction: boolean;
  costEstimate: '0-500' | '500-1500' | '1500+';
}

export interface InstallationFinding {
  location: string;
  installationType: 'cooling' | 'heating' | 'ventilation' | 'electrical' | 'security';
  reportedFaults: string;
  testProcedureUrl: string | null;
  isApproved: boolean;
  remarks: string;
}

export interface ModificationFinding {
  existingSituationUrl: string | null;
  location: string;
  performedBy: 'tenant' | 'contractor' | 'unknown';
  description: string;
  requiredAction: 'accept' | 'inspect' | 'remove' | 'adjustAndInspect';
  remarks: string;
}

export interface InspectionPhoto {
  id: string;
  section: 'damage' | 'maintenance' | 'installations' | 'modifications';
  itemIndex: number;
  url: string;
  description: string;
}