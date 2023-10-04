import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LaborCategoryAddComponent } from './labor-category-add/labor-category-add.component';
import { LaborCategoryEditComponent } from './labor-category-edit/labor-category-edit.component';
import { LaborCategoryListComponent } from './labor-category-list/labor-category-list.component';
import { LoginComponent } from './login/login.component';
import { DginfoComponent } from './dginfo/dginfo.component';
import { DgContDischargeSummaryListComponent } from './dg-cont-discharge-summary-list/dg-cont-discharge-summary-list.component';
import { DgRotationComponent } from './dg-rotation/dg-rotation.component';
import { DgRotationListForHtmlComponent } from './dg-rotation-list-for-html/dg-rotation-list-for-html.component';
import { DgContainersDischargeSummaryListFormComponent } from './dg-containers-discharge-summary-list-form/dg-containers-discharge-summary-list-form.component';
import { DgContainersDischargeListByRotationFormComponent } from './dg-containers-discharge-list-by-rotation-form/dg-containers-discharge-list-by-rotation-form.component';
import { DgContainersDischargeListByRotationComponent } from './dg-containers-discharge-list-by-rotation/dg-containers-discharge-list-by-rotation.component';
import { DgContainersDischargeGeneralListComponent } from './dg-containers-discharge-general-list/dg-containers-discharge-general-list.component';
import { IsoCodeComponent } from './iso-code/iso-code.component';
import { PoDListComponent } from './po-dlist/po-dlist.component';
import { YardListComponent } from './yard-list/yard-list.component';
import { CopinoComponent } from './copino/copino.component';
import { CopinoHtmlComponent } from './copino-html/copino-html.component';

import { ExportCopinoFormComponent } from './export-copino-form/export-copino-form.component';
import { ExportCopinoReportComponent } from './export-copino-report/export-copino-report.component';

import { PodListComponent } from './pod-list/pod-list.component';
import { ExportContainerBlockReportFormComponent } from './export-container-block-report-form/export-container-block-report-form.component';
import { ExportContainerBlockReportListComponent } from './export-container-block-report-list/export-container-block-report-list.component';
import { ExportMloWiseExcelUploadedReportFormComponent } from './export-mlo-wise-excel-uploaded-report-form/export-mlo-wise-excel-uploaded-report-form.component';
import { ExportMloWiseExcelUploadedReportListComponent } from './export-mlo-wise-excel-uploaded-report-list/export-mlo-wise-excel-uploaded-report-list.component';

import { ExportMloWisePreAdvisedLoadedContainerListFormComponent } from './export-mlo-wise-pre-advised-loaded-container-list-form/export-mlo-wise-pre-advised-loaded-container-list-form.component';
import { ExportMloWisePreAdvisedLoadedContainerListComponent } from './export-mlo-wise-pre-advised-loaded-container-list/export-mlo-wise-pre-advised-loaded-container-list.component';
import { ExportMloWisePreAdviceViewListComponent } from './export-mlo-wise-pre-advice-view-list/export-mlo-wise-pre-advice-view-list.component';
import { ExportMloWiseSummaryListComponent } from './export-mlo-wise-summary-list/export-mlo-wise-summary-list.component';

import { ExportMloWiseExportSummaryFormComponent } from './export-mlo-wise-export-summary-form/export-mlo-wise-export-summary-form.component';
import { ExportMloWiseExportSummaryListComponent } from './export-mlo-wise-export-summary-list/export-mlo-wise-export-summary-list.component';
import { ExportDateAndRotationWisePreAdvisedContainerFormComponent } from './export-date-and-rotation-wise-pre-advised-container-form/export-date-and-rotation-wise-pre-advised-container-form.component';
import { ExportDateAndRotationWisePreAdvisedContainerListComponent } from './export-date-and-rotation-wise-pre-advised-container-list/export-date-and-rotation-wise-pre-advised-container-list.component';
import { ExportCommentsByShippingSectionOnExportVesselFormComponent } from './export-comments-by-shipping-section-on-export-vessel-form/export-comments-by-shipping-section-on-export-vessel-form.component';
import { ExportCommentsByShippingSectionOnExportVesselListComponent } from './export-comments-by-shipping-section-on-export-vessel-list/export-comments-by-shipping-section-on-export-vessel-list.component';
import { ExportExcelUploadSampleWithLoadedContainerFormComponent } from './export-excel-upload-sample-with-loaded-container-form/export-excel-upload-sample-with-loaded-container-form.component';
import { ExportExcelUploadSampleWithLoadedContainerListComponent } from './export-excel-upload-sample-with-loaded-container-list/export-excel-upload-sample-with-loaded-container-list.component';
import { ExportDestinationWiseMloLoadedContainerFormComponent } from './export-destination-wise-mlo-loaded-container-form/export-destination-wise-mlo-loaded-container-form.component';
import { ExportDestinationWiseMloLoadedContainerListComponent } from './export-destination-wise-mlo-loaded-container-list/export-destination-wise-mlo-loaded-container-list.component';
import { ExportLoadedContainerListLoadAndEmptyFormComponent } from './export-loaded-container-list-load-and-empty-form/export-loaded-container-list-load-and-empty-form.component';
import { ExportLoadedContainerListLoadAndEmptyListComponent } from './export-loaded-container-list-load-and-empty-list/export-loaded-container-list-load-and-empty-list.component';

