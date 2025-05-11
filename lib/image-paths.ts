/**
 * Helper function to get project image paths
 * @param projectSlug - The slug of the project
 * @param filename - The filename of the image
 * @returns The full path to the image
 */
export function getProjectImagePath(projectSlug: string, filename: string): string {
  return `/images/projects/${projectSlug}/${filename}`
}

/**
 * Helper function to get blog image paths
 * @param slug - The slug of the blog post
 * @param filename - The filename of the image
 * @returns The full path to the image
 */
export function getBlogImagePath(slug: string, filename: string): string {
  return `/images/blog/${slug}/${filename}`
}

/**
 * Helper function to get testimonial image paths
 * @param filename - The filename of the image
 * @returns The full path to the image
 */
export function getTestimonialImagePath(filename: string): string {
  return `/images/testimonials/${filename}`
}

/**
 * Helper function to get common image paths
 * @param filename - The filename of the image
 * @returns The full path to the image
 */
export function getCommonImagePath(filename: string): string {
  return `/images/common/${filename}`
}
