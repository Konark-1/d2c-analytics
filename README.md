# 📦 D2C Ops Intelligence & RTO Recovery Engine

An interactive, web-native business intelligence and logistics analytics dashboard built for high-volume Indian D2C e-commerce operations.

Designed and developed by **[Konark Parihar](https://konarkparihar.vercel.app/)** as the public analytics layer for **[RescueShip](https://rescueship.netlify.app/)**.

---

## ⚡ The Problem: The Indian D2C RTO Crisis

- **20% to 35% of all Cash-on-Delivery (COD) shipments end in RTO (Return to Origin)** across Indian e-commerce.
- Couriers frequently log false delivery attempts (*"Customer Unavailable"*, *"Premises Closed"*) in under 4 minutes without calling the buyer.
- Every RTO event costs brands **₹200–₹400** in forward shipping, reverse transit, inventory lock-in, and wasted ad spend (CAC).
- By the time manual call centers review morning NDR spreadsheets, packages are already on inter-city line-haul trucks back to the hub.

---

## 🔁 The Solution: 90-Second Autonomous Interception

This dashboard monitors real-time telemetry from an autonomous Meta WhatsApp Cloud API engine that intercepts courier delivery failure webhooks within **90 seconds**:

1. **Instant Doorstep Touchpoint**: Automated WhatsApp message with interactive buttons sent to buyer before the courier leaves the area.
2. **Doorstep Friction Resolution**: Allows buyer to share an exact GPS map pin, reschedule to a preferred date/time slot, or leave instructions with a neighbor.
3. **COD to Instant UPI**: Offers a 5% instant cashback/discount link to convert volatile cash orders into prepaid payments before re-attempt.
4. **Automated Carrier API Re-Sync**: Synchronizes verified re-delivery slots directly into Shiprocket, Delhivery, or Blue Dart systems.

---

## 📊 Key Operational Metrics Tracked

| Metric | Benchmark Baseline | Rescued Yield | Impact |
|---|:---:|:---:|---|
| **Total Shipped Volume** | 28,450 Orders | - | Spanning 20,400+ Indian Pincodes |
| **Gross Merchandise Value (GMV)** | ₹4.12 Cr | - | Average Order Value: ₹1,448 |
| **Doorstep RTO Rate** | **28.6%** | **11.4%** | **-17.2% Net RTO Reduction** |
| **Capital Rescued** | - | **₹52.92 Lakhs** | Forward + Reverse freight + inventory unblocked |
| **COD → UPI Conversion** | - | **36.8%** | ₹58.4 Lakhs converted to prepaid |
| **Avg Autonomous Latency** | - | **48.4 seconds** | Time from courier webhook to customer action |

---

## 🛠 Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler & Tooling**: Vite 8 + @tailwindcss/vite
- **Data Visualization**: Recharts (AreaChart, BarChart, Funnel conversion)
- **Icons**: Lucide React
- **Styling**: Tailwind CSS v4 with custom dark-mode glassmorphism tokens

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/Konark-1/d2c-analytics.git

# Install dependencies
npm install

# Run local development server
npm run dev

# Build production bundle
npm run build
```

---

## 👤 Author

**Konark Parihar**  
*Data Analyst & Automation Builder*  
- **Portfolio**: [konarkparihar.vercel.app](https://konarkparihar.vercel.app/)  
- **LinkedIn**: [linkedin.com/in/konarkparihar](https://www.linkedin.com/in/konarkparihar)  
- **GitHub**: [github.com/Konark-1](https://github.com/Konark-1)  
- **SaaS Platform**: [rescueship.netlify.app](https://rescueship.netlify.app/)
