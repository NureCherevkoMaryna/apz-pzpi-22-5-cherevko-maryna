
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="app-header">
      <h1>{t('sensor_data')}</h1>
    </header>
  );
}
