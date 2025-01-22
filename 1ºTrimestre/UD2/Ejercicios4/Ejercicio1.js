// Información del navegador (Ejercicio 1)
function extractBrowserInfo() {
    const browserInfo = {
        'App Name': navigator.appName,
        'App Version': navigator.appVersion,
        'User Agent': navigator.userAgent,
        'Idioma': navigator.language,
        'Cookies Habilitadas': navigator.cookieEnabled,
        'Plataforma': navigator.platform,
        'Conectado a Internet': navigator.onLine,
        'Vendor': navigator.vendor,
        'Java Habilitado': navigator.javaEnabled(),
    };

    for (let key in browserInfo) {
        addRow('browser-info', key, browserInfo[key]);
    }
}
