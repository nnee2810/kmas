import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import store, { persistor } from "store"
import "styles/styles.scss"

import "react-toastify/dist/ReactToastify.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import * as serviceWorkerRegistration from "./serviceWorkerRegistration"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
)

serviceWorkerRegistration.register({
  onUpdate: (registration) => {
    const waitingServiceWorker = registration.waiting

    if (waitingServiceWorker) {
      waitingServiceWorker.addEventListener("statechange", (event: any) => {
        if (event.target.state === "activated") {
          window.location.reload()
        }
      })
      waitingServiceWorker.postMessage({ type: "SKIP_WAITING" })
      console.log("Updating")
    }
  },
})

reportWebVitals()
