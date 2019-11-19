	var width  = window.innerWidth;
	var height = window.innerHeight;

	var compoundTypes = [{
		name: "Town House",
		id: 'ctTownHouse',
		floorTypes: [
			{ id: 'ftGranite' },
			{ id: 'ftSandstone' },
			{ id: 'ftBlueMarble' },
			{ id: 'ftSlate' },
			{ id: 'ftPattern0' },
			{ id: 'ftPattern2' },
			{ id: 'ftPattern3' },
			{ id: 'ftPattern4' },
			{ id: 'ftPattern1' },
			{ id: 'ftPattern6' }
		],
		ceilingTypes: [
			{ id: 'ceilingFlat' },
			{ id: 'ceilingRaised'}
		],
		wallTypes: [
			{ id: 'None' },
			{ id: 'wtWallStandard' },
			{ id: 'wtEntrance' },
			{ id: 'wtFactionBanner' },
			{ id: 'wtDoubleWindow' },
			{ id: 'wtSideEntrance' }
		],
		baseWidth: 3,
		baseHeight: 2,
		baseMaxSize: 49,
		materials: {
			boards: 100,
			bricks: 200
		}
	}, {
		name: "Faction Compound",
		id: 'ctFaction',
		floorTypes: [
			{ id: 'ftGranite' },
			{ id: 'ftSandstone' },
			{ id: 'ftBlueMarble' },
			{ id: 'ftSlate' },
			{ id: 'ftPattern0' },
			{ id: 'ftPattern2' },
			{ id: 'ftPattern3' },
			{ id: 'ftPattern4' },
			{ id: 'ftPattern1' },
			{ id: 'ftPattern6' }
		],
		ceilingTypes: [
			{ id: 'ceilingFlat' },
			{ id: 'ceilingRaised' }
		],
		wallTypes: [
			{ id: 'None' },
			{ id: 'wtWallStandard' },
			{ id: 'wtEntrance' },
			{ id: 'wtFactionBanner' },
			{ id: 'wtDoubleWindow' },
			{ id: 'wtSideEntrance' }
		],
		baseWidth: 1,
		baseHeight: 3,
		baseMaxSize: 200,
		materials: {
			boards: 10000,
			bricks: 2000
		}
	}]

	var catData = [
		{
			name: "Carpentry",
			id: "carpentryCat",
			buildings: [
				{ id: "bldCarpShop" },
				{ id: "bldCraftingBench" }
			]
		}, {
			name: "Cooking",
			id: "cookingCat",
			buildings: [
				{ id: "bldKitchen" },
				{ id: "bldKettle" }
			]
		}, {
			name: "Cooperage",
			id: "tubsCat",
			buildings: [
				{ id: "bldBasicTub" },
				{ id: "bldSturdyTub" },
				{ id: "bldMarbleTub" },
				{ id: "bldBarrelVise" },
				{ id: "bldWineBarrel" }
			]
		}, {
			name: "Flax",
			id: "flaxCat",
			buildings: [
				{ id: "bldFlaxComb" },
				{ id: "bldSmallDistaff" },
				{ id: "bldStudentLoom" },
				{ id: "bldHandLoom" },
				{ id: "bldHacklingRake" },
				{ id: "bldImpHR" },
				{ id: "bldSteamDistaff" }
			]
		}, {
			name: "Farming",
			id: "farmingCat",
			buildings: [
				{ id: "bldAntColony" },
				{ id: "bldTerrarium" },
				{ id: "bldGrainOven" },
				{ id: "bldLargeCheeseRack" },
				{ id: "bldMaltingTray" },
				{ id: "bldPapyTank" },
				{ id: "bldRabbitHutch" },
				{ id: "bldSilkwormFarm" },
				{ id: "bldSmallCheeseRack" }
			]
		}, {
			name: "Glass",
			id: "glassCat",
			buildings: [
				{ id: "bldGlassBench" },
				{ id: "bldGloryHole" }
			]
		}, {
			name: "Pottery",
			id: "potteryCat",
			buildings: [
				{ id: "bldPotteryWheel" },
				{ id: "bldBoxKiln" },
				{ id: "bldTrueKiln" },
				{ id: "bldPotteryDeck" },
				{ id: "bldReinforcedKiln" },
				{ id: "bldSteamKiln" },
				{ id: "bldVaultKiln" }
			]
		}, {
			name: "Stonework",
			id: "stoneworkCat",
			buildings: [
				{ id: "bldRockSaw" },
				{ id: "bldMasonsBench" },
				{ id: "bldClinkerVat" },
				{ id: "bldSteamRockSaw" }
			]
		}, {
			name: "Storage",
			id: "storageCat",
			buildings: [
				{ id: "bldBox" },
				{ id: "bldChest" },
				{ id: "bldHugeChest" },
				{ id: "bldBeetleLocker" },
				{ id: "bldTrophyCase" }
			]
		}, {
			name: "Charcoal",
			id: "charcoalCat",
			buildings: [
				{ id: "bldCcHearth" },
				{ id: "bldCcOven" },
				{ id: "bldCrematory" }
			]
		}, {
			name: "Metalwork",
			id: "metalworkCat",
			buildings: [
				{ id: "bldForgeStudent" },
				{ id: "bldCastingStudent" },
				{ id: "bldForgeMaster" },
				{ id: "bldCastingMaster" },
				{ id: "bldAnvil" },
				{ id: "bldBlastFurnace" },
				{ id: "bldBulletFurnace" },
				{ id: "bldCompFurnace" },
				{ id: "bldGyroCell" },
				{ id: "bldReactory" },
				{ id: "bldRecyclingSmeltery" }
			]
		}, {
			name: "Trade",
			id: "tradeCat",
			buildings: [
				{ id: "bldSmShopCentre" },
				{ id: "bldSmShopCorner" }
			]
		}, {
			name: "Other",
			id: "otherCat",
			buildings: [
				{ id: "bldAcidBath" },
				{ id: "bldAlchBench" },
				{ id: "bldAssimBath" },
				{ id: "bldBarrelGrinder" },
				{ id: "bldTastingTable" },
				{ id: "bldChemBath" },
				{ id: "bldFleetFurnace" },
				{ id: "bldGearboxTable" },
				{ id: "bldGemTable" }
			]
		}, {
			name: "Other 2",
			id: "other2Cat",
			buildings: [
				{ id: "bldHexaTablet" },
				{ id: "bldIncenseBurner" },
				{ id: "bldMint" },
				{ id: "bldPaperPress" },
				{ id: "bldPigmentLab" },
				{ id: "bldScentLab" },
				{ id: "bldToxinKitchen" },
				{ id: "bldWTT" }
			]
		}, {
			name: "Outside",
			id: "outsideCat",
			buildings: [
				{ id: "bldImpBR" }
			]
	}];

	var buildingData = [{
		name: "Box",
		id: "bldBox",
		width: 3,
		height: 3,
		colour: "#730000",
		t9: 1
	}, {
		name: "Chest",
		id: "bldChest",
		width: 3,
		height: 5,
		colour: "#400000",
		t9: 1
	}, {
		name: "Pottery Wheel",
		id: "bldPotteryWheel",
		width: 5,
		height: 5,
		colour: "#d93636",
		t9: 1
	}, {
		name: "Box Kiln",
		id: "bldBoxKiln",
		width: 7,
		height: 5,
		colour: "#cc6666",
		t9: 1
	}, {
		name: "True Kiln",
		id: "bldTrueKiln",
		width: 9,
		height: 7,
		colour: "#8c4646",
		t9: 1
	}, {
		name: "Flax Comb",
		id: "bldFlaxComb",
		width: 6,
		height: 5,
		colour: "#664d4d",
		t9: 1
	}, {
		name: "Small Distaff",
		id: "bldSmallDistaff",
		width: 16,
		height: 9,
		colour: "#cc1b00",
		t9: 1
	}, {
		name: "Student's Loom",
		id: "bldStudentLoom",
		width: 4,
		height: 4,
		colour: "#402420",
		t9: 1
	}, {
		name: "Crafting Bench",
		id: "bldCraftingBench",
		width: 11,
		height: 5,
		colour: "#bf968f",
		t9: 1
	}, {
		name: "Carpentry Shop",
		id: "bldCarpShop",
		width: 16,
		height: 14,
		colour: "#0d0a0a",
		t9: 1
	}, {
		name: "Charcoal Hearth",
		id: "bldCcHearth",
		width: 19,
		height: 9,
		colour: "#cc5c33",
		t9: 1
	}, {
		name: "Charcoal Oven",
		id: "bldCcOven",
		width: 15,
		height: 11,
		colour: "#ffa280",
		t9: 0
	}, {
		name: "Rock Saw",
		id: "bldRockSaw",
		width: 14,
		height: 9,
		colour: "#b27159",
		t9: 1
	}, {
		name: "Mason's Bench",
		id: "bldMasonsBench",
		width: 9,
		height: 8,
		colour: "#664133",
		t9: 1
	}, {
		name: "Glazier's Bench",
		id: "bldGlassBench",
		width: 13,
		height: 6,
		colour: "#f26100",
		t9: 1
	}, {
		name: "Kitchen",
		id: "bldKitchen",
		width: 15,
		height: 13,
		colour: "#7f3300",
		t9: 1
	}, {
		name: "Basic Tub",
		id: "bldBasicTub",
		width: 7,
		height: 13,
		colour: "#4c1f00",
		t9: 1
	}, {
		name: "Sturdy Tub",
		id: "bldSturdyTub",
		width: 7,
		height: 13,
		colour: "#331400",
		t9: 1
	}, {
		name: "Marble Tub",
		id: "bldMarbleTub",
		width: 7,
		height: 13,
		colour: "#cc8f66",
		t9: 1
	}, {
		name: "Student's Forge",
		id: "bldForgeStudent",
		width: 17,
		height: 16,
		colour: "#261b13",
		t9: 0
	}, {
		name: "Master's Forge",
		id: "bldForgeMaster",
		width: 17,
		height: 16,
		colour: "#ccad99",
		t9: 0
	}, {
		name: "Student's Casting Box",
		id: "bldCastingStudent",
		width: 16,
		height: 14,
		colour: "#736256",
		t9: 0
	}, {
		name: "Masters's Casting Box",
		id: "bldCastingMaster",
		width: 35,
		height: 15,
		colour: "#b25f00",
		t9: 0
	}, {
		name: "Hand Loom",
		id: "bldHandLoom",
		width: 4,
		height: 4,
		colour: "#663600",
		t9: 1
	}, {
		name: "Hackling Rake",
		id: "bldHacklingRake",
		width: 6,
		height: 5,
		colour: "#ffa640",
		t9: 0
	}, {
		name: "Kettle",
		id: "bldKettle",
		width: 5,
		height: 5,
		colour: "#f2ba79",
		t9: 0
	}, {
		name: "Acid Bath",
		id: "bldAcidBath",
		width: 5,
		height: 3,
		colour: "#735839",
		t9: 0
	}, {
		name: "Alchemist's Bench",
		id: "bldAlchBench",
		width: 9,
		height: 12,
		colour: "#403830",
		t9: 0
	}, {
		name: "Alembic",
		id: "bldAlembic",
		width: 9,
		height: 14,
		colour: "#a67c29",
		t9: 0
	}, {
		name: "Ant Colony",
		id: "bldAntColony",
		width: 5,
		height: 3,
		colour: "#4c3913",
		t9: 0
	}, {
		name: "Anvil",
		id: "bldAnvil",
		width: 7,
		height: 15,
		colour: "#f2deb6",
		t9: 0
	}, {
		name: "Assimilation Bath",
		id: "bldAssimBath",
		width: 9,
		height: 12,
		colour: "#998c73",
		t9: 0
	}, {
		name: "Barrel Grinder",
		id: "bldBarrelGrinder",
		width: 11,
		height: 20,
		colour: "#bf9900",
		t9: 0
	}, {
		name: "Barrel Vise",
		id: "bldBarrelVise",
		width: 9,
		height: 9,
		colour: "#736739",
		t9: 0
	}, {
		name: "Beetle Terrarium",
		id: "bldTerrarium",
		width: 9,
		height: 9,
		colour: "#665f00",
		t9: 0
	}, {
		name: "Blast Furnace",
		id: "bldBlastFurnace",
		width: 11,
		height: 13,
		colour: "#f2e63d",
		t9: 0
	}, {
		name: "Bullet Furnace",
		id: "bldBulletFurnace",
		width: 5,
		height: 6,
		colour: "#ccc566",
		t9: 0
	}, {
		name: "Ceremonial Tasting Table",
		id: "bldTastingTable",
		width: 11,
		height: 5,
		colour: "#3b4000",
		t9: 0
	}, {
		name: "Chemical Bath",
		id: "bldChemBath",
		width: 16,
		height: 30,
		colour: "#181a00",
		t9: 0
	}, {
		name: "Chemistry Laboratory",
		id: "bldChemLab",
		width: 13,
		height: 15,
		colour: "#a3a67c",
		t9: 0
	}, {
		name: "Clinker Vat",
		id: "bldClinkerVat",
		width: 13,
		height: 13,
		colour: "#b8e600",
		t9: 0
	}, {
		name: "Compression Furnace",
		id: "bldCompFurnace",
		width: 11,
		height: 15,
		colour: "#85a600",
		t9: 0
	}, {
		name: "Crematory",
		id: "bldCrematory",
		width: 10,
		height: 10,
		colour: "#61664d",
		t9: 0
	}, {
		name: "Fleet Furnace",
		id: "bldFleetFurnace",
		width: 21,
		height: 11,
		colour: "#6a8040",
		t9: 0
	}, {
		name: "Gearbox Assembly Table",
		id: "bldGearboxTable",
		width: 15,
		height: 16,
		colour: "#eaffbf",
		t9: 0
	}, {
		name: "Gem Cutting Table",
		id: "bldGemTable",
		width: 17,
		height: 17,
		colour: "#88ff00",
		t9: 0
	}, {
		name: "Glory Hole",
		id: "bldGloryHole",
		width: 13,
		height: 13,
		colour: "#aaf279",
		t9: 0
	}, {
		name: "Grain Oven",
		id: "bldGrainOven",
		width: 9,
		height: 9,
		colour: "#1d4010",
		t9: 0
	}, {
		name: "Gyration Cell",
		id: "bldGyroCell",
		width: 7,
		height: 7,
		colour: "#3aa629",
		t9: 0
	}, {
		name: "Hexaglyph Tablet",
		id: "bldHexaTablet",
		width: 3,
		height: 15,
		colour: "#263326",
		t9: 0
	}, {
		name: "Huge Chest",
		id: "bldHugeChest",
		width: 5,
		height: 7,
		colour: "#ffffff",
		t9: 0
	}, {
		name: "Improved Brick Rack",
		id: "bldImpBR",
		width: 5,
		height: 5,
		colour: "#f2f2f2",
		t9: 0
	}, {
		name: "Improved Hackling Rake",
		id: "bldImpHR",
		width: 5,
		height: 6,
		colour: "#a6a6a6",
		t9: 0
	}, {
		name: "Incense Burner",
		id: "bldIncenseBurner",
		width: 3,
		height: 3,
		colour: "#8c8c8c",
		t9: 0
	}, {
		name: "Khefre's Locker",
		id: "bldBeetleLocker",
		width: 7,
		height: 7,
		colour: "#808080",
		t9: 0
	}, {
		name: "Large Aging Rack",
		id: "bldLargeCheeseRack",
		width: 3,
		height: 3,
		colour: "#00660e",
		t9: 0
	}, {
		name: "Malting Tray",
		id: "bldMaltingTray",
		width: 5,
		height: 5,
		colour: "#39e650",
		t9: 0
	}, {
		name: "Mint",
		id: "bldMint",
		width: 9,
		height: 15,
		colour: "#a3d9aa",
		t9: 0
	}, {
		name: "Paper Press",
		id: "bldPaperPress",
		width: 12,
		height: 13,
		colour: "#00260f",
		t9: 0
	}, {
		name: "Papyrus Tank",
		id: "bldPapyTank",
		width: 5,
		height: 8,
		colour: "#468c62",
		t9: 0
	}, {
		name: "Pigment Laboratory",
		id: "bldPigmentLab",
		width: 11,
		height: 11,
		colour: "#40ffa6",
		t9: 0
	}, {
		name: "Pottery Deck",
		id: "bldPotteryDeck",
		width: 21,
		height: 21,
		colour: "#33cc99",
		t9: 0
	}, {
		name: "Rabbit Hutch",
		id: "bldRabbitHutch",
		width: 18,
		height: 19,
		colour: "#4d665e",
		t9: 0
	}, {
		name: "Reactory",
		id: "bldReactory",
		width: 18,
		height: 17,
		colour: "#134d41",
		t9: 0
	}, {
		name: "Recycling Smeltery",
		id: "bldRecyclingSmeltery",
		width: 5,
		height: 8,
		colour: "#39e6da",
		t9: 0
	}, {
		name: "Reinforced Kiln",
		id: "bldReinforcedKiln",
		width: 7,
		height: 9,
		colour: "#0a2624",
		t9: 0
	}, {
		name: "Scent Lab",
		id: "bldScentLab",
		width: 17,
		height: 17,
		colour: "#59b3ad",
		t9: 0
	}, {
		name: "Silkworm Farm",
		id: "bldSilkwormFarm",
		width: 11,
		height: 11,
		colour: "#207980",
		t9: 0
	}, {
		name: "Small Aging Rack",
		id: "bldSmallCheeseRack",
		width: 3,
		height: 2,
		colour: "#b6eef2",
		t9: 0
	}, {
		name: "Small Center",
		id: "bldSmShopCentre",
		width: 3,
		height: 3,
		colour: "#00c2f2",
		t9: 0
	}, {
		name: "Small Corner",
		id: "bldSmShopCorner",
		width: 3,
		height: 3,
		colour: "#0085a6",
		t9: 0
	}, {
		name: "Steam Distaff",
		id: "bldSteamDistaff",
		width: 16,
		height: 13,
		colour: "#003340",
		t9: 0
	}, {
		name: "Steam Kiln",
		id: "bldSteamKiln",
		width: 14,
		height: 13,
		colour: "#66b8cc",
		t9: 0
	}, {
		name: "Steam Rock Saw",
		id: "bldSteamRockSaw",
		width: 16,
		height: 11,
		colour: "#0099e6",
		t9: 0
	}, {
		name: "Toxin Kitchen",
		id: "bldToxinKitchen",
		width: 14,
		height: 15,
		colour: "#004466",
		t9: 0
	}, {
		name: "Trophy Case",
		id: "bldTrophyCase",
		width: 5,
		height: 7,
		colour: "#06131a",
		t9: 0
	}, {
		name: "Vault Kiln",
		id: "bldVaultKiln",
		width: 10,
		height: 13,
		colour: "#396073",
		t9: 0
	}, {
		name: "Wine Barrel",
		id: "bldWineBarrel",
		width: 7,
		height: 7,
		colour: "#738c99",
		t9: 0
	}, {
		name: "Wood Treatment Tank",
		id: "bldWTT",
		width: 20,
		height: 32,
		colour: "#bfe1ff",
		t9: 0
	}];

	var buildingCosts = [{
		id: "box",
		skills: {
			carpentry: 1
		},
		materials: {
			boards: 24
		}
	}, {
		id: "chest",
		skills: {
			carpentry: 2
		},
		materials: {
			boards: 48,
			bricks: 400
		}
	}, {
		id: "potterywheel",
		skills: {
			pottery: 0
		},
		materials: {
			boards: 12,
			bricks: 48,
			flystone: 1,
			leather: 1,
			oil: 4,
			rope: 4
		}
	}, {
		id: "boxkiln",
		skills: {
			kilnconstruction: 0
		},
		materials: {
			bricks: 36
		}
	}, {
		id: "bldTrueKiln",
		skills: {
			kilnconstruction: 1
		},
		materials: {
			bricks: 100,
			firebricks: 48
		}
	}, {
		id: "flaxcomb",
		skills: {
			flaxprocessing: 0
		},
		materials: {
			boards: 18,
			bricks: 36,
			thorns: 60
		}
	}, {
		id: "smalldistaff",
		skills: {
			flaxprocessing: 0
		},
		materials: {
			boards: 12,
			bricks: 100,
			wood: 10
		}
	}, {
		id: "studentloom",
		skills: {
			clothwork: 0
		},
		materials: {
			boards: 8,
			twine: 120
		}
	}, {
		id: "studentloom",
		skills: {
			clothwork: 0
		},
		materials: {
			boards: 4,
			loomframe: 2
		}
	}, {
		id: "craftingbench",
		skills: {
			carpentry: 1
		},
		materials: {
			boards: 100
		}
	}, {
		id: "carpshop",
		skills: {
			carpentry: 0
		},
		materials: {
			boards: 60,
			bricks: 36,
			slate: 8,
			rope: 2
		}
	}, {
		id: "bldCcHearth",
		skills: {
			pyrolysis: 2
		},
		materials: {
			firebricks: 240,
			bricks: 360
		}
	}, {
		id: "bldCcOven",
		skills: {
			pyrolysis: 7
		},
		materials: {
			claybricks: 600,
			bricks: 1200,
			coppersheeting: 8,
			copperwire: 8,
			ironbar: 4,
			leather: 40
		}
	}, {
		id: "bldRockSaw",
		skills: {
			stonework: 0
		},
		materials: {
			boards: 100,
			flint: 12,
			leather: 15,
			oil: 100,
			rope: 9,
			bricks: 500
		}
	}, {
		id: "bldMasonsBench",
		skills: {
			stonemasonry: 0
		},
		materials: {
			boards: 30,
			bricks: 48,
			flint: 6,
			leather: 20,
			oil: 4,
			rope: 4
		}
	}, {
		id: "bldGlassBench",
		skills: {
			stonemasonry: 0
		},
		materials: {
			firebricks: 200,
			bricks: 400,
			sand: 1200
		}
	}, {
		id: "bldKitchen",
		skills: {
			stonemasonry: 0
		},
		materials: {
			firebricks: 100,
			bricks: 32,
			boards: 20,
			claymortars: 1
		}
	}, {
		id: "bldBasicTub",
		skills: {
			cooperage: 0
		},
		materials: {
			bricks: 240,
			canvas: 2
		}
	}, {
		id: "bldSturdyTub",
		skills: {
			cooperage: 0
		},
		materials: {
			bricks: 240,
			canvas: 6,
			beeswax: 6
		}
	}, {
		id: "bldMarbleTub",
		skills: {
			cooperage: 0
		},
		materials: {
			tar: 20,
			canvas: 10,
			marbleTangerine: 1
		}
	}, {
		id: "bldCastingStudent",
		skills: {
			casting: 0
		},
		materials: {
			boards: 24,
			firebricks: 200,
			bricks: 400,
			sand: 1200,
			woolClothClaySteeped: 4
		}
	}, {
		id: "bldCastingMaster",
		skills: {
			casting: 0
		},
		materials: {
			boards: 24,
			firebricks: 200,
			bricks: 400,
			rope: 50,
			sand: 12000,
			woolClothClaySteeped: 20
		}
	}, {
		id: "bldForgeStudent",
		skills: {
			casting: 0
		},
		materials: {
			boards: 24,
			firebricks: 18,
			bricks: 48,
			canvasClaySteeped: 2
		}
	}, {
		id: "bldForgeMaster",
		skills: {
			casting: 0
		},
		materials: {
			boards: 72,
			firebricks: 200,
			bricks: 400,
			canvasClaySteeped: 10
		}
	}, {
		id: "bldHacklingRake",
		skills: {
			flaxprocessing: 0
		},
		materials: {
			boards: 18,
			bricks: 36,
			nails: 60
		}
	}, {
		id: "bldKettle",
		skills: {
			cooking: 0
		},
		materials: {
			ironpot: 1,
			sheetingCopper: 4
		}
	}];

	var menuState = {
		main: "visible",
		direction: "hidden",
		compound: "hidden",
		showExpansionSectors: "false",
		showRemoveSectors: "false",
		submenu: "none",
		selectedBuilding: null,
		currentLang: "en"
	}

	var state = "main";

	var modeText = "";

	var ver = {
		release: 0,
		major: 0,
		minor: 4
	};

	var version = ver.release + '.' + ver.major + '.' + ver.minor;

	updateMenus();

	var stage = new Konva.Stage({
		container: 'container',
		width: width,
		height: height,
		draggable: true,
		x: width / 2,
		y: height / 2,
		scaleX: 0.5,
		scaleY: 0.5
	});

	var shadowRectangle = new Konva.Rect({
		x: 0,
		y: 0,
		width: 16 * 6,
		height: 16 * 3,
		fill: '#FF7B07',
		opacity: 0.6,
		stroke: '#CF6402',
		strokeWidth: 3,
		dash: [20, 2]
	});

	var scaleBy = 0.90;

	stage.on('wheel', e => {

		e.evt.preventDefault();

		var oldScale = stage.scaleX();

		if ((oldScale < 0.05 && e.evt.deltaY > 0) || (oldScale > 3.0 && e.evt.deltaY < 0)) return;

		var mousePointTo = {
			x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
			y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale
		};

		var newScale = e.evt.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;

		stage.scale({
			x: newScale,
			y: newScale
		});

		var newPos = {
			x: -(mousePointTo.x - stage.getPointerPosition().x / newScale) * newScale,
			y: -(mousePointTo.y - stage.getPointerPosition().y / newScale) * newScale
		};

		stage.position(newPos);
		stage.batchDraw();
	});

	var sectorFloorLayer = new Konva.Layer();
	var sectorGridLayer  = new Konva.Layer();
	var buildingLayer    = new Konva.Layer();
	var gridLayer        = new Konva.Layer();

	var padding = 16;

	for (var i = -(width / 2); i < width / padding; i++) {
		gridLayer.add(new Konva.Line({
			points: [Math.round(i * padding) + 0.5, -(height), Math.round(i * padding) + 0.5, (height)],
			stroke: '#ddd',
			strokeWidth: 1,
		}));
	}

	for (var i = -(width / 2); i < width / padding; i++) {
		gridLayer.add(new Konva.Line({
			points: [-(width), Math.round(i * padding) + 0.5, width, Math.round(i * padding) + 0.5],
			stroke: '#ddd',
			strokeWidth: 1,
		}));
	}

	stage.add(gridLayer);

	document.getElementById('newCompound').addEventListener('click', function() {
		state = "newCompound";

		draw();
	}, false);

	document.getElementById('editCompound').addEventListener('click', function() {
		state = "editCompound";

		updateMenus();

		draw();
	}, false);

	document.getElementById('editCompound').disabled = true;

	document.getElementById('addSector').addEventListener('click', function() {
		state = "addSector";

		draw();
	}, false);

	document.getElementById('removeSector').addEventListener('click', function() {
		state = "removeSector";

		updateMenus();

		draw();
	}, false);

	document.getElementById('editSector').addEventListener('click', function() {
		state = "editSector";

		updateMenus();

		draw();
	}, false);

	document.getElementById('addBuilding').addEventListener('click', function() {
		state = "addBuilding";
		menuState.submenu = 'None';
		menuState.selectedBuilding = null;

		updateMenus();

		draw();
	}, false);

	document.getElementById('toggleBuilding').addEventListener('click', function() {
		state = "toggleBuilding";

		updateMenus();

		draw();
	}, false);

	document.getElementById('exportPopup').style.visibility = 'hidden';

	document.getElementById('loadCompound').addEventListener('click', function() {
		document.getElementById('port').value = "";

		document.getElementById('exportPopup').style.visibility = 'visible';
		document.getElementById('copyButton').style.visibility  = 'hidden';
		document.getElementById('loadButton').style.visibility  = 'visible';
	}, false);

	document.getElementById('loadButton').addEventListener('click', function() {
		data = loadData(document.getElementById('port').value.toString());
	}, false);

	document.getElementById('exportClose').addEventListener('click', function() {
		document.getElementById('exportPopup').style.visibility = 'hidden';
		document.getElementById('copyButton').style.visibility  = 'hidden';
		document.getElementById('loadButton').style.visibility  = 'hidden';
		draw();
	}, false);

	document.getElementById('exportCompound').addEventListener('click', function() {
		document.getElementById('port').value = encodeData(compoundData);

		updateBuildableSectors();

		document.getElementById('exportPopup').style.visibility = 'visible';
		document.getElementById('copyButton').style.visibility  = 'visible';
		document.getElementById('loadButton').style.visibility  = 'hidden';
	}, false);

	document.getElementById('copyButton').addEventListener('click', function() {
		let textarea = document.getElementById("port");

		textarea.select();

		document.execCommand("copy");
		document.getElementById('exportPopup').style.visibility = 'hidden';

		setErrorText("Your data has been copied to the clipboard");

		document.getElementById('copyButton').style.visibility = 'hidden';
		document.getElementById('loadButton').style.visibility = 'hidden';
	}, false);

	document.getElementById('editSector').disabled     = true;
	document.getElementById('toggleBuilding').disabled = true;
	//document.getElementById('loadCompound').disabled = true;
	document.getElementById('exportCompound').disabled = true;

	var urlParams = new URLSearchParams(window.location.search);

	var compoundData = {};

	if (urlParams.has('data')) {
		loadData(urlParams.get('data').toString());
	}

	function loadData(data) {
		compoundData = decodeData(data);

		document.getElementById('editCompound').disabled = false;
		document.getElementById('exportCompound').disabled = false;

		state = "editCompound";

		document.getElementById('exportPopup').style.visibility = 'hidden';
		document.getElementById('copyButton').style.visibility = 'hidden';
		document.getElementById('loadButton').style.visibility = 'hidden';

		centreScreen();

		updateMenus();

		draw();
	}

	// Create a sector
	function addSector(x, y) {
		if ((countSectors(compoundData) + 1) > getMaxCompoundSize(compoundData)) {
			setErrorText("You can't add any more sectors");
			return;
		}

		if (x != undefined && y != undefined) {
			x = parseInt(x);
			y = parseInt(y);

			// If the sector is at 1,1 then it's a permanent sector and can't be added or removed.
			// Is the sector adjacent to the 1,1 door.
			if (compoundData.sectors[0][0]) {
				if ((compoundData.sectors[0][0].north == "wtEntrance" && x == 0 && y == 1) || (compoundData.sectors[0][0].south == "wtEntrance" && x == 0 && y == -1) || (compoundData.sectors[0][0].east == "wtEntrance" && x == 1 && y == 0) || (compoundData.sectors[0][0].west == "wtEntrance" && x == -1 && y == 0)) {
					setErrorText("You can't build in front the the starting sector door");
					return;
				}
			}

			setErrorText();

			if (compoundData.sectors[x] == undefined) compoundData.sectors[x] = {}; //new Array();

			if (!compoundData.sectors[x][y]) compoundData.sectors[x][y] = {};

			compoundData.sectors[x][y].north = "wtWallStandard";
			compoundData.sectors[x][y].south = "wtWallStandard";
			compoundData.sectors[x][y].east  = "wtWallStandard";
			compoundData.sectors[x][y].west  = "wtWallStandard";
			compoundData.sectors[x][y].floor = "ftGranite";

			if (!(x == 0 && y == 0)) {

				// Check for adjacent sectors
				if (compoundData.sectors[x]) {
					if (compoundData.sectors[x][y + 1] && compoundData.sectors[x][y + 1].floor != "None") {
						compoundData.sectors[x][y].north     = "None"
						compoundData.sectors[x][y + 1].south = "None"
					}
					if (compoundData.sectors[x][y - 1] && compoundData.sectors[x][y - 1].floor != "None") {
						compoundData.sectors[x][y].south     = "None"
						compoundData.sectors[x][y - 1].north = "None"
					}
				}

				if (!(compoundData.sectors[x + 1])) {
					compoundData.sectors[x + 1] = {}; //new Array();
				}

				if (compoundData.sectors[x + 1][y] && compoundData.sectors[x + 1][y].floor != "None") {
					compoundData.sectors[x][y].east     = "None"
					compoundData.sectors[x + 1][y].west = "None"
				}

				if (!(compoundData.sectors[x - 1])) {
					compoundData.sectors[x - 1] = {}; //new Array();
				}

				if (compoundData.sectors[x - 1][y] && compoundData.sectors[x - 1][y].floor != "None") {
					compoundData.sectors[x][y].west     = "None"
					compoundData.sectors[x - 1][y].east = "None"
				}
			}

			updateBuildableSectors();
		}
	}

	function updateBuildableSectors() {
		var blankSector = {
			floor: "None",
			north: "None",
			south: "None",
			east:  "None",
			west:  "None"
		};

		for (x in compoundData.sectors) {
			for (y in compoundData.sectors[x]) {
				x = parseInt(x)
				y = parseInt(y)
				if (compoundData.sectors[x][y] && compoundData.sectors[x][y].floor == "None") compoundData.sectors[x][y] = null;
			}
		}

		for (x in compoundData.sectors) {
			for (y in compoundData.sectors[x]) {
				x = parseInt(x);
				y = parseInt(y);

				if (compoundData.sectors[x][y] && compoundData.sectors[x][y].floor != "None") {
					if (compoundData.sectors[x]) {
						if (!(compoundData.sectors[x][y + 1])) {
							compoundData.sectors[x][y + 1] = {
								floor: "None",
								north: "None",
								south: "None",
								east:  "None",
								west:  "None"
							};
						}

						if (!(compoundData.sectors[x][y - 1])) {
							compoundData.sectors[x][y - 1] = {
								floor: "None",
								north: "None",
								south: "None",
								east:  "None",
								west:  "None"
							};
						}

						if (!(compoundData.sectors[x - 1])) {
							compoundData.sectors[x - 1] = {}; //new Array();
						}

						if (!(compoundData.sectors[x + 1])) {
							compoundData.sectors[x + 1] = {}; //new Array();
						}

						if (!(compoundData.sectors[x - 1][y])) {
							compoundData.sectors[x - 1][y] = {
								floor: "None",
								north: "None",
								south: "None",
								east:  "None",
								west:  "None"
							};
						}

						if (!(compoundData.sectors[x + 1][y])) {
							compoundData.sectors[x + 1][y] = {
								floor: "None",
								north: "None",
								south: "None",
								east:  "None",
								west:  "None"
							};
						}
					}
				}
			}
		}
	}

	function removeSector(x, y) {
		if (x != undefined && y != undefined) {
			x = parseInt(x);
			y = parseInt(y);

			// If the sector is at 0,0 then it's a permanent sector and can't be added or removed.
			if (x == 0 && y == 0) {
				setErrorText("You can't remove the starting sector");
				return;
			}

			setErrorText();

			if (compoundData.sectors[x]) {
				if (compoundData.sectors[x][y]) {
					// Sector exists.
					compoundData.sectors[x][y] = null;

					// Check for adjacent sectors and add walls back in
					if (compoundData.sectors[x][y + 1]) {
						if (compoundData.sectors[x][y + 1].floor != "None") {
							compoundData.sectors[x][y + 1].south = "wtWallStandard"
						}
					}

					if (compoundData.sectors[x][y - 1]) {
						if (compoundData.sectors[x][y - 1].floor != "None") {
							compoundData.sectors[x][y - 1].north = "wtWallStandard"
						}
					}

					if (compoundData.sectors[x + 1][y]) {
						if (compoundData.sectors[x + 1][y].floor != "None") {
							compoundData.sectors[x + 1][y].west = "wtWallStandard"
						}
					}

					if (compoundData.sectors[x - 1][y]) {
						if (compoundData.sectors[x - 1][y].floor != "None") {
							compoundData.sectors[x - 1][y].east = "wtWallStandard"
						}
					}

					updateBuildableSectors();

					draw();

					return;
				}
			}
		}
	}

	function createNewCompound() {
		setErrorText();

		if (compoundData.sectors) {
			for (i in compoundData.sectors) {
				for (j in compoundData.sectors[i]) {
					delete compoundData.sectors[i][j];
				}
				delete compoundData.sectors[i];
			}
			delete compoundData.sectors;
		}

		if (this.id == 'north' || this.id == 'south' || this.id == 'east' || this.id == 'west') {
			compoundData = {}; //new Array();
			compoundData.type = 0;
			compoundData.sectors = {}; //new Array();
			compoundData.sectors[0] = {}; //new Array();

			addSector(0, 0);

			Object.defineProperty(compoundData.sectors[0][0], this.id, {
				value: "wtEntrance"
			});

			if (this.id == 'north') {
				addSector(-1, 0);
				addSector(1, 0);
				addSector(0, -1);
				addSector(-1, -1);
				addSector(1, -1);
			} else if (this.id == 'south') {
				addSector(-1, 0);
				addSector(1, 0);
				addSector(0, 1);
				addSector(-1, 1);
				addSector(1, 1);
			} else if (this.id == 'east') {
				addSector(0, 1);
				addSector(0, -1);
				addSector(-1, 1);
				addSector(-1, 0);
				addSector(-1, -1);
			} else if (this.id == 'west') {
				addSector(0, 1);
				addSector(0, -1);
				addSector(1, 1);
				addSector(1, 0);
				addSector(1, -1);
			}

			menuState.direction = 'hidden';
			menuState.compound = 'visible';

			centreScreen();

			draw();
		}

		state = "editCompound";

		document.getElementById('editCompound').disabled   = false;
		document.getElementById('exportCompound').disabled = false;

		updateMenus();
	}

	document.getElementById('north').addEventListener('click', createNewCompound, false);
	document.getElementById('south').addEventListener('click', createNewCompound, false);
	document.getElementById('east').addEventListener('click', createNewCompound, false);
	document.getElementById('west').addEventListener('click', createNewCompound, false);

	function draw() {
		// Update the window size;
		width  = window.innerWidth;
		height = window.innerHeight;
		stage.size({
			width: width,
			height: height
		});

		// Cleanup sectors that may be buildable just in case. TODO: Trigger this only on add/remove?
		updateBuildableSectors();
		updateMenus();

		// Empty the floor layout and building layout.
		sectorFloorLayer.destroyChildren(); // = new Konva.Layer();
		sectorFloorLayer.clear(); // = new Konva.Layer();

		buildingLayer.destroyChildren();
		buildingLayer.clear();
		buildingLayer.add(shadowRectangle);

		shadowRectangle.hide();
		if (compoundData.sectors) {
			for (i in compoundData.sectors) {
				for (j in compoundData.sectors[i]) {
					drawSector(i, j);
				}
			}
		}

		if (compoundData.buildings) {
			for (i in compoundData.buildings) {
				drawBuilding(i);
			}
		}

		calculateCosts();

		stage.add(sectorFloorLayer);
		stage.add(buildingLayer);
	}

	function updateMenus() {
		if (state == "main") {
			menuState.direction = 'hidden';
			menuState.compound = 'hidden';
			menuState.showExpansionSectors = 'false';
			menuState.showRemoveSectors = 'false';
			menuState.submenu = 'None';
			menuState.selectedBuilding = null;
			modeText = "Welcome to the planning tool v" + version;
			modeText += "<br />To begin, please create a compound"
		} else if (state == "newCompound") {
			menuState.direction = 'visible';
			menuState.compound = 'hidden';
			menuState.showExpansionSectors = 'false';
			menuState.showRemoveSectors = 'false';
			menuState.submenu = 'None';
			menuState.selectedBuilding = null;
			modeText = 'Now that you\'ve selected \'Create Compound\' please choose what direction you\'d like the door to face'
		} else if (state == "editCompound") {
			menuState.direction = 'hidden';
			menuState.compound = 'visible';
			menuState.showExpansionSectors = 'false';
			menuState.showRemoveSectors = 'false';
			menuState.submenu = 'None';
			modeText = 'Great! You\'ve built a compound.'
			modeText += 'You can either: <ol><li>change the shape of the compound by adding or removing sectors</li>'
			modeText += '<li>add buildings to the compound</li>'
		} else if (state == "addSector") {
			menuState.direction = 'hidden';
			menuState.compound = 'visible';
			menuState.showExpansionSectors = 'true';
			menuState.showRemoveSectors = 'false';
			menuState.submenu = 'None';
			menuState.selectedBuilding = null;
			modeText = 'To add a sector, click on one of the available squares (highlighted with a red border)'
		} else if (state == "removeSector") {
			menuState.direction = 'hidden';
			menuState.compound = 'visible';
			menuState.showExpansionSectors = 'false';
			menuState.showRemoveSectors = 'true';
			menuState.submenu = 'None';
			menuState.selectedBuilding = null;
			modeText = 'To remove a sector, click on one of the available squares (highlighted with a red border)'
		} else if (state == "editSector") {
			menuState.direction = 'hidden';
			menuState.compound = 'visible';
			menuState.showExpansionSectors = 'false';
			menuState.showRemoveSectors = 'false';
			menuState.submenu = 'None';
			modeText = 'Not currently implemented'
		}

		if (menuState.submenu == 'None') {
			document.getElementById("submenuButtons").innerHTML = '';
		}

		if (state == "addBuilding") {
			menuState.direction = 'hidden';
			menuState.compound = 'visible';
			menuState.showExpansionSectors = 'false';
			menuState.showRemoveSectors = 'false';
			modeText = "";
			if (menuState.submenu != 'BuildingCategories') {
				modeText = 'You\'ve selected a category, pick a building to place it down.<br />Once placed you can move it by dragging and dropping it.<br /> <br />You can return to the category meny by pressing \'Add Building\' again'
				if (!(getByValue(catData, menuState.submenu))) {
					menuState.submenu = 'BuildingCategories';
					modeText = 'Please select a category'
					for (cat in catData) addSubmenuButton(catData[cat].id, catData[cat].name, 1);
				}
			}
		}

		// Count the current sectors
		if (compoundData && compoundData.type != undefined) {
			document.getElementById('infoPanel').innerHTML = '';
			document.getElementById('infoPanel').innerHTML = `${countSectors(compoundData)}/${compoundTypes[compoundData.type].baseMaxSize}`;
		}

		if (menuState.selectedBuilding != null) {
			text = ""
			text += "<br />The selected building is: <br />" + compoundData.buildings[menuState.selectedBuilding].name
			text += "<br />Taking up " + compoundData.buildings[menuState.selectedBuilding].width + " x " + compoundData.buildings[menuState.selectedBuilding].height + " squares"
			text += "<br /><br />You can move this building by dragging it<br />To deselect this building please click on it<br />"
			text += "<div style=\"text-align:center\"><input type=\"button\" value=\"Rotate\" onclick=\"rotateBuilding(" + parseInt(menuState.selectedBuilding) + ")\">"
			text += "<label class=\"switch-light switch-candy\" onclick=\"\"><input type=\"checkbox\" onchange=\"changeBuildStatus(this)\" id=\"cbPlanned\"" + (compoundData.buildings[menuState.selectedBuilding].built == 1 ? "checked=\"true\" " : "") + "><span><span>Planned</span><span>Built</span><a></a></span></label>"
			text += " <div><br /></div>"
			text += " <div><br /></div>"
			text += "<input type=\"button\" value=\"Delete this Building\" onclick=\"removeBuilding(" + parseInt(menuState.selectedBuilding) + ")\">"
			text += "</div>";

			modeText += text;

			setCurrentItemText(modeText);

			var checkbox = document.getElementById('cbPlanned');

			if (compoundData.buildings[menuState.selectedBuilding].built == 1) checkbox.checked = true;
		} else {
			setCurrentItemText(modeText);
		}

		document.getElementById('startButtons').style.visibility = menuState.main;
		document.getElementById('compoundFaceButtons').style.visibility = menuState.direction;
		document.getElementById('compoundButtons').style.visibility = menuState.compound;
	}

	function addSubmenuButton(id, name, type) {
		var element = document.createElement("input");

		element.setAttribute("type", "button");
		element.setAttribute("id", id);
		element.setAttribute("value", name);

		var target = document.getElementById("submenuButtons");

		target.appendChild(element);

		if (type == 1) { // Category Header
			document.getElementById(id).addEventListener('click', function() {
				selectCategory(this.id);
				menuState.submenu = this.id;
				draw();
			}, false);
		} else if (type == 0) { // Building
			document.getElementById(id).addEventListener('click', function() {
				addBuilding(this.id);
				draw();
			}, false);
		}
	}

	function selectCategory(category) {
		document.getElementById("submenuButtons").innerHTML = '';

		var cat = getByValue(catData, category);

		for (building in cat.buildings) {
			bldg = getByValue(buildingData, cat.buildings[building].id)
			addSubmenuButton(bldg.id, bldg.name, 0);
		}
	}

	function getByValue(arr, value) {
		for (var i = 0, iLen = arr.length; i < iLen; i++) {
			if (arr[i].id == value) return arr[i];
		}

		return false;
	}

	function getIdByValue(arr, value) {
		for (var i = 0, iLen = arr.length; i < iLen; i++) {
			if (arr[i].id == value) return i;
		}

		return false;
	}

	function addBuilding(buildingid) {
		var building = getByValue(buildingData, buildingid);

		if (building) {
			building.x = 0;
			building.y = 0;
			building.rotated = 0;
			building.built = 0;
			if (!compoundData.buildings) compoundData.buildings = new Array;
			compoundData.buildings.push(JSON.parse(JSON.stringify(building)));
			menuState.selectedBuilding = compoundData.buildings.length - 1;
		}

		draw();
	}

	function drawBuilding(buildingindex) {
		// TODO: 	No need to store width, height, name, colour in the building list.
		// 			Grab them from the building data.
		building = compoundData.buildings[buildingindex];

		let rectangle = new Konva.Rect({
			x: compoundData.buildings[parseInt(buildingindex)].x,
			y: compoundData.buildings[parseInt(buildingindex)].y,
			width: (compoundData.buildings[parseInt(buildingindex)].rotated ? 16 * building.height : 16 * building.width),
			height: (compoundData.buildings[parseInt(buildingindex)].rotated ? 16 * building.width : 16 * building.height),
			fill: compoundData.buildings[parseInt(buildingindex)].colour, //'#fff',
			stroke: '#111',
			strokeWidth: 1,
			shadowColor: 'black',
			shadowBlur: 2,
			shadowOffset: {
				x: 1,
				y: 1
			},
			shadowOpacity: 0.0,
			draggable: true,
			id: buildingindex,
			opacity: (building.built == 1 ? 1.0 : 0.75)
		});

		if (menuState.selectedBuilding == parseInt(buildingindex)) {
			rectangle.shadowOpacity(0.4);
		} else {
			rectangle.shadowOpacity(0.0);
		}

		rectangle.on('dragstart', (e) => {
			shadowRectangle.size({
				width: rectangle.width(),
				height: rectangle.height()
			});

			//shadowRectangle.width = rectangle.width();
			//shadowRectangle.height = rectangle.height();

			shadowRectangle.show();
			shadowRectangle.moveToTop();
			rectangle.moveToTop();
		});

		rectangle.on('dragend', (e) => {
			rectangle.position({
				x: Math.round(rectangle.x() / 16) * 16,
				y: Math.round(rectangle.y() / 16) * 16
			})

			compoundData.buildings[parseInt(rectangle.attrs.id)].x = rectangle.x();
			compoundData.buildings[parseInt(rectangle.attrs.id)].y = rectangle.y();
			stage.batchDraw();
			shadowRectangle.hide();
		});

		rectangle.on('dragmove', (e) => {
			shadowRectangle.position({
				x: Math.round(rectangle.x() / 16) * 16,
				y: Math.round(rectangle.y() / 16) * 16
			});

			stage.batchDraw();
		});

		rectangle.on('mouseover', (e) => {
			if (menuState.selectedBuilding == null) {
				let building = compoundData.buildings[parseInt(rectangle.attrs.id)]
				let text = "The building under your cursor is: <br />" + compoundData.buildings[parseInt(rectangle.attrs.id)].name
				text += "<br />Taking up " + building.width + " x " + building.height + " squares"
				text += "<br /><br />You can move this building by dragging it<br />To select this building please click on it again"
				setCurrentItemText(text);
			}
			//stage.batchDraw();
		});

		rectangle.on('mouseout', (e) => {
			setCurrentItemText(modeText);
			//stage.batchDraw();
		});

		rectangle.on('click', (e) => {
			let building = compoundData.buildings[parseInt(rectangle.attrs.id)];
			if (menuState.selectedBuilding == parseInt(rectangle.attrs.id)) {
				menuState.selectedBuilding = null;
				updateMenus();
				draw();
				return;
			}

			menuState.selectedBuilding = parseInt(rectangle.attrs.id);
			updateMenus();
			draw();
			//stage.batchDraw();
		});

		buildingLayer.add(rectangle);
		//buildingLayer.add(dog);
	}

	function drawSector(x, y) {
		x = parseInt(x)
		y = parseInt(y)
		var sector = compoundData.sectors[i][j];
		if (sector) {
			if (sector.floor == "None") {
				// Not a real sector. Only draw if we are in add sector mode
				if (menuState.showExpansionSectors == "true") {
					var sector = new Konva.Rect({
						x: i * 16 * 16,
						y: -(j * 16 * 16),
						width: 16 * 16,
						height: 16 * 16,
						fill: "rgba(255, 255, 255, 1)",
						stroke: 'red',
						strokeWidth: 3,
						dash: [5, 5],
						opacity: 0.25,
						gridx: i,
						gridy: j
					});

					sector.on('mouseover', function() {
						this.opacity(1);
						sectorFloorLayer.draw();
					});

					sector.on('mouseout', function() {
						this.opacity(0.25);
						sectorFloorLayer.draw();
					});

					sector.on('click', function(event) {
						var shape = event.target;
						addSector(shape.attrs.gridx, shape.attrs.gridy)
						draw();
					});

					sectorFloorLayer.add(sector);
				}
			} else {
				if (menuState.showRemoveSectors == 'true') {
					var sector = new Konva.Rect({
						x: i * 16 * 16,
						y: -(j * 16 * 16),
						width: 16 * 16,
						height: 16 * 16,
						fill: "white",
						stroke: 'red',
						strokeWidth: 3,
						opacity: 0.5,
						gridx: i,
						gridy: j
					});

					sector.on('mouseover', function() {
						this.opacity(1);
						sectorFloorLayer.draw();
					});

					sector.on('mouseout', function() {
						this.opacity(0.25);
						sectorFloorLayer.draw();
					});

					sector.on('click', function(event) {
						var shape = event.target;
						removeSector(shape.attrs.gridx, shape.attrs.gridy)
						draw();
					});

					sectorFloorLayer.add(sector);
				} else {
					sectorFloorLayer.add(new Konva.Rect({
						x: i * 16 * 16,
						y: -(j * 16 * 16),
						width: 16 * 16,
						height: 16 * 16,
						fill: "white",
						stroke: 'darkgrey',
						strokeWidth: 3,
						opacity: 0.5
					}));
				}

				x0 = i * 16 * 16;
				y0 = -(j * 16 * 16);
				w = 16 * 16;

				if (compoundData.sectors[i][j].north == "wtWallStandard" || compoundData.sectors[i][j].north == "wtEntrance") {
					let p = [x0, y0, x0 + w, y0];

					if (compoundData.sectors[i][j].north == "wtEntrance") {
						p = [x0, y0,
							x0 + w / 4, y0,
							x0 + w / 4, y0 + 8,
							x0 + 3 * w / 4, y0 + 8,
							x0 + 3 * w / 4, y0,
							x0 + w, y0,
							x0 + 3 * w / 4, y0,
							x0 + 3 * w / 4, y0 - 8,
							x0 + w / 4, y0 - 8,
							x0 + w / 4, y0
						]
					}

					sectorFloorLayer.add(new Konva.Line({
						points: p,
						stroke: 'black',
						strokeWidth: 3,
					}));

					/*sectorFloorLayer.add(new Konva.Rect( {
						x: i * 06 * 06,
						y: -(j * 06 * 06),
						width: 06*06,
						height: 2,
						fill: "rgba(211, 1, 1, 1.1)",
						stroke: 'black',
						strokeWidth: 2,
						dash: (compoundData.sectors[i][j].north == "Wall" ? [1] : [8,8])
					}));*/
				}

				if (compoundData.sectors[i][j].south == "wtWallStandard" || compoundData.sectors[i][j].south == "wtEntrance") {
					let p = [x0, y0 + w, x0 + w, y0 + w];

					if (compoundData.sectors[i][j].south == "wtEntrance") {
						p = [x0, y0 + w,
							x0 + w / 4, y0 + w,
							x0 + w / 4, y0 + w + 8,
							x0 + 3 * w / 4, y0 + w + 8,
							x0 + 3 * w / 4, y0 + w,
							x0 + w, y0 + w,
							x0 + 3 * w / 4, y0 + w,
							x0 + 3 * w / 4, y0 + w - 8,
							x0 + w / 4, y0 + w - 8,
							x0 + w / 4, y0 + w
						]
					}

					sectorFloorLayer.add(new Konva.Line({
						points: p,
						stroke: 'black',
						strokeWidth: 3,
					}));
				}
				if (compoundData.sectors[i][j].east == "wtWallStandard" || compoundData.sectors[i][j].east == "wtEntrance") {
					let p = [x0 + w, y0, x0 + w, y0 + w];

					if (compoundData.sectors[i][j].east == "wtEntrance") {
						p = [x0 + w, y0,
							x0 + w, y0 + w / 4,
							x0 + w + 8, y0 + w / 4,
							x0 + w + 8, y0 + 3 * w / 4,
							x0 + w, y0 + 3 * w / 4,
							x0 + w, y0 + w,
							x0 + w, y0 + 3 * w / 4,
							x0 + w - 8, y0 + 3 * w / 4,
							x0 + w - 8, y0 + w / 4,
							x0 + w, y0 + w / 4
						]
					}

					sectorFloorLayer.add(new Konva.Line({
						points: p,
						stroke: 'black',
						strokeWidth: 3,
					}));
				}
				if (compoundData.sectors[i][j].west == "wtWallStandard" || compoundData.sectors[i][j].west == "wtEntrance") {
					let p = [x0, y0, x0, y0 + w];

					if (compoundData.sectors[i][j].west == "wtEntrance") {
						p = [x0, y0,
							x0, y0 + w / 4,
							x0 + 8, y0 + w / 4,
							x0 + 8, y0 + 3 * w / 4,
							x0, y0 + 3 * w / 4,
							x0, y0 + w,
							x0, y0 + 3 * w / 4,
							x0 - 8, y0 + 3 * w / 4,
							x0 - 8, y0 + w / 4,
							x0, y0 + w / 4
						]
					}

					sectorFloorLayer.add(new Konva.Line({
						points: p,
						stroke: 'black',
						strokeWidth: 3,
					}));
				}
			}
		}
	}

	function setErrorText(message) {
		if (message) document.getElementById("errorBar").innerHTML = message;
		else document.getElementById("errorBar").innerHTML = '';
	}

	function setCurrentItemText(message) {
		if (message) document.getElementById("leftPanel").innerHTML = message;
		else document.getElementById("leftPanel").innerHTML = '';
	}

	function rotateBuilding(id) {
		compoundData.buildings[id].rotated = (compoundData.buildings[id].rotated == 0 ? 1 : 0)
		draw();
	}

	function removeBuilding(id) {
		if (menuState.selectedBuilding == id) menuState.selectedBuilding = null
		compoundData.buildings.splice(id, 1)
		draw();
	}

	function copy() {
		let textarea = document.getElementById("port");
		textarea.select();
		document.execCommand("copy");
	}

	function compareId(a, b) {
		if (a.id < b.id) {
			return -1;
		}
		if (a.id > b.id) {
			return 1;
		}
		return 1;
	}

	function calculateCosts() {
		var target = document.getElementById("rightPanel");

		// Clear the right panel.
		//target.innerHTML = '';
		var bldCosts = {};

		if (!compoundData.buildings) return;

		let buildings = JSON.parse(JSON.stringify(compoundData.buildings));

		buildings.sort(compareId);

		bldCosts['total'] = {
			costs: {},
			requires: {}
		};

		for (bldg in buildings) {
			if (buildings[bldg].built == 0) {
				if (bldCosts.hasOwnProperty(buildings[bldg].id)) {
					bldCosts[buildings[bldg].id].count++;

					let cost = getByValue(buildingCosts, buildings[bldg].id);

					for (mat in cost.materials) {
						bldCosts[buildings[bldg].id].costs[mat] += cost.materials[mat]
						bldCosts['total'].costs[mat] += cost.materials[mat]
					}
				} else {
					bldCosts[buildings[bldg].id] = {};

					bldCosts[buildings[bldg].id].id       = buildings[bldg].id;
					bldCosts[buildings[bldg].id].name     = buildings[bldg].name;
					bldCosts[buildings[bldg].id].count    = 1;
					bldCosts[buildings[bldg].id].costs    = {};
					bldCosts[buildings[bldg].id].requires = {};

					let cost = getByValue(buildingCosts, buildings[bldg].id);

					for (mat in cost.materials) {
						bldCosts[buildings[bldg].id].costs[mat] = cost.materials[mat]
						if (bldCosts['total'].costs[mat]) bldCosts['total'].costs[mat] += cost.materials[mat]
						else bldCosts['total'].costs[mat] = cost.materials[mat]
					}

					for (skill in cost.skills) {
						bldCosts[buildings[bldg].id].requires[skill] = cost.skills[skill]
						bldCosts['total'].requires[skill] = cost.skills[skill]
					}
				}
			}
		}
		// Finished calculating costs
		// Empty all the right panel except the totals.
		var child = target.firstElementChild;

		while (child) {
			if (child.id != 'totalCost') target.removeChild(child);
			else break;
			child = target.firstElementChild;
		}

		// Update the totals.
		var totalCostElement = document.getElementById("totalCost");

		// If the total DOM element doesn't exist, create it as a blank
		if (totalCostElement == null) {
			var element = document.createElement("div");
			element.innerHTML = 'Total Costs';
			element.id        = "totalCost";

			var req = document.createElement("div");
			req.setAttribute("class", "rHeader");
			req.innerHTML = "Skill Requirements";
			element.appendChild(req);

			req = document.createElement("div");
			req.setAttribute("class", "rHeader");
			req.id        = "totalSkillReqs";
			req.innerHTML = "";
			element.appendChild(req);

			req = document.createElement("div");
			req.setAttribute("class", "rHeader");
			req.innerHTML = "Material Costs";
			element.appendChild(req);

			req = document.createElement("div");
			req.setAttribute("class", "rHeader");
			req.id        = "totalMatCosts";
			req.innerHTML = "";
			element.appendChild(req)
			target.appendChild(element);
		}

		updateBuildingTotalCostTable(totalCostElement, 'total', bldCosts['total']);

		for (id in bldCosts)
			if (id != 'total') addBuildingCostTable(target, id, bldCosts[id]);
		// Add the totals
	}

	function addBuildingCostTable(target, id, data) {
		var totalCostElement = document.getElementById("totalCost")
		var element = document.createElement("button");

		element.setAttribute("class", (id == 'total' ? "collapsible" : "collapsible"));

		if (id == 'total') {
			element.id = 'totalCost';
			element.style.maxHeight = mh;
		}

		element.innerHTML = (id == 'total' ? "Totals" : data.count + " x " + data.name);

		element.addEventListener("click", function() {
			this.classList.toggle("active");

			var content = this.nextElementSibling;

			if (content.style.maxHeight) {
				content.style.maxHeight = null;
			} else {
				content.style.maxHeight = content.scrollHeight + "px";
			}
		});

		target.insertBefore(element, totalCostElement);

		element = document.createElement("div");
		element.setAttribute("class", "content");
		if (data.requires) {
			var req = document.createElement("div");
			req.setAttribute("class", "rHeader");
			req.innerHTML = "Skill Requirements";
			element.appendChild(req);

			for (i in data.requires) {
				req = document.createElement("div");
				req.innerHTML = i + " " + data.requires[i];
				element.appendChild(req);
			}
		}

		if (data.costs) {
			var req = document.createElement("div");
			req.innerHTML = "Material Costs";
			req.setAttribute("class", "rHeader");
			element.appendChild(req);

			for (i in data.costs) {
				req = document.createElement("div");
				req.innerHTML = i + " " + data.costs[i];
				element.appendChild(req);
			}
		}

		target.insertBefore(element, totalCostElement);
	}

	function updateBuildingTotalCostTable(target, id, data) {
		var matCosts = document.getElementById("totalMatCosts");
		var skillReqs = document.getElementById("totalSkillReqs");

		matCosts.innerHTML  = "";
		skillReqs.innerHTML = "";

		if (data.requires) {
			for (i in data.requires) {
				req = document.createElement("div");
				req.innerHTML = i + " " + data.requires[i];
				skillReqs.appendChild(req);
			}
		}
		if (data.costs) {
			for (i in data.costs) {
				req = document.createElement("div");
				req.innerHTML = i + " " + data.costs[i];
				matCosts.appendChild(req);
			}
		}
	}

	function encodeData(data) {
		// Make a hard copy of the compound data. We're going to strip some of the extra data out first.
		let exportData = JSON.parse(JSON.stringify(compoundData));

		// Go through sectors and remove any that are 'expansion' sectors.
		for (x in exportData.sectors) {
			for (y in exportData.sectors[x]) {
				x = parseInt(x)
				y = parseInt(y)
				if (exportData.sectors[x][y] && exportData.sectors[x][y].floor == "None") exportData.sectors[x][y] = null;
			}
		}

		// Delete extra data that we don't need to export.
		if (exportData.sectors) {
			for (x in exportData.sectors) {
				for (y in exportData.sectors[x]) {
					if (exportData.sectors[x][y] == null) delete exportData.sectors[x][y];
					else {
						if (exportData.sectors[x][y].north == 'None') delete exportData.sectors[x][y].north;
						if (exportData.sectors[x][y].south == 'None') delete exportData.sectors[x][y].south;
						if (exportData.sectors[x][y].east == 'None') delete exportData.sectors[x][y].east;
						if (exportData.sectors[x][y].west == 'None') delete exportData.sectors[x][y].west;
					}
				}

				if (isEmpty(exportData.sectors[x])) delete exportData.sectors[x];
			}
		}

		// We're going to build an ArrayBuffer. Need to know the size first.
		var sectorCount   = 0;
		var buildingCount = 0;
		for (x in exportData.sectors) {
			for (y in exportData.sectors[x]) {
				if (exportData.sectors[x][y].floor) {
					sectorCount++;
				}
			}
		}

		if (exportData.buildings) {
			for (bId in exportData.buildings) {
				buildingCount++;
			}
		}

		// Make sure the sector/buildings boundary is aligned 
		let sectorSize = ((6 * sectorCount) % 4 != 0 ? (6 * sectorCount) + 2 : (6 * sectorCount));
		let arraySize = (3 * 4) + sectorSize + (4 * buildingCount);
		var exportBuffer = new ArrayBuffer(arraySize)
		var exportWindow = new Uint8Array(exportBuffer);
		let header = new Uint32Array(exportBuffer, 0, 3);
		var sectors = new Uint8Array(exportBuffer, 12, sectorSize);
		var buildings = new Uint32Array(exportBuffer, 12 + sectorSize, buildingCount);
		let headerData = packCompoundData(sectorCount, buildingCount);
		header[0] = headerData.a;
		header[1] = headerData.b;
		header[2] = headerData.c;

		// Sectors
		var currentSector = 0
		for (x in exportData.sectors) {
			for (y in exportData.sectors[x]) {
				let sectorData = packSector(exportData.sectors, x, y);
				sectors[currentSector] = sectorData.a;
				sectors[currentSector + 1] = sectorData.b;
				sectors[currentSector + 2] = sectorData.c;
				sectors[currentSector + 3] = sectorData.d;
				sectors[currentSector + 4] = sectorData.e;
				sectors[currentSector + 5] = sectorData.f;
				currentSector += 6;
			}
		}

		// Buildings
		for (bld in exportData.buildings) {
			buildings[bld] = packBuilding(exportData.buildings[bld]);
		}

		if (exportData.buildings) {
			for (bId in exportData.buildings) {
				var packed = packBuilding(exportData.buildings[bId]);
				exportData.buildings[bId].id = getIdByValue(buildingData, exportData.buildings[bId].id);
			}
		}

		var d = arrayToBase64String(exportWindow);
		d.replace("+", "-");
		d.replace("/", "_");

		return d;
	}

	function decodeData(data) {
		var compound = {}
		compound.buildings = new Array;
		compound.sectors = {};

		var d = data.toString();
		//var d = data;
		d.replace("-", "+");
		d.replace("_", "/");
		d = base64StringToArray(d);
		let header = new Uint32Array(d.buffer, 0, 3);
		compound.type = (header[0] & parseInt(`00000000000000000000000011110000`, 2)) >>> 4
		compound.x = (header[1] & parseInt(`01111111111111110000000000000000`, 15)) >>> 16 * ((header[1] & parseInt(`10000000000000000000000000000000`, 1) >>> 31) ? -1 : 1);
		compound.y = (header[1] & parseInt(`00000000000000000111111111111111`, 15)) * ((header[1] & parseInt(`00000000000000001000000000000000`, 1) >>> 15) ? -1 : 1);
		let numSectors = getValue(header[2], 8, 0, 32);
		let numBuildings = getValue(header[2], 16, 16, 32);
		let sectorSize = ((6 * numSectors) % 4 != 0 ? (6 * numSectors) + 2 : (6 * numSectors));
		var sectors = new Uint8Array(d.buffer, 12, sectorSize);
		for (let i = 0; i < numSectors; i++) {
			unpackSector(compound, sectors[(i * 6)], sectors[(i * 6) + 1], sectors[(i * 6) + 2], sectors[(i * 6) + 3], sectors[(i * 6) + 4], sectors[(i * 6) + 5]);
		}
		if (numBuildings > 0) {
			var buildings = new Uint32Array(d.buffer, 12 + sectorSize, numBuildings);
			for (let i = 0; i < numBuildings; i++) {
				compound.buildings[i] = unpackBuilding(buildings[i]);
			}
		}
		return compound;
	}

	function isEmpty(obj) {
		for (var key in obj) {
			if (obj.hasOwnProperty(key)) return false;
		}

		return true;
	}

	function createIntegerMask(id, bitResolution) {
		let bitsString = id.toString(2);
		if (bitsString.length > bitResolution) {
			throw Error(`value id must be between 0 and ${Math.pow(2, bitResolution) - 1}`);
		}

		// Ensure `bitResolution` bit string
		let missingValues = "";
		for (let i = 0; i < (bitResolution - bitsString.length); i++) {
			missingValues = missingValues + "0";
		}

		// Pad the bitString with 0s
		return missingValues + bitsString;
	}

	function unpackSector(compound, a, b, c, d, e, f) {
		var sector = {};
		var unpackedX = getValue(a, 7, 1, 8) * (getValue(a, 1, 0, 8) ? -1 : 1)
		var unpackedY = getValue(b, 7, 1, 8) * (getValue(b, 1, 0, 8) ? -1 : 1)
		var compoundType = compoundTypes[compound.type];
		sector.floor = compoundType.floorTypes[getValue(c, 4, 0, 8)].id;
		sector.ceiling = compoundType.ceilingTypes[getValue(c, 3, 4, 8)].id;
		sector.built = getValue(c, 1, 7, 8);
		sector.north = compoundType.wallTypes[getValue(d, 4, 0, 8)].id;
		sector.south = compoundType.wallTypes[getValue(d, 4, 4, 8)].id;
		sector.east = compoundType.wallTypes[getValue(e, 4, 0, 8)].id;
		sector.west = compoundType.wallTypes[getValue(e, 4, 4, 8)].id;

		if (!compound.sectors) {
			compound.sectors = {};
		}

		if (!compound.sectors[parseInt(unpackedX)]) compound.sectors[parseInt(unpackedX)] = {};

		compound.sectors[parseInt(unpackedX)][parseInt(unpackedY)] = sector;
	}

	function packSector(sectors, x, y) {
		//Bitpack sector into 6 bytes.
		// A [0] X Sign
		// A [1-7] X Value
		// B [0] Y Sign
		// B [1-7] Y Value
		// C [0-3] Floor Type
		// C [4-7] Ceiling Type
		// C [7] Built
		// D [0-3] North
		// D [4-7] South
		// E [0-3] East
		// E [4-7] West
		// F [0-7] Reserved
		var data = {
			a: 0,
			b: 0,
			c: 0,
			d: 0,
			e: 0,
			f: 0
		};

		var sector = sectors[x][y];
		x = parseInt(x);
		y = parseInt(y);
		if (parseInt(x) < 0) data.a = data.a ^ parseInt(`10000000`, 2);
		if (parseInt(y) < 0) data.b = data.b ^ parseInt(`10000000`, 2);
		data.a = data.a ^ parseInt(`0${createIntegerMask(Math.abs(x),7)}`, 2);
		data.b = data.b ^ parseInt(`0${createIntegerMask(Math.abs(y),7)}`, 2);
		let floorType = getIdByValue(compoundTypes[compoundData.type].floorTypes, sector.floor);
		let wallType = {};
		if (sector.north) {
			wallType.north = getIdByValue(compoundTypes[compoundData.type].wallTypes, sector.north);
			data.d = data.d ^ parseInt(`${createIntegerMask(wallType.north,4)}0000`, 2);
		}
		if (sector.south) {
			wallType.south = getIdByValue(compoundTypes[compoundData.type].wallTypes, sector.south);
			data.d = data.d ^ parseInt(`0000${createIntegerMask(wallType.south,4)}`, 2);
		}
		if (sector.east) {
			wallType.east = getIdByValue(compoundTypes[compoundData.type].wallTypes, sector.east);
			data.e = data.e ^ parseInt(`${createIntegerMask(wallType.east,4)}0000`, 2);
		}
		if (sector.west) {
			wallType.west = getIdByValue(compoundTypes[compoundData.type].wallTypes, sector.west);
			data.e = data.e ^ parseInt(`0000${createIntegerMask(wallType.west,4)}`, 2);
		}
		data.c = data.c ^ parseInt(`${createIntegerMask(floorType,4)}0000`, 2);

		return data;
	}

	function packBuilding(building) {
		// Bitpack building into 32 bits.
		// 8 bits for building ID
		// 10 bits for X
		// 10 bits for Y
		// 1 bit for rotated
		// 1 bit reserved
		// 1 bit for built
		// 1 bits reserved
		const buildingIdMask = parseInt(`00000000111111111111111111111111`, 2);
		const XSignMask = parseInt(`11111111011111111111111111111111`, 2);
		const XValueMask = parseInt(`11111111100000000011111111111111`, 2);
		const YSignMask = parseInt(`11111111111111111101111111111111`, 2);
		const YValueMask = parseInt(`11111111111111111110000000001111`, 2);
		const rotatedMask = parseInt(`11111111111111111111111111110111`, 2);
		const res1Mask = parseInt(`11111111111111111111111111111011`, 2);
		const builtMask = parseInt(`11111111111111111111111111111101`, 2);
		const res2Mask = parseInt(`11111111111111111111111111111110`, 2);
		var packed = 0;
		let id = getIdByValue(buildingData, building.id);
		let x = building.x;
		let y = building.y;
		packed = packed & buildingIdMask;
		packed = packed ^ parseInt(`${createIntegerMask(id,8)}000000000000000000000000`, 2);
		packed = packed & XSignMask;
		if (parseInt(x) < 0) packed = packed ^ parseInt(`00000000100000000000000000000000`, 2);
		packed = packed & XValueMask;
		packed = packed ^ parseInt(`000000000${createIntegerMask(Math.abs(x/16),9)}00000000000000`, 2);
		packed = packed & YSignMask;
		if (y < 0) packed = packed ^ parseInt(`00000000000000000010000000000000`, 2);
		packed = packed & YValueMask;
		packed = packed ^ parseInt(`0000000000000000000${createIntegerMask(Math.abs(y/16),9)}0000`, 2);
		if (building.rotated == 1) packed = packed ^ parseInt(`00000000000000000000000000001000`, 2);
		if (building.built == 1) packed = packed ^ parseInt(`00000000000000000000000000000010`, 2);

		return packed;
	}

	function unpackBuilding(packed) {
		var building = {}
		let refData = buildingData[getValue(packed, 8, 0, 32)];
		building.name = refData.name;
		building.id = refData.id;
		building.width = refData.width;
		building.height = refData.height;
		building.colour = refData.colour;
		building.x = getValue(packed, 9, 9, 32) * 16 * (getValue(packed, 1, 8, 32) ? -1 : 1)
		building.y = getValue(packed, 9, 19, 32) * 16 * (getValue(packed, 1, 18, 32) ? -1 : 1)
		building.rotated = getValue(packed, 1, 28, 32);
		building.built = getValue(packed, 1, 30, 32);

		return building;
	}

	function packCompoundData(sectorCount, buildingCount) {
		//TODO: Add actual code behind these
		compoundData.archLevel = 0;
		compoundData.x = 0;
		compoundData.y = 0;

		if (!compoundData.type) compoundData.type = 0;

		// Start of packing function
		var data = {
			a: 0,
			b: 0,
			c: 0
		};

		var orMasks = {
			MagicNo: parseInt(`${createIntegerMask(13,4)}0000000000000000000000000000`, 2),
			Release: parseInt(`0000${createIntegerMask(ver.release,4)}000000000000000000000000`, 2),
			Major: parseInt(`00000000${createIntegerMask(ver.major,4)}00000000000000000000`, 2),
			Minor: parseInt(`000000000000${createIntegerMask(ver.minor,4)}0000000000000000`, 2),
			Integrity: parseInt(`00000000000000001111111100000000`, 2),
			BuildingType: parseInt(`000000000000000000000000${createIntegerMask(compoundData.type,4)}0000`, 2),
			ArchLevel: parseInt(`0000000000000000000000000000${createIntegerMask(compoundData.archLevel,4)}`, 2),
			XSign: parseInt(`${createIntegerMask((compoundData.x < 0 ? 1 : 0),1)}0000000000000000000000000000000`, 2),
			XValue: parseInt(`0${createIntegerMask(compoundData.x,7)}000000000000000000000000`, 2),
			YSign: parseInt(`0000000000000000${createIntegerMask((compoundData.y < 0 ? 1 : 0),1)}000000000000000`, 2),
			YValue: parseInt(`0000000000000000000000000${createIntegerMask(compoundData.x,7)}`, 2),
			NumSectors: parseInt(`${createIntegerMask(sectorCount,8)}000000000000000000000000`, 2),
			Reserved: parseInt(`00000000${createIntegerMask(0,8)}0000000000000000`, 2),
			NumBuildings: parseInt(`0000000000000000${createIntegerMask(buildingCount,16)}`, 2)
		};

		data.a = data.a ^ orMasks.MagicNo;
		data.a = data.a ^ orMasks.Release;
		data.a = data.a ^ orMasks.Major;
		data.a = data.a ^ orMasks.Integrity;
		data.a = data.a ^ orMasks.BuildingType;
		data.a = data.a ^ orMasks.ArchLevel;
		data.b = data.b ^ orMasks.XSign;
		data.b = data.b ^ orMasks.XValue;
		data.b = data.b ^ orMasks.YSign;
		data.b = data.b ^ orMasks.YValue;
		data.c = data.c ^ orMasks.NumSectors;
		data.c = data.c ^ orMasks.NumBuildings;

		return data;
	}

	function countSectors(compound) {
		var count = 0;

		if (compound && compound.sectors) {
			for (x in compound.sectors) {
				for (y in compound.sectors[x]) {
					if (compound.sectors[x][y]) {
						if (compound.sectors[x][y].floor != 'None') {
							count++;
						}
					}
				}
			}
		}

		return count;
	}

	function getMaxCompoundSize(compound) {
		return compoundTypes[compound.type].baseMaxSize;
	}

	function arrayToBase64String(a) {
		return btoa(String.fromCharCode(...a));
	}

	function base64StringToArray(s) {
		let asciiString = atob(s);

		return new Uint8Array([...asciiString].map(char => char.charCodeAt(0)));
	}

	function getValue(d, numBits, position, size) {
		let mask = (Math.pow(2, numBits) - 1) << (size - numBits - position);

		return ((d & mask) >>> (size - numBits - position));
	}

	function centreScreen() {
		var bounds = {
			minX: 0,
			maxX: 0,
			minY: 0,
			maxY: 0
		};

		if (compoundData && compoundData.sectors) {
			for (x in compoundData.sectors) {
				for (y in compoundData.sectors[x]) {
					bounds.minX = Math.min(bounds.minX, parseInt(x));
					bounds.minY = Math.min(bounds.minY, parseInt(y));
					bounds.maxX = Math.max(bounds.maxX, parseInt(x));
					bounds.maxY = Math.max(bounds.maxY, parseInt(y));
				}
			}

			for (x in bounds) bounds[x] = bounds[x] * 16 * 16;

			var ratio = Math.min((stage.size().width * 0.5) / (bounds.maxX - bounds.minX), (stage.size().height * 0.5) / (bounds.maxY - bounds.minY));

			stage.scale({
				x: ratio,
				y: ratio
			});

			let xCentre = ((bounds.maxX - (bounds.maxX - bounds.minX) / 2) * ratio) + (stage.size().width / 2)
			let yCentre = ((bounds.maxY - (bounds.maxY - bounds.minY) / 2) * ratio) + (stage.size().height / 2)

			stage.position({
				x: xCentre,
				y: yCentre
			});
		}
	}

	function changeBuildStatus(event) {
		var checkbox = document.getElementById('cbPlanned');

		compoundData.buildings[menuState.selectedBuilding].built = (checkbox.checked ? 1 : 0);

		updateMenus();
	}