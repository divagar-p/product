import { memo } from 'react';
import './loading.css';

function LoadingSpinner() {
    return (
        <div className="loading-overlay">
          <div className="loading-content">
            <div className="loader"></div>
            <p>Loading...</p>
          </div>
        </div>
    );
}

export default memo(LoadingSpinner);