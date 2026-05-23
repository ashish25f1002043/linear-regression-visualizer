# 📊 Linear Regression Visualizer

An interactive React-based web application that demonstrates **Linear Regression using Gradient Descent** with real-time visualization, training steps, and performance metrics.

---
It visually explains:

How a model learns from data
How loss decreases over time
How the best-fit line is formed

## 🚀 Features

- 📈 Real-time Linear Regression visualization
- 🧠 Step-by-step Gradient Descent training
- 📉 Loss curve visualization
- 📊 Model evaluation (R² Score & RMSE)
- 📁 CSV file upload support
- 🔄 Multiple training runs tracking
- 📍 Data point input manually
- 🎯 Prediction visualization

---


## 🛠️ Tech Stack

- React.js
- JavaScript (ES6+)
- Charting Library (for graphs)
- HTML & CSS
- Gradient Descent Algorithm (from scratch)

---
📸 Screenshots



## 📷 Project Overview

This project visually explains how a linear regression model learns:

1. Data points are plotted on a graph
2. Gradient Descent optimizes the best-fit line
3. Loss reduces over iterations
4. Model predicts values based on trained parameters

---

## 📊 Metrics Used

- **R² Score** → Measures model accuracy
- **RMSE (Root Mean Squared Error)** → Measures prediction error

---

## 📁 Project Structure

Linear Regression Visualizer
linear-regression-visualizer/
│
├── src/
│ │
│ ├── components/
│ │ ├── Graph.jsx
│ │ ├── LossGraph.jsx
│ │ ├── InputPanel.jsx
│ │ ├── CSVUploader.jsx
│ │ ├── DataPreview.jsx
│ │ ├── MathSteps.jsx
│ │ ├── PredictionChart.jsx
│ │
│ ├── utils/
│ │ ├── gradientDescent.js
│ │ ├── metrics.js
│ │ ├── regression.js
│ │
│ ├── App.js
│ ├── index.js
│
├── public/
├── package.json
└── README.md



---

## ⚙️ How to Run Locally

```bash
# Clone the repository
git clone https://github.com/your-username/linear-regression-visualizer.git

# Go into project folder
cd linear-regression-visualizer

# Install dependencies
npm install

# Start development server
npm start


Future Improvements
Add Multiple Regression support
Add Logistic Regression
Add model comparison feature
Deploy live dashboard (Vercel/Netlify)

Author

Built with ❤️ to visually understand Machine Learning fundamentals using React

Note

This project is for educational purposes to understand how Linear Regression + Gradient Descent works internally
