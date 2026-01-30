import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ProductCard } from '../card/ProductCard';
import { products } from '../../data/products';

/**
 * ProductGrid 컴포넌트
 *
 * 제품 목록을 그리드 형태로 표시하는 컴포넌트.
 * MUI Grid를 사용하여 반응형 레이아웃을 제공.
 *
 * 동작 방식:
 * 1. products 데이터를 기반으로 ProductCard 그리드 생성
 * 2. PC(lg 이상)에서 4컬럼, 반응형으로 컬럼 수 조절
 * 3. 각 카드 클릭 시 onProductClick 콜백 호출
 *
 * 반응형 컬럼:
 * - xs (0-599px): 2컬럼
 * - sm (600-899px): 2컬럼
 * - md (900-1199px): 3컬럼
 * - lg (1200px+): 4컬럼
 *
 * Props:
 * @param {Array} items - 표시할 제품 배열 [Optional, 기본값: products 전체]
 * @param {number} columnSpacing - 좌우 간격 [Optional, 기본값: 2]
 * @param {number} rowSpacing - 상하 간격 [Optional, 기본값: 5]
 * @param {function} onProductClick - 제품 클릭 핸들러 (product) => void [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <ProductGrid
 *   items={products.slice(0, 8)}
 *   columnSpacing={2}
 *   rowSpacing={6}
 *   onProductClick={(product) => console.log(product.title)}
 * />
 */
const ProductGrid = forwardRef(function ProductGrid({
  items = products,
  columnSpacing = 2,
  rowSpacing = 5,
  onProductClick,
  sx,
  ...props
}, ref) {
  return (
    <Box ref={ref} sx={sx} {...props}>
      <Grid container columnSpacing={columnSpacing} rowSpacing={rowSpacing}>
        {items.map((product) => (
          <Grid
            key={product.id}
            size={{ xs: 6, sm: 6, md: 4, lg: 3 }}
          >
            <ProductCard
              title={product.title}
              imageSrc={product.images[0]}
              type={product.type}
              lux={product.lux}
              kelvin={product.kelvin}
              onClick={onProductClick ? () => onProductClick(product) : undefined}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
});

export { ProductGrid };
