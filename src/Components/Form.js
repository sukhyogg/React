import React from 'react'

const Form = () => {
  return (
    <>
        <div className="container">
        <h4>Login Form</h4>
        <form action="/action_page.php">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" />
          </div>
          <div>&nbsp;</div>
            <button type="submit" className="btn btn-success">Submit</button>
        </form>
      </div>
    
    </>

  )
}

export default Form