import React from 'react'
import Bar from '../components/Bar'
import { languages, tools } from '../data'

const Resume = () => {
    return (
        <div className='px-6 py-2'>
            {/* //education */}
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h5 className='my-2 text-2xl font-bold'>Education</h5>
                    <div className='mb-8'>
                        <h2 className='my-2 text-xl font-bold'>Nnamdi Azikiwe University </h2>
                        <p className='font-semibold'>Computer Science(2013-2017)</p>
                    </div>
                    <div>
                        <h5 className='my-2 text-xl font-bold'>Udacity </h5>
                        <p className='font-semibold'>FrontEnd Developer(2018-2018)</p>
                    </div>
                </div>

                <div>
                    <h5 className='my-2 text-2xl font-bold'>Experience</h5>
                    <div>
                        <div className='mb-6'>
                            <h5 className='my-2 text-xl font-bold'>FrontEnd Develoer Engineer (Inter)</h5>
                            <p className='font-semibold'>Datamax Files LTD (2021 - on)</p>
                        </div>

                        <div className='mb-6'>
                            <h5 className='my-2 text-xl font-bold'>Software Engineer (Inter)</h5>
                            <p className='font-semibold'>Netop Business System LTD(2020 - 2021)</p>
                        </div>

                        <div className='mb-6'>
                            <h5 className='my-2 text-xl font-bold'>Software Engineer (Jr)</h5>
                            <p className='font-semibold'>Primatus Technology LTD(2019 - 2020)</p>
                        </div>

                        {/* <h5 className='my-2 text-xl font-bold'>Team</h5>
                        <p className='font-semibold'>TCS (2021 - on)</p>
                        <h5 className='my-2 text-xl font-bold'>Software Engineer Jr</h5>
                        <p className='font-semibold'>TCS (2021 - on)</p> */}

                    </div>
                </div>

            </div>

            {/* languages and tools  */}

            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h5 className='my-3 text-2xl font-bold'>
                        Languages & Frameworks
                    </h5>

                    <div className="my-2">
                        {
                            languages.map(Language => <Bar data={Language} key={Language.name} />)
                        }
                    </div>
                </div>

                <div>
                    <h5 className='my-3 text-2xl font-bold'>
                        Tools & Softwares
                    </h5>

                    <div className="my-2">
                        {
                            tools.map(tool => <Bar data={tool} key={tool.name} />)
                        }
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Resume