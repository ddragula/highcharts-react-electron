import React, { useState } from "react";
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

export default function Chart() {
    const [options] = useState<Highcharts.Options>({
        title: {
            text: 'My chart'
        },
        series: [{
            type: 'line',
            data: [1, 2, 3]
        }]
    });

    return (
        <HighchartsReact highcharts={Highcharts} options={options} />
    );
}
