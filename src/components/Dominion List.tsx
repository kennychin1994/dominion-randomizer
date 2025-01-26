const base = {
  name: "Base",
  cards: [
    {
      name: "Cellar",
      category: ["Action"],
      price: 2,
      image: "https://wiki.dominionstrategy.com/images/1/1c/Cellar.jpg",
    },
    { name: "Chapel", category: ["Action"], price: 2, image: "" },
    { name: "Moat", category: ["Action", "Reaction"], price: 2, image: "" },
    { name: "Harbinger", category: ["Action"], price: 3, image: "" },
    { name: "Merchant", category: ["Action"], price: 3, image: "" },
    { name: "Vassal", category: ["Action"], price: 3, image: "" },
    { name: "Village", category: ["Action"], price: 3, image: "" },
    { name: "Workshop", category: ["Action"], price: 3, image: "" },
    { name: "Bureaucrat", category: ["Action", "Attack"], price: 4, image: "" },
    { name: "Gardens", category: ["Victory"], price: 4, image: "" },
    { name: "Militia", category: ["Action", "Attack"], price: 4, image: "" },
    { name: "Moneylender", category: ["Action"], price: 4, image: "" },
    { name: "Poacher", category: ["Action"], price: 4, image: "" },
    { name: "Remodel", category: ["Action"], price: 4, image: "" },
    { name: "Smithy", category: ["Action"], price: 4, image: "" },
    { name: "Throne Room", category: ["Action"], price: 4, image: "" },
    { name: "Bandit", category: ["Action", "Attack"], price: 5, image: "" },
    { name: "Council Room", category: ["Action"], price: 5, image: "" },
    { name: "Festival", category: ["Action"], price: 5, image: "" },
    { name: "Laboratory", category: ["Action"], price: 5, image: "" },
    { name: "Library", category: ["Action"], price: 5, image: "" },
    { name: "Market", category: ["Action"], price: 5, image: "" },
    { name: "Mine", category: ["Action"], price: 5, image: "" },
    { name: "Sentry", category: ["Action"], price: 5, image: "" },
    { name: "Witch", category: ["Action", "Attack"], price: 5, image: "" },
    { name: "Artisan", category: ["Action"], price: 6, image: "" },
  ],
};

const seaside = {
  name: "Seaside",
  cards: [
    { name: "Haven", category: ["Action", "Duration"], price: 2, image: "" },
    {
      name: "Lighthouse",
      category: ["Action", "Duration"],
      price: 2,
      image: "",
    },
    { name: "Native Village", category: ["Action"], price: 2, image: "" },
    {
      name: "Astrolabe",
      category: ["Treasure", "Duration"],
      price: 3,
      image: "",
    },
    { name: "Fishing Village", category: ["Action"], price: 3, image: "" },
    { name: "Lookout", category: ["Action"], price: 3, image: "" },
    { name: "Monkey", category: ["Action", "Duration"], price: 3, image: "" },
    { name: "Sea Chart", category: ["Action"], price: 3, image: "" },
    { name: "Smugglers", category: ["Action"], price: 3, image: "" },
    { name: "Warehouse", category: ["Action"], price: 3, image: "" },
    {
      name: "Blockade",
      category: ["Action", "Duration", "Attack"],
      price: 4,
      image: "",
    },
    { name: "Caravan", category: ["Action", "Duration"], price: 4, image: "" },
    { name: "Cutpurse", category: ["Action", "Attack"], price: 4, image: "" },
    { name: "Island", category: ["Action", "Victory"], price: 4, image: "" },
    { name: "Sailor", category: ["Action", "Duration"], price: 4, image: "" },
    { name: "Salvager", category: ["Action"], price: 4, image: "" },
    {
      name: "Tide Pools",
      category: ["Action", "Duration"],
      price: 4,
      image: "",
    },
    { name: "Treasure Map", category: ["Action"], price: 4, image: "" },
    { name: "Bazaar", category: ["Action"], price: 5, image: "" },
    {
      name: "Corsaid",
      category: ["Action", "Duration", "Attack"],
      price: 5,
      image: "",
    },
    {
      name: "Merchant Ship",
      category: ["Action", "Duration"],
      price: 5,
      image: "",
    },
    { name: "Outpost", category: ["Action", "Duration"], price: 5, image: "" },
    {
      name: "Pirate",
      category: ["Action", "Duration", "Reaction"],
      price: 5,
      image: "",
    },
    {
      name: "Sea Witch",
      category: ["Action", "Duration", "Attack"],
      price: 5,
      image: "",
    },
    {
      name: "Tactician",
      category: ["Action", "Duration"],
      price: 5,
      image: "",
    },
    { name: "Treasury", category: ["Action"], price: 5, image: "" },
    { name: "Wharf", category: ["Action", "Duration"], price: 5, image: "" },
  ],
};

