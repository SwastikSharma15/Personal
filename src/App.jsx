import { useReducer } from "react"

const emptyData = {
  name: '',
  town: '',
  state: '',
  country: '',
  zipCode: ''
}

const reducer = (data, action) => {
  return{...data, [action.type]:action.val}
  
}

const App = () => {

  const [state, dispatch] = useReducer(reducer,emptyData)

  return (
    <div>
      <input type="text" onChange={(event) => {dispatch({val:event.target.value, type:'name'})}} placeholder="Name" />
      <br />
      <input type='text' onChange={(event) => {dispatch({val:event.target.value, type:'town'})}} placeholder='Town' />
      <br />
      <input type='text' onChange={(event) => {dispatch({val:event.target.value, type:'state'})}} placeholder='State' />
      <br />
      <input type='text' onChange={(event) => {dispatch({val:event.target.value, type:'country'})}} placeholder='Country' />
      <br />
      <input type='text' onChange={(event) => {dispatch({val:event.target.value, type:'zipcode'})}} placeholder='Zip Code' />
      <br />
      <button onClick={() => {console.log(state);
      }}>Submit</button>
      
      <ul>
        <li>Name: {state.name}</li>
        <li>Town: {state.town}</li>
        <li>State: {state.state}</li>
        <li>Country: {state.country}</li>
        <li>Zipcode: {state.zipcode}</li>
      </ul>
    </div>
  )
}

export default App