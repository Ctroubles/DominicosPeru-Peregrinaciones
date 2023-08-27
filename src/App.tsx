import { useSelector } from 'react-redux'
import Home from './views/home/home'
import { useLayoutEffect } from 'react'
import CountrySetUp from './views/Country_SetUp/CountrySetUp'
import type { RootState } from './redux/reducer/reducer'
import { Country } from './enums'

function App (): JSX.Element {
  const country = useSelector<RootState>((state: RootState) => state.country)

  useLayoutEffect(() => {
    const theme = window.localStorage.getItem('theme')
    if (theme != null) {
      const root = document.documentElement
      root.setAttribute('data-theme', theme)
    }
  }, [])

  return (
    <div className="App" style={{ width: '100%' }}>
        {
          country === Country.PE || country === Country.EC
            ? (
            <Home/>
              )
            : (
            <CountrySetUp/>
              )
        }
    </div>
  )
}

export default App
