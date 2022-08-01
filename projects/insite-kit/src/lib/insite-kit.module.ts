import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';
import { AppPageComponent } from './component/app-page/app-page.component';
import { AppFooterComponent } from './component/footer/app-footer.component';
import { ContactAdminModalComponent } from './component/footer/modals/contact-admin-modal/contact-admin-modal.component';
import { PrivacyPolicyModalComponent } from './component/footer/modals/privacy-policy-modal/privacy-policy-modal.component';
import { ProjectModalComponent } from './component/footer/modals/project-modal/project-modal.component';
import { IconComponent } from './component/icon/icon.component';
import { LoadingComponent } from './component/loading/loading.component';
import { ModalActionBarComponent } from './component/modal/modal-action-bar/modal-action-bar.component';
import { ModalBodyComponent } from './component/modal/modal-body/modal-body.component';
import { ModalHeaderComponent } from './component/modal/modal-header/modal-header.component';
import { ModalComponent } from './component/modal/modal.component';
import { AppNavbarComponent } from './component/navbar/app-navbar/app-navbar.component';
import { BaseNavbarComponent } from './component/navbar/base-navbar/base-navbar.component';
import { NotificationMessageComponent } from './component/notification-message/notification-message.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { JwtService } from './service/auth/jwt.service';
import { BasicHttpInterceptorService } from './service/interceptor/http-interceptor.service';
import { UsernamePipe } from './service/pipe/format-user-name.pipe';
import { NotificationMessagePipe } from './service/pipe/notification-message.pipe';
import { WebRoleTranslationPipe } from './service/pipe/web-role-translation.pipe';
import { RequestService } from './service/request/request.service';
import { StompWebSocketService } from './service/subscription/subscription.service';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    NotificationMessageComponent,
    IconComponent,
    UsernamePipe,
    NotificationMessagePipe,
    WebRoleTranslationPipe,
    AppNavbarComponent,
    BaseNavbarComponent,
    SidebarComponent,
    AppPageComponent,
    ContactAdminModalComponent,
    PrivacyPolicyModalComponent,
    ProjectModalComponent,
    ModalActionBarComponent,
    ModalBodyComponent,
    ModalHeaderComponent,
    ModalComponent,
    AppFooterComponent,
    LoadingComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
      },
    }),
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
    }),
  ],
  exports: [
    NotificationMessageComponent,
    IconComponent,
    UsernamePipe,
    NotificationMessagePipe,
    WebRoleTranslationPipe,
    AppNavbarComponent,
    BaseNavbarComponent,
    SidebarComponent,
    AppPageComponent,
    ContactAdminModalComponent,
    PrivacyPolicyModalComponent,
    ProjectModalComponent,
    ModalActionBarComponent,
    ModalBodyComponent,
    ModalHeaderComponent,
    ModalComponent,
    AppFooterComponent,
    LoadingComponent,
  ],
  entryComponents: [ModalComponent, NotificationMessageComponent],
  providers: [StompWebSocketService, RequestService, JwtService],
})
export class InsiteKitModule {
  static forRoot(environment: any): ModuleWithProviders<InsiteKitModule> {
    return {
      ngModule: InsiteKitModule,
      providers: [
        StompWebSocketService,
        {
          provide: 'env',
          useValue: environment,
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: BasicHttpInterceptorService,
          multi: true,
        },
      ],
    };
  }
}
