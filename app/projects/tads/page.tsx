import { CaseStudyPage, caseStudyMetadata } from "@/components/case-study-page"

export const metadata = caseStudyMetadata("tads")

export default function Page() {
  return <CaseStudyPage slug="tads" />
}
