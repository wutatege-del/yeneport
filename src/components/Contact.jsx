import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../styles/Contact.module.css';
import { getAssetPath } from '../utils/assets';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    customSubject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const [errorDetails, setErrorDetails] = useState('');

  const subjectOptions = [
    { value: '', label: 'Select a subject...' },
    { value: 'job-opportunity', label: 'Job Opportunity' },
    { value: 'freelance-project', label: 'Freelance Project' },
    { value: 'collaboration', label: 'Collaboration' },
    { value: 'question', label: 'General Question' },
    { value: 'feedback', label: 'Feedback' },
    { value: 'custom', label: 'Other (Custom)' }
  ];

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const nameRegex = /^[a-zA-Z\s]{2,50}$/;
  const customSubjectRegex = /^.{3,100}$/;
  const messageRegex = /^.{10,1000}$/;

  useEffect(() => {
    if (notification && notification !== 'validation-error') {
      setShowNotification(true);
      const timer = setTimeout(() => {
        setShowNotification(false);
        setTimeout(() => setNotification(''), 300);
      }, 5000);
      return () => clearTimeout(timer);
    } else if (notification === 'validation-error') {
      setShowNotification(true);
    }
  }, [notification]);

  const closeNotification = () => {
    setShowNotification(false);
    setTimeout(() => setNotification(''), 300);
  };

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'name':
        if (!value.trim()) {
          error = 'Name is required';
        } else if (!nameRegex.test(value.trim())) {
          error = 'Name must be 2-50 characters, letters only';
        }
        break;
      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!emailRegex.test(value.trim())) {
          error = 'Please enter a valid email address';
        }
        break;
      case 'subject':
        if (!value.trim()) {
          error = 'Please select a subject';
        }
        break;
      case 'customSubject':
        if (formData.subject === 'custom' && !value.trim()) {
          error = 'Please enter a custom subject';
        } else if (formData.subject === 'custom' && value.trim() && !customSubjectRegex.test(value.trim())) {
          error = 'Custom subject must be 3-100 characters';
        }
        break;
      case 'message':
        if (!value.trim()) {
          error = 'Message is required';
        } else if (!messageRegex.test(value.trim())) {
          error = 'Message must be 10-1000 characters';
        }
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setNotification('validation-error');
      return;
    }

    setIsSubmitting(true);
    setNotification('');

    try {
      const serviceId = 'service_czr4q3g';
      const templateId = 'template_az3pbib';
      const publicKey = '4MbniaRZ52u7BaoJE';
      
      const finalSubject = formData.subject === 'custom'
        ? formData.customSubject
        : subjectOptions.find(opt => opt.value === formData.subject)?.label || formData.subject;

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: finalSubject,
        message: formData.message
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setNotification('success');
      setErrorDetails('');
      setFormData({
        name: '',
        email: '',
        subject: '',
        customSubject: '',
        message: ''
      });
      setErrors({});
    } catch (error) {
      console.error('EmailJS Error:', error);
      // Extract error message for better debugging
      const errorMessage = error?.text || error?.message || 'Unknown error occurred';
      setErrorDetails(errorMessage);
      setNotification('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
          <ul className={styles.links}>
            <li className={styles.link}>
              <img 
                src={getAssetPath('contact/emailIcon.png')} 
                alt="Email icon"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <a href="mailto:tegewon@gmail.com">tegewon@gmail.com</a>
            </li>
            <li className={styles.link}>
              <img 
                src={getAssetPath('contact/linkedinIcon.png')} 
                alt="LinkedIn icon"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <a href="https://www.linkedin.com/in/tegene/">linkedin.com/tegene</a>
            </li>
            <li className={styles.link}>
              <img 
                src={getAssetPath('contact/githubIcon.png')} 
                alt="Github icon"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <a href="https://github.com/tegeney">github.com/tegeney</a>
            </li>
          </ul>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h3 className={styles.formTitle}>Send me a message</h3>
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="name"
              placeholder="Your Name (2-50 characters, letters only)"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
              required
            />
            {errors.name && <span className={styles.errorText}>{errors.name}</span>}
          </div>
          <div className={styles.inputGroup}>
            <input
              type="email"
              name="email"
              placeholder="Your Email (example@domain.com)"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
              required
            />
            {errors.email && <span className={styles.errorText}>{errors.email}</span>}
          </div>
          <div className={styles.inputGroup}>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${styles.select} ${errors.subject ? styles.inputError : ''}`}
              required
            >
              {subjectOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.subject && <span className={styles.errorText}>{errors.subject}</span>}
          </div>
          {formData.subject === 'custom' && (
            <div className={styles.inputGroup}>
              <input
                type="text"
                name="customSubject"
                placeholder="Enter custom subject (3-100 characters)"
                value={formData.customSubject}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${styles.input} ${errors.customSubject ? styles.inputError : ''}`}
                required
              />
              {errors.customSubject && <span className={styles.errorText}>{errors.customSubject}</span>}
            </div>
          )}
          <div className={styles.inputGroup}>
            <textarea
              name="message"
              placeholder="Your Message (10-1000 characters)"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
              rows="5"
              required
            />
            {errors.message && <span className={styles.errorText}>{errors.message}</span>}
            <div className={styles.charCount}>
              {formData.message.length}/1000 characters
            </div>
          </div>
          <button
            type="submit"
            className={styles.submitBtn}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          {notification && (
            <div
              className={`${styles.notification} ${
                notification === 'success'
                  ? styles.notificationSuccess
                  : notification === 'error'
                  ? styles.notificationError
                  : styles.notificationWarning
              } ${showNotification ? styles.notificationShow : styles.notificationHide}`}
            >
              <div className={styles.notificationIcon}>
                {notification === 'success' ? (
                  <svg viewBox="0 0 20 20" fill="currentColor" className={styles.iconSvg}>
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : notification === 'error' ? (
                  <svg viewBox="0 0 20 20" fill="currentColor" className={styles.iconSvg}>
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg viewBox="0 0 20 20" fill="currentColor" className={styles.iconSvg}>
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
              <div className={styles.notificationContent}>
                <h4>
                  {notification === 'success'
                    ? 'Message Sent Successfully!'
                    : notification === 'error'
                    ? 'Failed to Send Message'
                    : 'Please Check Your Input'}
                </h4>
                <p>
                  {notification === 'success' ? (
                    "Thank you for reaching out! I'll get back to you within 24 hours."
                  ) : notification === 'error' ? (
                    <>
                      {errorDetails && (
                        <span style={{ display: 'block', marginBottom: '8px', fontSize: '12px', opacity: 0.8 }}>
                          Error: {errorDetails}
                        </span>
                      )}
                      Please check your EmailJS configuration or contact me directly at{' '}
                      <a
                        href="mailto:tegewon@gmail.com"
                        className={styles.notificationLink}
                      >
                        tegewon@gmail.com
                      </a>
                    </>
                  ) : (
                    'Fix the highlighted errors above before submitting.'
                  )}
                </p>
              </div>
              {notification !== 'validation-error' && (
                <button
                  className={styles.notificationClose}
                  onClick={closeNotification}
                  aria-label="Close notification"
                >
                  ×
                </button>
              )}
            </div>
          )}
        </form>
      </div>
    </footer>
  );
};

export default Contact;

