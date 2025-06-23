import { PageLayout } from '@/sources/widgets/layout/ui/PageLayout'
import { WithDetailModal } from '@/sources/widgets/layout/ui/WithDetailModal'

interface BrowsePageProps {
  detailId?: string
}

export const BrowsePage = ({ detailId }: BrowsePageProps) => {
  return (
    <PageLayout>
      <WithDetailModal id={detailId}>BrowsePage</WithDetailModal>
    </PageLayout>
  )
}
