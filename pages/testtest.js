
import React from 'react';
//import NoSSR from 'react-no-ssr';
import dynamic from 'next/dynamic'

const DynamicPlot = dynamic(import('../components/plot'), {
    ssr: false
})



export default DynamicPlot;
