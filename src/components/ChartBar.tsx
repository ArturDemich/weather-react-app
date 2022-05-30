import moment from 'moment'
import { useEffect } from 'react'
import Chart from 'react-apexcharts'
import { useCustomDispatch, useCustomSelector } from '../hooks/store'
import { selectCurrentWeatherData } from '../storage/selectors'
import { fetchHourlyWeather } from '../storage/thunks/fetchWeathers'

type Props = {
    lat: number
    lon: number
}

function ChartBar({ lat, lon }: Props) {
    const dispatch = useCustomDispatch()

    useEffect(() => {
        dispatch(fetchHourlyWeather(lat, lon))
    }, [])

    const { hourlyWeather } = useCustomSelector(selectCurrentWeatherData)

    const hourlyTemp: number[] = []
    hourlyWeather.hourly.forEach((el, index) => {
        if (index <= 23) {
            return hourlyTemp.push(Math.round(el.temp))
        }
    })

    const hourly: string[] = []
    hourlyWeather.hourly.forEach((el, index) => {
        if (index <= 23) {
            return hourly.push(moment.unix(el.dt).format('HH:mm'))
        }
    })

    const state = {
        options: {
            chart: {
                id: 'basic-bar',
            },
            xaxis: {
                categories: hourly,
            },
        },
        series: [
            {
                name: 'temp-24',
                data: hourlyTemp,
            },
        ],
    }

    return (
        <div className="app">
            <div className="row">
                <div className="mixed-chart">
                    <Chart
                        options={state.options}
                        series={state.series}
                        type="bar"
                        width="100%"
                        height="300"
                    />
                </div>
            </div>
        </div>
    )
}

export default ChartBar
