'use client';

import { useEffect, useState } from 'react';

const ProgressBar = () => {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPercentage((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 50); // Adjust speed here
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-2.5 bg-red-500 rounded-full overflow-hidden">
            <div
                className="h-2.5 rounded-full animate-stripes transition-all duration-300 ease-in-out"
                style={{ width: `${percentage}%` }}
            />
        </div>
    );
};

export default ProgressBar;
