document.addEventListener("DOMContentLoaded", function () {
    const weatherContent = document.getElementById("weather-content");
    const aboutContent = document.getElementById("about-content");

    // Function to fetch translated content
    async function fetchAndTranslate(url, targetElement) {
        try {
            let response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(url)}&langpair=ru|fr`);
            let data = await response.json();
            targetElement.innerHTML = data.responseData.translatedText;
        } catch (error) {
            targetElement.innerHTML = "Impossible de charger le contenu.";
        }
    }

    if (weatherContent) {
        fetchAndTranslate("https://www.xn--80afd2bbd.world/", weatherContent);
    }

    if (aboutContent) {
        fetchAndTranslate("https://www.xn--80afd2bbd.world/about-us", aboutContent);
    }
});
