let app = '068dd643-d8a7-460d-b682-dfcd800b846c';
let astro_token = 'eeb3d767e9134e5ea4e02f1c3790aa82b784ca862a436c80c63167076052b3826f2563e746cf44033a628e5748f8fb87491541d4b4cc153719f59383224f082a92dc56a685065e467fcdedf679a3edcf1719ca5790d81de2262e1343f5eb1e23d994fa4664e45a9521ca2719ede22036';

async function get() {
    const url = 'https://astronomy.p.rapidapi.com/api/v2/studio/moon-phase';

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
             Authorization: `Basic ${btoa(`${app}:${astro_token}`)}`
        },
        body: {
            format: 'png',
            observer: {
                date: '2020-11-01',
                latitude: 6.56774,
                longitude: 79.88956
            },
            style: {
                backgroundColor: 'red',
                backgroundStyle: 'stars',
                headingColor: 'white',
                moonStyle: 'sketch',
                textColor: 'red'
            },
            view: {
                type: 'portrait-simple'
            }
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

get();