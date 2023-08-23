import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreateAd from "./pages/CreateAd";
import Brides from "./pages/Brides"
import Grooms from "./pages/Grooms"
import Nri from "./pages/Nri";
import Manglik from "./pages/Manglik";
import Widow from "./pages/Widow";
import PcChallenged from "./pages/PcChallenged";
import Divorcee from "./pages/Divorcee";
import City from "./pages/City";
import Caste from "./pages/Caste";
import Religion from "./pages/Religion";
import CasteSingle from "./pages/CasteSingle";
import ReligionSingle from "./pages/ReligionSingle";
import CitySingle from "./pages/CitySingle";

import AdminReligionChanges from "./pages/admin/AdminReligionChanges";
import AdminCityChanges from "./pages/admin/AdminCityChanges";
import AdminChanges from "./pages/admin/AdminChanges";
import AdminCasteChanges from "./pages/admin/AdminCasteChanges";
import AdminLogin from "./pages/admin/AdminLogin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createad" element={<CreateAd />} />
        <Route path="/grooms" element={<Grooms />} />
        <Route path="/brides" element={<Brides />} />
        <Route path="/city" element={<City />} />
        <Route path="/caste" element={<Caste />} />
        <Route path="/religion" element={<Religion />} />

        {/* Dynamic Links */}
        <Route path="/caste/:castename" element={<CasteSingle />} />
        <Route path="/religion/:religionname" element={<ReligionSingle />} />
        <Route path="/city/:cityname" element={<CitySingle />} />

        {/* More Links */}
        <Route path="/nri" element={<Nri />} />
        <Route path="/manglik" element={<Manglik />} />
        <Route path="/widow" element={<Widow />} />
        <Route path="/divorcee" element={<Divorcee />} />
        <Route path="/physically-challenged" element={<PcChallenged />} />

         {/* Admin Links */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/changes" element={<AdminChanges />} />
        <Route path="/admin/castechanges" element={<AdminCasteChanges />} />
        <Route path="/admin/religionchanges" element={<AdminReligionChanges />} />
        <Route path="/admin/citychanges" element={<AdminCityChanges />} />
         
      </Routes>
    </Router>
  );
}

export default App;
