import { ProductGrid } from './ProductGrid';
import { products } from '../../data/products';

export default {
  title: 'Custom Component/grid/ProductGrid',
  component: ProductGrid,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## ProductGrid

제품 목록을 그리드 형태로 표시하는 컴포넌트.

### 특징
- MUI Grid 기반 반응형 레이아웃
- PC(lg)에서 4컬럼, 태블릿(md) 3컬럼, 모바일(xs/sm) 2컬럼
- ProductCard 컴포넌트 활용
- 제품 클릭 이벤트 지원
        `,
      },
    },
  },
  argTypes: {
    items: {
      control: false,
      description: '표시할 제품 배열',
      table: {
        type: { summary: 'Product[]' },
        defaultValue: { summary: 'products (전체)' },
      },
    },
    columnSpacing: {
      control: { type: 'range', min: 1, max: 6, step: 1 },
      description: '좌우 간격',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '2' },
      },
    },
    rowSpacing: {
      control: { type: 'range', min: 1, max: 10, step: 1 },
      description: '상하 간격',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '5' },
      },
    },
    onProductClick: {
      action: 'productClicked',
      description: '제품 클릭 핸들러',
      table: {
        type: { summary: '(product) => void' },
      },
    },
  },
};

/** 전체 제품 (15개) */
export const AllProducts = {
  render: () => (
    <ProductGrid
      onProductClick={(product) => console.log('Clicked:', product.title)}
    />
  ),
};

/** 일부 제품 (8개) */
export const PartialProducts = {
  render: () => (
    <ProductGrid
      items={products.slice(0, 8)}
      onProductClick={(product) => console.log('Clicked:', product.title)}
    />
  ),
};

/** 간격 조절 */
export const CustomSpacing = {
  render: () => (
    <ProductGrid
      items={products.slice(0, 8)}
      columnSpacing={1}
      rowSpacing={8}
      onProductClick={(product) => console.log('Clicked:', product.title)}
    />
  ),
};
