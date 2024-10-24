import { StrictMode } from 'react'
import { Provider } from "../src/components/ui/provider"
import './index.css'
import ReactDOM from "react-dom/client"
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
    <App /> 

    </Provider>
  </StrictMode>,
)
