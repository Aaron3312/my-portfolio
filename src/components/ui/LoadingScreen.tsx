// File: src/components/ui/LoadingScreen.jsx

const LoadingScreen = () => {
    return (
      <div className="loading-screen fixed top-0 left-0 w-full h-full bg-white dark:bg-slate-950 z-50 flex flex-col items-center justify-center">
        <div className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Aaron Hernández Jiménez
        </div>
        <div className="w-64 h-2 bg-gray-200 dark:bg-slate-800 rounded-full overflow-hidden">
          <div className="loading-progress h-full w-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
        </div>
      </div>
    );
  };
  
  export default LoadingScreen;