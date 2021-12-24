var width = screen.width;

console.log(width);

if (width < 515) {
    document.getElementById('banner-header').src = 'assets/img/header_section/first-section-mobile.png';
} else if (width > 515) {
    document.getElementById('banner-header').src = 'assets/img/header_section/banner_1.jpg';
}