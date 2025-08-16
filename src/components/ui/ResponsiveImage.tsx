import React from 'react';

interface ResponsiveImageProps {
  src: string; // Путь к оригинальному изображению в /images/
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  onMouseEnter?: (e: React.MouseEvent<HTMLImageElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLImageElement>) => void;
}

/**
 * ResponsiveImage - компонент для автоматического выбора оптимального размера изображения
 * 
 * Автоматически выбирает:
 * - Мобильную версию (300px) для экранов < 768px
 * - Десктопную версию (600px) для экранов >= 768px
 * 
 * @param src - путь к изображению относительно /images/ (например: "home/photo.png")
 * @param alt - альтернативный текст
 * @param className - CSS классы
 * @param loading - стратегия загрузки (lazy по умолчанию)
 * @param sizes - медиа-запросы для оптимального размера (опционально)
 */
export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  sizes = '(max-width: 768px) 300px, 600px',
  style,
  onClick,
  onMouseEnter,
  onMouseLeave
}) => {
  // Преобразуем путь к изображению для получения оптимизированных версий
  const getOptimizedPath = (originalPath: string, size: 'mobile' | 'desktop') => {
    // Удаляем /images/ если есть в начале пути
    const cleanPath = originalPath.replace(/^\/images\//, '');
    return `/images/optimized/${size}/${cleanPath}`;
  };

  const mobileSrc = getOptimizedPath(src, 'mobile');
  const desktopSrc = getOptimizedPath(src, 'desktop');

  return (
    <img
      srcSet={`${mobileSrc} 300w, ${desktopSrc} 600w`}
      sizes={sizes}
      src={desktopSrc} // Fallback для старых браузеров
      alt={alt}
      className={className}
      loading={loading}
      style={style}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  );
};

export default ResponsiveImage;
