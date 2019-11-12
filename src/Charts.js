import React, { Component } from 'react';
import { Chart } from 'react-google-charts';

export default class Charts extends Component {
    render() {
        const { results } = this.props;
        return (
            <div className="chart-main">
                
                {results.map(chart => {
                    return <Chart width={'100%'} height={'100%'} max-width={'100%'} chartType="Timeline"
                        data={[
                            [{ type: 'string', id: 'Room' },
                            { type: 'string', id: 'Name' },
                            { type: 'date', id: 'Start' },
                            { type: 'date', id: 'End' },],
                            [`${chart.id}`, `${chart.name}`, new Date(`${chart.start}`.split('/')[2],
                                `${chart.start}`.split('/')[1], `${chart.start}`.split('/')[0], 0, 0, 0), new Date(`${chart.end}`.split('/')[2],
                                    `${chart.end}`.split('/')[1], `${chart.end}`.split('/')[0], 0, 0, 0)]
                            // [`${chart.id}`, `${chart.name}`]

                        ]}
                        options={{
                            timeline: {
                                singleColor: '#8d8',
                                groupByRowLabel: false,
                                colorByRowLabel: false
                            },
                        }}

                    />
                })}

            </div>
        )
    }
}



