import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryGymsRepository } from '../repositories/in-memory/in-memory-gyms-repository'
import { SearchGymsUseCase } from './search-gyms'

let gymsRepository: InMemoryGymsRepository
let sut: SearchGymsUseCase

describe('Search Gyms Use Case', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new SearchGymsUseCase(gymsRepository)
  })

  it('should be able to search gyms', async () => {
    await gymsRepository.create({
      id: 'gym-01',
      title: 'Steel Muscles',
      description: null,
      phone: null,
      latitude: 0,
      longitude: 0,
    })

    await gymsRepository.create({
      id: 'gym-02',
      title: 'Iron Muscles',
      description: null,
      phone: null,
      latitude: 0,
      longitude: 0,
    })

    const { gyms } = await sut.execute({
      query: 'Steel',
      page: 1,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ id: 'gym-01' })])
  })

  it('Should be able to paginate the results of gym searches.', async () => {
    for (let i = 1; i <= 22; i++) {
      await gymsRepository.create({
        title: `Steel Muscles ${i}`,
        description: null,
        phone: null,
        latitude: 0,
        longitude: 0,
      })
    }

    const { gyms } = await sut.execute({
      query: 'Muscles',
      page: 2,
    })

    expect(gyms).toHaveLength(2)
    expect(gyms).toEqual([
      expect.objectContaining({ title: 'Steel Muscles 21' }),
      expect.objectContaining({ title: 'Steel Muscles 22' }),
    ])
  })
})
