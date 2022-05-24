import React from 'react'
import { Animation } from '@devexpress/dx-react-chart'
import {
    ArgumentAxis,
    BarSeries,
    Chart,
    Title,
    ValueAxis,
} from '@devexpress/dx-react-chart-material-ui'
import { Paper } from '@mui/material'

interface IDataItem {
    year: string
    population: number
}

const example: IDataItem[] = [
    { year: '1950', population: 2.525 },
    { year: '1960', population: 3.018 },
    { year: '1970', population: 3.682 },
    { year: '1980', population: 4.44 },
    { year: '1990', population: 5.31 },
    { year: '2000', population: 6.127 },
    { year: '2010', population: 6.93 },
]

type Props = {}

function ChartBar(props: Props) {
    return (
        <Paper>
            <Chart data={example}>
                <ArgumentAxis />
                <ValueAxis
                    scaleName="sale"
                    showGrid={false}
                    showLine={true}
                    showTicks={true}
                />

                <BarSeries valueField="population" argumentField="year" />
                <Title />
                <Animation />
            </Chart>
        </Paper>
    )
}

export default ChartBar
