import React, { useState, useEffect, SyntheticEvent } from 'react'
import {Sort,RColor,RNumber,MinMax} from '../services/Utils'
import Button from '../components/Button'
import Text from '../components/Text'
import View from '../components/View'
import List from '../components/List'
import './../App.scss'

function App() {
	const [player, setplayer] = useState<string>('')
	const [steps, setSteps] = useState<number[]>([2, 4])
	const [currentStep, setcurrentStep] = useState<number>(0)
	const [isGameOver, setisGameOver] = useState<boolean>(false)
	const [isHallOfFame, setisHallOfFame] = useState<boolean>(false)
	const [rankingList, setrankingList] = useState<{ value: number, text: string }[]>([])

	useEffect(() => {
		setSteps(steps => MinMax(steps))
	}, [])

	const handleTileClick = (e: SyntheticEvent<HTMLDivElement>) => {
		const eTarget = e.target as Element
		if (eTarget.classList.contains('selected')) {
			if (steps.length === currentStep + 1) {
				setcurrentStep(currentStep + 1)
				setisGameOver(true)
			} else {
				setcurrentStep(currentStep + 1)
			}
		} else {
			setisGameOver(true)
		}
	}
	const handleTiles = (step: number) => {
		const squaresArr = []
		const color = RColor()
		const board = step * step
		const randomNumber = RNumber(board)
		for (let i = 0; i < board; i++) {
			squaresArr.push(
				<div
					className={'tile' + (i === randomNumber ? ' selected' : '')}
					style={{ background: color }}
					onClick={(e) => handleTileClick(e)}
					key={i}
				>
				</div>
			)
		}
		return squaresArr
	}
	const goToHallOfFame = (e: { preventDefault: () => void }) => {
		e.preventDefault()
		setisHallOfFame(true)
		rankingList.push({ 'value': currentStep, 'text': player })
		Sort(rankingList)
		setrankingList([...rankingList])
	}
	const playAgain = () => {
		setplayer('')
		setcurrentStep(0)
		setisGameOver(false)
		setisHallOfFame(false)
	}
	const winCheat = () => {setcurrentStep(steps.length);setisGameOver(true)}
	return (
		<div className='container'>
		{!isGameOver ?
			<View>
				<h1 className='lg'>{currentStep}</h1>
				<div className={`board size-${steps[currentStep]}`}>
					{handleTiles(steps[currentStep])}
				</div>
				<Button onClick={() => winCheat()}>Win the game</Button>
			</View> :
			<>
			{!isHallOfFame ?
				<View>
					<h1>{currentStep === steps.length ? `Winner! 👑` : `Game Over! 💀`}</h1>
					<form>
						<Text
							autoFocus={true}
							maxLenght={15}
							required={true}
							value={player}
							placeholder='Insert your name'
							onChange={e => setplayer(e.target.value)}
						/>
						{player ? <Button onClick={(e) => goToHallOfFame(e)}>Next</Button> : null}
					</form>
				</View> :
				<View>
					<h1>Hall of fame 🏆</h1>
					<List list={rankingList} limit={10} />
					<Button onClick={() => playAgain()} autoFocus={true}>Try again</Button>
				</View>
			}
			</>
		}
		</div>
	)
}
export default App
