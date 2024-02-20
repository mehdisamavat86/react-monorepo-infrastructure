export function getSizeForViewport(
  viewWidth: number,
  breakpoints: any,
  carousel: any
) {
  const result = breakpoints
    .sort((a: any, b: any) => a.breakpoint - b.breakpoint)
    .find((value: any) => value.breakpoint > viewWidth);
  return (
    result?.settings.slidesToShow || carousel.carouselSettings.slidesToShow
  );
}
