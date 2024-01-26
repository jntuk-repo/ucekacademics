import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DeleteNotificationComponent } from './delete.notification/delete.notification.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SemesterApplicationComponent } from './semester-application/semester-application.component';
import { SupplySemesterApplicationComponent } from './supply-semester-application/supply-semester-application.component';
import { UpdateRegulationComponent } from './update.regulation/update.regulation.component';
import { UploadResultsComponent } from './upload.results/upload.results.component';
import { UploadSupplyResultsComponent } from './upload.supply-results/upload.supply-results.component';
import { ProfileComponent } from './profile/profile.component';
import { UploadResultsCsvComponent } from './upload.results.csv/upload.results.csv.component';
import { CertificateApplicationComponent } from './certificate-application/certificate-application.component';
import { RevaluationApplicationsComponent } from './revaluation-applications/revaluation-applications.component';

const routes: Routes = [
	{ path: "admin", redirectTo: "/admin/home", pathMatch: 'full' },
	{ path: "admin/home", component: HomeComponent },
	{ path: "admin/login", component: LoginComponent },
	{ path: "admin/profile", component: ProfileComponent },
	{ path: "admin/upload-notifications", component: NotificationsComponent },
	{ path: "admin/delete-notifications", component: DeleteNotificationComponent },
	{ path: "admin/update-regulation", component: UpdateRegulationComponent },
	{ path: "admin/upload-results", component: UploadResultsComponent },
	{ path: "admin/upload-results-csv", component: UploadResultsCsvComponent },
	{ path: "admin/upload-supplyresults", component: UploadSupplyResultsComponent },
	{ path: "admin/contact", component: ContactComponent },
	{ path: "admin/semester-application", component: SemesterApplicationComponent },
	{ path: "admin/semester-supply-application", component: SupplySemesterApplicationComponent },
	{ path: "admin/certificate-application", component: CertificateApplicationComponent },
	{ path: "admin/revaluation-applications", component: RevaluationApplicationsComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
