export default defineNuxtPlugin(() => {
    import('bootstrap').then((bootstrap) => {
        console.log('Bootstrap client plugin loaded');
    });
});