import { ExportRotationWiseExportContainerFormComponent } from './export-rotation-wise-export-container-form/export-rotation-wise-export-container-form.component';
import { ExportRotationWiseExportContainerListComponent } from './export-rotation-wise-export-container-list/export-rotation-wise-export-container-list.component';
import { ExportRotationWiseContainerInformationFormComponent } from './export-rotation-wise-container-information-form/export-rotation-wise-container-information-form.component';
import { ExportRotationWiseContainerInformationListComponent } from './export-rotation-wise-container-information-list/export-rotation-wise-container-information-list.component';
import { ExportMloWiseLoadedContainerFormComponent } from './export-mlo-wise-loaded-container-form/export-mlo-wise-loaded-container-form.component';
import { ExportMloWiseLoadedContainerListComponent } from './export-mlo-wise-loaded-container-list/export-mlo-wise-loaded-container-list.component';
import { ExportContainerToBeLoadedFormComponent } from './export-container-to-be-loaded-form/export-container-to-be-loaded-form.component';
import { ExportContainerToBeLoadedListComponent } from './export-container-to-be-loaded-list/export-container-to-be-loaded-list.component';
import { ExportContainerLoadingExcelReportFormComponent } from './export-container-loading-excel-report-form/export-container-loading-excel-report-form.component';
import { ExportLoadedContainerFormComponent } from './export-loaded-container-form/export-loaded-container-form.component';
import { ExportLoadedContainerListComponent } from './export-loaded-container-list/export-loaded-container-list.component';
import { ExportContainerLoadingExcelReportListComponent } from './export-container-loading-excel-report-list/export-container-loading-excel-report-list.component';
import { ExportEquipmentHandlingPerformanceRtgFormComponent } from './export-equipment-handling-performance-rtg-form/export-equipment-handling-performance-rtg-form.component';
import { ExportEquipmentHandlingPerformanceRtgListComponent } from './export-equipment-handling-performance-rtg-list/export-equipment-handling-performance-rtg-list.component';
import { ExportVesselListWithStatusFormComponent } from './export-vessel-list-with-status-form/export-vessel-list-with-status-form.component';
import { ExportVesselListWithStatusDetailListComponent } from './export-vessel-list-with-status-detail-list/export-vessel-list-with-status-detail-list.component';
import { ExportVesselListWithStatusSummaryListComponent } from './export-vessel-list-with-status-summary-list/export-vessel-list-with-status-summary-list.component';
import { ExportBlankBayViewFormComponent } from './export-blank-bay-view-form/export-blank-bay-view-form.component';
import { ExportBlankBayViewListComponent } from './export-blank-bay-view-list/export-blank-bay-view-list.component';
import { ExportContainerBayFormComponent } from './export-container-bay-form/export-container-bay-form.component';
import { ExportContainerBaylistComponent } from './export-container-baylist/export-container-baylist.component';
import { HandlingReportFormComponent } from './handling-report-form/handling-report-form.component';
import { HandlingReportListComponent } from './handling-report-list/handling-report-list.component';
import { DgContainerDeliveryReportFormComponent } from './dg-container-delivery-report-form/dg-container-delivery-report-form.component';
import { DgContainerDeliveryReportListComponent } from './dg-container-delivery-report-list/dg-container-delivery-report-list.component';

import { DgManifestFormComponent } from './dg-manifest-form/dg-manifest-form.component';
import { DgManifestListComponent } from './dg-manifest-list/dg-manifest-list.component';

