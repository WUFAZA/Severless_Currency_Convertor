import https from 'https';

export const handler = async (event) => {

    const appId = 'REPLACE THIS WITH YOUR APP ID'; 
    const url = `https://openexchangerates.org/api/latest.json?app_id=${appId}`;

    const getRates = () => {
        return new Promise((resolve, reject) => {
            https.get(url, (res) => {
                let data = '';
                res.on('data', (chunk) => data += chunk);
                res.on('end', () => resolve(JSON.parse(data)));
                res.on('error', (err) => reject(err));
            });
        });
    };

    try {
        const exchangeData = await getRates();
        return {
            statusCode: 200,
            // These headers allow your S3 frontend to talk to this backend
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
            },
            body: JSON.stringify(exchangeData)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to fetch rates", details: error.message })
        };
    }
};