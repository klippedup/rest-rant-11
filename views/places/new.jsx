const React = require('react')
const Def = require('../default')

function new_form (data) {
    let message = ''
    if (data.mesage) {
        message = (
            <h4 className="alert-danger">
                {data.message}
                </h4>
        )
    }
    return (
        <def>
             <main>
            <h1>Add a New Place</h1>
            {message}
            <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
            <div className="form-group">
                    <label htmlFor="name">Place Name</label>
                    <input className="form-control" 
                    id="name" 
                    name="name" 
                    required />
              </div>
                <div className="form-group">
                    <label htmlFor="pic">Place Picture</label>
                    <input className="form-control" 
                    type="url" 
                    id="pic" 
                    name="pic"/>
                </div>
                <div className="form-group">
                    <label htmlFor="name">City</label>
                    <input className="form-control" 
                    id="city" 
                    name="city" />
                </div>
                <div className="form-group">
                    <label htmlFor="name">State</label>
                    <input className="form-control" 
                    id="state" 
                    name="state" />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Cuisines</label>
                    <input className="form-control" 
                    id="cuisines" 
                    name="cuisines" 
                    required />
                </div>
                <div className="form-group">
                    <label for="founded">Founded Year</label>
                    <input 
                    type="number"
                    className="form-control" 
                    id="founded" 
                    name="founded" 
                    value={new Date().getFullYear()} />
                    </div>
              
  
        <div className="form-group col-sm-4">
            <label htmlFor="founded">Founded</label>
            <input className="form-control" 
              id="founded" 
              name="founded" 
              value={data.place.founded} 
            />
        </div>

    
                <input className="btn btn-primary" 
                type="submit" 
                value="Add Place"/>
                </form>
             </main>
        </def>
    )
 }


  
 module.exports = new_form