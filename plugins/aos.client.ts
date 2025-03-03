import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineNuxtPlugin(() => {
    AOS.init({
        once: true,
    });

    // Log to check attributes
    setTimeout(() => {
        AOS.refreshHard();
    }, 100);
});