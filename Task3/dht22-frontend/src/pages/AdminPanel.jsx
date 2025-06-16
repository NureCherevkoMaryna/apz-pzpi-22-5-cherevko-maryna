import React from 'react';
import { useTranslation } from 'react-i18next';

export default function AdminPanel() {
  const { t } = useTranslation();

  const users = [
    { id: 1, name: 'Марина', email: 'admin@example.com', role: 'admin' },
    { id: 2, name: 'Іван', email: 'user1@example.com', role: 'user' },
    { id: 3, name: 'Оля', email: 'user2@example.com', role: 'user' }
  ];

  const handleBackup = () => {
    alert(t('backup_created'));
  };

  return (
    <div className="main-container">
      <div className="dashboard">
        <h2>{t('admin_panel')}</h2>
        <button onClick={handleBackup}>{t('create_backup')}</button>
        <table style={{ width: '100%', marginTop: '20px' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>{t('name')}</th>
              <th>Email</th>
              <th>{t('role')}</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
