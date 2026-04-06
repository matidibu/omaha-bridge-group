/**
 * Retries an async function with exponential backoff.
 * Throws the last error if all attempts fail.
 */
export async function fetchWithRetry<T>(
  fn: () => Promise<T>,
  maxRetries = 3,
  baseDelayMs = 500,
): Promise<T> {
  let lastError: unknown
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await fn()
    } catch (err) {
      lastError = err
      if (attempt < maxRetries - 1) {
        await new Promise((r) => setTimeout(r, baseDelayMs * Math.pow(2, attempt)))
      }
    }
  }
  throw lastError
}
