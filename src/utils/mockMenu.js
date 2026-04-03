const resMenu = [
  {
    data: {
      id: "489586",
      name: "Hotel Aryas",
      cuisines: ["South Indian", "Chinese"],
      costForTwoMessage: "₹200 for two",

      
      menu: [
        {
          category: "Recommended",
          items: [
            { id: 1, name: "Masala Dosa", price: 80 },
            { id: 2, name: "Idli Sambar", price: 50 }
          ]
        },
        {
          category: "Chinese",
          items: [
            { id: 3, name: "Veg Fried Rice", price: 120 },
            { id: 4, name: "Paneer Noodles", price: 140 }
          ]
        },
        {
          category: "Snacks",
          items: [
            { id: 5, name: "Samosa", price: 20 },
            { id: 6, name: "Vada", price: 25 }
          ]
        }
      ]
    }
  }
];

export default resMenu;