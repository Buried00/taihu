// components/ReservationForm.tsx
'use client';
import { useState, FormEvent, ChangeEvent } from 'react';
import styles from './ReservationForm.module.css';

interface FormData {
  name: string;
  phone: string;
  date: string;
  time: string;
  persons: string;
  occasion: string;
  wishes: string;
}

interface ReservationFormProps {
  onClose?: () => void;
}

const initialFormData: FormData = {
  name: '',
  phone: '',
  date: '',
  time: '',
  persons: '',
  occasion: '',
  wishes: '',
};

export default function ReservationForm({ onClose }: ReservationFormProps) {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const today = new Date().toISOString().split('T')[0];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const numeric = value.replace(/\D/g, '').slice(0, 11);
      setFormData((prev) => ({ ...prev, [name]: numeric }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Введите имя';
    if (formData.phone.length !== 11) newErrors.phone = 'Номер должен содержать ровно 11 цифр';
    if (!formData.date) newErrors.date = 'Выберите дату';
    if (!formData.time) newErrors.time = 'Выберите время';
    if (!formData.persons) newErrors.persons = 'Укажите количество гостей';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    console.log('Форма отправлена:', formData);
    setSubmitted(true);
    
    // Автоматически закрываем модальное окно через 3 секунды после успеха
    if (onClose) {
      setTimeout(onClose, 3000);
    }
  };

  const timeOptions = [];
  for (let h = 17; h < 24; h++) {
    for (let m = 0; m < 60; m += 30) {
      const hour = h.toString().padStart(2, '0');
      const minute = m.toString().padStart(2, '0');
      timeOptions.push(`${hour}:${minute}`);
    }
  }
  timeOptions.push('00:00');

  if (submitted) {
    return (
      <div className={styles.success}>
        <h3>Спасибо за заявку!</h3>
        <p>Мы свяжемся с вами в ближайшее время.</p>
        {onClose && (
          <button onClick={onClose} className={styles.closeBtn}>
            Закрыть
          </button>
        )}
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Забронировать столик</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.formGroup}>
          <label htmlFor="name">Ваше имя *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Например, Алексей"
            required
          />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">Телефон *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="7XXXXXXXXXX"
            maxLength={11}
            inputMode="numeric"
            pattern="[0-9]{11}"
            title="11 цифр без пробелов и знаков"
            required
          />
          {errors.phone && <span className={styles.error}>{errors.phone}</span>}
        </div>

        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label htmlFor="date">Дата *</label>
            <input
              type="date"
              id="date"
              name="date"
              min={today}
              value={formData.date}
              onChange={handleChange}
              required
            />
            {errors.date && <span className={styles.error}>{errors.date}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="time">Время *</label>
            <select
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Выберите время
              </option>
              {timeOptions.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            {errors.time && <span className={styles.error}>{errors.time}</span>}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label htmlFor="persons">Количество человек *</label>
            <select
              id="persons"
              name="persons"
              value={formData.persons}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                —
              </option>
              {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? 'гость' : n < 5 ? 'гостя' : 'гостей'}
                </option>
              ))}
              <option value="11+">11+ гостей</option>
            </select>
            {errors.persons && <span className={styles.error}>{errors.persons}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="occasion">Повод</label>
            <select
              id="occasion"
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
            >
              <option value="">Не выбран</option>
              <option value="birthday">День рождения</option>
              <option value="anniversary">Годовщина / Свадьба</option>
              <option value="corporate">Корпоратив / деловая встреча</option>
              <option value="romantic">Романтический ужин</option>
              <option value="friends">Встреча с друзьями</option>
              <option value="other">Другое</option>
            </select>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="wishes">Пожелания / комментарии</label>
          <textarea
            id="wishes"
            name="wishes"
            rows={4}
            value={formData.wishes}
            onChange={handleChange}
            placeholder="Аллергии, желаемое расположение стола, банкетное меню и т.д."
          />
        </div>

        <button type="submit" className={styles.submitBtn}>
          Забронировать
        </button>
      </form>
    </div>
  );
}