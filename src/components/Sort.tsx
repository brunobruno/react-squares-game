function Sort(array:{ value: number, text: string }[]) {
    return (
        array.sort((n1,n2) => {
            if (n1.value < n2.value) {
                return 1
            }
            if (n1.value > n2.value) {
                return -1
            }
            return 0
        })
    )
}
export default Sort