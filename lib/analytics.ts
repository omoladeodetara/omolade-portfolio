import { track } from "@vercel/analytics"

// Define event types for better type safety and consistency
export type AnalyticsEvent =
  | "registration_started"
  | "registration_completed"
  | "session_selected"
  | "speaker_profile_viewed"
  | "agenda_viewed"
  | "engagement_interaction"
  | "workshop_material_downloaded"
  | "navigation"
  | "external_link_clicked"

// Define properties interface for better type safety
export interface AnalyticsEventProperties {
  [key: string]: string | number | boolean | undefined
}

/**
 * Track a custom event with Vercel Analytics
 * @param event The event name to track
 * @param properties Additional properties to include with the event
 */
export function trackEvent(event: AnalyticsEvent, properties?: AnalyticsEventProperties) {
  // Log to console in development for debugging
  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics] ${event}`, properties)
  }

  // Track the event with Vercel Analytics
  track(event, properties)
}
