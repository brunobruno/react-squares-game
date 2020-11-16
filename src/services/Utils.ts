const MinMax = (array: number[]) => {
	let arr = []
	for (let i = array[0]; i <= array[1]; i++) {
		arr.push(i)
	}
	return arr
}

const RColor = () => {
    return ('#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'))
}

const RNumber = (maxNumber: number) => {
    return (Math.floor(Math.random() * maxNumber))
}

const Sort = (array:{ value: number, text: string }[]) => {
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

export {MinMax,RColor,RNumber,Sort}