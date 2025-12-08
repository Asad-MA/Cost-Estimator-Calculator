const settings = {
  glassTypes: {
    defaultPrice: 1200, // price per sq meter
    
},

  transformers: [
    { watt: 30, price: 360 },
    { watt: 50, price: 450 },
    { watt: 100, price: 380 },
    { watt: 200, price: 750 },
    { watt: 300, price: 950 },
    { watt: 400, price: 1100 }
  ],

  wiringRules: {
    wattsPerSqMeter: 25 // cost per sq meter
  },

  transformerRules: {
    wattsPerSqMeter: 10
  }
};

export default settings;
