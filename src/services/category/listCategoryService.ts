import prismaClient from '../../prisma'

export default {
  async execute () {
    const categories = await prismaClient.category.findMany({
      select: {
        id: true,
        name: true
      }
    })

    return categories
  }
}
