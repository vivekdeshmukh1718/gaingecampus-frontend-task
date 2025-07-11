import { useState } from "react";
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden relative">
      <Sidebar isOpen={sidebarOpen} />
      <div className="flex-1 flex flex-col md:ml-64">
        <Header onToggle={handleToggle} />
        <main className="p-4">
          <p>Start putting your AI chat content here.</p>
        </main>
      </div>
    </div>
  );
}

export default App;
