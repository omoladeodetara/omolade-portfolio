import { CaseStudyPage, caseStudyMetadata } from "@/components/case-study-page"

export const metadata = caseStudyMetadata("aloud")

export default function Page() {
  return <CaseStudyPage slug="aloud" />
}