const prosperity = {
  name: "Prosperity",
  cards: [
    { name: "Loan", category: ["Treasure"], price: 3, image: "" },
    { name: "Trade Route", category: ["Action"], price: 3, image: "" },
    {
      name: "Watchtower",
      category: ["Action", "Reaction"],
      price: 3,
      image: "",
    },
    { name: "Bishop", category: ["Action"], price: 4, image: "" },
    { name: "Monument", category: ["Action"], price: 4, image: "" },
    { name: "Quarry", category: ["Treasure"], price: 4, image: "" },
    { name: "Talisman", category: ["Treasure"], price: 4, image: "" },
    { name: "Workder's Village", category: ["Action"], price: 4, image: "" },
    { name: "City", category: ["Action"], price: 5, image: "" },
    { name: "Contraband", category: ["Treasure"], price: 5, image: "" },
    { name: "Counting House", category: ["Action"], price: 5, image: "" },
    { name: "Mint", category: ["Action"], price: 5, image: "" },
    { name: "Mountebank", category: ["Action", "Attack"], price: 5, image: "" },
    { name: "Rabble", category: ["Action", "Attack"], price: 5, image: "" },
    { name: "Royal Seal", category: ["Treasure"], price: 5, image: "" },
    { name: "Vault", category: ["Action"], price: 5, image: "" },
    { name: "Venture", category: ["Treasure"], price: 5, image: "" },
    { name: "Goons", category: ["Action", "Attack"], price: 6, image: "" },
    { name: "Hoard", category: ["Treasure"], price: 6, image: "" },
    { name: "Grand Market", category: ["Action"], price: 6, image: "" },
    { name: "Bank", category: ["Treasure"], price: 7, image: "" },
    { name: "Expand", category: ["Action"], price: 7, image: "" },
    { name: "Forge", category: ["Action"], price: 7, image: "" },
    { name: "King's Court", category: ["Action"], price: 7, image: "" },
    { name: "Peddler", category: ["Action"], price: 8, image: "" },
  ],
};

const hinterlands = {
  name: "Hinterlands",
  cards: [
    { name: "Crossroads", category: ["Action"], price: 2, image: "" },
    {
      name: "Fool's Gold",
      category: ["Treasure", "Reaction"],
      price: 2,
      image: "",
    },
    { name: "Develop", category: ["Action"], price: 3, image: "" },
    {
      name: "Guard Dog",
      category: ["Action", "Reaction"],
      price: 3,
      image: "",
    },
    { name: "Oasis", category: ["Action"], price: 3, image: "" },
    { name: "Scheme", category: ["Action"], price: 3, image: "" },
    { name: "Tunnel", category: ["Victory", "Reaction"], price: 3, image: "" },
    { name: "Jack of All Trades", category: ["Action"], price: 4, image: "" },
    { name: "Nomads", category: ["Action"], price: 4, image: "" },
    { name: "Spice Merchant", category: ["Action"], price: 4, image: "" },
    { name: "Trader", category: ["Action", "Reaction"], price: 4, image: "" },
    { name: "Trail", category: ["Action", "Reaction"], price: 4, image: "" },
    { name: "Weaver", category: ["Action", "Reaction"], price: 4, image: "" },
    { name: "Berserker", category: ["Action", "Attack"], price: 5, image: "" },
    { name: "Cartographer", category: ["Action"], price: 5, image: "" },
    { name: "Cauldron", category: ["Treasure", "Attack"], price: 5, image: "" },
    { name: "Haggler", category: ["Action"], price: 5, image: "" },
    { name: "Highway", category: ["Action"], price: 5, image: "" },
    { name: "Inn", category: ["Action"], price: 5, image: "" },
    { name: "Margrave", category: ["Action", "Attack"], price: 5, image: "" },
    { name: "Souk", category: ["Action"], price: 5, image: "" },
    { name: "Stables", category: ["Action"], price: 5, image: "" },
    { name: "Wheelwright", category: ["Action"], price: 5, image: "" },
    {
      name: "Witch's Hut",
      category: ["Action", "Attack"],
      price: 5,
      image: "",
    },
    { name: "Border Village", category: ["Action"], price: 6, image: "" },
    { name: "Farmland", category: ["Victory"], price: 6, image: "" },
  ],
};

