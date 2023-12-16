import prismaClient from '../../prisma'

interface OrderItemResquest {
  orderItem_id: string
}

export default {
  async execute ({ orderItem_id }: OrderItemResquest) {
    const order = await prismaClient.orderItem.delete({
      where: {
        id: orderItem_id
      }
    })

    return order
  }
}
