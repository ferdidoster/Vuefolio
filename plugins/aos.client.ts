import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineNuxtPlugin(() => {
    console.log("AOS is being initialized...");

    AOS.init({
        once: true,
    });

    // Log to check attributes
    setTimeout(() => {
        AOS.refreshHard();
        console.log("AOS refreshed");
    }, 100);
});