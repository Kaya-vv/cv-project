import React from 'react'

function PracticalOverview({practical}) {
    return (
        <div class="columns">
            <div class="column is-3 is-flex is-flex-direction-column is-justify-content-center has-background-info">
                <h1 class="title is-3 has-text-white has-text-centered ">{practical.position}</h1>
            </div>
            <div class="column is-9 is-flex is-flex-direction-column is-justify-content-center has-text-centered">
                <h1 class="subtitle is-4 has-text-centered" > {practical.company}</h1>
                <p class="has-padding"> {practical.tasks}</p>
                <small class="has-padding"><strong>Date of employment:</strong> {practical.from} - {practical.till}</small>
            </div>
        </div>
    )
}

export default PracticalOverview