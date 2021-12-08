import React from 'react'

function General({handleGeneralOnChange, general}) {
 

   return (
        
       <form onChange ={handleGeneralOnChange}>
        <div class="box"> 
            <div class="field">
                <h4 class="subtitle"> General information </h4>
                <label class="label">Name</label>
                <div class="control">
                    <input required name="name" class="input is-info" type="text" defaultValue={general.name}/>
                </div>

            </div>
            <div class="field">
                <label class="label">Email</label>
                <div class="control">
                    <input required name="email" class="input is-info" type="email" defaultValue={general.email} />
                </div>
            </div>
            <div class="field">
                <label class="label">Phone number</label>
                <div class="control">
                    <input required name="phone" class="input is-info" type="tel" defaultValue={general.phone}/>
                </div>
            </div>
        </div>
        
        </form>
    )
}

export default General
