import React from 'react';
import SensorCard from '../components/SensorCard';
import { useTranslation } from 'react-i18next';

export default function UserDashboard() {
  const { t } = useTranslation();

  const sensors = [
    {
      label: 'Storage A',
      temperature: 4.2,
      humidity: 78,
      lastUpdate: new Date().toISOString(),
    },
    {
      label: 'Storage B',
      temperature: 5.5,
      humidity: 82,
      lastUpdate: new Date().toISOString(),
    },
    {
      label: 'Storage C',
      temperature: 3.9,
      humidity: 76,
      lastUpdate: new Date().toISOString(),
    },
  ];

  return (
    <div className="main-container">
      <div className="dashboard">
        <h2>{t('user_panel')}</h2>
        {sensors.map((sensor, index) => (
          <SensorCard
            key={index}
            label={sensor.label}
            temperature={sensor.temperature}
            humidity={sensor.humidity}
            lastUpdate={sensor.lastUpdate}
          />
        ))}
      </div>
    </div>
  );
}
