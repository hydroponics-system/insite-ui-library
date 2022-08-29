import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { InsiteKitModule } from '../../insite-kit.module';
import { ModalComponent } from './modal.component';
@Component({
  selector: 'ik-storybook-example-modal',
  template: `
    <button
      class="btn btn-round btn-default block"
      (click)="showModal('default')"
    >
      Show Default
    </button>
    <button
      class="btn btn-round btn-danger block"
      (click)="showModal('danger')"
    >
      Show Danger
    </button>
    <button
      class="btn btn-round btn-warning block"
      (click)="showModal('warning')"
    >
      Show Warning
    </button>
    <button class="btn btn-round btn-primary block" (click)="showModal('info')">
      Show Info
    </button>

    <ik-modal #testModal name="testModal">
      <ik-modal-header
        title="Privacy Policy"
        [type]="modalType"
      ></ik-modal-header>
      <ik-modal-body>
        <div class="modal-content-text">This is a modal!</div>
      </ik-modal-body>
      <ik-modal-action-bar>
        <button
          class="btn btn-flat btn-primary btn-right btn-modal"
          (click)="testModal.close()"
        >
          Okay
        </button>
      </ik-modal-action-bar>
    </ik-modal>
  `,
})
class ExampleModalComponent {
  @ViewChild('testModal') testModal: ModalComponent;
  modalType = 'default';

  showModal(type: string) {
    this.modalType = type;
    this.testModal.open();
  }
}

export default {
  title: 'Insite/Components/Modal/Modal',
  component: ExampleModalComponent,
  decorators: [
    moduleMetadata({
      imports: [InsiteKitModule, RouterModule.forRoot([], { useHash: true })],
    }),
  ],
} as Meta;

const Template: Story<ExampleModalComponent> = () => ({});

export const Modal = Template.bind({});
