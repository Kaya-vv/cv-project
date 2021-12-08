import React from 'react'

function Educational({handleEducationalOnChange, educational}) {
    return (
        <form onChange={handleEducationalOnChange}>
        <div class="box">  
        <div class="field">
            <h4 class="subtitle"> Educational Experience </h4>
            <label class="label">School name</label>
            <div class="control">
                <input class="input is-info" type="text" defaultValue={educational.school}/>
            </div>

        </div>
        <div class="field">
            <label class="label">Title of study</label>
            <div class="control">
                <input class="input is-info" type="text"  defaultValue={educational.study}/>
            </div>
        </div>
        <div class="field">
            <label class="label">Date of study</label>
            <div class="control">
                <input class="input is-info" type="date"  defaultValue={educational.date}/>
            </div>
        </div>
    </div>
    </form>
    )
}

export default Educational
