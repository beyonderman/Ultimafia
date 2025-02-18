import { badMathRandomWithStringSeed } from "../utils";

export const swears = [
  "ass",
  "asshole",
  "bastard",
  "bitch",
  "bitches",
  "blockhead",
  "buttlick",
  "buttlicker",
  "buttlicking",
  "cock",
  "crap",
  "cretin",
  "cunt",
  "dick",
  "dickhead",
  "fuck",
  "fucked",
  "fucking",
  "idiot",
  "imbecile",
  "jackass",
  "moron",
  "motherfuck",
  "motherfucked",
  "motherfucker",
  "motherfucking",
  "pussy",
  "scumbag",
  "shit",
  "slut",
  "tit",
  "twat",
  "wanker",
  "whore",
];

// Replacements
const vegetables = [
  "amaranth",
  "anise",
  "arrowhead",
  "asparagus",
  "bean",
  "beet",
  "breadfruit",
  "broccoli",
  "burdock",
  "cabbage",
  "caraway",
  "carrot",
  "cauliflower",
  "celery",
  "chive",
  "corn",
  "cucumber",
  "daikon",
  "dandelion",
  "drumstick",
  "edamame",
  "garlic",
  "gherkin",
  "ginger",
  "gourd",
  "groundnut",
  "horseradish",
  "jalapeño",
  "jícama",
  "kale",
  "kelp",
  "kombu",
  "leek",
  "lemon",
  "lentil",
  "lettuce",
  "lime",
  "luffa",
  "marrow",
  "melon",
  "mushroom",
  "nettle",
  "nori",
  "okra",
  "olive",
  "onion",
  "parsley",
  "parsnip",
  "peanut",
  "pignut",
  "potato",
  "pumpkin",
  "radish",
  "renkon",
  "rhubarb",
  "rockmelon",
  "rosemary",
  "shallot",
  "soybean",
  "spinach",
  "squash",
  "taro",
  "thyme",
  "tomatillo",
  "tomato",
  "turnip",
  "wakame",
  "wasabi",
  "watercress",
  "yam",
];

// We have both "vegetables" and "fruitsAndVegetables" because this is how I initially crawled them...
const fruitsAndVegetables = [
  "apple",
  "apricot",
  "avocado",
  "banana",
  "blackberry",
  "blackcurrant",
  "orange",
  "blueberry",
  "boysenberry",
  "cantaloupe",
  "cherry",
  "clementine",
  "coconut",
  "cranberry",
  "cucumber",
  "currant",
  "custard",
  "apple",
  "date",
  "dragonfruit",
  "durian",
  "elderberry",
  "fig",
  "goji",
  "berry",
  "gooseberry",
  "grape",
  "grapefruit",
  "guava",
  "honeyberry",
  "honeydew",
  "huckleberry",
  "jackfruit",
  "berry",
  "kale",
  "kiwi",
  "lemon",
  "lime",
  "longan",
  "loquat",
  "lychee",
  "mandarine",
  "mango",
  "mangosteen",
  "melon",
  "mulberry",
  "nectarine",
  "olive",
  "orange",
  "papaya",
  "passionfruit",
  "pea",
  "peach",
  "peanut",
  "pear",
  "persimmon",
  "pineapple",
  "plum",
  "pomegranate",
  "pomelo",
  "prune",
  "pumpkin",
  "mangosteen",
  "raisin",
  "rambutan",
  "raspberry",
  "soursop",
  "strawberry",
  "tamarind",
  "tangerine",
  "tomato",
  "turnip",
  "watermelon",
  "yuzu",
];

const swearReplacementArr = Array.from(
  new Set([...vegetables, ...fruitsAndVegetables])
);

export const getSwearReplacement = (seed) =>
  swearReplacementArr[
    Math.floor(badMathRandomWithStringSeed(seed) * swearReplacementArr.length)
  ];
