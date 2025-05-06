import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import './App.css';
import Sidebar from './sidebar';
import Event from './Event';
import Document from './Document';
import TeamManager from './Members';
import HomePage from './home';
import Footer from './Footer';
import Welcome from './Welcome';
import ProtectedRoute from './ProtectedRoute';
import PrayerCellManager from './Prayer_cells';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="whole-content">
        <div className="sidebarss">
          <Sidebar />
        </div>
        <div className="content">{children}</div>
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/welcome" element={<Welcome />} /> */}

        <Route
          path="/welcome"
          element={
            <ProtectedRoute>
              <Layout><Welcome /></Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/members"
          element={
            <ProtectedRoute>
              <Layout><TeamManager /></Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/event"
          element={
            <ProtectedRoute>
              <Layout><Event /></Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/document"
          element={
            <ProtectedRoute>
              <Layout><Document /></Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/prayer-cell"
          element={
            <ProtectedRoute>
              <Layout><PrayerCellManager /></Layout>
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
