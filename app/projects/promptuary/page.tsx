import { CaseStudyPage, caseStudyMetadata } from "@/components/case-study-page"

export const metadata = caseStudyMetadata("promptuary")

export default function Page() {
  return <CaseStudyPage slug="promptuary" />
}
