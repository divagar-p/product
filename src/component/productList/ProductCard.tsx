import { Box, Card, Rating, Stack, Typography, styled } from '@mui/material';
import numeral from 'numeral';
import Image from './Image';
import Label from './Label';


const fCurrency = (number: number) => {
  return number.toLocaleString('en-IN', {
    maximumFractionDigits: 2,
    style: 'currency',
    currency: 'INR'
  });
}
const fPercent = (number: number) => {
  return numeral(number / 100).format('0.0%');
}
const Description = styled(Typography)(({ theme }) => ({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
}))

interface propsInterface {
  product: {
    id: any;
    title?: string;
    description?: string;
    price?: number;
    discountPercentage?: number;
    rating?: number;
    stock?: number;
    brand?: string;
    category?: string;
    thumbnail?: string;
    images?: string[];
    status?: any;
  }
}
export default function ProductCard(props: propsInterface) {
  const { id, title, thumbnail, price, description, status, rating, discountPercentage } = props.product;

  return (
    <Card key={id}>
      <Box sx={{ position: 'relative' }}>
        {status && (
          <Label
            variant="filled"
            color={(status === 'sale' && 'error') || 'info'}
            sx={{
              top: 16,
              right: 16,
              zIndex: 9,
              position: 'absolute',
              textTransform: 'uppercase',
            }}
          >
            {status}
          </Label>
        )}
        <Image alt={title} src={thumbnail} ratio="1/1" />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Typography variant="subtitle1" noWrap>
          {title}
        </Typography>

        <Description variant="subtitle2" color="text.secondary" gutterBottom>{description}</Description>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Rating name="size-small" defaultValue={rating} precision={0.5} size="small" readOnly />
          <Stack direction="row" spacing={0.5}>
            <Typography variant="subtitle1" fontSize={'16px'}>{fCurrency(price ?? 0)}</Typography>
            {discountPercentage && (
              <Typography variant="subtitle1" fontSize={'12px'} sx={{ color: 'green' }}>
                {' ' + fPercent(discountPercentage) + ' off'}
              </Typography>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
}
