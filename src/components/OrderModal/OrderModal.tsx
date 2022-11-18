import { useTheme } from 'styled-components';
import { Close } from '../../assets/images/icons';
import { Order } from '../../types/Order';
import { formatToLocalePrice } from '../../utils/functions';
import { Heading } from '../Heading';
import { Typography } from '../Typography';
import * as S from './OrderModal.styles';

interface OrderModalProps {
  handleCloseModal: () => void;
  order: Order;
}

const formatOrderStatus = (status: string) => {
  switch (status) {
    case 'DONE':
      return '✅ Done!';
    case 'IN_PRODUCTION':
      return '👨‍🍳 In production';
    case 'WAITING':
      return '🕑 On queue';
  }
};

export const OrderModal = ({ handleCloseModal, order }: OrderModalProps) => {
  const theme = useTheme();

  const orderTotalPrice = order.products.reduce(
    (acc, val) => acc + val.product.price,
    0,
  );

  return (
    <S.Overlay onClick={handleCloseModal}>
      <S.Container onClick={(e) => e.stopPropagation()}>
        <S.Header>
          <Heading variant="h4">Table {order.table}</Heading>
          <S.IconWrapper onClick={handleCloseModal}>
            <Close />
          </S.IconWrapper>
        </S.Header>

        <S.OrderStatus>
          <Typography color={theme.colors.gray[500]} variant="sm">
            Order Status
          </Typography>

          <Typography isBold>{formatOrderStatus(order.status)}</Typography>
        </S.OrderStatus>

        <S.OrderOverview>
          <Typography color={theme.colors.gray[500]} variant="sm">
            Itens
          </Typography>

          {order.products.map((product) => (
            <S.OrderProduct>
              <S.ProductImage>
                <img
                  src={`http://localhost:3001/uploads/${product.product.imagePath}`}
                  alt={product.product.name}
                />
              </S.ProductImage>

              <Typography color={theme.colors.gray[400]} variant="sm">
                {product.quantity}x
              </Typography>

              <S.ProductNameAndPrice>
                <Typography isBold>{product.product.name}</Typography>
                <Typography color={theme.colors.gray[400]} variant="sm">
                  {formatToLocalePrice(product.product.price)}
                </Typography>
              </S.ProductNameAndPrice>
            </S.OrderProduct>
          ))}

          <S.Total>
            <Typography color={theme.colors.gray[500]} variant="sm">
              Total
            </Typography>
            <Typography color={theme.colors.gray[500]} isBold>
              {formatToLocalePrice(orderTotalPrice)}
            </Typography>
          </S.Total>
        </S.OrderOverview>

        <S.ActionsArea>
          <S.Button type="button" variant="primary">
            ✅ Complete Order
          </S.Button>

          <S.Button type="button" variant="secondary">
            Cancel Order
          </S.Button>
        </S.ActionsArea>
      </S.Container>
    </S.Overlay>
  );
};
