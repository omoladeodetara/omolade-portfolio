import { CaseStudyPage, caseStudyMetadata } from "@/components/case-study-page"

export const metadata = caseStudyMetadata("compact-task-manager")

export default function Page() {
  return <CaseStudyPage slug="compact-task-manager" />
}
