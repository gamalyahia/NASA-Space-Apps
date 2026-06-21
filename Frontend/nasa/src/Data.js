import watershortage from './assets/proplems/watershortage.jpg'
import watershortage1 from './assets/proplems/watershortage1.jpg'
import watershortage2 from './assets/Vidoes/watershortage.mp4'

import CoastalErosion from './assets/proplems/CoastalErosion.jpg'
import CoastalErosion1 from './assets/proplems/CoastalErosion1.jpg'
import CoastalErosion2 from './assets/Vidoes/CoastalErosion.mp4'

import Pollution from './assets/proplems/Pollution.jpg'
import Pollution1 from './assets/proplems/Pollution1.jpg'
import Pollution2 from './assets/Vidoes/Pollution.mp4'

import PopulationDensity from './assets/proplems/PopulationDensity.jpg'
import PopulationDensity1 from './assets/proplems/PopulationDensity1.jpg'
import PopulationDensity2 from './assets/Vidoes/PopulationDensity2.mp4'


export const useGetProblemsData = () => (
    [
        {
            title: "Water shortage",
            Issue: "Egypt is classified as one of the most water-scarce countries, with per capita water availability dropping to around 570 cubic meters per year, well below the international threshold of 1,000 cubic meters.",
            images: [watershortage, watershortage1],
            vidoe: watershortage2,
            solution: "Solutions for Water Shortages Improved Irrigation Practices: Implementing modern irrigation techniques, such as drip irrigation, to optimize water usage in agriculture, which consumes about 85% of Egypt's water resources.",

        },
        {
            title: "Coastal Erosion",
            Issue: "The Nile Delta is experiencing erosion rates of 5 to 10 meters per year in some areas. According to the World Bank, around 1 million people may be displaced by rising sea levels by 2050.",
            images: [CoastalErosion, CoastalErosion1],
            vidoe: CoastalErosion2,
            solution: "Solutions to Coastal Erosion Coastal Defense Structures: Constructing sea walls, breakwaters, and revetments to protect shorelines from erosion. These structures can help absorb wave energy and reduce the impact of storms.",
        },
        {
            title: "Pollution",
            Issue: "A 2020 report indicated that about 80% of the Nile's water is polluted, with significant levels of heavy metals and pathogens found, posing serious health risks to millions.",
            images: [Pollution, Pollution1],
            vidoe: Pollution2,
            solution: "Solutions for Pollution Regulations on Industrial Discharges: Enforcing stricter regulations on industrial effluents and establishing monitoring systems to ensure compliance, particularly in coastal areas.",
        },
        {
            title: "Population Density",
            Issue: " As of 2023, Cairo has a population density of approximately 19,000 people per square kilometer, with over 9 million residents. This density contributes to overcrowding, inadequate housing, and increased pressure on public services.",
            images: [PopulationDensity, PopulationDensity1],
            vidoe: PopulationDensity2,
            solution: "Solutions for High Population Density Transport Infrastructure Development: Investing in public transportation systems to reduce congestion and pollution from vehicles, making cities more livable.",
        },

    ])