import { MainVisual } from '@/sources/widgets/browse/ui/MainVisual'
import { DetailModal } from '@/sources/widgets/layout/ui/DetailModal'
import { PageLayout } from '@/sources/widgets/layout/ui/PageLayout'

interface BrowsePageProps {
  detailId?: string
}

export const BrowsePage = ({ detailId }: BrowsePageProps) => {
  return (
    <PageLayout>
      <MainVisual />
      <DetailModal id={detailId} />
    </PageLayout>
  )
}
