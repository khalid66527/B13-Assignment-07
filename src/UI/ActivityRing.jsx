import React from 'react';

const ActivityRing = () => {
    // Chart Data
    const data = [
        { label: 'Call', value: 30, color: '#2D4F3F' },  // Dark Green
        { label: 'Text', value: 45, color: '#8B3DFF' },  // Purple
        { label: 'Video', value: 15, color: '#41A361' }, // Light Green
    ];

    const size = 250;
    const strokeWidth = 20;
    const center = size / 2;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const gap = 15; // Proti segment-er majhkane faka

    let currentOffset = 0;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: 'rotate(-90deg)' }}>
                {data.map((item, index) => {
                    const strokeDasharray = (item.value / 100) * circumference;
                    const dashOffset = -currentOffset;
                    currentOffset += strokeDasharray + gap;

                    return (
                        <circle
                            key={index}
                            cx={center}
                            cy={center}
                            r={radius}
                            fill="transparent"
                            stroke={item.color}
                            strokeWidth={strokeWidth}
                            strokeDasharray={`${strokeDasharray} ${circumference}`}
                            strokeDashoffset={dashOffset}
                            strokeLinecap="round" // Rounded edges er jonno
                            style={{ transition: 'stroke-dashoffset 0.5s ease' }}
                        />
                    );
                })}
            </svg>

            {/* Legend / Labels */}
            <div style={{ display: 'flex', gap: '15px', fontFamily: 'sans-serif' }}>
                {data.map((item, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <div style={{ width: '12px', height: '12px', backgroundColor: item.color, borderRadius: '2px' }}></div>
                        <span style={{ fontSize: '14px', color: '#555' }}>{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ActivityRing;