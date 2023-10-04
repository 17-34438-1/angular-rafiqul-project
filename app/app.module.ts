import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LaborCategoryListComponent } from './labor-category-list/labor-category-list.component';
import { FooterComponent } from './footer/footer.component';
import { PoDListComponent } from './po-dlist/po-dlist.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LaborCategoryAddComponent } from './labor-category-add/labor-category-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LaborCategoryEditComponent } from './labor-category-edit/labor-category-edit.component';
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
import { YardListComponent } from './yard-list/yard-list.component';
import { CopinoComponent } from './copino/copino.component';
import { CopinoHtmlComponent } from './copino-html/copino-html.component';
import { PodListComponent } from './pod-list/pod-list.component';
import { ExportCopinoFormComponent } from './export-copino-form/export-copino-form.component';
import { ExportCopinoReportComponent } from './export-copino-report/export-copino-report.component';
import { ExportContainerBlockReportFormComponent } from './export-container-block-report-form/export-container-block-report-form.component';
import { ExportContainerBlockReportListComponent } from './export-container-block-report-list/export-container-block-report-list.component';
import { ExportMloWiseExcelUploadedReportFormComponent } from './export-mlo-wise-excel-uploaded-report-form/export-mlo-wise-excel-uploaded-report-form.component';
import { ExportMloWiseExcelUploadedReportListComponent } from './export-mlo-wise-excel-uploaded-report-list/export-mlo-wise-excel-uploaded-report-list.component';
import { ExportMloWisePreAdvisedLoadedContainerListFormComponent } from './export-mlo-wise-pre-advised-loaded-container-list-form/export-mlo-wise-pre-advised-loaded-container-list-form.component';
import { ExportMloWisePreAdvisedLoadedContainerListComponent } from './export-mlo-wise-pre-advised-loaded-container-list/export-mlo-wise-pre-advised-loaded-container-list.component';
import { ExportMloWisePreAdviceViewListComponent } from './export-mlo-wise-pre-advice-view-list/export-mlo-wise-pre-advice-view-list.component';
import { ExportMloWiseSummaryListComponent } from './export-mlo-wise-summary-list/export-mlo-wise-summary-list.component';
import { ExportMloWiseExportSummaryListComponent } from './export-mlo-wise-export-summary-list/export-mlo-wise-export-summary-list.component';
import { ExportMloWiseExportSummaryFormComponent } from './export-mlo-wise-export-summary-form/export-mlo-wise-export-summary-form.component';
import { ExportDateAndRotationWisePreAdvisedContainerFormComponent } from './export-date-and-rotation-wise-pre-advised-container-form/export-date-and-rotation-wise-pre-advised-container-form.component';
import { ExportDateAndRotationWisePreAdvisedContainerListComponent } from './export-date-and-rotation-wise-pre-advised-container-list/export-date-and-rotation-wise-pre-advised-container-list.component';
import { ExportExcelUploadSampleWithLoadedContainerFormComponent } from './export-excel-upload-sample-with-loaded-container-form/export-excel-upload-sample-with-loaded-container-form.component';
import { ExportExcelUploadSampleWithLoadedContainerListComponent } from './export-excel-upload-sample-with-loaded-container-list/export-excel-upload-sample-with-loaded-container-list.component';
import { ExportCommentsByShippingSectionOnExportVesselFormComponent } from './export-comments-by-shipping-section-on-export-vessel-form/export-comments-by-shipping-section-on-export-vessel-form.component';
import { ExportCommentsByShippingSectionOnExportVesselListComponent } from './export-comments-by-shipping-section-on-export-vessel-list/export-comments-by-shipping-section-on-export-vessel-list.component';
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
import { ExportLoadedContainerFormComponent } from './export-loaded-container-form/export-loaded-container-form.component';
import { ExportLoadedContainerListComponent } from './export-loaded-container-list/export-loaded-container-list.component';
import { ExportContainerLoadingExcelReportFormComponent } from './export-container-loading-excel-report-form/export-container-loading-excel-report-form.component';
import { ExportContainerLoadingExcelReportListComponent } from './export-container-loading-excel-report-list/export-container-loading-excel-report-list.component';
import { ExportVesselListWithStatusFormComponent } from './export-vessel-list-with-status-form/export-vessel-list-with-status-form.component';
import { ExportVesselListWithStatusSummaryListComponent } from './export-vessel-list-with-status-summary-list/export-vessel-list-with-status-summary-list.component';
import { ExportVesselListWithStatusDetailListComponent } from './export-vessel-list-with-status-detail-list/export-vessel-list-with-status-detail-list.component';
import { ExportEquipmentHandlingPerformanceRtgFormComponent } from './export-equipment-handling-performance-rtg-form/export-equipment-handling-performance-rtg-form.component';
import { ExportEquipmentHandlingPerformanceRtgListComponent } from './export-equipment-handling-performance-rtg-list/export-equipment-handling-performance-rtg-list.component';
import { ExportBlankBayViewFormComponent } from './export-blank-bay-view-form/export-blank-bay-view-form.component';
import { ExportBlankBayViewListComponent } from './export-blank-bay-view-list/export-blank-bay-view-list.component';
import { ExportContainerBayFormComponent } from './export-container-bay-form/export-container-bay-form.component';
import { ExportContainerBaylistComponent } from './export-container-baylist/export-container-baylist.component';
import { HandlingReportFormComponent } from './handling-report-form/handling-report-form.component';
import { HandlingReportListComponent } from './handling-report-list/handling-report-list.component';
import { DgContainerDeliveryReportFormComponent } from './dg-container-delivery-report-form/dg-container-delivery-report-form.component';
import { DgContainerDeliveryReportListComponent } from './dg-container-delivery-report-list/dg-container-delivery-report-list.component';
import { DgManifestListComponent } from './dg-manifest-list/dg-manifest-list.component';
import { DgManifestFormComponent } from './dg-manifest-form/dg-manifest-form.component';
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
import { DateWiseBillOfEntryReportComponent } from './date-wise-bill-of-entry-report/date-wise-bill-of-entry-report.component';
import { DateWiseBillOfEntryReportFormComponent } from './date-wise-bill-of-entry-report-form/date-wise-bill-of-entry-report-form.component';
import { ExportAssignmentSheetForOutwadPangonComponent } from './export-assignment-sheet-for-outwad-pangon/export-assignment-sheet-for-outwad-pangon.component';
import { ExportAssignmentSheetForOutwadPangonListComponent } from './export-assignment-sheet-for-outwad-pangon-list/export-assignment-sheet-for-outwad-pangon-list.component';