const empires = {
  name: "Empires",
  cards: [
    { name: "Engineer", category: ["Action"], image: "" },
    { name: "City Quarter", category: ["Action"], image: "" },
    { name: "Overlord", category: ["Action", "Command"], image: "" },
    { name: "Royal Blacksmith", category: ["Action"], image: "" },
    { name: "Encampment/Plunder", category: ["Action", "Treasure"], image: "" },
    { name: "Patrician/Emporium", category: ["Action"], image: "" },
    { name: "Settlers/Bustling Village", category: ["Action"], image: "" },
    {
      name: "Castles",
      category: ["Castle", "Victory", "Treasure", "Action"],
      image: "",
    },
    {
      name: "Catapult/Rocks",
      category: ["Action", "Attack", "Treasure"],
      image: "",
    },
    { name: "Chariot Race", category: ["Action"], image: "" },
    {
      name: "Enchantress",
      category: ["Action", "Attack", "Duration"],
      image: "",
    },
    { name: "Farmers' Market", category: ["Action", "Gathering"], image: "" },
    { name: "Gladiator/Fortune", category: ["Action", "Treasure"], image: "" },
    { name: "Sacrifice", category: ["Action"], image: "" },
    { name: "Temple", category: ["Action", "Gathering"], image: "" },
    { name: "Villa", category: ["Action"], image: "" },
    { name: "Archive", category: ["Action", "Duration"], image: "" },
    { name: "Capital", category: ["Treasure"], image: "" },
    { name: "Charm", category: ["Treasure"], image: "" },
    { name: "Crown", category: ["Action", "Treasure"], image: "" },
    { name: "Forum", category: ["Action"], image: "" },
    { name: "Groundskeeper", category: ["Action"], image: "" },
    { name: "Legionary", category: ["Action", "Attack"], image: "" },
    { name: "Wild Hunt", category: ["Action", "Gathering"], image: "" },
  ],
  events: [
    "Triumph",
    "Annex",
    "Donate",
    "Advance",
    "Delve",
    "Tax",
    "Banquet",
    "Ritual",
    "Salt the Earth",
    "Wedding",
    "Windfall",
    "Conquest",
    "Dominate",
  ],
  landmarks: [
    "Aqueduct",
    "Arena",
    "Bandit Fort",
    "Basilica",
    "Baths",
    "Battlefield",
    "Colonnade",
    "Defiled Shrine",
    "Fountain",
    "Keep",
    "Labyrinth",
    "Mountain Pass",
    "Museum",
    "Obelisk",
    "Orchard",
    "Palace",
    "Tomb",
    "Tower",
    "Triumphal Arch",
    "Wall",
    "Wolf Den",
  ],
};

