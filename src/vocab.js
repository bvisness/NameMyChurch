/*
 * All fields are optional.
 *
 * Base word forms:
 * - noun_form: The singular-noun form of the word.
 * - plural_form: The plural-noun form of the word.
 * - verb_form: The verb form of the word.
 * - adjective_form: The adjective form of the word.
 * - suffix_form: To be tacked onto the end of a noun, e.g. "view" for "Brookview"
 * 
 * Possible boolean modifiers:
 * - of: "of <noun>", e.g. "of peace"
 * - of_the: "of the <noun>", e.g. "of the fount"
 * - church_prefix: "<noun> church", e.g. "community church" (note: nouns only)
 * - standalone: on a verb, can be a standalone church name, e.g. "elevate"
 * - has_object: on a verb, can take an object, e.g. "celebrate life"
 * - pluralizing: on an adjective, precedes a plural noun, e.g. "five oaks"
 */
const vocab = [
  {
    noun_form: "alleluia",
    plural_form: "alleluias",
    of_the: true
  },
  {
    noun_form: "alliance",
    plural_form: "alliances",
    of_the: true,
    church_prefix: true
  },
  {
    verb_form: "arise",
    adjective_form: "risen",
    standalone: true
  },
  {
    noun_form: "awakening",
    plural_form: "awakenings",
    verb_form: "awaken",
    of: true,
    standalone: true,
    has_object: true
  },
  {
    noun_form: "awe",
    plural_form: "awes",
    adjective_form: "awesome",
    of: true
  },
  {
    noun_form: "bethel",
    plural_form: "bethels",
    of: true
  },
  {
    noun_form: "bethlehem",
    plural_form: "bethlehems",
    of: true
  },
  {
    noun_form: "bible",
    plural_form: "bibles",
    of_the: true,
    church_prefix: true
  },
  {
    noun_form: "blessing",
    plural_form: "blessings",
    verb_form: "bless",
    adjective_form: "blessed",
    of: true,
    of_the: true,
    standalone: true,
    has_object: true
  },
  {
    noun_form: "branch",
    plural_form: "branches",
    of_the: true
  },
  {
    noun_form: "bridge",
    plural_form: "bridges",
    of_the: true
  },
  {
    suffix_form: "bridge"
  },
  {
    noun_form: "brook",
    plural_form: "brooks",
    of_the: true
  },
  {
    noun_form: "calvary",
    plural_form: "calvaries",
    of: true
  },
  {
    noun_form: "catalyst",
    plural_form: "catalysts"
  },
  {
    noun_form: "cedar",
    plural_form: "cedars",
    of_the: true
  },
  {
    noun_form: "celebration",
    plural_form: "celebrations",
    verb_form: "celebrate",
    of: true,
    of_the: true,
    standalone: true,
    has_object: true
  },
  {
    adjective_form: "center"
  },
  {
    noun_form: "christ",
    plural_form: "christs",
    of: true
  },
  {
    adjective_form: "christian"
  },
  {
    noun_form: "city",
    plural_form: "cities",
    of_the: true
  },
  {
    noun_form: "collective",
    plural_form: "collectives",
    of_the: true
  },
  {
    noun_form: "community",
    plural_form: "communities",
    of: true,
    church_prefix: true
  },
  {
    noun_form: "connection",
    plural_form: "connections",
    verb_form: "connect",
    adjective_form: "connected",
    of: true,
    standalone: true
  },
  {
    noun_form: "cornerstone",
    plural_form: "cornerstones",
    of_the: true
  },
  {
    noun_form: "cove",
    plural_form: "coves"
  },
  {
    noun_form: "covenant",
    plural_form: "covenants",
    adjective_form: "covenant",
    of_the: true
  },
  {
    noun_form: "creek",
    plural_form: "creeks",
    of_the: true
  },
  {
    noun_form: "cross",
    plural_form: "crosses",
    of_the: true
  },
  {
    noun_form: "crossroads",
    plural_form: "crossroads",
    of: true,
    of_the: true
  },
  {
    noun_form: "day",
    plural_form: "days",
    of_the: true
  },
  {
    verb_form: "deepen",
    adjective_form: "deep",
    standalone: true,
    has_object: true
  },
  {
    noun_form: "deliverer",
    plural_form: "deliverers",
    verb_form: "deliver",
    adjective_form: "delivered",
    of_the: true,
    standalone: true,
    has_object: true
  },
  {
    noun_form: "discovery",
    plural_form: "discoveries",
    verb_form: "discover",
    adjective_form: "discovered",
    of: true,
    standalone: true
  },
  {
    verb_form: "dwell",
    standalone: true
  },
  {
    noun_form: "eagle",
    plural_form: "eagles",
    of_the: true
  },
  {
    adjective_form: "east"
  },
  {
    noun_form: "ebenezer",
    plural_form: "ebenezers",
    of_the: true
  },
  {
    noun_form: "echo",
    plural_form: "echoes",
    of_the: true
  },
  {
    noun_form: "edge",
    plural_form: "edges",
    of_the: true
  },
  {
    noun_form: "elevation",
    plural_form: "elevations",
    verb_form: "elevate",
    of_the: true,
    standalone: true,
    has_object: true
  },
  {
    noun_form: "embrace",
    plural_form: "embraces",
    verb_form: "embrace",
    of_the: true,
    standalone: true,
    has_object: true
  },
  {
    noun_form: "encounter",
    plural_form: "encounters",
    verb_form: "encounter",
    of_the: true,
    standalone: true,
    has_object: true
  },
  {
    verb_form: "engage",
    standalone: true
  },
  {
    noun_form: "eternity",
    plural_form: "eternities",
    adjective_form: "eternal",
    of: true
  },
  {
    verb_form: "exalt",
    adjective_form: "exalted",
    standalone: true,
    has_object: true
  },
  {
    noun_form: "experience",
    plural_form: "experiences",
    verb_form: "experience",
    standalone: true,
    has_object: true
  },
  {
    noun_form: "faith",
    plural_form: "faiths",
    adjective_form: "faithful",
    of: true
  },
  {
    noun_form: "family",
    plural_form: "families",
    of: true
  },
  {
    noun_form: "fellowship",
    plural_form: "fellowships",
    of: true,
    of_the: true
  },
  {
    adjective_form: "first"
  },
  {
    adjective_form: "five",
    pluralizing: true
  },
  {
    noun_form: "flame",
    plural_form: "flames",
    adjective_form: "aflame",
    of_the: true
  },
  {
    noun_form: "flood",
    plural_form: "floods",
    of_the: true
  },
  {
    noun_form: "fount",
    plural_form: "founts",
    of_the: true
  },
  {
    adjective_form: "fourth"
  },
  {
    noun_form: "freedom",
    plural_form: "freedoms",
    adjective_form: "free",
    of: true
  },
  {
    noun_form: "gateway",
    plural_form: "gateways",
    of_the: true
  },
  {
    noun_form: "glory",
    plural_form: "glories",
    adjective_form: "glorious",
    of: true
  },
  {
    noun_form: "god",
    plural_form: "gods",
    of: true
  },
  {
    noun_form: "gospel",
    plural_form: "gospels",
    adjective_form: "gospel",
    of_the: true,
    church_prefix: true
  },
  {
    noun_form: "grace",
    plural_form: "graces",
    adjective_form: "gracious",
    of: true
  },
  {
    noun_form: "grove",
    plural_form: "groves",
    of_the: true
  },
  {
    noun_form: "harbor",
    plural_form: "harbors",
    of_the: true
  },
  {
    noun_form: "harvest",
    plural_form: "harvests",
    verb_form: "harvest",
    adjective_form: "harvested",
    of_the: true,
    church_prefix: true,
    standalone: true,
    has_object: true
  },
  {
    noun_form: "haven",
    plural_form: "havens",
    of_the: true,
    church_prefix: true
  },
  {
    noun_form: "hill",
    plural_form: "hills",
    of_the: true
  },
  {
    adjective_form: "holy"
  },
  {
    noun_form: "hope",
    plural_form: "hopes",
    of: true
  },
  {
    noun_form: "hosanna",
    plural_form: "hosannas"
  },
  {
    verb_form: "ignite",
    standalone: true,
    has_object: true
  },
  {
    noun_form: "immanuel",
    plural_form: "immanuels",
    of_the: true
  },
  {
    verb_form: "intersect",
    standalone: true
  },
  {
    noun_form: "jesus",
    plural_form: "jesuses",
    adjective_form: "jesus",
    of: true,
    church_prefix: true
  },
  {
    noun_form: "journey",
    plural_form: "journeys",
    of_the: true
  },
  {
    noun_form: "joy",
    plural_form: "joys",
    adjective_form: "joyful",
    of: true
  },
  {
    noun_form: "King of Kings",
    plural_form: "Kings of Kings",
    of_the: true
  },
  {
    noun_form: "kingdom",
    plural_form: "kingdoms",
    of_the: true,
    church_prefix: true
  },
  {
    noun_form: "legacy",
    plural_form: "legacies",
    of_the: true
  },
  {
    noun_form: "liberty",
    plural_form: "liberties",
    of: true
  },
  {
    noun_form: "life",
    plural_form: "lives",
    adjective_form: "living",
    of: true
  },
  {
    noun_form: "lighthouse",
    plural_form: "lighthouses",
    of_the: true
  },
  {
    noun_form: "lord",
    plural_form: "lords",
    of_the: true
  },
  {
    noun_form: "love",
    plural_form: "loves",
    verb_form: "love",
    adjective_form: "loving",
    of: true,
    standalone: true,
    has_object: true
  },
  {
    noun_form: "maple",
    plural_form: "maples",
    of_the: true
  },
  {
    noun_form: "mercy",
    plural_form: "mercies",
    adjective_form: "merciful",
    of: true
  },
  {
    noun_form: "merge",
    plural_form: "merges",
    verb_form: "merge",
    of_the: true,
    standalone: true
  },
  {
    noun_form: "mission",
    plural_form: "missions",
    of_the: true,
    church_prefix: true
  },
  {
    noun_form: "mosaic",
    plural_form: "mosaics"
  },
  {
    noun_form: "mount",
    plural_form: "mounts",
    of_the: true
  },
  {
    noun_form: "mountain",
    plural_form: "mountains",
    of_the: true
  },
  {
    adjective_form: "new"
  },
  {
    adjective_form: "north"
  },
  {
    noun_form: "oak",
    plural_form: "oaks",
    of_the: true
  },
  {
    noun_form: "oasis",
    plural_form: "oases",
    of_the: true
  },
  {
    noun_form: "olive",
    plural_form: "olives",
    of_the: true
  },
  {
    noun_form: "peace",
    plural_form: "peaces",
    adjective_form: "peaceful",
    of: true
  },
  {
    adjective_form: "people's"
  },
  {
    noun_form: "pine",
    plural_form: "pines",
    of_the: true
  },
  {
    noun_form: "point",
    plural_form: "points",
    of_the: true
  },
  {
    suffix_form: "point"
  },
  {
    noun_form: "Prince of Peace",
    plural_form: "Princes of Peace",
    of_the: true
  },
  {
    noun_form: "redeemer",
    plural_form: "redeemers",
    verb_form: "redeem",
    adjective_form: "redeeming",
    of_the: true,
    standalone: true,
    has_object: true
  },
  {
    noun_form: "refuge",
    plural_form: "refuges",
    of: true,
    of_the: true,
    church_prefix: true
  },
  {
    adjective_form: "relentless"
  },
  {
    noun_form: "resolution",
    plural_form: "resolutions",
    of: true
  },
  {
    verb_form: "resonate",
    standalone: true
  },
  {
    noun_form: "restoration",
    plural_form: "restorations",
    verb_form: "restore",
    adjective_form: "restored",
    of: true,
    of_the: true,
    church_prefix: true,
    standalone: true,
    has_object: true
  },
  {
    noun_form: "resurrection",
    plural_form: "resurrections",
    verb_form: "resurrect",
    of: true,
    of_the: true,
    standalone: true,
    has_object: true
  },
  {
    noun_form: "revival",
    plural_form: "revivals",
    verb_form: "revive",
    of: true,
    of_the: true,
    standalone: true,
    has_object: true
  },
  {
    noun_form: "revolution",
    plural_form: "revolutions",
    of_the: true
  },
  {
    noun_form: "ridge",
    plural_form: "ridges",
    of_the: true
  },
  {
    noun_form: "river",
    plural_form: "rivers",
    of_the: true
  },
  {
    noun_form: "road",
    plural_form: "roads",
    of_the: true
  },
  {
    noun_form: "rock",
    plural_form: "rocks",
    of_the: true
  },
  {
    noun_form: "sanctuary",
    plural_form: "sanctuaries",
    of: true
  },
  {
    adjective_form: "second"
  },
  {
    noun_form: "shepherd",
    plural_form: "shepherds",
    of_the: true
  },
  {
    adjective_form: "solid"
  },
  {
    noun_form: "song",
    plural_form: "songs",
    of: true
  },
  {
    adjective_form: "south"
  },
  {
    noun_form: "spirit",
    plural_form: "spirits",
    of_the: true
  },
  {
    noun_form: "spring",
    plural_form: "springs",
    of_the: true
  },
  {
    suffix_form: "spring"
  },
  {
    verb_form: "submerge",
    standalone: true
  },
  {
    adjective_form: "third"
  },
  {
    adjective_form: "three",
    pluralizing: true
  },
  {
    noun_form: "tree",
    plural_form: "trees",
    of_the: true
  },
  {
    noun_form: "trinity",
    plural_form: "trinities",
    of_the: true
  },
  {
    noun_form: "triumph",
    plural_form: "triumphs",
    verb_form: "triumph",
    adjective_form: "triumphant",
    of: true,
    standalone: true
  },
  {
    adjective_form: "two",
    pluralizing: true
  },
  {
    noun_form: "valley",
    plural_form: "valleys",
    of_the: true
  },
  {
    noun_form: "velocity",
    plural_form: "velocities",
    of: true
  },
  {
    noun_form: "victory",
    plural_form: "victories",
    adjective_form: "victorious",
    of: true
  },
  {
    suffix_form: "view"
  },
  {
    noun_form: "village",
    plural_form: "villages",
    adjective_form: "village",
    of_the: true,
    church_prefix: true
  },
  {
    noun_form: "vineyard",
    plural_form: "vineyards",
    of_the: true,
    church_prefix: true
  },
  {
    noun_form: "vision",
    plural_form: "visions",
    of: true,
    of_the: true
  },
  {
    noun_form: "water",
    plural_form: "waters",
    of: true,
    of_the: true
  },
  {
    suffix_form: "way"
  },
  {
    noun_form: "well",
    plural_form: "wells",
    of_the: true
  },
  {
    adjective_form: "west"
  },
  {
    noun_form: "willow",
    plural_form: "willows",
    of_the: true
  },
  {
    suffix_form: "wood"
  },
  {
    noun_form: "word",
    plural_form: "words",
    of_the: true
  },
  {
    noun_form: "zion",
    plural_form: "zions",
    of: true
  }
];
