export class Base {
  setHeight(
    service: any,
    elementRef: any,
    className: any,
    renderer: any
  ): void {
    service.getHeaderHeight().subscribe((headerHeight: any) => {
      const section = elementRef.nativeElement.querySelector(`${className}`);
      const marginTopValue =
        className === '.sec-1' ? `${headerHeight + 40}px` : `${headerHeight}px`;
      if (section) {
        renderer.setStyle(section, 'margin-top', marginTopValue);
      }
    });
  }
}
