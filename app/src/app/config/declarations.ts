import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NMapComponent } from '../n-components/nMapComponent/n-map.component';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';

window['neutrinos'] = {
  environments: environment
}

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-cameraService
import { cameraService } from '../services/camera/camera.service';
//CORE_REFERENCE_IMPORT-userdetailComponent
import { userdetailComponent } from '../components/userdetailComponent/userdetail.component';
//CORE_REFERENCE_IMPORT-expenselistComponent
import { expenselistComponent } from '../components/expenselistComponent/expenselist.component';
//CORE_REFERENCE_IMPORT-expenseinfoComponent
import { expenseinfoComponent } from '../components/expenseinfoComponent/expenseinfo.component';
//CORE_REFERENCE_IMPORT-expenseComponent
import { expenseComponent } from '../components/expenseComponent/expense.component';
//CORE_REFERENCE_IMPORT-dashboardComponent
import { dashboardComponent } from '../components/dashboardComponent/dashboard.component';
//CORE_REFERENCE_IMPORT-homeComponent
import { homeComponent } from '../components/homeComponent/home.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => startupService.getDataSource();
}

/**
*bootstrap for @NgModule
*/
export const appBootstrap: any = [
  LayoutComponent,
];


/**
*Entry Components for @NgModule
*/
export const appEntryComponents: any = [
  //CORE_REFERENCE_PUSH_TO_ENTRY_ARRAY
];

/**
*declarations for @NgModule
*/
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  NMapComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-userdetailComponent
userdetailComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-expenselistComponent
expenselistComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-expenseinfoComponent
expenseinfoComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-expenseComponent
expenseComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-dashboardComponent
dashboardComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homeComponent
homeComponent,

];

/**
* provider for @NgModuke
*/
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
//CORE_REFERENCE_PUSH_TO_PRO_ARRAY-cameraService
cameraService,

];

/**
* Routes available for bApp
*/

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [{path: 'home', component: homeComponent,
children: [{path: 'dashboard', component: dashboardComponent,
children: []},{path: 'expenseinfo', component: expenseinfoComponent}]},{path: '', redirectTo: '/home/dashboard', pathMatch: 'full'},{path: '**', component: PageNotFoundComponent}]
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
