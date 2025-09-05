const App = () => {
  return(
    <div className="container-fluid p-3">
      <div className="row">
        <div className="col-12">
          <i className="fa-solid fa-3x fa-cat" style={{color: "#b5ca8d"}}></i>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-3">
          <div className="card" style={{borderColor: "#b5ca8d"}}>
            <div className="card-header text-muted" style={{backgroundColor: "#b5ca8d"}}>
              04/09/2025
            </div>
            <div className="card-body d-flex">
              <i className="fa-solid fa-2x fa-bowl-food" style={{color: "#b5ca8d"}}></i>
                <div>
                  <p>Ração Seca</p>
                  <p>Salmão</p>
                </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">

        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">

        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
        </div>
      </div>
    </div>
  )
}

export default App