import { DgContainerByRotationFormComponent } from './dg-container-by-rotation-form/dg-container-by-rotation-form.component';
import { DgContainerByRotationListComponent } from './dg-container-by-rotation-list/dg-container-by-rotation-list.component';
import { ExportContainerNotFoundReportFormComponent } from './export-container-not-found-report-form/export-container-not-found-report-form.component';
import { ExportContainerNotFoundReportListComponent } from './export-container-not-found-report-list/export-container-not-found-report-list.component';
import { ShahinSpecialReportEquipmentHandlingPerformanceHistoryFormComponent } from './shahin-special-report-equipment-handling-performance-history-form/shahin-special-report-equipment-handling-performance-history-form.component';
import { ShahinSpecialReportEquipmentHandlingPerformanceHistoryListComponent } from './shahin-special-report-equipment-handling-performance-history-list/shahin-special-report-equipment-handling-performance-history-list.component';
import { ShahinSpecialReportLoadedContainerListFormComponent } from './shahin-special-report-loaded-container-list-form/shahin-special-report-loaded-container-list-form.component';
import { ShahinSpecialReportLoadedContainerListComponent } from './shahin-special-report-loaded-container-list/shahin-special-report-loaded-container-list.component';
import { ShahinSpecialReportLocationCertifyComponent } from './shahin-special-report-location-certify/shahin-special-report-location-certify.component';

import { ShahinMloWiseFinalLoadingExportReportFormComponent } from './shahin-mlo-wise-final-loading-export-report-form/shahin-mlo-wise-final-loading-export-report-form.component';
import { ShahinMloWiseFinalLoadingExportReportListComponent } from './shahin-mlo-wise-final-loading-export-report-list/shahin-mlo-wise-final-loading-export-report-list.component';
import { ShahinMloWiseFinalLoadingDetailsExportReportListComponent } from './shahin-mlo-wise-final-loading-details-export-report-list/shahin-mlo-wise-final-loading-details-export-report-list.component';
import { TodaysEdiDeclarationComponent } from './todays-edi-declaration/todays-edi-declaration.component';
import { TodaysEdiDeclarationListComponent } from './todays-edi-declaration-list/todays-edi-declaration-list.component';
import { ConvertIgmComponent } from './convert-igm/convert-igm.component';
import { UploadExcelForPangaonComponent } from './upload-excel-for-pangaon/upload-excel-for-pangaon.component';


import { BerthOperatorReportFormComponent } from './berth-operator-report-form/berth-operator-report-form.component';
import { BerthOperatorReportViewComponent } from './berth-operator-report-view/berth-operator-report-view.component';
import { IgmAmendmentChangeContainerStatusFormComponent } from './igm-amendment-change-container-status-form/igm-amendment-change-container-status-form.component';
import { UploadExcelForOBPSformComponent } from './upload-excel-for-obpsform/upload-excel-for-obpsform.component';
import { BillOfEntryReportComponent } from './bill-of-entry-report/bill-of-entry-report.component';
import { BillOfEntryReportViewComponent } from './bill-of-entry-report-view/bill-of-entry-report-view.component';
import { DateWiseBillOfEntryReportFormComponent } from './date-wise-bill-of-entry-report-form/date-wise-bill-of-entry-report-form.component';
import { DateWiseBillOfEntryReportComponent } from './date-wise-bill-of-entry-report/date-wise-bill-of-entry-report.component';
import { ExportAssignmentSheetForOutwadPangonComponent } from './export-assignment-sheet-for-outwad-pangon/export-assignment-sheet-for-outwad-pangon.component';
import { ExportAssignmentSheetForOutwadPangonListComponent } from './export-assignment-sheet-for-outwad-pangon-list/export-assignment-sheet-for-outwad-pangon-list.component';


