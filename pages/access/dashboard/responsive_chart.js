export function loadResponsiveChart(options) {
    options.maintainAspectRatio = true;
    if (window.innerWidth < 420) {
        options.aspectRatio = 1;
    } else {
        options.aspectRatio = 2;
    }
}