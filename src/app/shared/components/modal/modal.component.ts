import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, Injector, Input, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent implements AfterViewInit{
  @Input() title!: string;
  @Input() component!: Type<any>;
  @Input() data!: any;

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(public activeModal: NgbActiveModal, private resolver: ComponentFactoryResolver, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.loadComponent();
    this.cdr.detectChanges(); // Forzar la detección de cambios después de la carga del componente
  }

  private loadComponent() {
    this.container.clear();
    const factory = this.resolver.resolveComponentFactory(this.component);
    const componentRef = this.container.createComponent(factory);
    
    if (this.data) {
      Object.assign(componentRef.instance, this.data);
    }
  }
}
