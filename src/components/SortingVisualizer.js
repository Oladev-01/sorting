import React, { useState } from 'react';
import AlgorithmControls from './AlgorithmControls';

const SortingVisualizer = () => {
    const [array, setArray] = useState([]);
    const [sortingTime, setSortingTime] = useState(0);

    const generateArray = () => {
        const newArray = [];
        for (let i = 0; i < 99; i++) {
            newArray.push(Math.floor(Math.random() * 100) + 1);
        }
        setArray(newArray);
        setSortingTime(0);
    };

    const bubbleSort = async () => {
        const arr = [...array];
        const startTime = performance.now();
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] < arr[j + 1]) {
                    const tmp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = tmp;
                }
            }
            setArray([...arr]);
            await new Promise((res) => setTimeout(res, 100));
        }
        const endTime = performance.now();
        setSortingTime(endTime - startTime);
    };

    const mergeSortIterative = async () => {
        let arr = [...array];
        const n = arr.length;
        const startTime = performance.now();

        for (let currSize = 1; currSize < n; currSize = 2 * currSize) {
            for (let leftStart = 0; leftStart < n - 1; leftStart += 2 * currSize) {
                const mid = Math.min(leftStart + currSize - 1, n - 1);
                const rightEnd = Math.min(leftStart + 2 * currSize - 1, n - 1);

                merge(arr, leftStart, mid, rightEnd);
                setArray([...arr]); 
            }
            await new Promise((res) => setTimeout(res, 100));
        }

        const endTime = performance.now();
        setSortingTime(endTime - startTime);
        setArray(arr);
    };

    const merge = (arr, left, mid, right) => {
        const n1 = mid - left + 1;
        const n2 = right - mid;

        const leftArr = [];
        const rightArr = [];

        for (let i = 0; i < n1; i++) leftArr[i] = arr[left + i];
        for (let i = 0; i < n2; i++) rightArr[i] = arr[mid + 1 + i];

        let i = 0,
            j = 0,
            k = left;

        while (i < n1 && j < n2) {
            if (leftArr[i] <= rightArr[j]) {
                arr[k] = leftArr[i];
                i++;
            } else {
                arr[k] = rightArr[j];
                j++;
            }
            k++;
            setArray([...arr]);
        }

        while (i < n1) {
            arr[k] = leftArr[i];
            i++;
            k++;
        }

        while (j < n2) {
            arr[k] = rightArr[j];
            j++;
            k++;
        }
    };

    return (
        <div>
            <AlgorithmControls
                className='allSort'
                onGenerate={generateArray}
                onSort={bubbleSort}
                onMergeSort={mergeSortIterative}
            />
            <div className="sorting">
                {array.map((value, index) => (
                    <div
                        className="bar"
                        key={index}
                        style={{
                            height: `${value * 4}px`,
                        }}
                    ></div>
                ))}
            </div>
            {sortingTime > 0 && (
                <div className="sorting-time">
                    Sorting Time: {sortingTime.toFixed(2)} ms
                </div>
            )}
        </div>
    );
};

export default SortingVisualizer;
