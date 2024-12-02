

const Pagination = ({
    currentPage,
    totalPages,
    onPageChange,
    resultsPerPage,
    onResultsPerPageChange,
}) => {
    const resultsPerPageOptions = [10, 25, 50, 100];

    // Generate a limited range of pages (e.g., 5-7 at a time)
    const getPageRange = () => {
        const maxVisiblePages = 5; // Number of page buttons to show
        const pages = [];

        // Ensure the range stays within bounds
        const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        return pages;
    };

    const pages = getPageRange();

    return (
        <div className="flex flex-col items-center space-y-4">
            {/* Pagination Info */}
            <p className="text-sm text-gray-600">
                Showing {(currentPage - 1) * resultsPerPage + 1} to{" "}
                {Math.min(currentPage * resultsPerPage, totalPages * resultsPerPage)} of{" "}
                {totalPages * resultsPerPage}
            </p>

            {/* Page Navigation */}
            <div className="flex items-center space-x-2">
                {/* Previous Button */}
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
                >
                    Previous
                </button>

                {/* Render Ellipsis if there are skipped pages */}
                {currentPage > Math.floor(pages.length / 2) + 1 && (
                    <span className="px-3 py-1">...</span>
                )}

                {/* Page Buttons */}
                {pages.map((page) => (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`px-3 py-1 ${page === currentPage
                                ? "bg-black text-white"
                                : "bg-gray-200 text-black"
                            } rounded`}
                    >
                        {page}
                    </button>
                ))}

                {/* Render Ellipsis if there are pages after the visible range */}
                {currentPage < totalPages - Math.floor(pages.length / 2) && (
                    <span className="px-3 py-1">...</span>
                )}

                {/* Next Button */}
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>

            {/* Results Per Page Dropdown */}
            <div>
                <label htmlFor="results-per-page" className="mr-2 text-sm">
                    Results per page:
                </label>
                <select
                    id="results-per-page"
                    value={resultsPerPage}
                    onChange={(e) => onResultsPerPageChange(Number(e.target.value))}
                    className="border px-2 py-1 rounded"
                >
                    {resultsPerPageOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};
export default Pagination;