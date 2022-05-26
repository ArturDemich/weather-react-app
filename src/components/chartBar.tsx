import React, { useEffect } from 'react'
import Chart from 'react-apexcharts'
import { useCustomDispatch, useCustomSelector } from '../hooks/store'
import { selectCurrentWeatherData } from '../localStorage/selectors'
import { setHourlyWeather } from '../localStorage/slices/currentWeatherSlice'
import { fetchHourlyWeather } from '../localStorage/thunks/fetchCurrentWeather'

type Props = {
    lat: number
    lon: number
}
function ChartBar({ lat, lon }: Props) {
    const dispatch = useCustomDispatch()

    useEffect(() => {
        dispatch(fetchHourlyWeather(33.44, -94.04))
    }, [])

    const { hourlyWeather } = useCustomSelector(selectCurrentWeatherData)
    hourlyWeather.hourly.forEach((el) => {
        return el
    })

    const hourlyTemp: any = []
    hourlyWeather.hourly.forEach((el, index, arr) => {
        if (index <= 23) {
            return hourlyTemp.push(Math.round(el.temp) + '°')
        }
    })

    console.log(hourlyTemp)
    const state = {
        options: {
            chart: {
                id: 'basic-bar',
            },
            xaxis: {
                categories: [
                    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                    18, 19, 20, 21, 22, 23, 24,
                ],
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
