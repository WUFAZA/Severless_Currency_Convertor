# Serverless Currency Conversion Microservice 🇬🇭

A cloud-native financial tool designed for Ghanaian travelers to calculate real-world transaction costs, including bank margins and fees.

## 🚀 Architecture
- **Frontend:** Hosted on AWS S3 (Static Web Hosting)
- **Backend:** AWS Lambda (Node.js) via API Gateway
- **Data Source:** OpenExchangeRates API

## 🛠️ How it Works
1. User enters an amount in the Web UI.
2. Browser sends a request to the AWS Lambda proxy.
3. Lambda fetches live rates securely.
4. Frontend calculates the final fee: `(Amount * Rate) - 2% Margin`.

## 📂 Project Structure
- `index.html` - The frontend user interface.
- `index.mjs` - The backend Lambda logic.
