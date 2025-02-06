import { useState, useEffect, useRef } from 'react'
import { foods } from '../../database/foods'
import { user } from '../../database/user'
import Select from 'react-select'
import { TrashIcon } from '@heroicons/react/24/solid'

function FoodItem ({ food }) {
	return <>
		{food.name} | ({food.description})<br></br>
		{food.calories} | {food.carbohydrate} | {food.proteins} | {food.fat} | {food.quantity} | {food.measure}
	</>
}

function MealsCalculator() {
	const [userInfo] = useState(user())
	const [foodsList] = useState(foods())
	const [mealsList, setMealsList] = useState([])
	const [totals, setTotals] = useState({ calories: 0, proteins: 0, carbohydrate: 0, fat: 0 })

  const [dateSelected, setDateSelected] = useState((new Date()).toJSON().slice(0,10))


  const clearSelect = (index) => {
    const newMealsList = [...mealsList]
    newMealsList[index].selectedValue = null
  };

	function _onChangeMeal(selected: any, index: any) {
    const newMealsList = [...mealsList]
    newMealsList[index].selectedValue = selected
    newMealsList[index].form = {}
    setMealsList(newMealsList)
	}

	function _addMeal () {
		const newMealsList = [...mealsList, { items: [] }]
		setMealsList(newMealsList)
	}

  function _addFood (index) {
    const newMealsList = [...mealsList]
    if (!newMealsList[index].selectedValue?.name) return
    const newFood = { ...newMealsList[index].selectedValue, ...newMealsList[index].form}
    newMealsList[index].items.push(newFood)
    newMealsList[index].selectedValue = null
    newMealsList[index].form = {}
    setMealsList(newMealsList)
    clearSelect(index)
    _calculateTotals(newMealsList)
  }

  function _calculateTotals (list) {
    let calories = 0
    let proteins = 0
    let carbohydrate = 0
    let fat = 0
    list.map(meal => {
      calories += meal.items.reduce((value: any, item: any) => value + item.calories, 0)
      proteins += meal.items.reduce((value: any, item: any) => value + item.proteins, 0)
      carbohydrate += meal.items.reduce((value: any, item: any) => value + item.carbohydrate, 0)
      fat += meal.items.reduce((value: any, item: any) => value + item.fat, 0)
    })
    
    setTotals({ ...totals, calories, proteins, carbohydrate, fat })
  }

	function _getMealsOptions (list) {
		console.log('foods list')
		return list.map(food => {
			return { ...food, value: food.name, label: food.name }
		})
	}

	function _onChangeQuantity (event, index) {
		const quantity = Number(event.target.value)
		const calories = (quantity * mealsList[index].selectedValue.calories) / mealsList[index].selectedValue.quantity
		const carbohydrate = (quantity * mealsList[index].selectedValue.carbohydrate) / mealsList[index].selectedValue.quantity
		const proteins = (quantity * mealsList[index].selectedValue.proteins) / mealsList[index].selectedValue.quantity
		const fat = (quantity * mealsList[index].selectedValue.fat) / mealsList[index].selectedValue.quantity
    const newMealsList = [...mealsList]
    newMealsList[index].form = { ...newMealsList[index].form, quantity, calories, carbohydrate, proteins, fat }
    setMealsList(newMealsList)
	}

  function _onChangeCustom (event, index) {
    const name = event.target.name
    const value = event.target.value
    const newMealsList = [...mealsList]
    newMealsList[index].form = { ...newMealsList[index].form, [name]: value }
    setMealsList(newMealsList)
  }

  function _onChangeDate (elem) {
    setDateSelected(elem.target.value)
  }

  function _onDeleteFood(mealIndex, foodIndex) {
    const newMealsList = [...mealsList]
    newMealsList[mealIndex].items.splice(foodIndex, 1)
    setMealsList(newMealsList)
    _calculateTotals(newMealsList)
  }

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-[60%] py-32 sm:py-48 lg:py-56">
        <div>
          <div className="text-center inline-block w-[100%]">
            <div>

              Meals Calculator<br></br>

              {/* {foodsList.map((food: any) => {
                return <FoodItem food={food} ></FoodItem>
              })} */}
              <br></br><br></br>
              <div className="border">
                Peso Atual: {userInfo.bodyWeight}<br></br>
                Metas: <br></br>
                <div className="w-full">
                  <div className="w-[50%] inline-block">Calorias: 2000</div>
                  <div className="w-[50%] inline-block">Proteinas: {userInfo.bodyWeight * userInfo.proteinGoal}</div>
                  <div className="w-[50%] inline-block">Carboidratos: {userInfo.bodyWeight * userInfo.carbohydrateGoal}</div>
                  <div className="w-[50%] inline-block">Gordura: {userInfo.bodyWeight * userInfo.fatGoal}</div>
                </div>
                <div className="border">
                  Total hoje:<br></br>
                  <div className="w-full">
                    <div className="w-[50%] inline-block">Calorias: {totals.calories.toFixed(2)} </div>
                    <div className="w-[50%] inline-block">Proteínas: {totals.proteins.toFixed(2)}</div>
                    <div className="w-[50%] inline-block">Carboidratos: {totals.carbohydrate.toFixed(2)}</div>
                    <div className="w-[50%] inline-block">Gordura: {totals.fat.toFixed(2)}</div>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="border text-black p-[10px] rounded-sm">
                <br></br>
                <div>
                  <input className="border mb-[10px]" placeholder="Data" type="date" name="date" onChange={_onChangeDate} value={dateSelected}/>
                </div>
                <div className="">
                  Lista:<br></br>
                  {mealsList.map((meal, index) => (
                    <div className="border-2 border-indigo-500 rounded-sm my-[20px] p-[5px]">
                      <div className="w-[50%] inline-block align-top">
                        Refeição: {index + 1}<br></br>
                        <div className="mb-[20px]">
                          <Select
                            className="w-[300px] inline-block"
                            value={meal.selectedValue}
                            onChange={(selected) => _onChangeMeal(selected, index)}
                            options={_getMealsOptions(foodsList)}
                          />
                          <button className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" onClick={() => _addFood(index)}>Adicionar Comida</button>
                        </div>
                        <div className="border rounded-sm p-[2px] text-sm">
                          <table>
                            <tr className="border">
                              <th className="border">Nome</th>
                              <th className="border">Descrição</th>
                              <th className="border">Quantidade</th>
                              <th className="border">Calorias</th>
                              <th className="border">Proteínas</th>
                              <th className="border">Carboidratos</th>
                              <th className="border">Gorduras</th>
                              <th className="border">Ações</th>
                            </tr>
                            {/* <div className="border border-green-500"> */}
                              {meal.items.map((item, foodIndex) => (
                                <tr className="border">
                                  <td className="border">{item.name}</td>
                                  <td className="border">{item.description}</td>
                                  <td className="border">{item.quantity} ({item.measure})</td>
                                  <td className="border">{item.calories}</td>
                                  <td className="border">{item.proteins}</td>
                                  <td className="border">{item.carbohydrate}</td>
                                  <td className="border">{item.fat}</td>
                                  <td className="border"><TrashIcon className="cursor-pointer text-red-500" onClick={() => _onDeleteFood(index, foodIndex)} /></td>
                                </tr>
                              ))}
                            {/* </div> */}
                          </table>
                        </div>
                      </div>
                      <div className="inline-block w-[50%] mt-[10px]">
                        <div className="border rounded-sm p-[18px]">
                          Informações do alimento
                        </div>
                        {meal.selectedValue && <div className="border-1 border-indigo-500 rounded-sm mt-[10px]">
                          Nome: {meal.selectedValue.name} | Descrição: {meal.selectedValue.description}<br></br>
                          Calorias: { meal.selectedValue.calories} | Carboidratos: {meal.selectedValue.carbohydrate} | Proteínas: {meal.selectedValue.proteins}
                          | Gorduras: {meal.selectedValue.fat} | Quantidade: {meal.selectedValue.quantity} | Medida: {meal.selectedValue.measure}<br></br>
                          {meal.selectedValue.name !== 'Personalizado' && <div><input className="w-[100px] border" placeholder='Quantidade' onChange={(event) => _onChangeQuantity(event, index)} />({meal.selectedValue.measure})</div>}<br></br>
                          {meal.selectedValue.name === 'Personalizado' && <div>
                            <div className="w-[50%] inline-block">
                              Calorias: <input className="w-[100px] border" placeholder="Quantidade" type="number" name="calories" onChange={(event) => _onChangeCustom(event, index)} />
                            </div>
                            <div className="w-[50%] inline-block">
                              Proteínas: <input className="w-[100px] border" placeholder="Quantidade" type="number" name="proteins" onChange={(event) => _onChangeCustom(event, index)} />
                            </div>
                            <div className="w-[50%] inline-block">
                              Carboidratos: <input className="w-[100px] border" placeholder="Quantidade" type="number" name="carbohydrate" onChange={(event) => _onChangeCustom(event, index)} />
                            </div>
                            <div className="w-[50%] inline-block">
                              Gorduras: <input className="w-[100px] border" placeholder="Quantidade" type="number" name="fat" onChange={(event) => _onChangeCustom(event, index)} />
                            </div>
                          </div>}
                          <div>
                            Será Ingerido:<br></br>
                            Calorias: {meal.form.calories} | 
                            Proteinas: {meal.form.proteins} | 
                            Carboidratos: {meal.form.carbohydrate} | 
                            Gordura: {meal.form.fat}
                          </div>
                        </div>}
                      </div>
                      {/* <hr className="my-[10px]"></hr> */}
                    </div>
                  ))}	
                </div>
                <button className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 mt-[30px] mb-[30px]" onClick={_addMeal}>Adicionar Refeição</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MealsCalculator
