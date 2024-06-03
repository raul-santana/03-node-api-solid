import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryGymsRepository } from '../repositories/in-memory/in-memory-gyms-repository'
import { FetchNearbyGymsUseCase } from './fetch-nearby-gyms'

let gymsRepository: InMemoryGymsRepository
let sut: FetchNearbyGymsUseCase

describe('Search Gyms Use Case', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new FetchNearbyGymsUseCase(gymsRepository)
  })

  it('should be able to get gyms near the specified longitude and latitude.', async () => {
    const exampleCoordinates = [
      { latitude: -22.9341376, longitude: -43.1862627 }, // Mesmo ponto
      { latitude: -22.935, longitude: -43.187 }, // Próximo ponto
      { latitude: -22.8441376, longitude: -43.0862627 }, // Distante mais de 10km
      { latitude: -22.7341376, longitude: -43.2862627 }, // Distante mais de 10km
      { latitude: -23.0341376, longitude: -43.3862627 }, // Distante mais de 10km
    ]

    exampleCoordinates.map(async (coordinates, index) => {
      await gymsRepository.create({
        id: `gym-${index + 1}`,
        title: `Steel Muscles ${index}`,
        description: null,
        phone: null,
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
      })
    })

    const { gyms } = await sut.execute({
      userLatitude: -22.9341376,
      userLongitude: -43.1862627,
    })

    expect(gyms).toHaveLength(2)
    expect(gyms).toEqual([
      expect.objectContaining({ id: 'gym-1' }),
      expect.objectContaining({ id: 'gym-2' }),
    ])
  })
})
