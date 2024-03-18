// window.addEventListener('scroll', function() {
//     if (window.innerWidth > 600) {
        
//         let scrollProgress = window.scrollY / (document.body.offsetHeight - window.innerHeight);

//         document.querySelectorAll('.title-parallax').forEach(element => {
//             let titlePosition = 0 + scrollProgress * 40; // Сдвигаем заголовок
//             element.style.transform = `translateX(${titlePosition}vw)`;
//         });

//         document.querySelectorAll('.subtitle-parallax').forEach(element => {
//             let subtitlePosition = 10 - scrollProgress * 40; // Сдвигаем подзаголовок
//             element.style.transform = `translateX(${subtitlePosition}vw)`;
//         });
//     }
    
// });