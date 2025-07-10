import ReactDOM from'react-dom/client'
import App from './app'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import "./index.css"
import { CookiesProvider } from 'react-cookie'
import { configureStore } from '@reduxjs/toolkit'
import {Provider} from "react-redux"
import store from './store.js'


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(

<CookiesProvider>
<Provider store={store}>
  <App></App>
</Provider>
</CookiesProvider>

)


