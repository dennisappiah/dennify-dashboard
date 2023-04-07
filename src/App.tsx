import React from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
// import global
import TopBar from "./scenes/global/TopBar";
import SideBar from "./scenes/global/SideBar";
// import pages
import Dashboard from "./scenes/dashboard/Index";
import Team from "./scenes/team/Index";
import Contacts from "./scenes/contacts/Index";
import Invoices from "./scenes/Invoices/Index";
import ProfileForm from "./scenes/profileForm/Index";
import Calendar from "./scenes/calendar/Index";
import FAQ from "./scenes/faq/Index";
import Bar from "./scenes/bar/Index";
import Line from "./scenes/line/Index";
import Pie from "./scenes/pie/Index";
import Geography from "./scenes/geography/Index";

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<ProfileForm />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/line" element={<Line />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App
