import React from 'react'

function EducationalOverview({educational}) {
    return (
        <div class="content is-flex is-flex-direction-column">
        <span><label class="label is-inline">School:</label> {educational.school}</span>
        <span><label class="label is-inline">Study:</label> {educational.study}</span>
        <span><label class="label is-inline">Date:</label> {educational.date}</span>
    </div>
    )
}

export default EducationalOverview
