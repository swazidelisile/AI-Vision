async function generateData() {

    const result = document.getElementById("dataResult");

    result.innerHTML = `
        <p>Generating AI training data...</p>
    `;

    try {

        const response = await fetch(
            "http://127.0.0.1:5000/api/generate-data",
            {
                method: "POST"
            }
        );

        const data = await response.json();

        if (data.error) {

            result.innerHTML = `
                <p>Error: ${data.error}</p>
            `;

            return;
        }

        result.innerHTML = `
            <p>
                ${data.message}
            </p>
        `;

    } catch (error) {

        result.innerHTML = `
            <p>
                Could not connect to the AIVision backend.
            </p>
        `;

        console.error(error);
    }
}


async function refreshStatistics() {

    const statistics = document.getElementById("statistics");

    statistics.innerHTML = `
        <p>Loading statistics...</p>
    `;

    try {

        const response = await fetch(
            "http://127.0.0.1:5000/api/statistics"
        );

        const data = await response.json();

        if (data.error) {

            statistics.innerHTML = `
                <p>Error: ${data.error}</p>
            `;

            return;
        }

        statistics.innerHTML = `
            <p><strong>Mean:</strong> ${data.mean}</p>

            <p>
                <strong>Standard Deviation:</strong>
                ${data.standard_deviation}
            </p>
        `;

    } catch (error) {

        statistics.innerHTML = `
            <p>
                Could not connect to the AIVision backend.
            </p>
        `;

        console.error(error);
    }
}