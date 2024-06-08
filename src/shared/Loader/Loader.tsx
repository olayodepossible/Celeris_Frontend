import './Loader.css';

const Loader = () => {
  return (
    <div className="loader">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
