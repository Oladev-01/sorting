import React from 'react';

const AlgorithmControls = ({ onGenerate, onSort, onMergeSort }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand">Sorting Algorithms</span>
                <div className="d-flex align-items-center">
                    <button
                        id='generate'
                        className="btn btn-primary me-2"
                        onClick={onGenerate}
                    >
                        Generate New Array
                    </button>
                    <button
                        id='bubble'
                        className="btn btn-success me-2"
                        onClick={onSort}
                    >
                        Bubble Sort
                    </button>
                    <button
                        className="btn btn-info"
                        onClick={onMergeSort}
                    >
                        Merge Sort
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default AlgorithmControls;
