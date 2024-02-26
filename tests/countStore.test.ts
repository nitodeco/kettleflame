import { test, describe, it, expect } from 'vitest'
import useCountStore from '../src/stores/countStore'

test('Check countStore', () => {
  describe('countStore', () => {
    it('should have initial state with count = 0', () => {
      expect(useCountStore.getState().count).toBe(0)
    })

    it('should increment count when increment() is called', async () => {
      const initialCount = useCountStore.getState().count

      useCountStore.getState().increment()
      await new Promise((resolve) => setTimeout(resolve, 100))

      expect(useCountStore.getState().count).toBe(initialCount + 1)
    })
  })
})
