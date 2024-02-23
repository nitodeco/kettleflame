import logService, { LogLevel } from '../src/utils/logService'
import { describe, expect, it, vitest } from 'vitest'

describe('logService', () => {
  it('should log messages', () => {
    const spyConsoleLog = vitest.spyOn(console, 'log')
    const message = 'Test message'

    logService.debug(message)
    logService.info(message)
    logService.warning(message)
    logService.error(message)

    expect(spyConsoleLog).toHaveBeenCalledTimes(4)
  })

  it('should log messages with correct timestamp', () => {
    const spyConsoleLog = vitest.spyOn(console, 'log')

    const expectedTimestampRegex =
      /^\[\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z\] .*$/

    logService.debug('Testing DEBUG log')
    logService.info('Testing INFO log')
    logService.warning('Testing WARNING log')
    logService.error('Testing ERROR log')

    expect(spyConsoleLog).toHaveBeenCalledTimes(4)
    expect(spyConsoleLog.mock.calls[0][0]).toMatch(expectedTimestampRegex)
    expect(spyConsoleLog.mock.calls[1][0]).toMatch(expectedTimestampRegex)
    expect(spyConsoleLog.mock.calls[2][0]).toMatch(expectedTimestampRegex)
    expect(spyConsoleLog.mock.calls[3][0]).toMatch(expectedTimestampRegex)

    expect(spyConsoleLog.mock.calls[0][0]).toContain(LogLevel.DEBUG)
    expect(spyConsoleLog.mock.calls[1][0]).toContain(LogLevel.INFO)
    expect(spyConsoleLog.mock.calls[2][0]).toContain(LogLevel.WARNING)
    expect(spyConsoleLog.mock.calls[3][0]).toContain(LogLevel.ERROR)
  })

  it('should log messages with correct level', () => {
    const spyConsoleLog = vitest.spyOn(console, 'log')

    logService.debug('Testing DEBUG log')
    logService.info('Testing INFO log')
    logService.warning('Testing WARNING log')
    logService.error('Testing ERROR log')

    expect(spyConsoleLog).toHaveBeenCalledTimes(4)

    expect(spyConsoleLog.mock.calls[0][0]).toContain(LogLevel.DEBUG)
    expect(spyConsoleLog.mock.calls[1][0]).toContain(LogLevel.INFO)
    expect(spyConsoleLog.mock.calls[2][0]).toContain(LogLevel.WARNING)
    expect(spyConsoleLog.mock.calls[3][0]).toContain(LogLevel.ERROR)
  })
})
