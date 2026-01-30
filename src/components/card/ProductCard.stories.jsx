import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { ProductCard } from './ProductCard';
import { products } from '../../data/products';

export default {
  title: 'Custom Component/card/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## ProductCard

제품 정보를 표시하는 카드 컴포넌트.

### 특징
- CustomCard 기반의 수직 레이아웃
- 이미지 > 카테고리 태그 > 타이틀 > 메타 정보(lux, kelvin) 순서로 배치
- 이미지는 원본 비율 유지
- border 없는 ghost 스타일
- 클릭 시 인터랙션 지원
        `,
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: '제품명',
      table: {
        type: { summary: 'string' },
      },
    },
    imageSrc: {
      control: 'text',
      description: '제품 이미지 URL',
      table: {
        type: { summary: 'string' },
      },
    },
    imageAlt: {
      control: 'text',
      description: '이미지 대체 텍스트',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
      },
    },
    type: {
      control: 'select',
      options: ['ceiling', 'stand', 'wall', 'desk'],
      description: '제품 카테고리',
      table: {
        type: { summary: "'ceiling' | 'stand' | 'wall' | 'desk'" },
      },
    },
    lux: {
      control: 'number',
      description: '조도 값 (lx)',
      table: {
        type: { summary: 'number' },
      },
    },
    kelvin: {
      control: 'number',
      description: '색온도 값 (K)',
      table: {
        type: { summary: 'number' },
      },
    },
    onClick: {
      action: 'clicked',
      description: '클릭 핸들러',
      table: {
        type: { summary: '() => void' },
      },
    },
  },
};

// 샘플 제품 데이터
const sampleProduct = products[0];

/** 기본 사용 */
export const Default = {
  render: () => (
    <Box sx={{ width: 280 }}>
      <ProductCard
        title={sampleProduct.title}
        imageSrc={sampleProduct.images[0]}
        type={sampleProduct.type}
        lux={sampleProduct.lux}
        kelvin={sampleProduct.kelvin}
      />
    </Box>
  ),
};

/** 클릭 가능한 카드 */
export const Interactive = {
  render: () => (
    <Box sx={{ width: 280 }}>
      <ProductCard
        title={sampleProduct.title}
        imageSrc={sampleProduct.images[0]}
        type={sampleProduct.type}
        lux={sampleProduct.lux}
        kelvin={sampleProduct.kelvin}
        onClick={() => console.log('Card clicked')}
      />
    </Box>
  ),
};

/** 제품 그리드 (3열) */
export const ProductGrid = {
  render: () => (
    <Grid container spacing={3} sx={{ maxWidth: 900 }}>
      {products.slice(0, 6).map((product) => (
        <Grid key={product.id} size={{ xs: 6, md: 4 }}>
          <ProductCard
            title={product.title}
            imageSrc={product.images[0]}
            type={product.type}
            lux={product.lux}
            kelvin={product.kelvin}
            onClick={() => console.log(`Clicked: ${product.title}`)}
          />
        </Grid>
      ))}
    </Grid>
  ),
};

/** 메타 정보 없는 카드 */
export const WithoutMeta = {
  render: () => (
    <Box sx={{ width: 280 }}>
      <ProductCard
        title={sampleProduct.title}
        imageSrc={sampleProduct.images[0]}
        type={sampleProduct.type}
      />
    </Box>
  ),
};
