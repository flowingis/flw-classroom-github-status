import { useEffect, useState } from 'react'
import './App.css'
import { GitHubComponent } from './components'
import { getComponentStatus } from './lib'
import { polling } from './lib/polling'
import { GitHubComponentDto } from './models'

function App() {
  const [components, setComponents] = useState<GitHubComponentDto[]>([])
  const [error, setError] = useState<string>()

  useEffect(() => {
    const unsubscribe = polling(3000, () => {
      getComponentStatus(
        results => {
          const sortedComponents = results.filter(({ description }) => description).sort((a, b) => a.position - b.position)
          setComponents(sortedComponents)
        },
        e => {
          setError(e.message || 'Something went wrong')
        }
      )
    }, false)

    return () => {
      unsubscribe();
    }
  }, [])


  return (
    <>
      <section className="section is-smal">
        <h1 className="title">Current Status</h1>
      </section>

      {error && <div className="notification is-danger">{error}</div>}

      <section className="list">
        {components.map(component => <GitHubComponent key={component.id} {...component} />)}
      </section>

    </>
  )
}

export default App
