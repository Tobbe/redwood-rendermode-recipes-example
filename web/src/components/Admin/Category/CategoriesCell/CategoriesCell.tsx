import type { FindCategories } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Categories from 'src/components/Admin/Category/Categories'

export const QUERY = gql`
  query FindCategories {
    categories {
      id
      name
      imageUrl
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No categories yet. '}
      <Link
        to={routes.adminNewCategory()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ categories }: CellSuccessProps<FindCategories>) => {
  return <Categories categories={categories} />
}
