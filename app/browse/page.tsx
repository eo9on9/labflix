import { BrowsePage as _BrowsePage } from '@/sources/pages/browse/ui/BrowsePage'

const BrowsePage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) => {
  const { detailId: _detailId } = await searchParams

  const detailId = Array.isArray(_detailId) ? _detailId[0] : _detailId

  return <_BrowsePage detailId={detailId} />
}

export default BrowsePage
