import moment from 'moment'
import React, { useEffect } from 'react'
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
    hourlyWeather.hourly.forEach((el) => {
        return el
    })

    const hourlyTemp: any = []
    hourlyWeather.hourly.forEach((el, index) => {
        if (index <= 23) {
            return hourlyTemp.push(Math.round(el.temp) + '°')
        }
    })

    const hourly: any = []
    hourlyWeather.hourly.forEach((el, index) => {
        if (index <= 23) {
            return hourly.push(moment(el.dt).format('HH:mm'))
        }
    })
    console.log(hourly)

    const state = {
        options: {
            chart: {
                id: 'basic-bar',
            },
            xaxis: {
                categories: [
                    '1:00',
                    '2:00',
                    '3:00',
                    '4:00',
                    '5:00',
                    '6:00',
                    '7:00',
                    '8:00',
                    '9:00',
                    '10:00',
                    '11:00',
                    '12:00',
                    '13:00',
                    '14:00',
                    '15:00',
                    '16:00',
                    '17:00',
                    '18:00',
                    '19:00',
                    '20:00',
                    '21:00',
                    '22:00',
                    '23:00',
                    '24:00',
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
