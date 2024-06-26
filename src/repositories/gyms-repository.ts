import { Gym, Prisma } from '@prisma/client'

export interface FindManyNearbyParams {
  latitude: number
  longitude: number
}

export interface GymsRepository {
  findById(gymId: string): Promise<Gym | null>
  findManyNearby(params: FindManyNearbyParams): Promise<Gym[] | null>
  searchMany(query: string, page: number): Promise<Gym[] | null>

  create(data: Prisma.GymCreateInput): Promise<Gym>
}
