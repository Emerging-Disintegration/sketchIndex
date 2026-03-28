import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import HomeHub from './components/HomeHub';
import BrowseCatalog from './components/BrowseCatalog';
import StudioDashboard from './components/StudioDashboard';
import StudyModeSession from './components/StudyModeSession';
import SessionComplete from './components/SessionComplete';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [isSessionComplete, setIsSessionComplete] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setIsSessionActive(false);
    setIsSessionComplete(false);
  };

  const startSession = () => {
    setIsSessionActive(true);
    setIsSessionComplete(false);
  };

  const completeSession = () => {
    setIsSessionActive(false);
    setIsSessionComplete(true);
  };

  if (isSessionActive) {
    return <StudyModeSession onComplete={completeSession} />;
  }

  if (isSessionComplete) {
    return (
      <div className="flex min-h-screen bg-background text-on-surface">
        <Sidebar activeTab={activeTab} onTabChange={handleTabChange} />
        <main className="ml-16 flex-1 flex flex-col">
          <SessionComplete onRestart={startSession} onBrowse={() => handleTabChange('browse')} />
        </main>
      </div>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeHub onStartSession={startSession} />;
      case 'browse':
        return <BrowseCatalog onStartSession={startSession} />;
      case 'studio':
        return <StudioDashboard />;
      case 'study':
        return (
          <div className="flex flex-col items-center justify-center flex-1 p-12 text-center">
            <h2 className="text-4xl font-headline mb-6">Ready to Practice?</h2>
            <p className="text-on-surface-variant max-w-md mb-8">
              Select a collection or use the daily prompt to start a timed drawing session.
            </p>
            <button 
              onClick={startSession}
              className="bg-primary text-on-primary px-10 py-4 rounded-full font-label font-bold uppercase tracking-widest hover:brightness-110 transition-all"
            >
              Start Quick Session
            </button>
          </div>
        );
      default:
        return <HomeHub onStartSession={startSession} />;
    }
  };

  const getTitle = () => {
    switch (activeTab) {
      case 'home': return 'For You';
      case 'browse': return 'Browse';
      case 'study': return 'Study Mode';
      case 'studio': return 'Studio Mode';
      default: return 'SketchIndex';
    }
  };

  return (
    <div className="flex min-h-screen bg-background text-on-surface">
      <Sidebar activeTab={activeTab} onTabChange={handleTabChange} />
      <main className="ml-16 flex-1 flex flex-col">
        <Header title={getTitle()} />
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