@NgModule({
  declarations: [
    BerthOperatorReportFormComponent,
    BerthOperatorReportViewComponent,
    CopinoComponent,
    CopinoHtmlComponent,
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    LaborCategoryListComponent,
    FooterComponent,
    LaborCategoryAddComponent,
    LaborCategoryEditComponent,
    LoginComponent,
    PoDListComponent,
    IsoCodeComponent,
    DginfoComponent,
    YardListComponent,
    DgContDischargeSummaryListComponent,
    UploadExcelForPangaonComponent,


    DgRotationComponent,
    DgRotationListForHtmlComponent,



    DgContainersDischargeSummaryListFormComponent,
    DgContainersDischargeListByRotationFormComponent,
    DgContainersDischargeListByRotationComponent,
    DgContainersDischargeGeneralListComponent,
    PodListComponent,
    ExportCopinoFormComponent,
    ExportCopinoReportComponent,
    ExportContainerBlockReportFormComponent,
    ExportContainerBlockReportListComponent,
    ExportMloWiseExcelUploadedReportFormComponent,
    ExportMloWiseExcelUploadedReportListComponent,



    ExportMloWisePreAdvisedLoadedContainerListFormComponent,
    ExportMloWisePreAdvisedLoadedContainerListComponent,
    ExportMloWisePreAdviceViewListComponent,
    ExportMloWiseSummaryListComponent,

    
    ExportMloWiseExportSummaryListComponent,
    ExportMloWiseExportSummaryFormComponent,
    ExportDateAndRotationWisePreAdvisedContainerFormComponent,
    ExportDateAndRotationWisePreAdvisedContainerListComponent,

    ExportExcelUploadSampleWithLoadedContainerFormComponent,
    ExportExcelUploadSampleWithLoadedContainerListComponent,
    ExportCommentsByShippingSectionOnExportVesselFormComponent,
    ExportCommentsByShippingSectionOnExportVesselListComponent,
    ExportDestinationWiseMloLoadedContainerFormComponent,
    ExportDestinationWiseMloLoadedContainerListComponent,
    ExportLoadedContainerListLoadAndEmptyFormComponent,
    ExportLoadedContainerListLoadAndEmptyListComponent,
    ExportRotationWiseExportContainerFormComponent,
    ExportRotationWiseExportContainerListComponent,
    ExportRotationWiseContainerInformationFormComponent,
    ExportRotationWiseContainerInformationListComponent,
    ExportMloWiseLoadedContainerFormComponent,
    ExportMloWiseLoadedContainerListComponent,
    ExportContainerToBeLoadedFormComponent,
    ExportContainerToBeLoadedListComponent,
    ExportLoadedContainerFormComponent,
    ExportLoadedContainerListComponent,
    ExportContainerLoadingExcelReportFormComponent,
    ExportContainerLoadingExcelReportListComponent,
    ExportVesselListWithStatusFormComponent,
    ExportVesselListWithStatusSummaryListComponent,
    ExportVesselListWithStatusDetailListComponent,



    ExportEquipmentHandlingPerformanceRtgFormComponent,
    ExportEquipmentHandlingPerformanceRtgListComponent,


    ExportBlankBayViewFormComponent,
    ExportBlankBayViewListComponent,
    ExportContainerBayFormComponent,
    ExportContainerBaylistComponent,
    HandlingReportFormComponent,
    HandlingReportListComponent,
    DgContainerDeliveryReportFormComponent,
    DgContainerDeliveryReportListComponent,

    
    DgManifestListComponent,
    DgManifestFormComponent,
    DgContainerByRotationFormComponent,
    DgContainerByRotationListComponent,
    ExportContainerNotFoundReportFormComponent,
    ExportContainerNotFoundReportListComponent,
    ShahinSpecialReportEquipmentHandlingPerformanceHistoryFormComponent,
    ShahinSpecialReportEquipmentHandlingPerformanceHistoryListComponent,
    ShahinSpecialReportLoadedContainerListFormComponent,
    ShahinSpecialReportLoadedContainerListComponent,
    ShahinSpecialReportLocationCertifyComponent,
    ShahinMloWiseFinalLoadingExportReportFormComponent,
    ShahinMloWiseFinalLoadingExportReportListComponent,
    ShahinMloWiseFinalLoadingDetailsExportReportListComponent,
    TodaysEdiDeclarationComponent,
    TodaysEdiDeclarationListComponent,
    ConvertIgmComponent,
    IgmAmendmentChangeContainerStatusFormComponent,
    UploadExcelForOBPSformComponent,
    BillOfEntryReportComponent,
    BillOfEntryReportViewComponent,
    DateWiseBillOfEntryReportComponent,
    DateWiseBillOfEntryReportFormComponent,
    ExportAssignmentSheetForOutwadPangonComponent,
    ExportAssignmentSheetForOutwadPangonListComponent



  ],
  imports: [
   
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule, 
    HttpClientModule,
    FormsModule, 
  
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
