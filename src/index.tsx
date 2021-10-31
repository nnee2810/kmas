import { ColorModeScript } from "@chakra-ui/color-mode"
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import store from "store"
import { theme } from "styles/theme"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import * as serviceWorkerRegistration from "./serviceWorkerRegistration"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
serviceWorkerRegistration.unregister()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
