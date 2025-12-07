📐 Glass Estimate Calculator (React + WordPress Plugin)

A lightweight, fast, and fully customizable glass price estimation tool built using React (Vite) and integrated into WordPress as a plugin.
This calculator helps users estimate glass pricing based on size, wiring, transformer wattage, and glass type — and captures user details (email & mobile) for business follow-ups.

🚀 Features

⚛️ React frontend built with Vite

🔌 Easily embeddable as a WordPress custom plugin

🧮 Automatic glass cost estimation

width × height (sq. meters)

glass price per sq/m

wiring cost based on area slab

transformer selection based on required watts

📱 User Detail Form

Mobile number

Email address

All data is submitted along with calculated results

📤 Data submission to backend (REST API ready)

📦 Clean component-based folder structure

🧮 Calculation Logic
1. Area Calculation
sq_m = width * height

2. Transformer Requirement
Required Watts = sq_m × 10
Available Options = 50W, 100W, 200W, 300W, 400W
Closest match is selected

3. Wiring Cost
Area (sq/m)	Cost
1–5	200
5–10	300
10–20	400
20–30	600
4. Total Price
total = (glassPrice × area) + wiring + transformerCost

🛠️ Technologies Used

React (Hooks-based)

Vite

JavaScript ES6

CSS

WordPress Plugin Integration Ready

REST API submission capable

⚙️ How It Works

User enters:

Width

Height

Glass price per sq/m

Email

Mobile number

On clicking Get Estimate:

All fields are validated

Calculation is executed

Final estimate is generated

Result is displayed

All data is ready to be sent to backend (WordPress REST API)

Admin receives:

User details (mobile & email)

Full calculation summary

Helpful for automated leads and sales decisions

📦 Installation (React Dev Environment)
npm install
npm run dev


To build for WordPress:

npm run build


Copy the build folder into your WordPress plugin.

🔌 WordPress Integration

This project is designed to be embedded inside a WordPress plugin using:

a shortcode to load the built React bundle

REST API route to handle email submission

If you need the WordPress plugin setup, ask:
"Build the WordPress plugin"

🤝 Contributing

Pull requests and improvements are welcome!
If you want to add features, open an issue first to discuss ideas.

📞 Contact

For questions or collaboration opportunities, feel free to open an issue or contact the project maintainer.
