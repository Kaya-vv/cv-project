import React from 'react'

function Practical({handlePracticalOnChange,  practical}) {
    return (   
        <form onChange={handlePracticalOnChange}>
            <div class="box">
                <div class="field">
                    <h4 class="subtitle"> Practical Experience </h4>
                    <label class="label">Company name</label>
                    <div class="control">
                        <input class="input is-info" type="text" defaultValue={practical.company} />
                    </div>

                </div>
                <div class="field">
                    <label class="label">Position title</label>
                    <div class="control">
                        <input class="input is-info" type="text" defaultValue={practical.position}/>
                    </div>
                </div>
                <div class="field">
                    <label class="label">Main tasks of your job</label>
                    <div class="control">
                        <textarea class="textarea is-info" defaultValue={practical.tasks}></textarea>
                    </div>
                </div>
                <div class="field">
                    <label class="label">Date from and until when you worked for that company</label>
                    <div class="control">
                        From: <input class="input is-info" type="date" defaultValue={practical.from} />
                    </div>
                    <div class="control">
                       Till: <input class="input is-info" type="date" defaultValue={practical.till}/>
                    </div>
                </div>
            </div>
      </form>
    )
}

export default Practical
