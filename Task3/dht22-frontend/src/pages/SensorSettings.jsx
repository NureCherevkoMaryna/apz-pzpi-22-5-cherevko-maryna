import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function SensorSettings() {
  const { t } = useTranslation();
  const [thresholds, setThresholds] = useState({
    tempMin: 2,
    tempMax: 8,
    humMin: 70,
    humMax: 90
  });

  const handleChange = (e) => {
    setThresholds({ ...thresholds, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t('settings_saved'));
  };

  return (
    <div className="main-container">
      <div className="dashboard">
        <h2>{t('sensor_settings')}</h2>
        <div className="sensor-card">
          <h3>{t('sensor_id')}: A1-04</h3>
          <p>{t('location')}: Storage A</p>
          <p>{t('temperature')}: 4.6 °C</p>
          <p>{t('humidity')}: 78 %</p>
          <p>{t('last_update')}: {new Date().toLocaleString()}</p>
        </div>

        <form onSubmit={handleSubmit}>
          <label>{t('temperature_min')}</label>
          <input
            type="number"
            name="tempMin"
            value={thresholds.tempMin}
            onChange={handleChange}
          />

          <label>{t('temperature_max')}</label>
          <input
            type="number"
            name="tempMax"
            value={thresholds.tempMax}
            onChange={handleChange}
          />

          <label>{t('humidity_min')}</label>
          <input
            type="number"
            name="humMin"
            value={thresholds.humMin}
            onChange={handleChange}
          />

          <label>{t('humidity_max')}</label>
          <input
            type="number"
            name="humMax"
            value={thresholds.humMax}
            onChange={handleChange}
          />

          <button type="submit">{t('save')}</button>
        </form>
      </div>
    </div>
  );
}
