function App() {
  return (
      <>
          <h1 className="text-success">Start building the UI</h1>
          <div className="bg-info p-5">
              <p className="">
                  This is example for using button with
                  bootstrap styling
              </p>
              <a
                  className="btn btn-primary"
                  data-bs-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
              >
                  Bootstrap button
              </a>
          </div>
      </>
  )
}

export default App
