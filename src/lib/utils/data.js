const shadows = [
	{
		source:
			'https://www.nytimes.com/interactive/2020/04/11/business/economy/coronavirus-us-economy-spending.html ',
		shadow:
			'#000000 2px 0px 0px, #000000 1.75517px 0.958851px 0px, #000000 1.0806px 1.68294px 0px, #000000 0.141474px 1.99499px 0px, #000000 -0.832294px 1.81859px 0px, #000000 -1.60229px 1.19694px 0px, #000000 -1.97998px 0.28224px 0px, #000000 -1.87291px -0.701566px 0px, #000000 -1.30729px -1.5136px 0px, #000000 -0.421592px -1.95506px 0px, #000000 0.567324px -1.91785px 0px, #000000 1.41734px -1.41108px 0px, #000000 1.92034px -0.558831px 0px;',
		id: 0
	},
	{
		source:
			'https://www.nytimes.com/interactive/2021/09/15/nyregion/empire-state-building-reopening-new-york.html ',
		shadow:
			'1px 1px 1px rgb(0 0 0 / 90%), 1px -1px 1px rgb(0 0 0 / 90%), -1px 1px 1px rgb(0 0 0 / 90%), -1px -1px 1px rgb(0 0 0 / 90%);',
		id: 1
	}
	{
		source: 'https://www.nytimes.com/interactive/2021/12/11/us/tornado-maps-damage.html ',
		shadow: '0px 0px 3px #000000, 0px 0px 3px #000000, 0px 0px 3px #000000;',
		id: 2
	},
	{
		source: 'https://meet.google.com/ ',
		shadow: '0 1px 2px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 30%);',
		id: 3
	},
	{
		shadow: '0px 0px 1px #000000, 0px 0px 2px #000000, 0px 0px 3px #000000, 0px 0px 4px #000000;',
		source: 'https://www.nytimes.com/interactive/2022/world/europe/ukraine-maps.html',
		id: 4
	},
	{
		source: 'https://www.bloomberg.com/graphics/2021-palm-oil-deforestation-climate-change/ ',
		shadow: '0 0 2px #000000, 0 0 2px rgb(0 0 0 / 80%), 0 0 2px rgb(0 0 0 / 50%);',
		id: 5
	},
	{
		source: 'https://www.bloomberg.com/graphics/2021-palm-oil-deforestation-climate-change/ ',
		shadow:
			'#000000 1px 0px 0px, #000000 0.540302px 0.841471px 0px, #000000 -0.416147px 0.909297px 0px, #000000 -0.989992px 0.14112px 0px, #000000 -0.653644px -0.756802px 0px, #000000 0.283662px -0.958924px 0px, #000000 0.96017px -0.279415px 0px;',
		id: 6
	},
	{
		source: 'https://projects.propublica.org/toxmap/ ',
		shadow: '0 0 10px #000000, 0 0 10px #000000;',
		id: 7
	},
	{
		source:
			'https://elpais.com/clima-y-medio-ambiente/2021-01-26/asi-es-belchatow-la-enorme-central-polaca-de-carbon-que-mas-co-emite-en-la-ue.html?target=_blank',
		shadow: '-1px 0 #000000, 0 1px #000000, 1px 0 #000000, 0 -1px #000000;',
		id: 8
	},
	{
		source:
			'https://www.nytimes.com/interactive/2020/09/24/climate/fires-worst-year-california-oregon-washington.html ',
		shadow: '#000000 0px 0px 3px, #000000 0px 0px 3px;',
		id: 9
	},
	{
		source:
			'https://www.nytimes.com/interactive/2020/07/18/world/asia/china-india-border-conflict.html ',
		shadow: '0 0 10px rgb(0 0 0 / 50%), 0 0 3px #000000;',
		id: 10
	},
	{
		source: 'https://www.nytimes.com/interactive/2019/07/19/us/california-earthquakes.html ',
		shadow:
			'1px 1px 0px rgb(0 0 0 / 70%), 0px 1px 0px rgb(0 0 0 / 70%), -1px 1px 0px rgb(0 0 0 / 70%), -1px 0px 0px rgb(0 0 0 / 70%), -1px -1px 0px rgb(0 0 0 / 70%), 0px -1px 0px rgb(0 0 0 / 70%), 1px -1px 0px rgb(0 0 0 / 70%);',
		id: 11
	},
	{
		source: 'https://www.nytimes.com/interactive/2019/09/11/us/midwest-flooding.html ',
		shadow: '0 0 4px rgb(0 0 0 / 70%);',
		id: 12
	},
	{
		source:
			'https://www.nytimes.com/interactive/2019/02/09/world/americas/brazil-dam-collapse.html ',
		shadow: '1px 1px 3px #000000;',
		id: 13
	},
	{
		source:
			'https://www.nytimes.com/interactive/2020/08/04/world/middleeast/beirut-explosion-damage.html ',
		shadow:
			'rgb(0 0 0 / 30%) 0.5px 0px 0px, rgb(0 0 0 / 30%) 0.540302px 0.841471px 0px, rgb(0 0 0 / 30%) -0.416147px 0.909297px 0px, rgb(0 0 0 / 30%) -0.989992px 0.14112px 0px, rgb(0 0 0 / 30%) -0.653644px -0.756802px 0px, rgb(0 0 0 / 30%) 0.283662px -0.958924px 0px, rgb(0 0 0 / 30%) 0.96017px -0.279415px 0px;',
		id: 14
	},
	{
		source: 'https://www.nytimes.com/interactive/2020/10/03/us/rose-garden-event-covid.html ',
		shadow:
			'1px 1px 3px rgb(0 0 0 / 30%), -1px 1px 3px rgb(0 0 0 / 30%), 1px -1px 3px rgb(0 0 0 / 30%), -1px -1px 3px rgb(0 0 0 / 30%);',
		id: 15
	},
	{
		source: 'https://graphics.reuters.com/AFGHANISTAN-CONFLICT/KABUL-AIRPORT/movannkgkpa/ ',
		shadow:
			'1px 1px 1px rgb(0 0 0 / 70%), -1px -1px 1px rgb(0 0 0 / 70%), 1px -1px 1px rgb(0 0 0 / 70%), -1px 1px 1px rgb(0 0 0 / 70%);',
		id: 16
	},
	{
		source: 'https://www.washingtonpost.com/nation/interactive/2021/weather-disasters-2021 ',
		shadow: '-2px 2px 6px #000000, 0 0 2px #000000, 2px 2px 6px #000000;',
		id: 17
	},
	{
		source:
			'https://www.nytimes.com/interactive/2020/06/03/us/minneapolis-police-use-of-force.html ',
		shadow:
			'1px 1px 1px rgb(0 0 0 / 30%), -1px 1px 1px rgb(0 0 0 / 30%), 1px -1px 1px rgb(0 0 0 / 30%), -1px -1px 1px rgb(0 0 0 / 30%), 2px 2px 2px rgb(0 0 0 / 30%), -2px 2px 2px rgb(0 0 0 / 30%), 2px -2px 2px rgb(0 0 0 / 30%), -2px -2px 2px rgb(0 0 0 / 30%);',
		id: 18
	},
	{
		source:
			'https://www.nytimes.com/interactive/2020/02/01/us/politics/democratic-presidential-campaign-donors.html ',
		shadow: '0px 0px 3px #000000, 0px 0px 5px #000000, 0px 0px 10px #000000;',
		id: 19
	},
	{
		source:
			'https://www.nytimes.com/interactive/2019/06/18/upshot/cities-across-america-question-single-family-zoning.html ',
		shadow: '0 1px 0 #000000, 1px 0 0 #000000, 0 -1px 0 #000000, -1px 0 0 #000000 !important;',
		id: 20
	},
	{
		source:
			'https://www.nytimes.com/interactive/2019/03/11/world/boeing-737-max-which-airlines.html ',
		shadow: '0px 0px 5px #000000, 0px 0px 5px #000000;',
		id: 21
	},
	{
		source: 'https://www.nytimes.com/interactive/2020/09/21/us/covid-schools.html ',
		shadow: '1px -1px 0 #000000, 1px -1px 0 #000000, -1px 1px 0 #000000, 1px 1px 0 #000000;',
		id: 22
	},
	{
		source: 'https://www.nytimes.com/2022/02/07/us/tsunami-northwest-evacuation-towers.html',
		shadow: '0px 0px 2px #000000;',
		id: 23
	},
	{
		source: 'https://www.washingtonpost.com/graphics/2017/national/harvey/ ',
		shadow:
			'1px 1px 0px rgb(0 0 0 / 70%), -1px -1px 0px rgb(0 0 0 / 70%), -1px 1px 0px rgb(0 0 0 / 70%), 1px -1px 0px rgb(0 0 0 / 70%);',
		id: 24
	},
	{
		shadow: '1px 1px 2px rgb(0 0 0 / 50%);',
		source: 'https://graphics.reuters.com/CHINA-CRASH/akpezjzxlvr/index.html',
		id: 25
	}
];

