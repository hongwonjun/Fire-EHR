import "./Pagination.css"
import range from "lodash/range"
import Link from "next/link"

const Pagination = props => {
  const {
    currentIndex,
    totalItems,
    pageLink,
    itemsPerPage,
    showPagesCount
  } = props
  const totalPages = Math.ceil(totalItems / (itemsPerPage ? itemsPerPage : 10))
  const minPage = showPagesCount
    ? Math.max(
        Math.min(
          totalPages - showPagesCount + 1,
          currentIndex - Math.ceil(showPagesCount / 2)
        ),
        1
      )
    : 1
  const maxPage = showPagesCount
    ? Math.min(minPage + showPagesCount - 1, totalPages)
    : totalPages

  return (
    <div className="btn-group">
      <Link href={pageLink + Math.max(currentIndex - 1, 1)}>
        <a>
          <button type="button" className="btn btn-white">
            {"<"}
          </button>
        </a>
      </Link>
      {range(minPage, maxPage + 1).map(pageIndex => (
        <Link key={pageIndex} href={pageLink + pageIndex}>
          <a>
            <button
              type="button"
              className={`btn ${
                currentIndex === pageIndex ? "btn-blue" : "btn-white"
              }`}
            >
              {pageIndex}
            </button>
          </a>
        </Link>
      ))}
      <Link href={pageLink + Math.min(currentIndex + 1, totalPages)}>
        <a>
          <button type="button" className="btn btn-white">
            {">"}
          </button>
        </a>
      </Link>
    </div>
  )
}

export default Pagination
