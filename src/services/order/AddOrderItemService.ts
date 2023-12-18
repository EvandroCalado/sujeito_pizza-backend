import prismaClient from '../../prisma';

interface OrderItemResquest {
  order_id: string;
  product_id: string;
  amount: number;
}

export default {
  async execute({ order_id, product_id, amount }: OrderItemResquest) {
    const order = await prismaClient.orderItem.create({
      data: {
        order_id,
        product_id,
        amount,
      },
    });

    return order;
  },
};
