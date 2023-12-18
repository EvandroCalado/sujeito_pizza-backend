import prismaClient from '../../prisma';

interface OrderRequest {
  order_id: string;
}

export default {
  async execute({ order_id }: OrderRequest) {
    const order = await prismaClient.orderItem.findMany({
      where: {
        order_id: order_id,
      },
      include: {
        product: true,
        Order: true,
      },
    });

    return order;
  },
};
