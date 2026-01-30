import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { CustomCard } from './CustomCard';

/**
 * ProductCard 컴포넌트
 *
 * 제품 정보를 표시하는 카드 컴포넌트.
 * CustomCard를 기반으로 이미지 > 카테고리 태그 > 타이틀 > 메타 정보 순서로 수직 배치.
 *
 * 동작 방식:
 * 1. CustomCard를 ghost variant로 사용하여 border 제거
 * 2. 이미지 영역에 제품 이미지 표시 (원본 비율 유지)
 * 3. 콘텐츠 영역에 카테고리 태그, 제품명, 메타 정보(lux, kelvin) 표시
 *
 * Props:
 * @param {string} title - 제품명 [Required]
 * @param {string} imageSrc - 제품 이미지 URL [Required]
 * @param {string} imageAlt - 이미지 대체 텍스트 [Optional, 기본값: '']
 * @param {string} type - 제품 카테고리 ('ceiling' | 'stand' | 'wall' | 'desk') [Optional]
 * @param {number} lux - 조도 값 (lx) [Optional]
 * @param {number} kelvin - 색온도 값 (K) [Optional]
 * @param {function} onClick - 클릭 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <ProductCard
 *   title="Lumen Desk Pro"
 *   imageSrc="/images/product-1.jpg"
 *   type="ceiling"
 *   lux={260}
 *   kelvin={3200}
 *   onClick={() => console.log('clicked')}
 * />
 */
const ProductCard = forwardRef(function ProductCard({
  title,
  imageSrc,
  imageAlt = '',
  type,
  lux,
  kelvin,
  onClick,
  sx,
  ...props
}, ref) {
  /**
   * 카테고리 라벨 변환
   */
  const getCategoryLabel = (category) => {
    const labels = {
      ceiling: 'Ceiling',
      stand: 'Stand',
      wall: 'Wall',
      desk: 'Desk',
    };
    return labels[category] || category;
  };

  /**
   * 메타 정보 포맷팅
   * - lux와 kelvin 값을 "260 lx · 3200 K" 형식으로 표시
   */
  const formatMeta = () => {
    const parts = [];
    if (lux !== undefined) parts.push(`${lux} lx`);
    if (kelvin !== undefined) parts.push(`${kelvin} K`);
    return parts.join(' · ');
  };

  const metaText = formatMeta();

  return (
    <CustomCard
      ref={ref}
      layout="vertical"
      variant="ghost"
      mediaSrc={imageSrc}
      mediaAlt={imageAlt}
      mediaRatio="auto"
      contentPadding="none"
      isInteractive={!!onClick}
      onClick={onClick}
      sx={sx}
      {...props}
    >
      <Box sx={{ pt: 1.5 }}>
        {type && (
          <Chip
            label={getCategoryLabel(type)}
            size="small"
            sx={{
              mb: 1,
              height: 24,
              fontSize: '0.75rem',
              backgroundColor: 'primary.main',
              color: 'primary.contrastText',
            }}
          />
        )}
        <Typography
          variant="body1"
          sx={{
            fontWeight: 500,
            color: 'text.primary',
          }}
        >
          {title}
        </Typography>
        {metaText && (
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              mt: 0.5,
            }}
          >
            {metaText}
          </Typography>
        )}
      </Box>
    </CustomCard>
  );
});

export { ProductCard };
