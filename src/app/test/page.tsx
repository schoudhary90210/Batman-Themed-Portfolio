'use client';

import MonitorFrame from '@/components/ui/MonitorFrame';

export default function TestPage() {
  return (
    <MonitorFrame>
      <div style={{ padding: '2rem' }}>
        {Array.from({ length: 50 }, (_, i) => (
          <div
            key={i}
            style={{
              padding: '1rem',
              marginBottom: '1rem',
              backgroundColor: i % 2 === 0 ? '#1a0000' : '#0a0a0a',
              color: '#dc2626',
              fontFamily: 'monospace',
              border: '1px solid #333',
              cursor: 'pointer',
            }}
            onClick={() => alert(`Clicked item ${i + 1}`)}
          >
            TEST ITEM {i + 1} — CLICK ME TO VERIFY POINTER EVENTS
          </div>
        ))}
      </div>
    </MonitorFrame>
  );
}
