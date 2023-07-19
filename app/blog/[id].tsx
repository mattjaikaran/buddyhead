import { NextPage } from 'next'
import { useRouter } from 'next/router'

const BlogDetailPage: NextPage = () => {
  const router = useRouter()
  return <div>Blog Detail {router.query.id}</div>
}

export default BlogDetailPage
