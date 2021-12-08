import React from 'react'

function GeneralOverview({general}) {
    return (
        <div class="content is-flex is-flex-direction-column is-justify-content-space-evenly">
            <span><label class="label is-inline">Name:</label> {general.name}</span>
            <span><label class="label is-inline">Email:</label> {general.email}</span>
            <span><label class="label is-inline">Phone:</label> {general.phone}</span>
        </div>
    )
}

export default GeneralOverview
