import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Fragment } from 'react'
import { publicRoutes } from './routes'
import DefaultLayout, { HeaderOnly } from './layouts'
import './App.css'

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout
            switch (route.layout) {
              case null:
                //Empty Layout
                Layout = Fragment
                break
              case HeaderOnly:
                Layout = HeaderOnly
                break
              default:
                Layout = DefaultLayout
            }
            const Page = route.component
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            )
          })}
        </Routes>
      </div>
    </Router>
  )
}

export default App