const allies = {
  name: "Allies",
  cards: [
    { name: "Bauble", category: ["Treasure", "Liaison"], image: "" },
    { name: "Sycophant", category: ["Action", "Liaison"], image: "" },
    { name: "Townsfolk", category: ["Townsfolk", "Action"], image: "" },
    { name: "Augurs", category: ["Augur", "Action", "Attack"], image: "" },
    {
      name: "Clashes",
      category: ["Clash", "Action", "Attack", "Duration", "Victory"],
      image: "",
    },
    {
      name: "Forts",
      category: ["Fort", "Action", "Duration", "Victory"],
      image: "",
    },
    {
      name: "Importer",
      category: ["Action", "Duration", "Liaison"],
      image: "",
    },
    { name: "Merchant Campe", category: ["Action"], image: "" },
    {
      name: "Odysseys",
      category: ["Odyssey", "Action", "Duration", "Treasure", "Victory"],
      image: "",
    },
    { name: "Sentinel", category: ["Action"], image: "" },
    { name: "Underling", category: ["Action", "Liaison"], image: "" },
    {
      name: "Wizards",
      category: ["Wizard", "Action", "Liaison", "Duration", "Attack"],
      image: "",
    },
    { name: "Broker", category: ["Action", "Liaison"], image: "" },
    { name: "Carpenter", category: ["Action"], image: "" },
    { name: "Courier", category: ["Action"], image: "" },
    { name: "Innkeeper", category: ["Action"], image: "" },
    { name: "Royal Galley", category: ["Action", "Duration"], image: "" },
    { name: "Town", category: ["Action"], image: "" },
    { name: "Barbarian", category: ["Action", "Attack"], image: "" },
    { name: "Capital City", category: ["Action"], image: "" },
    {
      name: "Contract",
      category: ["Treasure", "Duration", "Liaison"],
      image: "",
    },
    { name: "Emissary", category: ["Action", "Liaison"], image: "" },
    { name: "Galleria", category: ["Action"], image: "" },
    { name: "Guildmaster", category: ["Action", "Liaison"], image: "" },
    {
      name: "Highwayman",
      category: ["Action", "Duration", "Attack"],
      image: "",
    },
    { name: "Hunter", category: ["Action"], image: "" },
    { name: "Modify", category: ["Action"], image: "" },
    { name: "Skirmisher", category: ["Action", "Attack"], image: "" },
    { name: "Specialist", category: ["Action"], image: "" },
    { name: "Swap", category: ["Action"], image: "" },
    { name: "Marquis", category: ["Action"], image: "" },
  ],
  allies: [
    "Architects' Guild",
    "Band of Nomads",
    "Cave Dwellers",
    "Circle of Witches",
    "City-state",
    "Coastal Haven",
    "Crafters' Guild",
    "Desert Guides",
    "Family of Inventors",
    "Fellowship of Scribes",
    "Forest Dwellers",
    "Gang of Pickpockets",
    "Island Folk",
    "League of Bankers",
    "League of Shopkeepers",
    "Market Towns",
    "Mountain Folk",
    "Order of Astrologers",
    "Order of Masons",
    "Peaceful Cult",
    "Plateau Shepherds",
    "Trappers' Lodge",
    "Woodworkers' Guild",
  ],
};

