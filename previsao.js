const apiUrl = "https://api.ipma.pt/open-data/distrits-islands.json";

async function loadDistricts() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const dropdown = document.getElementById("distritos-dropdown");
        dropdown.innerHTML = "";

        const defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.textContent = "Selecione um distrito";
        dropdown.appendChild(defaultOption);

        const districts = data.data.sort((a, b) => a.local.localeCompare(b.local));

        districts.forEach(district => {
            const option = document.createElement("option");
            option.value = district.globalIdLocal;
            option.textContent = district.local;
            dropdown.appendChild(option);
        });

        // Seleciona o primeiro distrito automaticamente e mostra previsão
        if (districts.length > 0) {
            dropdown.value = districts[0].globalIdLocal;
            loadForecast(districts[0].globalIdLocal);
        }

    } catch (error) {
        console.error("Erro ao carregar distritos:", error);
        document.getElementById("distritos-dropdown").innerHTML = "<option value=''>Erro ao carregar</option>";
    }
}

async function loadForecast(globalIdLocal) {
    if (!globalIdLocal) {
        document.getElementById("previsao-container").innerHTML = "";
        return;
    }

    const forecastUrl = `https://api.ipma.pt/opendata/forecast/meteorology/cities/daily/${globalIdLocal}.json`;

    try {
        const response = await fetch(forecastUrl);
        const data = await response.json();

        const container = document.getElementById("previsao-container");

        let html = `<h2>Previsão para ${data.city.name}</h2>`;

        data.data.forEach(day => {
            html += `
                <div>
                    <strong>${day.forecastDate}</strong><br>
                    Tmín: ${day.tMin}°C - Tmáx: ${day.tMax}°C<br>
                    Precipitação: ${day.precipitaProb}%<br>
                    Estado do tempo: ${day.predWindDir} (vento)<br>
                    <img src="https://www.ipma.pt/bin/icons/t32/${day.idWeatherType}.png" alt="Ícone tempo"/>
                </div>
            `;
        });

        container.innerHTML = html;

    } catch (error) {
        console.error("Erro ao carregar previsão:", error);
        document.getElementById("previsao-container").innerHTML = "<p>Erro ao carregar previsão do tempo.</p>";
    }
}

window.onload = () => {
    loadDistricts();

    const dropdown = document.getElementById("distritos-dropdown");
    dropdown.addEventListener("change", () => {
        const selectedId = dropdown.value;
        loadForecast(selectedId);
    });
};