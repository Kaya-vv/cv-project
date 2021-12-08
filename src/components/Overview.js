import React from 'react'
import GeneralOverview from './GeneralOverview'
import EducationalOverview from './EducationalOverview'
import PracticalOverview from './PracticalOverview'
import '../styles/styles.css'

function Overview({allData, handleEdit}) {
   
    return (
        <div>
            <div class="box">
                <div class="columns">
                    <div class="column">
                        <h3 class="title is-4">General Information</h3>
                        <GeneralOverview general={allData.general}/>
                    </div>
                    <div class="column">
                        <h3 class="title is-4">Educational Experience</h3>
                        <EducationalOverview educational = {allData.educational}/>
                    </div>
                </div>
            </div>
            <h3 class="title is-4 has-text-centered mt-6">Practical Experience</h3>
            <div class="box  px-3 py-3">
                <PracticalOverview practical={allData.practical}/>
            </div>
            <button onClick={handleEdit} class="button is-primary">Edit</button>
        </div>

    )
}

export default Overview