const plunder = {
  name: "Plunder",
  cards: [
    { name: "Cage", category: ["Treasure", "Duration"], image: "" },
    { name: "Grotto", category: ["Action", "Duration"], image: "" },
    { name: "Jewelled Egg", category: ["Treasure"], image: "" },
    { name: "Search", category: ["Action", "Duration"], image: "" },
    { name: "Shaman", category: ["Action"], image: "" },
    { name: "Secluded Shrine", category: ["Action", "Duration"], image: "" },
    { name: "Siren", category: ["Action", "Duration", "Attack"], image: "" },
    {
      name: "Stowaway",
      category: ["Action", "Duration", "Reaction"],
      image: "",
    },
    { name: "Taskmaster", category: ["Action", "Duration"], image: "" },
    { name: "Abundance", category: ["Treasure", "Duration"], image: "" },
    { name: "Cabin Boy", category: ["Action", "Duration"], image: "" },
    { name: "Crucible", category: ["Treasure"], image: "" },
    {
      name: "Flagship",
      category: ["Action", "Duration", "Command"],
      image: "",
    },
    { name: "Fortune Hunter", category: ["Action"], image: "" },
    { name: "Gondola", category: ["Treasure", "Duration"], image: "" },
    { name: "Harbor Village", category: ["Action"], image: "" },
    { name: "Landing Party", category: ["Action", "Duration"], image: "" },
    { name: "Mapmaker", category: ["Action", "Reaction"], image: "" },
    { name: "Maroon", category: ["Action"], image: "" },
    { name: "Rope", category: ["Treasure", "Duration"], image: "" },
    { name: "Swamp Shacks", category: ["Action"], image: "" },
    { name: "Tools", category: ["Treasure"], image: "" },
    { name: "Buried Treasure", category: ["Treasure", "Duration"], image: "" },
    { name: "Crew", category: ["Action", "Duration"], image: "" },
    {
      name: "Cutthroat",
      category: ["Action", "Duration", "Attack"],
      image: "",
    },
    { name: "Enlarge", category: ["Action", "Duration"], image: "" },
    { name: "Figurine", category: ["Treasure"], image: "" },
    { name: "First Mate", category: ["Action"], image: "" },
    { name: "Frigate", category: ["Action", "Duration", "Attack"], image: "" },
    { name: "Longship", category: ["Action", "Duration"], image: "" },
    { name: "Mining Road", category: ["Action"], image: "" },
    { name: "Pendant", category: ["Treasure"], image: "" },
    { name: "Pickaxe", category: ["Treasure"], image: "" },
    { name: "Pilgrim", category: ["Action"], image: "" },
    { name: "Quartermaster", category: ["Action", "Duration"], image: "" },
    { name: "Silver Mine", category: ["Treasure"], image: "" },
    { name: "Trickster", category: ["Action", "Attack"], image: "" },
    { name: "Wealthy Village", category: ["Action"], image: "" },
    { name: "Sack of Loot", category: ["Treasure"], image: "" },
    { name: "King's Cache", category: ["Treasure"], image: "" },
  ],
  events: [
    "Bury",
    "Avoid",
    "Deliver",
    "Peril",
    "Rush",
    "Foray",
    "Launch",
    "Mirror",
    "Prepare",
    "Scrounge",
    "Journey",
    "Maelstrom",
    "Looting",
    "Invasion",
    "Prosper",
  ],
  traits: [
    "Cheap",
    "Cursed",
    "Fated",
    "Fawning",
    "Friendly",
    "Hasty",
    "Inherited",
    "Inspiring",
    "Nearby",
    "Patient",
    "Pious",
    "Reckless",
    "Rich",
    "Shy",
    "Tireless",
  ],
};

const adventures = {
  name: "Adventures",
  cards: [
    { name: "Coin of the Realm", category: ["Treasure", "Reserve"], image: "" },
    {
      name: "Page",
      category: ["Action", "Traveller", "Attack", "Duration"],
      image: "",
    },
    {
      name: "Peasant",
      category: ["Action", "Traveller", "Attack", "Reserve"],
      image: "",
    },
    { name: "Ratcatcher", category: ["Action", "Reserve"], image: "" },
    { name: "Raze", category: ["Action"], image: "" },
    { name: "Amulet", category: ["Action", "Duration"], image: "" },
    {
      name: "Caravan Guard",
      category: ["Action", "Duration", "Reaction"],
      image: "",
    },
    { name: "Dungeon", category: ["Action", "Duration"], image: "" },
    { name: "Gear", category: ["Action", "Duration"], image: "" },
    { name: "Guide", category: ["Action", "Reserve"], image: "" },
    { name: "Duplicate", category: ["Action", "Reserve"], image: "" },
    { name: "Magpie", category: ["Action"], image: "" },
    { name: "Messenger", category: ["Action"], image: "" },
    { name: "Miser", category: ["Action"], image: "" },
    { name: "Port", category: ["Action"], image: "" },
    { name: "Ranger", category: ["Action"], image: "" },
    { name: "Transmogrify", category: ["Action", "Reserve"], image: "" },
    { name: "Artificer", category: ["Action"], image: "" },
    {
      name: "Bridge Troll",
      category: ["Action", "Duration", "Attack"],
      image: "",
    },
    {
      name: "Distant Lands",
      category: ["Action", "Reserve", "Victory"],
      image: "",
    },
    { name: "Giant", category: ["Action", "Attack"], image: "" },
    {
      name: "Haunted Woods",
      category: ["Action", "Duration", "Attack"],
      image: "",
    },
    { name: "Lost City", category: ["Action"], image: "" },
    { name: "Relic", category: ["Treasure", "Attack"], image: "" },
    { name: "Royal Carriage", category: ["Action", "Reserve"], image: "" },
    { name: "Storyteller", category: ["Action"], image: "" },
    {
      name: "Swamp Hag",
      category: ["Action", "Duration", "Attack"],
      image: "",
    },
    { name: "Treasure Trove", category: ["Treasure"], image: "" },
    { name: "Wine Merchant", category: ["Action", "Reserve"], image: "" },
    { name: "Hireling", category: ["Action", "Duration"], image: "" },
  ],
  events: [
    "Alms",
    "Borrow",
    "Quest",
    "Save",
    "Scouting Party",
    "Travelling Fair",
    "Bonfire",
    "Expedition",
    "Ferry",
    "Plan",
    "Mission",
    "Pilgrimage",
    "Ball",
    "Raid",
    "Seaway",
    "Trade",
    "Lost Arts",
    "Training",
    "Inheritance",
    "Pathfinding",
  ],
};

