export function isoToStringDate(isoDate) {
    // https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_tolocalestring
    const date = new Date(isoDate)
    return date.toLocaleDateString()
}

export function getTotalBorrowDay(borrowDate, returnDate) {
    const borrow = new Date(borrowDate)
    const returnD = new Date(returnDate)
    const diffTime = returnD.getTime() - borrow.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
}

export function getLateDays(toReturnDate) {
    const returnD = new Date(toReturnDate)
    const today = new Date()
    const diffTime = today.getTime() - returnD.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
}