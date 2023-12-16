import prismaClient from '../../prisma';

interface OrderResquest {
  table: number;
  name: string;
}

export default {
  async execute({ table, name }: OrderResquest) {
    const order = await prismaClient.order.create({
      data: {
        table,
        name,
      },
    });

    return order;
  },
};
