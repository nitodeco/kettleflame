const isDev = process.env.NODE_ENVIRONMENT === 'development' ? true : false

enum LogLevel {
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARNING = 'WARNING',
  ERROR = 'ERROR',
}

interface LogOptions {
  level: LogLevel
  message: string
}

class LoggingService {
  log(options: LogOptions): void {
    if (isDev) return
    const timestamp = new Date().toISOString()
    const logMessage = `[${timestamp}] [${options.level}]: ${options.message}`
    console.log(logMessage)
  }

  debug(message: string): void {
    this.log({ level: LogLevel.DEBUG, message })
  }

  info(message: string): void {
    this.log({ level: LogLevel.INFO, message })
  }

  warning(message: string): void {
    this.log({ level: LogLevel.WARNING, message })
  }

  error(message: string): void {
    this.log({ level: LogLevel.ERROR, message })
  }
}

const logService = new LoggingService()
export default logService
