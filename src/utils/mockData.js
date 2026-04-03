const resList = [
  {
    type: "restaurant",
    data: {
      id: "78317",
      name: "Hotel Aryaas Park",
      cloudinaryImageId: "eo5cam4g7jl9efr5vjpn",
      locality: "Mig Housing Society",
      areaName: "Panampilly Nagar",
      costForTwo: "₹250 for two",
      cuisines: ["South Indian"],
      avgRating: 4.7,
      veg: true,
      parentId: "20778",
      avgRatingString: "4.7",
      totalRatingsString: "26K+",
      sla: {
        deliveryTime: 33,
        slaString: "30-40 mins",
        lastMileTravel: 6.7,
        lastMileTravelString: "6.7 km"
      }
    }
  },
  {
    type: "restaurant",
    data: {
      id: "282413",
      name: "Veetile Oonu",
      cloudinaryImageId: "dj7vtgexkqn75gmlvjev",
      locality: "Chakkalakkal Moolayil",
      areaName: "Kakkanad",
      costForTwo: "₹250 for two",
      cuisines: ["South Indian"],
      avgRating: 4.4,
      parentId: "222003",
      avgRatingString: "4.4",
      totalRatingsString: "19K+",
      sla: {
        deliveryTime: 24,
        slaString: "20-25 mins",
        lastMileTravel: 7.4,
        lastMileTravelString: "7.4 km"
      }
    }
  },
  {
    type: "restaurant",
    data: {
      id: "954965",
      name: "Swamys Coffee House",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/27/20c3189a-d932-43b4-82a3-35650f484e09_954965.jpg",
      locality: "Thrippunithura",
      areaName: "Thrippunithura",
      costForTwo: "₹150 for two",
      cuisines: ["Kerala", "South Indian"],
      avgRating: 4.6,
      veg: true,
      parentId: "559788",
      avgRatingString: "4.6",
      totalRatingsString: "7.9K+",
      sla: {
        deliveryTime: 31,
        slaString: "30-40 mins",
        lastMileTravel: 7.5,
        lastMileTravelString: "7.5 km"
      }
    }
  },
  {
    type: "restaurant",
    data: {
      id: "967513",
      name: "Nala Taste",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/6/4fe8316e-071c-4758-bc35-5d25159f4f61_967513.jpg",
      locality: "Vennala",
      areaName: "Vennala",
      costForTwo: "₹700 for two",
      cuisines: ["Kerala"],
      avgRating: 4.4,
      parentId: "566575",
      avgRatingString: "4.4",
      totalRatingsString: "1.2K+",
      sla: {
        deliveryTime: 30,
        slaString: "25-30 mins",
        lastMileTravel: 2.4,
        lastMileTravelString: "2.4 km"
      }
    }
  },
  {
    type: "restaurant",
    data: {
      id: "1018124",
      name: "Aryaas Green",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/30/886afdc2-f4d6-48d6-b69a-0b84cba273cb_1018124.jpg",
      locality: "Kaloor",
      areaName: "Kaloor",
      costForTwo: "₹250 for two",
      cuisines: ["Fast Food"],
      avgRating: 4.6,
      veg: true,
      parentId: "36558",
      avgRatingString: "4.6",
      totalRatingsString: "767",
      sla: {
        deliveryTime: 21,
        slaString: "20-25 mins",
        lastMileTravel: 3,
        lastMileTravelString: "3.0 km"
      }
    }
  },
  {
    type: "restaurant",
    data: {
      id: "831935",
      name: "I Deli Cafe",
      cloudinaryImageId: "538919cb2fbcc84b40969f8715ae4e2c",
      locality: "Kochi",
      areaName: "Kaloor",
      costForTwo: "₹399 for two",
      cuisines: ["South Indian", "Beverages", "Snacks"],
      avgRating: 4.8,
      parentId: "589341",
      avgRatingString: "4.8",
      totalRatingsString: "13K+",
      sla: {
        deliveryTime: 25,
        slaString: "20-25 mins",
        lastMileTravel: 3,
        lastMileTravelString: "3.0 km"
      }
    }
  },
  {
  type: "restaurant",
  data: {
    id: "717400",
    name: "Chennai Thatte Idlli",
    cloudinaryImageId: "de8b6847fff563ccc94d811167608608",
    locality: "Sudhanivas Udayanagar",
    areaName: "Kaloor",
    costForTwo: "₹250 for two",
    cuisines: ["South Indian"],
    avgRating: 4.6,
    parentId: "427834",
    avgRatingString: "4.6",
    totalRatingsString: "756",
    sla: {
      deliveryTime: 31,
      slaString: "30-35 mins",
      lastMileTravel: 3,
      lastMileTravelString: "3.0 km"
    }
  }
},
{
  type: "restaurant",
  data: {
    id: "1229387",
    name: "Tea Pori Cafe",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/13/faee27a1-87c6-4612-8311-ab8ea02e0c90_1229387.jpg",
    locality: "Kakkanad",
    areaName: "Kakkanad",
    costForTwo: "₹250 for two",
    cuisines: ["Kerala", "South Indian", "Beverages", "Juices"],
    avgRating: 4.3,
    parentId: "703972",
    avgRatingString: "4.3",
    totalRatingsString: "94",
    sla: {
      deliveryTime: 38,
      slaString: "35-40 mins",
      lastMileTravel: 2.8,
      lastMileTravelString: "2.8 km"
    }
  }
},
{
  type: "restaurant",
  data: {
    id: "1304170",
    name: "Calicut Topform Restaurant",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/18/f4d79dec-64e6-47f5-9ca8-0b38f1a1a343_1304170.jpg",
    locality: "Kaloor",
    areaName: "Vyttila",
    costForTwo: "₹249 for two",
    cuisines: ["Chinese", "Biryani", "South Indian", "Arabian", "North Indian"],
    avgRating: 4.4,
    parentId: "742749",
    avgRatingString: "4.4",
    totalRatingsString: "343",
    sla: {
      deliveryTime: 29,
      slaString: "25-30 mins",
      lastMileTravel: 4.3,
      lastMileTravelString: "4.3 km"
    }
  }
},
{
  type: "restaurant",
  data: {
    id: "629038",
    name: "Cafe Woodlands",
    cloudinaryImageId: "wlm9recjlnyray6bhkun",
    locality: "Pallimukku",
    areaName: "Pallimukku",
    costForTwo: "₹200 for two",
    cuisines: ["South Indian"],
    avgRating: 4.5,
    veg: true,
    parentId: "54464",
    avgRatingString: "4.5",
    totalRatingsString: "1.2K+",
    sla: {
      deliveryTime: 32,
      slaString: "30-35 mins",
      lastMileTravel: 7,
      lastMileTravelString: "7.0 km"
    }
  }
},
{
  type: "restaurant",
  data: {
    id: "52179",
    name: "Expresso",
    cloudinaryImageId: "vmksaa43vbtrc4ahwkgk",
    locality: "Sector 4",
    areaName: "Kakkanad",
    costForTwo: "₹150 for two",
    cuisines: ["Continental", "Beverages", "Desserts", "Snacks"],
    avgRating: 4.2,
    parentId: "20921",
    avgRatingString: "4.2",
    totalRatingsString: "3.7K+",
    sla: {
      deliveryTime: 36,
      slaString: "35-45 mins",
      lastMileTravel: 7.4,
      lastMileTravelString: "7.4 km"
    }
  }
},
{
  type: "restaurant",
  data: {
    id: "306314",
    name: "Akshaya Catering And Restaurant",
    cloudinaryImageId: "vccrvsxkcm1fygtnxx0s",
    locality: "Vaikom Road",
    areaName: "Tripunithura",
    costForTwo: "₹500 for two",
    cuisines: ["South Indian", "Chinese"],
    avgRating: 4.7,
    veg: true,
    parentId: "20264",
    avgRatingString: "4.7",
    totalRatingsString: "13K+",
    sla: {
      deliveryTime: 28,
      slaString: "25-30 mins",
      lastMileTravel: 9.2,
      lastMileTravelString: "9.2 km"
    }
  }
},
{
  type: "restaurant",
  data: {
    id: "597978",
    name: "New Kottaram Highway Restaurant",
    cloudinaryImageId: "gkbxam6e4f3w1huinv3g",
    locality: "Panampilly Nagar",
    areaName: "Vyttila",
    costForTwo: "₹399 for two",
    cuisines: ["Kerala", "Biryani", "Beverages"],
    avgRating: 4.3,
    parentId: "357381",
    avgRatingString: "4.3",
    totalRatingsString: "917",
    sla: {
      deliveryTime: 28,
      slaString: "25-30 mins",
      lastMileTravel: 6.2,
      lastMileTravelString: "6.2 km"
    }
  }
},
{
  type: "restaurant",
  data: {
    id: "361662",
    name: "Nadiya Bake And More",
    cloudinaryImageId: "bonur48m4hsbviq0ul16",
    locality: "Seaport-Airport Road",
    areaName: "Kakkanad",
    costForTwo: "₹200 for two",
    cuisines: ["Bakery", "Desserts", "Ice Cream"],
    avgRating: 4.6,
    parentId: "20603",
    avgRatingString: "4.6",
    totalRatingsString: "6.7K+",
    sla: {
      deliveryTime: 26,
      slaString: "25-30 mins",
      lastMileTravel: 4.6,
      lastMileTravelString: "4.6 km"
    }
  }
},
{
  type: "restaurant",
  data: {
    id: "312765",
    name: "Hotel Excellency",
    cloudinaryImageId: "h2qxmyskw4pppjrn49jh",
    locality: "Valanjambalam",
    areaName: "Pallimukku",
    costForTwo: "₹300 for two",
    cuisines: ["Indian", "Kerala", "South Indian", "Biryani"],
    avgRating: 4.5,
    parentId: "98908",
    avgRatingString: "4.5",
    totalRatingsString: "3.4K+",
    sla: {
      deliveryTime: 37,
      slaString: "35-40 mins",
      lastMileTravel: 6.8,
      lastMileTravelString: "6.8 km"
    }
  }
},
{
  type: "restaurant",
  data: {
    id: "1330696",
    name: "Stack' D Burg",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/17/a463bdf3-380c-4bfb-bd8c-35ce273b1888_1330696.jpg",
    locality: "Kakkanad",
    areaName: "Kakkanad",
    costForTwo: "₹250 for two",
    cuisines: ["Burgers", "Fast Food", "Korean"],
    avgRating: 3.7,
    parentId: "757512",
    avgRatingString: "3.7",
    totalRatingsString: "20",
    sla: {
      deliveryTime: 41,
      slaString: "40-45 mins",
      lastMileTravel: 4.4,
      lastMileTravelString: "4.4 km"
    }
  }
}



];

export default resList;