// remove duplicates
export default [...new Map(shadows.map((s) => [s.shadow, s])).values()];

export const cheeses = [
	'Queso cheeseburger boursin gouda cheesy grin bocconcini bavarian bergkase bavarian bergkase',
	'Goat paneer cheese triangles cheese on toast rubber cheese halloumi caerphilly cheeseburger',
	'Emmental taleggio blue castello port-salut cheese strings cheesy feet dolcelatte say cheese',
	'Swiss lancashire cut the cheese stinking bishop melted cheese lancashire swiss cheeseburger',
	'Bocconcini cheesecake red leicester bocconcini gouda croque monsieur dolcelatte pepper jack',
	'Airedale swiss lancashire fondue macaroni cheese bavarian bergkase lancashire cheese slices',
	'Agur blue cheese rubber cheese the big cheese edam mozzarella airedale cheese strings queso',
	'Fondue taleggio the big cheese paneer cheese strings port-salut danish fontina cream cheese',
	'Cheese triangles emmental gouda monterey jack the big cheese smelly cheese stilton emmental',
	'Cottage cheese danish fontina cheesecake cow cow chalk and cheese cheesy feet red leicester',
	'Camembert de normandie halloumi the big cheese boursin edam say cheese cheeseburger ricotta',
	'Dolcelatte boursin cheesy feet manchego stinking bishop brie chalk and cheese red leicester',
	'Feta pepper jack everyone loves cheeseburger ricotta cream cheese cheesy grin monterey jack',
	"Gouda halloumi fromage stilton when the cheese comes out everybody's happy rubber cheese st",
	'Airedale rubber cheese squirty cheese cheese and biscuits edam cottage cheese goat parmesan',
	'Camembert de normandie croque monsieur taleggio mascarpone taleggio swiss cheddar roquefort',
	'Gouda croque monsieur caerphilly cheese on toast goat manchego cheese triangles pepper jack',
	'Taleggio cut the cheese cheese slices the big cheese rubber cheese mascarpone fromage frais',
	'Chalk and cheese brie blue castello cream cheese cream cheese pecorino croque monsieur feta',
	'Ricotta cauliflower cheese paneer feta babybel monterey jack danish fontina macaroni cheese',
	'Pecorino manchego cheeseburger edam bavarian bergkase cheesecake stinking bishop mozzarella',
	'Cut the cheese who moved my cheese cow jarlsberg dolcelatte ricotta cheesy grin cheesy grin',
	'Port-salut cheeseburger ricotta say cheese blue castello pepper jack parmesan smelly cheese',
	'Parmesan cheesecake swiss smelly cheese hard cheese smelly cheese squirty cheese mascarpone',
	'Cheesy feet danish fontina chalk and cheese pecorino swiss fromage cheese slices say cheese',
	'Agur blue cheese bavarian bergkase everyone loves croque monsieur cheese slices cheesy grin',
	'Cheese and wine halloumi cheesy grin ricotta cheesecake cheesecake mozzarella fromage frais',
	'Cheese on toast who moved my cheese airedale dolcelatte parmesan say cheese mozzarella goat',
	'Cheddar taleggio chalk and cheese fromage feta chalk and cheese cheese and biscuits stilton'
];
