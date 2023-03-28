import { useEffect } from 'react';
import { useTheme } from 'styled-components';
import { Close } from '../../assets/images/icons';
import {
  formatActionButtonMessage,
  formatOrderStatus,
  formatToLocalePrice,
} from '../../utils/functions';
import { Heading } from '../Heading';
import { Typography } from '../Typography';
import { OrderModalProps } from './interfaces';
import * as S from './OrderModal.styles';

export const OrderModal = ({
  onCancelOrder,
  onCloseModal,
  onChangeOrderStatus,
  order,
  isLoading,
}: OrderModalProps) => {
  const theme = useTheme();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onCloseModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  const orderTotalPrice = order.products.reduce(
    (acc, val) => acc + val.product.price,
    0,
  );

  return (
    <S.Overlay onClick={onCloseModal}>
      <S.Container onClick={(e) => e.stopPropagation()}>
        <S.Header>
          <Heading variant="h4">Table {order.table}</Heading>
          <S.IconWrapper onClick={onCloseModal}>
            <Close />
          </S.IconWrapper>
        </S.Header>

        <S.OrderStatus>
          <Typography color={theme.colors.gray[500]} variant="sm">
            Order OrderStatus
          </Typography>

          <Typography isBold>{formatOrderStatus(order.status)}</Typography>
        </S.OrderStatus>

        <S.OrderOverview>
          <Typography color={theme.colors.gray[500]} variant="sm">
            Itens
          </Typography>

          {order.products.map((product) => (
            <S.OrderProduct key={product._id}>
              <S.ProductImage>
                <img
                  src={`${import.meta.env.VITE_BASE_URL}/uploads/${
                    product.product.imagePath
                  }`}
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
          {order.status !== 'DONE' && (
            <S.Button
              type="button"
              variant="primary"
              disabled={isLoading}
              onClick={onChangeOrderStatus}
            >
              {formatActionButtonMessage(order.status)}
            </S.Button>
          )}

          <S.Button
            type="button"
            variant="secondary"
            onClick={onCancelOrder}
            disabled={isLoading}
          >
            {order.status === 'DONE' ? 'Delete Order' : 'Cancel Order'}
          </S.Button>
        </S.ActionsArea>
      </S.Container>
    </S.Overlay>
  );
};
