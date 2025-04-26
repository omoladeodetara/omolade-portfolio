/**
 * Simple utility for logging performance metrics to the console in development
 */
export const logPerformance = {
  /**
   * Log page load performance
   * @param pageName The name of the page being measured
   * @param duration Time in milliseconds
   */
  pageLoad: (pageName: string, duration: number) => {
    if (process.env.NODE_ENV === "development") {
      console.log(`[Performance] Page Load (${pageName}): ${duration}ms`)
    }
  },

  /**
   * Log registration form submission performance
   * @param duration Time in milliseconds
   * @param success Whether the submission was successful
   */
  registrationSubmission: (duration: number, success: boolean) => {
    if (process.env.NODE_ENV === "development") {
      console.log(`[Performance] Registration Submission: ${duration}ms (success: ${success})`)
    }
  },

  /**
   * Log search operation performance
   * @param duration Time in milliseconds
   * @param query The search query
   * @param resultCount Number of results returned
   */
  search: (duration: number, query: string, resultCount: number) => {
    if (process.env.NODE_ENV === "development") {
      console.log(`[Performance] Search (${query}): ${duration}ms, ${resultCount} results`)
    }
  },

  /**
   * Log image loading performance
   * @param imageType Type of image (hero, speaker, etc.)
   * @param duration Time in milliseconds
   */
  imageLoad: (imageType: string, duration: number) => {
    if (process.env.NODE_ENV === "development") {
      console.log(`[Performance] Image Load (${imageType}): ${duration}ms`)
    }
  },
}
