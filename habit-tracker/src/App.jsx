import React, { useEffect } from "react"
import HabitTracker from "./HabitTracker"
import Login from "./Login.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/MainPage" element={<HabitTracker />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App