const routes: Routes = [

 //Upload Excel File For Pangaon


  
 {path:'exportReport/export-assignment-sheet-for-outwad-pangon',component:ExportAssignmentSheetForOutwadPangonComponent},
 {path:'exportReport/export-assignment-sheet-for-outwad-pangon-list',component:ExportAssignmentSheetForOutwadPangonListComponent},
 


 {path:'UploadExcel/UploadExcelForOBPS/form',component:UploadExcelForOBPSformComponent},
 {path:'Pangaon/UploadExcelForPangaon/form',component:UploadExcelForPangaonComponent},
 {path:'IgmAmendment/ChangeContainerStatus/form',component:IgmAmendmentChangeContainerStatusFormComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: LoginComponent},  
  {path: 'exportReports/pod/list', component: PodListComponent },
  {path:'headDelivery/date_wise_bill_entry', component: BillOfEntryReportComponent},  


  {path:'headDelivery/date_wise_bill_of_entry_report_form',component:DateWiseBillOfEntryReportFormComponent},
  {path:'headDelivery/date_wise_bill_of_entry_report',component:DateWiseBillOfEntryReportComponent},
  {path:'headDelivery/date_wise_bill_of_entry_report_view', component: BillOfEntryReportViewComponent},  
  {path:'dg/info', component: DginfoComponent},  
  {path:'exportReports/iso/list',component:IsoCodeComponent},
  {path:'yard/list', component: YardListComponent },
  {path:'exportReports/copino/form', component: ExportCopinoFormComponent },
  {path:'exportReports/copino/report', component: ExportCopinoReportComponent },
  {path:'exportReports/container-block-report/form',component:ExportContainerBlockReportFormComponent},
  {path:'exportReports/comments-by-shipping-section-on-export-vessel/form',component:ExportCommentsByShippingSectionOnExportVesselFormComponent},
  {path:'exportReports/comments-by-shipping-section-on-export-vessel/list',component:ExportCommentsByShippingSectionOnExportVesselListComponent},
   {path:'exportReports/export-destination-wise-mlo-loaded-container/form',component:ExportDestinationWiseMloLoadedContainerFormComponent},
  {path:'exportReports/export-destination-wise-mlo-loaded-container/list',component:ExportDestinationWiseMloLoadedContainerListComponent},
  {path:'exportReports/export-loaded-container-list-load-and-empty/form',component:ExportLoadedContainerListLoadAndEmptyFormComponent},
    {path:'exportReports/export-loaded-container-list-load-and-empty/list',component:ExportLoadedContainerListLoadAndEmptyListComponent},
    {path:'exportReports/export-rotation-wise-export-container/form',component:ExportRotationWiseExportContainerFormComponent},
  {path:'exportReports/export-rotation-wise-export-container/list',component:ExportRotationWiseExportContainerListComponent},
  {path:'exportReports/export-rotation-wise-container-information/form',component:ExportRotationWiseContainerInformationFormComponent},
  {path:'exportReports/export-rotation-wise-container-information/list',component:ExportRotationWiseContainerInformationListComponent},
  { path:'ImportReport/berthOperatorReportForm', component: BerthOperatorReportFormComponent },
  { path:'ImportReport/berthOperatorReportView', component: BerthOperatorReportViewComponent },
  {path:'exportReports/export-excel-upload-sample-with-loaded-container/form',component:ExportExcelUploadSampleWithLoadedContainerFormComponent},
  {path:'exportReports/export-excel-upload-sample-with-loaded-container/list',component:ExportExcelUploadSampleWithLoadedContainerListComponent},
  {path:'exportReports/export-mlo-wise-loaded-container/form',component:ExportMloWiseLoadedContainerFormComponent},
  {path:'exportReports/export-mlo-wise-loaded-container/list',component:ExportMloWiseLoadedContainerListComponent},
  {path:'exportReports/container-block-report/list',component:ExportContainerBlockReportListComponent},
  {path:'exportReports/mlo-wise-excel-uploaded-report/form',component:ExportMloWiseExcelUploadedReportFormComponent},
  {path:'exportReports/mlo-wise-excel-uploaded-report/list',component:ExportMloWiseExcelUploadedReportListComponent},
  {path:'exportReports/export-container-to-be-loaded/form',component:ExportContainerToBeLoadedFormComponent},
  {path:'exportReports/export-container-to-be-loaded/list',component:ExportContainerToBeLoadedListComponent},
  {path:'exportReports/export-container-not-found/form',component:ExportContainerNotFoundReportFormComponent},
  {path:'exportReports/export-container-not-found/list',component:ExportContainerNotFoundReportListComponent},
  {path:'shahinSpecialReport/equipment-handling-performance-history-form',component:ShahinSpecialReportEquipmentHandlingPerformanceHistoryFormComponent},
  {path:'shahinSpecialReport/equipment-handling-performance-history-list',component:ShahinSpecialReportEquipmentHandlingPerformanceHistoryListComponent},
  {path:'shahinSpecialReport/loaded-container-form',component:ShahinSpecialReportLoadedContainerListFormComponent},
  {path:'shahinSpecialReport/loaded-container-list',component:ShahinSpecialReportLoadedContainerListComponent},
  {path:'shahinSpecialReport/shahin-mlo-wise-loading-export-report-form',component:ShahinMloWiseFinalLoadingExportReportFormComponent},
  {path:'shahinSpecialReport/shahin-mlo-wise-loading-export-report-list',component:ShahinMloWiseFinalLoadingExportReportListComponent},
  {path:'shahinSpecialReport/shahin-mlo-wise-loading-details-export-report-list',component:ShahinMloWiseFinalLoadingDetailsExportReportListComponent},
  {path:'shahinSpecialReport/location-certify',component:ShahinSpecialReportLocationCertifyComponent},
  {path:'IgmOperation/todaysEdiDeclaration',component:TodaysEdiDeclarationComponent},
  {path:'IgmOperation/todaysEdiDeclarationList/:id',component:TodaysEdiDeclarationListComponent},
  {path:'IgmOperation/updateManifest',component:ConvertIgmComponent},
  {path:'exportReports/export-container-bay-form',component:ExportContainerBayFormComponent},
  {path:'DgReport/dg-container-delivery-report-form',component:DgContainerDeliveryReportFormComponent},  
  {path:'DgReport/dg-container-delivery-report-list',component:DgContainerDeliveryReportListComponent},
  {path:'DgReport/dg-manifest-form',component:DgManifestFormComponent},
  {path:'DgReport/dg-manifest-list',component:DgManifestListComponent},
  {path:'DgReport/dg-container-report-form',component:DgContainerByRotationFormComponent},
  {path:'DgReport/dg-container-report-list',component:DgContainerByRotationListComponent},
  {path:'handlingReport/handling-report-form',component:HandlingReportFormComponent},
  {path:'handlingReport/handling-report-list',component:HandlingReportListComponent},
  
  {path:'exportReports/export-container-baylist',component:ExportContainerBaylistComponent},

  {path:'exportReports/export-blank-bay-view/form',component:ExportBlankBayViewFormComponent},

  {path:'exportReports/export-blank-bay-view/list',component:ExportBlankBayViewListComponent},

  {path:'exportReports/export-equipment-handling-performance-rtg/form',component:ExportEquipmentHandlingPerformanceRtgFormComponent},
  {path:'exportReports/export-equipment-handling-performance-rtg/list',component:ExportEquipmentHandlingPerformanceRtgListComponent},


  {path:'exportReports/export-vessel-list-with-status/form',component:ExportVesselListWithStatusFormComponent},
  {path:'exportReports/export-vessel-list-with-status-detail-list',component:ExportVesselListWithStatusDetailListComponent},
  {path:'exportReports/export-vessel-list-with-status-summary-list',component:ExportVesselListWithStatusSummaryListComponent},


  {path:'exportReports/export-container-loading-excel-report/form',component:ExportContainerLoadingExcelReportFormComponent},
  {path:'exportReports/export-container-loading-excel-report/list',component:ExportContainerLoadingExcelReportListComponent},
  {path:'exportReports/export-loaded-container/form',component:ExportLoadedContainerFormComponent},
  {path:'exportReports/export-loaded-container/list',component:ExportLoadedContainerListComponent},

  
  {path:'exportReports/mlo-wise-export-summary/form',component:ExportMloWiseExportSummaryFormComponent},
  {path:'exportReports/mlo-wise-export-summary/list',component:ExportMloWiseExportSummaryListComponent},

  {path:'exportReports/date-and-rotation-wise-pre-advised-container/form',component:ExportDateAndRotationWisePreAdvisedContainerFormComponent},
  {path:'exportReports/date-and-rotation-wise-pre-advised-container/list',component:ExportDateAndRotationWisePreAdvisedContainerListComponent},
  
  {path:'exportReports/mlo-wise-pre-advised-loaded-container-list-form',component:ExportMloWisePreAdvisedLoadedContainerListFormComponent},
  {path:'exportReports/mlo-wise-pre-advised-loaded-container-list',component:ExportMloWisePreAdvisedLoadedContainerListComponent},
  {path:'exportReports/mlo-wise-pre-advised-view-list',component:ExportMloWisePreAdviceViewListComponent},
  {path:'exportReports/mlo-wise-summary-list',component:ExportMloWiseSummaryListComponent},

  { path: 'dg/dg-containers-discharge-summary-list-form', component: DgContainersDischargeSummaryListFormComponent},  
  { path: 'dg/dg-containers-discharge-list-by-rotation-form', component: DgContainersDischargeListByRotationFormComponent},  
  { path: 'dg/dg-containers-discharge-list-by-rotation', component: DgContainersDischargeListByRotationComponent},  

  { path: 'dg/dg-containers-discharge-general-list',component:DgContainersDischargeGeneralListComponent},
  { path: 'dg/rotation', component: DgRotationComponent},  
  { path: 'dg/dg-rotation-list-for-html', component: DgRotationListForHtmlComponent},  
  { path: 'dg/dg-cont-discharge-summary-list', component: DgContDischargeSummaryListComponent},  
  { path: 'labor/category/list', component: LaborCategoryListComponent},
  { path: 'labor/category/add', component: LaborCategoryAddComponent},
  { path: 'labor/category/edit/:id', component: LaborCategoryEditComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
