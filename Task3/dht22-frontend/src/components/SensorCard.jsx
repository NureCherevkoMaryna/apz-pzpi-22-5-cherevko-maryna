
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function SensorCard({ label, temperature, humidity, lastUpdate }) {
  const { t } = useTranslation();

  return (
    <div className="sensor-card">
      <h3>{label}</h3>
      <p>{t('temperature')}: {temperature}°C</p>
      <p>{t('humidity')}: {humidity}%</p>
      <p>{t('last_update')}: {new Date(lastUpdate).toLocaleString()}</p>
    </div>
  );
}
