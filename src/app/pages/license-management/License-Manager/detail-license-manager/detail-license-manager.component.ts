// detail-license-manager.component.ts
import { Component, Input } from '@angular/core';
import { LicenseManager } from 'src/app/models/license/LicenseManager';

@Component({
  selector: 'app-detail-license-manager',
  templateUrl: './detail-license-manager.component.html',
  styleUrls: ['./detail-license-manager.component.css']
})
export class DetailLicenseManagerComponent {
updatelicenseManager(arg0: number) {
throw new Error('Method not implemented.');
}
openConfirmationDialog(arg0: any) {
throw new Error('Method not implemented.');
}
updatemanager(arg0: any) {
throw new Error('Method not implemented.');
}
  @Input() licenseManager: LicenseManager;
}
