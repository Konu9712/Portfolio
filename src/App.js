
import React, { useEffect } from 'react';
import { Toaster, toast } from 'sonner'; 

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col overflow-x-hidden">
       <Toaster theme="dark" position="bottom-right" />
      </div>
  );
}

export default App;