const risingSun = {
  name: "Rising Sun",
  cards: [
    { name: "Mountain Shrine", category: ["Action", "Omen"], image: "" },
    { name: "Daimyo", category: ["Action", "Command"], image: "" },
    { name: "Artist", category: ["Action"], image: "" },
    { name: "Fishmonger", category: ["Action", "Shadow"], image: "" },
    { name: "Snake Witch", category: ["Action", "Attack"], image: "" },
    { name: "Aristocrat", category: ["Action"], image: "" },
    { name: "Craftsman", category: ["Action"], image: "" },
    { name: "Riverboat", category: ["Action", "Duration"], image: "" },
    { name: "Root Cellar", category: ["Action"], image: "" },
    { name: "Alley", category: ["Action", "Shadow"], image: "" },
    { name: "Change", category: ["Action"], image: "" },
    { name: "Ninja", category: ["Action", "Attack", "Shadow"], image: "" },
    { name: "Poet", category: ["Action", "Omen"], image: "" },
    { name: "River Shrine", category: ["Action", "Omen"], image: "" },
    { name: "Rustic Village", category: ["Action", "Omen"], image: "" },
    { name: "Gold Mine", category: ["Action"], image: "" },
    { name: "Imperial Envoy", category: ["Action"], image: "" },
    { name: "Kitsune", category: ["Action", "Attack", "Omen"], image: "" },
    { name: "Litter", category: ["Action"], image: "" },
    { name: "Rice Broker", category: ["Action"], image: "" },
    { name: "Ronin", category: ["Action", "Shadow"], image: "" },
    { name: "Tanuki", category: ["Action", "Shadow"], image: "" },
    { name: "Tea House", category: ["Action", "Omen"], image: "" },
    { name: "Samurai", category: ["Action", "Duration", "Attack"], image: "" },
    { name: "Rice", category: ["Treasure"], image: "" },
  ],
  events: [
    "Continue",
    "Amass",
    "Asceticism",
    "Credit",
    "Foresight",
    "Kintsugi",
    "Practice",
    "Sea Trade",
    "Receive Tribute",
    "Gather",
  ],
  prophecies: [
    "Approaching Army",
    "Biding Time",
    "Bureaucracy",
    "Divine Wind",
    "Enlightenment",
    "Flourishing Trade",
    "Good Harvest",
    "Great Leader",
    "Growth",
    "Harsh Winter",
    "Kind Emperor",
    "Panic",
    "Porgress",
    "Rapid Expansion",
    "Sickness",
  ],
};

const SETS = [
  base,
  seaside,
  prosperity,
  hinterlands,
  empires,
  allies,
  plunder,
  adventures,
  risingSun,
];
export default SETS;
