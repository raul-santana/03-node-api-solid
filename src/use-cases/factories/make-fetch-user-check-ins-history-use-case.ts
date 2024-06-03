import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'
import { FetchUserCheckInsHistoryUseCase } from '../fetch-user-check-ins-history'

export function makeFetchUserCheckInsHistoryUseCase() {
  const checkInRepository = new PrismaCheckInsRepository()
  const fetchNearbyGymsUseCase = new FetchUserCheckInsHistoryUseCase(
    checkInRepository,
  )

  return fetchNearbyGymsUseCase
}
