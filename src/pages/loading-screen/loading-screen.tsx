import './loading-screen.css';

function LoadingScreen(): JSX.Element {
  return (
    <div className="loading-screen">
      <p>Loading ...</p>
      <div className="spinner"></div>
    </div>
  );
}

export default LoadingScreen;
