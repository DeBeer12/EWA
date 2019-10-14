import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { NgSwitcheryModule } from "angular-switchery-ios";

import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyGroupsComponent } from './my-groups/my-groups.component';
import { SingleGroupComponent } from './my-groups/single-group/single-group.component';
import { CreateGroupComponent } from './my-groups/create-group/create-group.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { InvitesComponent } from './my-account/invites/invites.component';
import { MyDatasetsComponent } from './my-datasets/my-datasets.component';
import { SingleDatasetComponent } from './my-datasets/single-dataset/single-dataset.component';
import { UploadDatasetComponent } from './my-datasets/upload-dataset/upload-dataset.component';
import { ErrorComponent } from './error/error.component';
import { ErrorRouteComponent } from './error/error-route/error-route.component';
import { GroupMembersComponent } from './my-groups/single-group/group-members/group-members.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MemberListModelComponent } from "./models/member.model";
import {DatasetService} from "./services/dataset/dataset.service";
import {MyGroupsService} from "./services/my-groups-for-datasetlist/my-groups.service";

const routes: Routes = [
  // Landing route
  { path: "", component: LandingComponent },
  // Authetication routes
  { path: "auth", component: AuthComponent },
  { path: "auth/login", component: LoginComponent },
  { path: "auth/register", component: RegisterComponent },
  { path: "auth/forgot", component: AppComponent },
  { path: "auth/reset", component: ResetPasswordComponent },

  // Dashboard route
  { path: "dashboard", component: DashboardComponent },
  // Group routes
  { path: "groups", component: MyGroupsComponent },
  { path: "groups/single", component: SingleGroupComponent },
  { path: "groups/create", component: CreateGroupComponent },
  // Account routes
  { path: "account", component: MyAccountComponent },
  { path: "invites", component: InvitesComponent },
  // Dataset routes
  { path: "datasets", component: MyDatasetsComponent },
  { path: "datasets/single", component: InvitesComponent },
  { path: "datasets/upload", component: InvitesComponent },
  // Error route
  { path: "**", component: ErrorRouteComponent }
];

@NgModule({
  declarations: [
    // Navigation components
    NavComponent,
    HeaderComponent,

    // Container
    AppComponent,

    // Landing page
    LandingComponent,

    // Authentication components
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,

    // Dashboard
    DashboardComponent,

    // Group components
    MyGroupsComponent,
    SingleGroupComponent,
    CreateGroupComponent,

    // Account components
    MyAccountComponent,
    InvitesComponent,

    // Dataset components
    MyDatasetsComponent,
    SingleDatasetComponent,
    UploadDatasetComponent,

    // Error components
    ErrorComponent,
    ErrorRouteComponent,
    GroupMembersComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    BrowserModule,
    NgSwitcheryModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    MyGroupsService,
    DatasetService,
    {provide: String, useValue: "'dummy"},
    {provide: Number, useValue: "0"}],
  bootstrap: [AppComponent]
})

export class AppModule { }
