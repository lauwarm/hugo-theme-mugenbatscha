navigator.serviceWorker && navigator.serviceWorker
    .register('/js/service-worker.js')
    .then(function(registration) {  
        console.log('Excellent, registered with scope: ', registration.scope);
});
